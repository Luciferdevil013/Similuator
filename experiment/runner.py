"""Scenario runner: builds the whole system and drives the closed loop.

This is where the loop the report calls a "credible prototype" is actually
closed:

    simulation generates measurements
      -> an algorithm consumes them (EKF, monitors, planner, controller)
      -> a fault is injected
      -> the system detects and responds to it
      -> the result is scored against simulator ground truth

Wiring rules enforced here, not just documented:

  * The estimator, monitors, planner, controller and resilience manager are
    constructed WITHOUT a reference to the dynamics object or to `truth`. They
    see only polled sensor messages. Ground truth reaches exactly one
    consumer: the recorder.
  * Every component runs at its own rate through the latency queues, so an
    algorithm receives a measurement when it would really arrive, stamped with
    when it was taken.
  * Fault detection is scored by comparing the monitors' own confirmed
    verdicts against the injector's log. The monitors are never told.
"""
from __future__ import annotations

import time
from dataclasses import dataclass, field
from pathlib import Path

import numpy as np

from estimation.ekf import EkfConfig, ErrorStateEkf
from estimation.gnss_monitor import GnssMonitor, GnssMonitorConfig
from estimation.sensor_health import SensorHealthMonitor, SensorSpec
from experiment import metrics as metrics_mod
from experiment.recorder import ExperimentRecorder
from faults.injector import FaultInjector, FaultSpec
from nav.astar import TerrainAStar
from nav.controller import ControllerConfig, PurePursuitController
from nav.costmap import Costmap
from resilience.manager import ResilienceConfig, ResilienceManager
from sim.clock import RateTrigger, SimClock
from sim.dynamics.ugv import UgvDynamics, UgvParams
from sim.geodesy import LocalFrame
from sim.msgs import FaultType, MissionState, NavSatStatus, SensorStatus
from sim.rng import RngHub
from sim.rotations import quat_to_euler, wrap_pi
from sim.sensors.barometer import BarometerSensor, isa_altitude
from sim.sensors.battery import BatterySensor
from sim.sensors.camera import CameraParams, CameraSensor
from sim.sensors.gnss import GnssParams, GnssSensor
from sim.sensors.ground_truth import GroundTruthPublisher
from sim.sensors.imu import ImuParams, ImuSensor
from sim.sensors.lidar import LidarParams, LidarSensor
from sim.sensors.magnetometer import MagnetometerSensor
from sim.sensors.wheel_odom import WheelOdometrySensor
from sim.terrain import Terrain
from sim.world import MagneticModel, Mission, Obstacle, World

# Sensor detail profiles. The expensive exteroceptive streams (3-D point
# cloud, RGB/depth images) are not consumed by the navigation algorithms --
# only the 2-D scan is -- so a headless metrics sweep runs "nav" and a
# dashboard demo runs "full".
DETAIL_PROFILES = {
    "full": {"lidar_cloud": True, "camera": True, "camera_rgb": True,
             "lidar_beams": 720, "cloud_azimuth": 240},
    "nav":  {"lidar_cloud": False, "camera": False, "camera_rgb": False,
             "lidar_beams": 720, "cloud_azimuth": 0},
    "fast": {"lidar_cloud": False, "camera": False, "camera_rgb": False,
             "lidar_beams": 360, "cloud_azimuth": 0},
}


@dataclass
class ScenarioConfig:
    id: str = "unnamed"
    description: str = ""
    environment: str = "rolling_hills"
    seed: int = 12345
    duration: float = 420.0
    physics_dt: float = 0.0025
    detail: str = "nav"
    world: dict = field(default_factory=dict)
    mission: dict = field(default_factory=dict)
    vehicle: dict = field(default_factory=dict)
    sensors: dict = field(default_factory=dict)
    ekf: dict = field(default_factory=dict)
    controller: dict = field(default_factory=dict)
    nav: dict = field(default_factory=dict)
    resilience: dict = field(default_factory=dict)
    gnss_monitor: dict = field(default_factory=dict)
    faults: list = field(default_factory=list)
    record_rate: float = 20.0

    @staticmethod
    def load(path: str | Path) -> "ScenarioConfig":
        # load_raw resolves an optional `base:` file the scenario extends.
        from experiment.scenario_schema import load_raw
        return ScenarioConfig.from_dict(load_raw(path))

    @staticmethod
    def from_dict(raw: dict) -> "ScenarioConfig":
        known = {f for f in ScenarioConfig.__dataclass_fields__}
        return ScenarioConfig(**{k: v for k, v in raw.items() if k in known})

    def to_dict(self) -> dict:
        return {k: getattr(self, k) for k in self.__dataclass_fields__}


class ScenarioRunner:
    vehicle_type = "ugv"

    def __init__(self, cfg: ScenarioConfig):
        self.cfg = cfg
        self.rng = RngHub(cfg.seed)
        self.clock = SimClock(cfg.physics_dt)
        self.profile = DETAIL_PROFILES.get(cfg.detail, DETAIL_PROFILES["nav"])
        self.build()

    # ------------------------------------------------------------------
    # construction
    # ------------------------------------------------------------------
    def build(self) -> None:
        cfg = self.cfg
        w = cfg.world

        # --- world
        self.terrain = Terrain(
            size_x=float(w.get("size_x", 200.0)), size_y=float(w.get("size_y", 200.0)),
            resolution=float(w.get("resolution", 0.5)),
            rng=self.rng.stream("terrain"),
            relief=float(w.get("relief", 14.0)), octaves=int(w.get("octaves", 6)),
            max_slope_deg=float(w.get("max_slope_deg", 25.0)),
            ridge_mix=float(w.get("ridge_mix", 0.35)))
        lla = w.get("origin_lla", [47.3977, 8.5456, 488.0])
        self.frame = LocalFrame(*[float(v) for v in lla])

        m = cfg.mission
        start = np.array(m.get("start", [12.0, 12.0]), dtype=float)
        goal = np.array(m.get("goal", [185.0, 185.0]), dtype=float)
        self.mission = Mission(start=start, goal=goal,
                               goal_tolerance=float(m.get("goal_tolerance", 2.5)),
                               start_yaw=float(m.get("start_yaw", np.arctan2(
                                   goal[1] - start[1], goal[0] - start[0]))),
                               timeout_s=float(m.get("timeout_s", cfg.duration)))
        mag = w.get("magnetic", {})
        self.world = World(self.terrain, self.frame, self.mission,
                           MagneticModel(**mag) if mag else MagneticModel())
        self.world.scatter_obstacles(self.rng.stream("obstacles"),
                                     int(w.get("n_obstacles", 45)),
                                     keep_clear=float(w.get("keep_clear", 7.0)))

        # Obstacles that appear mid-run come from OBSTACLE_APPEARS faults.
        self.surprise_obstacles: list[Obstacle] = []
        for f in cfg.faults:
            if str(f.get("type", "")).upper() == "OBSTACLE_APPEARS":
                self._spawn_surprise(f, float(f.get("onset", 0.0)))

        # --- vehicle
        vp = dict(cfg.vehicle.get("params", {}))
        start_z_yaw = (float(start[0]), float(start[1]), self.mission.start_yaw)
        self.ugv = UgvDynamics(UgvParams(initial_pose=start_z_yaw, **vp),
                               self.world, self.rng.stream("ugv"))

        # --- sensors
        self._build_sensors()

        # --- algorithms (constructed with NO access to self.ugv or truth)
        self.ekf = ErrorStateEkf(EkfConfig(gravity=self.frame.gravity, **cfg.ekf))
        self.gnss_monitor = GnssMonitor(GnssMonitorConfig(**cfg.gnss_monitor))
        self.health = SensorHealthMonitor()
        self._register_health()

        self.costmap = Costmap(self.terrain,
                               resolution=float(w.get("costmap_resolution", 0.75)),
                               robot_radius=float(cfg.vehicle.get("robot_radius", 0.45)),
                               max_slope_deg=float(w.get("max_slope_deg", 25.0)))
        self.costmap.seed_known_obstacles(self.world.obstacles, 0.0)
        self.planner = TerrainAStar(self.costmap)
        self.controller = PurePursuitController(ControllerConfig(**cfg.controller))
        self.resilience = ResilienceManager(ResilienceConfig(**cfg.resilience),
                                            scenario_id=cfg.id)

        # --- fault injection + recording
        self.injector = FaultInjector(cfg.id, self.rng.stream("faults"))
        for f in cfg.faults:
            self.injector.add(self._fault_spec(f, float(f.get("onset", 0.0))))
        self.injector.bind(self.sensors, self.world, self.ugv)

        self.truth_pub = GroundTruthPublisher(rate_hz=50.0)
        self.recorder = ExperimentRecorder(cfg.id, cfg.seed, rate_hz=cfg.record_rate)
        self.recorder.straight_line_m = float(np.linalg.norm(goal - start))
        self.recorder.fault_windows = self.injector.active_windows()
        self.recorder.set_config(cfg.to_dict(), self.world.summary(),
                                 {sid: s.describe() for sid, s in self.sensors.items()})

        # --- loop state
        self.trig_health = RateTrigger(20.0)
        self.trig_control = RateTrigger(50.0)
        self.trig_plan_check = RateTrigger(2.0)
        self.latest_scan = None
        self.latest_obstacle_ranges = None
        self.ground_margin = float(self.cfg.world.get("ground_margin", 0.35))
        self._mag_cal = self.sensors["magnetometer"].calibration(
            residual_fraction=float(self.cfg.sensors.get("mag_calibration_residual", 0.10)))
        self.plan_path = None
        self.replan_count = 0
        self.failed_plans = 0
        self._last_plan_t = -1e9
        self.collisions = 0
        self.min_clearance = float("inf")
        self.goal_reached = False
        self.finished = False
        self.finish_reason = ""
        self._initialised_ekf = False
        self.alignment_time_s = None
        self._stationary_timer = 0.0
        self._last_odom_speed = 0.0
        self._expected_counts = {sid: 0 for sid in self.sensors}
        self.wall_time = 0.0
        self._init_gnss_lockout_policy()
        # Recent IMU samples, for a motion-free check while held.
        from collections import deque
        self._imu_window: deque = deque(maxlen=100)

    @staticmethod
    def _fault_spec(f: dict, onset: float) -> FaultSpec:
        return FaultSpec(
            fault_type=FaultType[str(f["type"]).upper()],
            target=str(f.get("target", "world")),
            onset=onset,
            duration=float(f.get("duration", -1.0)),
            ramp=float(f.get("ramp", 0.0)),
            params=dict(f.get("params", {})),
            label=str(f.get("label", "")))

    def _spawn_surprise(self, f: dict, onset: float) -> Obstacle:
        p = f.get("params", {})
        obs = Obstacle(
            oid="surprise_%d" % len(self.surprise_obstacles),
            kind=p.get("kind", "cylinder"),
            x=float(p.get("x", 0.0)), y=float(p.get("y", 0.0)),
            height=float(p.get("height", 2.2)), radius=float(p.get("radius", 1.3)),
            half_x=float(p.get("half_x", 1.5)), half_y=float(p.get("half_y", 0.7)),
            yaw=float(p.get("yaw", 0.0)), label="surprise",
            spawn_time=onset, known_a_priori=False)
        self.world.add_obstacle(obs)
        self.surprise_obstacles.append(obs)
        return obs

    def add_fault(self, f: dict) -> FaultSpec:
        """Inject a fault into the running simulation, starting now.

        `f` must already be validated (experiment.scenario_schema.validate_fault).
        It is recorded and scored exactly like a declared fault: the injector
        logs its onset, the monitors are not told, and the recorder's
        fault-window list is refreshed so false-alarm scoring stays honest.
        """
        t = float(self.clock.t)
        if str(f["type"]).upper() == "OBSTACLE_APPEARS":
            self._spawn_surprise(f, t)
        spec = self._fault_spec(f, t)
        self.injector.add(spec)
        self.recorder.fault_windows = self.injector.active_windows()
        return spec

    def _build_sensors(self) -> None:
        s = self.cfg.sensors
        pf = self.profile
        site_alt = self.frame.alt0
        self.sensors: dict[str, object] = {}

        imu_overrides = dict(s.get("imu", {}))
        imu_rate = float(imu_overrides.pop("rate_hz", 200.0))
        self.sensors["imu"] = ImuSensor(
            "imu", self.rng.stream("imu"), rate_hz=imu_rate,
            gravity=self.frame.gravity, earth_rate_enu=self.frame.earth_rate_enu(),
            params=ImuParams(**imu_overrides))

        gnss_overrides = dict(s.get("gnss", {}))
        gnss_rate = float(gnss_overrides.pop("rate_hz", 5.0))
        self.sensors["gnss"] = GnssSensor(
            "gnss", self.rng.stream("gnss"), self.frame, rate_hz=gnss_rate,
            params=GnssParams(**gnss_overrides), world=self.world)

        self.sensors["wheel_odom"] = WheelOdometrySensor(
            "wheel_odom", self.rng.stream("wheel_odom"),
            rate_hz=float(s.get("wheel_odom", {}).get("rate_hz", 50.0)),
            initial_pose=(float(self.mission.start[0]), float(self.mission.start[1]),
                          self.mission.start_yaw))

        self.sensors["magnetometer"] = MagnetometerSensor(
            "magnetometer", self.rng.stream("mag"), self.world.magnetic.field_enu(),
            rate_hz=float(s.get("magnetometer", {}).get("rate_hz", 50.0)))

        self.sensors["barometer"] = BarometerSensor(
            "barometer", self.rng.stream("baro"),
            rate_hz=float(s.get("barometer", {}).get("rate_hz", 50.0)),
            site_altitude=site_alt)

        self.sensors["battery"] = BatterySensor(
            "battery", self.rng.stream("battery"),
            rate_hz=float(s.get("battery", {}).get("rate_hz", 5.0)))

        lidar_cfg = dict(s.get("lidar", {}))
        lidar_rate = float(lidar_cfg.pop("rate_hz", 10.0))
        self.sensors["lidar"] = LidarSensor(
            "lidar", self.rng.stream("lidar"), self.world, rate_hz=lidar_rate,
            params=LidarParams(scan_beams=int(pf["lidar_beams"]),
                               publish_cloud=bool(pf["lidar_cloud"]),
                               cloud_azimuth=max(1, int(pf["cloud_azimuth"])),
                               **lidar_cfg))

        if pf["camera"]:
            self.sensors["camera"] = CameraSensor(
                "camera", self.rng.stream("camera"), self.world,
                rate_hz=float(s.get("camera", {}).get("rate_hz", 10.0)),
                params=CameraParams(), publish_rgb=bool(pf["camera_rgb"]))

    def _register_health(self) -> None:
        """Declare what the monitor expects. Critical flags drive the FSM."""
        specs = [
            SensorSpec("imu", self.sensors["imu"].rate_hz, critical=True,
                       value_min=-200.0, value_max=200.0),
            SensorSpec("gnss", self.sensors["gnss"].rate_hz, timeout_factor=5.0),
            SensorSpec("wheel_odom", self.sensors["wheel_odom"].rate_hz, critical=False),
            SensorSpec("magnetometer", self.sensors["magnetometer"].rate_hz),
            SensorSpec("barometer", self.sensors["barometer"].rate_hz,
                       stale_repeats=25),  # quantised: repeats are normal at constant height
            SensorSpec("battery", self.sensors["battery"].rate_hz, timeout_factor=6.0),
            SensorSpec("lidar", self.sensors["lidar"].rate_hz, timeout_factor=5.0),
        ]
        if "camera" in self.sensors:
            specs.append(SensorSpec("camera", self.sensors["camera"].rate_hz,
                                    timeout_factor=5.0))
        for sp in specs:
            self.health.register(sp)

    # ------------------------------------------------------------------
    # measurement consumption
    # ------------------------------------------------------------------
    def _consume(self, t: float) -> None:
        S = self.sensors

        # --- IMU: propagation. Also the EKF's initialisation trigger.
        for msg in S["imu"].poll(t):
            self.health.report("imu", msg.header.stamp, t,
                               fingerprint=float(np.sum(msg.angular_velocity) +
                                                 np.sum(msg.linear_acceleration)),
                               value_for_range=float(np.max(np.abs(msg.linear_acceleration))))
            if self._initialised_ekf:
                self.ekf.propagate(msg.header.stamp, msg.angular_velocity,
                                   msg.linear_acceleration)
            self._imu_window.append((float(np.linalg.norm(msg.angular_velocity)),
                                     float(np.linalg.norm(msg.linear_acceleration))))

        # --- GNSS: position + velocity, then the anomaly monitor
        for fix, tw in S["gnss"].poll(t):
            no_fix = fix.status < 0
            self.health.report("gnss", fix.header.stamp, t,
                               fingerprint=float(fix.latitude * 1e7 + fix.longitude * 1e7),
                               value_for_range=float(fix.hdop))
            innov = nis = None
            cov_diag = None
            p_enu = None
            v_enu = None
            if not no_fix:
                p_enu = self.frame.lla_to_enu(fix.latitude, fix.longitude, fix.altitude)
                cov = np.asarray(fix.position_covariance, dtype=float).reshape(3, 3)
                if not self._initialised_ekf:
                    # Initialise from the first fix, with yaw from the mission
                    # heading -- the vehicle knows which way it was pointed.
                    self.ekf.initialise(fix.header.stamp, p_enu,
                                        yaw=self.mission.start_yaw)
                    self._initialised_ekf = True
                    self.alignment_time_s = float(t)
                else:
                    ant = S["gnss"].p.antenna_offset
                    fix_age = max(0.0, t - fix.header.stamp)
                    self._gnss_lockout_policy(t)
                    ok, nis = self.ekf.update_gnss_position(
                        p_enu, cov.ravel(), antenna_offset=ant, age=fix_age)
                    if ok:
                        self._reacquiring = False
                    innov = self.ekf.last["gnss_pos_innov"]
                    cov_diag = self.ekf.last.get("gnss_pos_S_diag")
                    if tw is not None:
                        v_enu = np.asarray(tw.linear, dtype=float)
                        self.ekf.update_gnss_velocity(
                            v_enu, np.asarray(tw.covariance).reshape(6, 6)[:3, :3].ravel(),
                            antenna_offset=ant, age=fix_age)

            st = self.gnss_monitor.update(
                t, innovation=innov, nis=nis, innovation_cov_diag=cov_diag,
                fix_status=fix.status, num_satellites=fix.num_satellites,
                hdop=fix.hdop, measurement_age=max(0.0, t - fix.header.stamp),
                position_enu=p_enu, velocity_enu=v_enu, no_fix=no_fix)
            self.recorder.gnss_monitor_history.append({
                "t": t, "flagged": st.flagged, "confirmed": st.confirmed,
                "nis": st.nis, "cusum": st.cusum_max, "outage": st.outage,
                "reasons": list(st.reasons)})
            if st.confirmed or st.outage:
                # Score against whatever GNSS fault is actually active. The
                # monitor only claims "this GNSS stream is not trustworthy".
                self.injector.mark_detected_for_target(
                    "gnss", t, "gnss_monitor:" + (st.reasons[0] if st.reasons else "outage"))

        # --- barometer
        for pm, tm in S["barometer"].poll(t):
            self.health.report("barometer", pm.header.stamp, t,
                               fingerprint=float(pm.fluid_pressure),
                               value_for_range=float(pm.fluid_pressure))
            if self._initialised_ekf:
                alt = float(isa_altitude(pm.fluid_pressure)) - self.frame.alt0
                self.ekf.update_baro_altitude(alt)

        # --- magnetometer
        for msg in S["magnetometer"].poll(t):
            self.health.report("magnetometer", msg.header.stamp, t,
                               fingerprint=float(np.sum(msg.magnetic_field) * 1e9),
                               value_for_range=float(np.linalg.norm(msg.magnetic_field) * 1e6))
            if self._initialised_ekf:
                # Apply the stored pre-mission calibration before use. Raw
                # vehicle magnetometer readings carry tens of microtesla of
                # hard-iron offset and are useless for heading.
                b = self._mag_cal["soft_iron_inv"] @ (
                    np.asarray(msg.magnetic_field, dtype=float) - self._mag_cal["hard_iron"])
                self.ekf.update_mag_yaw(b, np.radians(self.world.magnetic.declination_deg))

        # --- wheel odometry: body speed + the non-holonomic constraint
        for js, od in S["wheel_odom"].poll(t):
            self.health.report("wheel_odom", od.header.stamp, t,
                               fingerprint=float(np.sum(js.position)),
                               value_for_range=float(np.max(np.abs(js.velocity))))
            speed = float(od.linear[0])
            self._last_odom_speed = speed
            if self._initialised_ekf:
                self.ekf.update_wheel_odometry(speed)
                # Zero-velocity update: the encoders say stopped, confirmed
                # over a short dwell so a momentary zero crossing does not
                # trigger it.
                if abs(speed) < 0.02:
                    self._stationary_timer += 1.0 / S["wheel_odom"].rate_hz
                    if self._stationary_timer > 0.5:
                        self.ekf.update_zero_velocity()
                else:
                    self._stationary_timer = 0.0

        # --- LiDAR: costmap integration and the controller's obstacle view
        for scan, cloud in S["lidar"].poll(t):
            any_return = bool(np.isfinite(scan.ranges).any())
            self.health.report("lidar", scan.header.stamp, t,
                               # A scan with no returns (open ground, nothing
                               # in range) is legitimately identical every
                               # time; fingerprinting it flagged a healthy
                               # scanner STALE and stopped the vehicle. Only
                               # scans with content can show a frozen payload;
                               # timeouts and frozen stamps are still caught.
                               fingerprint=(float(np.nansum(np.where(np.isfinite(scan.ranges),
                                                                     scan.ranges, 0.0)))
                                            if any_return else None),
                               value_for_range=float(np.nanmin(
                                   np.where(np.isfinite(scan.ranges), scan.ranges, np.inf))
                                   if np.isfinite(scan.ranges).any() else 1.0))
            self.latest_scan = scan
            # Marking the map needs a trustworthy pose: scans placed with a
            # drifting estimate scatter phantom obstacles that outlive the
            # fault (seen as a long detour after a GNSS+odometry outage).
            if self._initialised_ekf and self.ekf.pos_sigma_horizontal() < 3.0:
                angles = np.linspace(scan.angle_min, scan.angle_max, len(scan.ranges),
                                     endpoint=True)
                obstacle_ranges = self._segment_ground(scan, angles)
                self.latest_obstacle_ranges = obstacle_ranges
                changed = self.costmap.integrate_scan(
                    self.ekf.p[:2], self.ekf.yaw, obstacle_ranges, angles, scan.range_max)
                if changed:
                    self._check_surprise_detection(t)

        # --- battery
        for msg in S["battery"].poll(t):
            self.health.report("battery", msg.header.stamp, t,
                               fingerprint=float(msg.voltage * 1000 + msg.charge),
                               value_for_range=float(msg.voltage))
            self.latest_battery = msg

        # --- camera (perception payload; not consumed by navigation here)
        if "camera" in S:
            for rgb, depth, info in S["camera"].poll(t):
                self.health.report("camera", depth.header.stamp, t,
                                   fingerprint=float(np.nansum(depth.data)))

        # --- health-monitor-driven fault detection
        if self.trig_health.due(t):
            self.health.evaluate(t)
            for sid in self.health.specs:
                if self.health.status_of(sid) is not SensorStatus.OK:
                    self.injector.mark_detected_for_target(
                        sid, t, "sensor_health:" + self.health.health[sid].detail)
            self._check_innovation_gating(t)

    # -- GNSS gate-lockout policy ---------------------------------------
    LOCKOUT_SUPPRESS_MAX_S = 20.0

    def _init_gnss_lockout_policy(self) -> None:
        self._last_fix_t: float | None = None
        self._reacquiring = False
        self._suppress_since: float | None = None

    def _gnss_lockout_policy(self, t: float) -> None:
        """Decide whether the EKF may re-open its GNSS gate this epoch.

        The lockout reset re-acquires GNSS after the FILTER has drifted --
        typically when fixes return after an outage. Re-opening the gate on a
        stream that jumped while it was continuously available is how a
        spoofed position gets accepted. So: allowed after a gap in the fixes;
        suppressed while the integrity monitor has confirmed an inconsistency
        in a continuous stream -- but only for a bounded time, because a
        disagreement that persists that long cannot be told apart from a
        filter that drifted, and refusing GNSS forever strands the vehicle.
        """
        if self._last_fix_t is not None and t - self._last_fix_t > 2.0:
            self._reacquiring = True
        self._last_fix_t = t
        if self.gnss_monitor.state.confirmed and not self._reacquiring:
            if self._suppress_since is None:
                self._suppress_since = t
            allowed = t - self._suppress_since > self.LOCKOUT_SUPPRESS_MAX_S
        else:
            self._suppress_since = None
            allowed = True
        self.ekf.lockout_enabled = allowed

    def _check_innovation_gating(self, t: float) -> None:
        """A long run of gate rejections is evidence a stream is wrong.

        The stream still arrives on time with a changing payload, so the
        health monitor sees nothing; the estimator's own chi-square gate is
        what notices that it no longer agrees with everything else.
        """
        for tag, sid in (("mag", "magnetometer"), ("baro", "barometer")):
            if self.ekf._consec_reject.get(tag, 0) >= 10:
                self.injector.mark_detected_for_target(sid, t, "ekf_gate:%s_rejected" % tag)

    def _segment_ground(self, scan, angles: np.ndarray) -> np.ndarray:
        """Separate obstacle returns from terrain returns.

        A horizontally-mounted 2-D scanner on rolling terrain sees the ground
        itself: on a 14 degree slope the beam meets rising earth a few metres
        ahead. Without segmentation the planner marks the hillside as a wall
        and the controller emergency-brakes for the ground it is driving on --
        which is exactly what happened before this filter existed.

        Each return's endpoint is reconstructed from the ESTIMATED pose, and
        its height is compared with the prior terrain model (the same DEM the
        static costmap layer is built from, so this introduces no new
        knowledge). Returns within `ground_margin` of the surface are terrain;
        the rest are obstacles.
        """
        r = np.asarray(scan.ranges, dtype=float)
        out = np.full(r.shape, np.inf)
        finite = np.isfinite(r)
        if not finite.any():
            return out

        R = self.ekf.R
        mount = np.array([0.0, 0.0, self.sensors["lidar"].p.mount_height])
        origin = self.ekf.p + R @ mount
        a = angles[finite]
        d_body = np.stack([np.cos(a), np.sin(a), np.zeros(a.size)], axis=1)
        d_enu = d_body @ R.T
        hits = origin[None, :] + d_enu * r[finite][:, None]

        ground = self.terrain.height_at(hits[:, 0], hits[:, 1])
        above = hits[:, 2] - ground
        is_obstacle = above > self.ground_margin
        idx = np.flatnonzero(finite)
        out[idx[is_obstacle]] = r[finite][is_obstacle]
        return out

    def _check_surprise_detection(self, t: float) -> None:
        """Mark an OBSTACLE_APPEARS fault detected once LiDAR has marked it."""
        for obs in self.surprise_obstacles:
            if not obs.active(t):
                continue
            d = np.hypot(self.costmap.cell_x - obs.x, self.costmap.cell_y - obs.y)
            near = d <= obs.footprint_radius + 1.2
            if np.any(self.costmap.obstacle[near] > 0):
                self.injector.mark_detected_for_target("world", t, "costmap:lidar_marked")
                self.injector.mark_detected(FaultType.OBSTACLE_APPEARS, t,
                                            "costmap:lidar_marked")

    # ------------------------------------------------------------------
    # planning and control
    # ------------------------------------------------------------------
    def _replan(self, t: float, reason: str) -> bool:
        if t - self._last_plan_t < 0.5:
            return False
        self._last_plan_t = t
        # Carry the current localisation uncertainty into the footprint the
        # planner respects. k_sigma = 2 covers the position error 95% of the
        # time, which is the standard the clearance requirement is written to.
        # Before alignment there is no sigma to read, but the uncertainty is
        # not zero -- it is the prior. Using 0 there would plan the FIRST
        # path, the one the vehicle follows longest, with no allowance at all.
        sigma = (self.ekf.pos_sigma_horizontal() if self._initialised_ekf
                 else float(self.ekf.cfg.init_pos_sigma))
        margin = float(self.cfg.nav.get("localisation_margin_sigma", 2.0) * sigma)
        margin = min(margin, float(self.cfg.nav.get("localisation_margin_max", 1.5)))
        if abs(margin - self.costmap.localisation_margin) > 0.05:
            self.costmap.localisation_margin = margin
            self.costmap.dirty = True
        start = self.ekf.p[:2] if self._initialised_ekf else self.mission.start
        path, stats = self.planner.plan(start, self.mission.goal)
        self.recorder.record_plan(t, path, stats, reason)
        if path is None:
            self.failed_plans += 1
            return False
        smooth = self.planner.resample(self.planner.shortcut(path), 0.6)
        self.controller.set_path(smooth)
        self.plan_path = smooth
        self.replan_count += 1
        return True

    def _control(self, t: float, dt: float) -> None:
        if not self._initialised_ekf:
            return

        # --- resilience manager decides the operating envelope first
        self.resilience.step(
            t, dt, health_monitor=self.health, ekf=self.ekf,
            gnss_state=self.gnss_monitor.state,
            distance_travelled=self.ugv.distance_travelled,
            goal_reached=self.goal_reached,
            mission_timeout=(t >= self.mission.timeout_s))
        new_trs = self.resilience.transitions[len(self.recorder.state_transitions):]
        self.recorder.state_transitions.extend(new_trs)

        self.controller.speed_ceiling = self.resilience.speed_limit
        self.controller.allow_motion = self.resilience.allow_motion

        # Held by the safety manager with no odometry (so no encoder ZUPT):
        # if the IMU confirms the vehicle is still, say so to the filter.
        # The vehicle knows it commanded zero speed; the IMU check guards
        # against sliding. Without this the parked estimate drifted 130 m.
        if (not self.resilience.allow_motion and len(self._imu_window) >= 80
                and self.health.status_of("wheel_odom") is not SensorStatus.OK):
            w = np.asarray(self._imu_window)
            if w[:, 0].mean() < 0.03 and w[:, 1].std() < 0.08:
                self.ekf.update_zero_velocity()

        angles = ranges = None
        if self.latest_scan is not None:
            # The controller brakes only for segmented obstacle returns, never
            # for terrain the vehicle is about to drive over.
            ranges = (self.latest_obstacle_ranges
                      if self.latest_obstacle_ranges is not None
                      else self.latest_scan.ranges)
            angles = np.linspace(self.latest_scan.angle_min, self.latest_scan.angle_max,
                                 len(ranges), endpoint=True)

        # Slope at the ESTIMATED position: the vehicle uses its map plus its
        # own estimate, not the simulator's answer.
        slope = float(self.terrain.slope_at(self.ekf.p[0], self.ekf.p[1]))
        est_speed = float(np.linalg.norm(self.ekf.v[:2]))

        out = self.controller.step(
            dt, self.ekf.p[:2], self.ekf.yaw, est_speed,
            ranges=ranges, angles=angles, slope_rad=slope, goal=self.mission.goal)

        if out.goal_reached and not self.goal_reached:
            # Confirm against the ESTIMATE, which is what the vehicle knows.
            self.goal_reached = True
            self.finish_reason = "goal reached (estimated)"
            # The run ends on this step, so let the state machine record
            # COMPLETE now rather than on a control tick that never comes.
            self.resilience.step(
                t, 0.0, health_monitor=self.health, ekf=self.ekf,
                gnss_state=self.gnss_monitor.state,
                distance_travelled=self.ugv.distance_travelled, goal_reached=True)

        if out.replan_requested and self.trig_plan_check.due(t):
            self._replan(t, out.replan_reason or "controller request")

        self.ugv.set_command(out.v, out.omega)
        self.last_control = out

    # ------------------------------------------------------------------
    # main loop
    # ------------------------------------------------------------------
    def step(self) -> bool:
        """Advance one physics step. Returns False when the run is over."""
        cfg = self.cfg
        dt = cfg.physics_dt
        t = self.clock.t

        self.injector.update(t)
        self.ugv.step(dt, t)
        truth = self.ugv.truth(t)

        for s in self.sensors.values():
            s.update(truth, t)
        self.truth_pub.update(truth, t)

        self._consume(t)
        if self.trig_control.due(t):
            self._control(t, 1.0 / 50.0)

        # --- safety bookkeeping (recorder-side; uses ground truth)
        clear = self.world.obstacle_distance_2d(self.ugv.x, self.ugv.y, t)
        self.min_clearance = min(self.min_clearance, clear)
        if clear < 0.30:
            self.collisions += 1

        if self.recorder.due(t):
            self._record(t, truth)

        self.clock.tick()

        # --- termination
        if self.goal_reached:
            self.finished = True
            self.finish_reason = self.finish_reason or "goal reached"
        elif t >= min(cfg.duration, self.mission.timeout_s):
            self.finished = True
            self.finish_reason = "timeout"
        elif self.resilience.state is MissionState.ABORTED:
            self.finished = True
            self.finish_reason = "aborted"
        return not self.finished

    def _record(self, t: float, truth) -> None:
        # Nothing to score before coarse alignment. The estimator holds no
        # position until the first fix arrives, so recording those samples
        # would charge the filter with the distance from the ENU origin to
        # the start point -- an artefact of the prior, not an estimation
        # error. The alignment delay is reported separately instead.
        if not self._initialised_ekf:
            return
        ekf = self.ekf
        ctl = getattr(self, "last_control", None)
        bat = getattr(self, "latest_battery", None)
        gs = self.gnss_monitor.state
        fix = getattr(self.sensors["gnss"], "last_diag", {}) or {}
        true_rpy = quat_to_euler(truth.q)
        est_rpy = ekf.euler
        err_h = float(np.linalg.norm(ekf.p[:2] - truth.p[:2])) if self._initialised_ekf else 0.0

        self.recorder.sample({
            "t": round(t, 4),
            "est_pos": ekf.p.tolist(), "true_pos": np.asarray(truth.p).tolist(),
            "pos_sigma_h": ekf.pos_sigma_horizontal(),
            "distance_travelled": self.ugv.distance_travelled,
            "true_x": truth.p[0], "true_y": truth.p[1], "true_z": truth.p[2],
            "true_yaw_deg": np.degrees(true_rpy[2]),
            "true_speed": float(np.linalg.norm(truth.v)),
            "est_x": ekf.p[0], "est_y": ekf.p[1], "est_z": ekf.p[2],
            "est_yaw_deg": np.degrees(est_rpy[2]),
            "est_speed": float(np.linalg.norm(ekf.v[:2])),
            "pos_error_h": err_h,
            "yaw_error_deg": float(np.degrees(wrap_pi(est_rpy[2] - true_rpy[2]))),
            "yaw_sigma_deg": float(np.degrees(ekf.yaw_sigma())),
            "gnss_nis": gs.nis, "gnss_innov_norm": gs.innovation_norm,
            "gnss_satellites": fix.get("n_visible", 0),
            "gnss_hdop": (fix.get("dop") or {}).get("hdop", 0.0),
            "gnss_flagged": gs.flagged, "gnss_confirmed": gs.confirmed,
            "nav_mode": self.resilience.nav_mode.name,
            "mission_state": self.resilience.state.name,
            "safe_action": self.resilience.safe_action.name,
            "speed_cmd": (ctl.v if ctl else 0.0),
            "yaw_rate_cmd": (ctl.omega if ctl else 0.0),
            "cross_track_error": (ctl.cross_track_error if ctl else 0.0),
            "obstacle_distance": (ctl.obstacle_distance if ctl else float("inf")),
            "slope_deg": float(np.degrees(self.terrain.slope_at(self.ugv.x, self.ugv.y))),
            "battery_pct": (bat.percentage * 100.0 if bat else 0.0),
            "battery_v": (bat.voltage if bat else 0.0),
            "dr_time": self.resilience.dr_time,
            "dr_distance": self.resilience.dr_distance,
            "replan_count": self.replan_count,
            "min_clearance": self.min_clearance,
            "gyro_bias_x": ekf.b_g[0], "gyro_bias_y": ekf.b_g[1], "gyro_bias_z": ekf.b_g[2],
            "accel_bias_x": ekf.b_a[0], "accel_bias_y": ekf.b_a[1], "accel_bias_z": ekf.b_a[2],
            "baro_bias": ekf.b_baro,
        })

    def run(self, *, progress: bool = False) -> dict:
        t0 = time.time()
        # Plan once before moving, from the declared start.
        self._replan(0.0, "initial plan")
        n = 0
        while self.step():
            n += 1
            if progress and n % 40000 == 0:
                print("   t=%7.1fs  %-18s  err=%.2fm  dist=%.0fm"
                      % (self.clock.t, self.resilience.state.name,
                         float(np.linalg.norm(self.ekf.p[:2] - np.array([self.ugv.x, self.ugv.y]))),
                         self.ugv.distance_travelled), flush=True)
        self.wall_time = time.time() - t0
        return self.results()

    # ------------------------------------------------------------------
    # results
    # ------------------------------------------------------------------
    def results(self) -> dict:
        t = self.clock.t
        self.recorder.fault_events = self.injector.summary()
        self.recorder.fault_windows = self.injector.active_windows()
        self.recorder.state_transitions = list(self.resilience.transitions)
        self.recorder.sensor_stats = {
            sid: {"expected": int(np.floor(t * s.rate_hz)) + 1,
                  "published": int(s.published_count),
                  "dropped": int(s.dropped_count)}
            for sid, s in self.sensors.items()}
        self.recorder.outcome = metrics_mod.mission_outcome(
            self.recorder.rows, goal_reached=self.goal_reached,
            final_state=self.resilience.state.name, collisions=self.collisions,
            min_clearance=self.min_clearance, duration_s=t,
            timeout_s=min(self.cfg.duration, self.mission.timeout_s))
        self.recorder.outcome["finish_reason"] = self.finish_reason
        self.recorder.outcome["replans"] = self.replan_count
        self.recorder.outcome["failed_plans"] = self.failed_plans
        self.recorder.outcome["alignment_time_s"] = self.alignment_time_s
        self.recorder.outcome["ekf_gate_lockout_resets"] = int(
            self.ekf.last.get("lockout_resets", 0))
        self.recorder.outcome["realtime_factor"] = (t / self.wall_time
                                                    if self.wall_time > 0 else None)
        rec = self.recorder.record()
        return {"record": rec, "metrics": metrics_mod.summarise(rec),
                "recorder": self.recorder}


def make_runner(cfg: ScenarioConfig) -> ScenarioRunner:
    """The runner for the scenario's vehicle type (`vehicle: {type: drone}`)."""
    if str(cfg.vehicle.get("type", "ugv")).lower() == "drone":
        from experiment.drone_runner import DroneScenarioRunner
        return DroneScenarioRunner(cfg)
    return ScenarioRunner(cfg)


def run_scenario(path: str | Path, out_dir: str | Path | None = None,
                 *, seed: int | None = None, progress: bool = False) -> dict:
    cfg = ScenarioConfig.load(path)
    if seed is not None:
        cfg.seed = int(seed)
    runner = make_runner(cfg)
    res = runner.run(progress=progress)
    if out_dir is not None:
        d = Path(out_dir) / ("%s_seed%d" % (cfg.id, cfg.seed))
        res["paths"] = runner.recorder.write(d, metrics=res["metrics"])
    return res
