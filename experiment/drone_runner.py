"""Closed-loop runner for the drone (quadrotor) pipeline.

Same loop and the same wiring rules as the rover runner (it subclasses it):
the estimator, monitors, controller and resilience manager see only sensor
messages; ground truth reaches the recorder and the crash/clearance
bookkeeping and nothing else.

What differs from the rover, and why:

  * Sensors: IMU, GNSS, magnetometer, barometer, battery and a downward
    rangefinder. No wheel odometry and no horizontal LiDAR.
  * Estimation: the same error-state EKF. With no odometry there is no
    non-holonomic constraint, so a GNSS outage leaves pure inertial dead
    reckoning -- which is why the drone's dead-reckoning budget is seconds,
    not a minute.
  * Safe action: LAND IN PLACE (descend on the barometer), not stop-and-hold.
  * A tilt-saturation monitor flags a disturbance the controller cannot
    reject (strong wind), and is what scores a WIND_GUST fault as detected.
"""
from __future__ import annotations

import numpy as np

from estimation.ekf import EkfConfig, ErrorStateEkf
from estimation.gnss_monitor import GnssMonitor, GnssMonitorConfig
from estimation.sensor_health import SensorHealthMonitor, SensorSpec
from experiment.recorder import ExperimentRecorder
from experiment.runner import ScenarioConfig, ScenarioRunner
from faults.injector import FaultInjector
from nav.drone_controller import DroneController, DroneControllerConfig
from resilience.manager import ResilienceConfig, ResilienceManager
from sim.clock import RateTrigger
from sim.dynamics.quad import QuadDynamics, QuadParams
from sim.geodesy import LocalFrame
from sim.msgs import MissionState, NavMode, SensorStatus
from sim.rotations import quat_to_euler, wrap_pi
from sim.sensors.barometer import BarometerSensor, isa_altitude
from sim.sensors.battery import BatteryParams, BatterySensor
from sim.sensors.gnss import GnssParams, GnssSensor
from sim.sensors.ground_truth import GroundTruthPublisher
from sim.sensors.imu import ImuParams, ImuSensor
from sim.sensors.magnetometer import MagnetometerSensor
from sim.sensors.rangefinder import RangefinderSensor
from sim.terrain import Terrain
from sim.world import MagneticModel, Mission, World

#: Safety policy defaults for a multicopter. Overridable per scenario.
DRONE_RESILIENCE = {
    "critical_sensors": ("imu",),
    # Inertial-only dead reckoning needs the IMU; altitude needs the baro.
    "fallback_sensors": ("imu", "barometer"),
    "perception_sensors": (),
    "dr_time_budget": 10.0,
    "dr_distance_budget": 30.0,
    "speed_normal": 8.0,
    "speed_degraded": 4.0,
    "speed_limited": 2.5,
    "sigma_warn": 2.0,
    "sigma_limit": 4.0,
    "sigma_unsafe": 8.0,
}

#: Controller fields a scenario may set under `vehicle:`.
_CTRL_KEYS = set(DroneControllerConfig.__dataclass_fields__)
_QUAD_KEYS = set(QuadParams.__dataclass_fields__)


class DroneScenarioRunner(ScenarioRunner):
    vehicle_type = "drone"

    def build(self) -> None:
        cfg = self.cfg
        w = cfg.world

        # --- world (same generator as the rover, so maps are comparable)
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
        self.surprise_obstacles = []
        for f in cfg.faults:
            if str(f.get("type", "")).upper() == "OBSTACLE_APPEARS":
                self._spawn_surprise(f, float(f.get("onset", 0.0)))

        # --- vehicle
        vcfg = dict(cfg.vehicle)
        params = dict(vcfg.get("params", {}))
        wind_speed = float(w.get("wind_speed", 0.0))
        wind_dir = np.radians(float(w.get("wind_dir_deg", 0.0)))
        # Meteorological convention: the direction the wind blows FROM.
        params.setdefault("wind_mean", (-wind_speed * np.sin(wind_dir),
                                        -wind_speed * np.cos(wind_dir), 0.0))
        params.setdefault("turbulence", float(w.get("turbulence", 0.6)))
        quad_kw = {k: v for k, v in params.items() if k in _QUAD_KEYS}
        self.vehicle = QuadDynamics(
            QuadParams(initial_pose=(float(start[0]), float(start[1]), self.mission.start_yaw),
                       **quad_kw),
            self.world, self.rng.stream("ugv"))
        # The dashboard and recorder address "the vehicle" as `ugv`.
        self.ugv = self.vehicle

        self._build_sensors()

        # --- algorithms (no access to the vehicle object or to truth)
        self.ekf = ErrorStateEkf(EkfConfig(gravity=self.frame.gravity, **cfg.ekf))
        self.gnss_monitor = GnssMonitor(GnssMonitorConfig(**cfg.gnss_monitor))
        self.health = SensorHealthMonitor()
        self._register_health()
        rcfg = dict(DRONE_RESILIENCE)
        rcfg["speed_normal"] = float(vcfg.get("cruise_speed", rcfg["speed_normal"]))
        rcfg.update(cfg.resilience)
        self.resilience = ResilienceManager(ResilienceConfig(**rcfg), scenario_id=cfg.id)
        ctrl_kw = {k: v for k, v in vcfg.items() if k in _CTRL_KEYS}
        self.controller = DroneController(
            DroneControllerConfig(**ctrl_kw), self.terrain,
            mass=self.vehicle.p.mass, gravity=self.frame.gravity,
            max_thrust=self.vehicle.max_thrust, start=start, goal=goal)

        # --- faults + recording
        self.injector = FaultInjector(cfg.id, self.rng.stream("faults"))
        for f in cfg.faults:
            self.injector.add(self._fault_spec(f, float(f.get("onset", 0.0))))
        self.injector.bind(self.sensors, self.world, self.vehicle)
        self.truth_pub = GroundTruthPublisher(rate_hz=50.0)
        self.recorder = ExperimentRecorder(cfg.id, cfg.seed, rate_hz=cfg.record_rate)
        self.recorder.straight_line_m = float(np.linalg.norm(goal - start))
        self.recorder.first_plan_length_m = float(np.linalg.norm(goal - start))
        self.recorder.fault_windows = self.injector.active_windows()
        self.recorder.set_config(cfg.to_dict(), self.world.summary(),
                                 {sid: s.describe() for sid, s in self.sensors.items()})

        # --- loop state (names shared with the rover runner)
        self.trig_health = RateTrigger(20.0)
        self.trig_control = RateTrigger(50.0)
        self.latest_scan = None
        self.latest_range = None
        self.latest_battery = None
        self._mag_cal = self.sensors["magnetometer"].calibration(
            residual_fraction=float(cfg.sensors.get("mag_calibration_residual", 0.10)))
        n = 40
        self.plan_path = np.column_stack([np.linspace(start[0], goal[0], n),
                                          np.linspace(start[1], goal[1], n)])
        self.replan_count = 1
        self.failed_plans = 0
        self.collisions = 0
        self.min_clearance = float("inf")
        self.goal_reached = False
        self.finished = False
        self.finish_reason = ""
        self._initialised_ekf = False
        self.alignment_time_s = None
        self._landed_timer = 0.0
        self._landed_est = True
        self._agl_prev: float | None = None
        self._agl_rate = 0.0
        self._sat_timer = 0.0
        self._failsafe_landed_t: float | None = None
        # Altitude voting (baro vs GNSS vs terrain map + rangefinder).
        self._baro_alt: float | None = None
        self._gnss_alt: float | None = None
        self._rf_alt: float | None = None
        self._r_baro = 0.0
        self._r_gnss = 0.0
        self._vote_timer = 0.0
        self._clear_timer = 0.0
        self.baro_excluded = False
        self._init_gnss_lockout_policy()
        self.wall_time = 0.0

    def _build_sensors(self) -> None:
        s = self.cfg.sensors
        self.sensors = {}
        imu_overrides = dict(s.get("imu", {}))
        imu_rate = float(imu_overrides.pop("rate_hz", 250.0))
        self.sensors["imu"] = ImuSensor(
            "imu", self.rng.stream("imu"), rate_hz=imu_rate,
            gravity=self.frame.gravity, earth_rate_enu=self.frame.earth_rate_enu(),
            params=ImuParams(**imu_overrides))
        gnss_overrides = dict(s.get("gnss", {}))
        gnss_rate = float(gnss_overrides.pop("rate_hz", 5.0))
        self.sensors["gnss"] = GnssSensor(
            "gnss", self.rng.stream("gnss"), self.frame, rate_hz=gnss_rate,
            params=GnssParams(**gnss_overrides), world=self.world)
        self.sensors["magnetometer"] = MagnetometerSensor(
            "magnetometer", self.rng.stream("mag"), self.world.magnetic.field_enu(),
            rate_hz=float(s.get("magnetometer", {}).get("rate_hz", 50.0)))
        self.sensors["barometer"] = BarometerSensor(
            "barometer", self.rng.stream("baro"),
            rate_hz=float(s.get("barometer", {}).get("rate_hz", 50.0)),
            site_altitude=self.frame.alt0)
        # 4S 5 Ah flight pack.
        self.sensors["battery"] = BatterySensor(
            "battery", self.rng.stream("battery"),
            rate_hz=float(s.get("battery", {}).get("rate_hz", 5.0)),
            params=BatteryParams(cells_series=4, capacity_ah=5.0, quiescent_current_a=0.6,
                                 thermal_mass_j_k=900.0))
        self.sensors["rangefinder"] = RangefinderSensor(
            "rangefinder", self.rng.stream("lidar"), self.world,
            rate_hz=float(s.get("rangefinder", {}).get("rate_hz", 20.0)))

    def _register_health(self) -> None:
        S = self.sensors
        for sp in [
            SensorSpec("imu", S["imu"].rate_hz, critical=True, value_min=-200.0, value_max=200.0),
            SensorSpec("gnss", S["gnss"].rate_hz, timeout_factor=5.0),
            SensorSpec("magnetometer", S["magnetometer"].rate_hz),
            SensorSpec("barometer", S["barometer"].rate_hz,
                       stale_repeats=25),  # quantised: repeats are normal at constant height
            SensorSpec("battery", S["battery"].rate_hz, timeout_factor=6.0),
            SensorSpec("rangefinder", S["rangefinder"].rate_hz, timeout_factor=5.0),
        ]:
            self.health.register(sp)

    # ------------------------------------------------------------------
    def _replan(self, t: float, reason: str) -> bool:
        """The drone flies the start->goal line; nothing to replan."""
        if not self.recorder.plans:
            self.recorder.record_plan(t, self.plan_path, {
                "ok": True, "length_m": float(np.linalg.norm(
                    self.mission.goal - self.mission.start))}, reason)
        return True

    def _consume(self, t: float) -> None:
        S = self.sensors
        for msg in S["imu"].poll(t):
            self.health.report("imu", msg.header.stamp, t,
                               fingerprint=float(np.sum(msg.angular_velocity) +
                                                 np.sum(msg.linear_acceleration)),
                               value_for_range=float(np.max(np.abs(msg.linear_acceleration))))
            if self._initialised_ekf:
                self.ekf.propagate(msg.header.stamp, msg.angular_velocity,
                                   msg.linear_acceleration)

        for fix, tw in S["gnss"].poll(t):
            no_fix = fix.status < 0
            self.health.report("gnss", fix.header.stamp, t,
                               fingerprint=float(fix.latitude * 1e7 + fix.longitude * 1e7),
                               value_for_range=float(fix.hdop))
            innov = nis = cov_diag = p_enu = v_enu = None
            if not no_fix:
                p_enu = self.frame.lla_to_enu(fix.latitude, fix.longitude, fix.altitude)
                cov = np.asarray(fix.position_covariance, dtype=float).reshape(3, 3)
                if not self._initialised_ekf:
                    self.ekf.initialise(fix.header.stamp, p_enu, yaw=self.mission.start_yaw)
                    self._initialised_ekf = True
                    self.alignment_time_s = float(t)
                else:
                    ant = S["gnss"].p.antenna_offset
                    age = max(0.0, t - fix.header.stamp)
                    self._gnss_lockout_policy(t)
                    self._gnss_alt = float(p_enu[2])
                    ok, nis = self.ekf.update_gnss_position(p_enu, cov.ravel(),
                                                            antenna_offset=ant, age=age)
                    if ok:
                        self._reacquiring = False
                    innov = self.ekf.last["gnss_pos_innov"]
                    cov_diag = self.ekf.last.get("gnss_pos_S_diag")
                    if tw is not None:
                        v_enu = np.asarray(tw.linear, dtype=float)
                        self.ekf.update_gnss_velocity(
                            v_enu, np.asarray(tw.covariance).reshape(6, 6)[:3, :3].ravel(),
                            antenna_offset=ant, age=age)
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
                self.injector.mark_detected_for_target(
                    "gnss", t, "gnss_monitor:" + (st.reasons[0] if st.reasons else "outage"))

        for pm, _tm in S["barometer"].poll(t):
            self.health.report("barometer", pm.header.stamp, t,
                               fingerprint=float(pm.fluid_pressure),
                               value_for_range=float(pm.fluid_pressure))
            if self._initialised_ekf:
                self._baro_alt = float(isa_altitude(pm.fluid_pressure)) - self.frame.alt0
                if not self.baro_excluded:
                    self.ekf.update_baro_altitude(self._baro_alt)

        for msg in S["magnetometer"].poll(t):
            self.health.report("magnetometer", msg.header.stamp, t,
                               fingerprint=float(np.sum(msg.magnetic_field) * 1e9),
                               value_for_range=float(np.linalg.norm(msg.magnetic_field) * 1e6))
            if self._initialised_ekf:
                b = self._mag_cal["soft_iron_inv"] @ (
                    np.asarray(msg.magnetic_field, dtype=float) - self._mag_cal["hard_iron"])
                self.ekf.update_mag_yaw(b, np.radians(self.world.magnetic.declination_deg))

        for msg in S["rangefinder"].poll(t):
            fp = None if not np.isfinite(msg.range) else float(msg.range)
            self.health.report("rangefinder", msg.header.stamp, t, fingerprint=fp)
            self.latest_range = msg
            agl = self._agl_estimate() if self._initialised_ekf else None
            # The terrain-map lookup needs a trustworthy horizontal position;
            # during dead reckoning it would feed drift back in as altitude.
            horizontal_ok = self.resilience.nav_mode is NavMode.GNSS_INS
            if agl is not None and not self._landed_est and horizontal_ok:
                # Terrain map + measured height = an absolute altitude that
                # shares no error source with the barometer or GNSS.
                self._rf_alt = (float(self.terrain.height_at(*self.ekf.p[:2])) + agl
                                + self.vehicle.p.leg_height)
                self.ekf.update_altitude(self._rf_alt, sigma=1.2, tag="rf_alt")
            else:
                self._rf_alt = None

        for msg in S["battery"].poll(t):
            self.health.report("battery", msg.header.stamp, t,
                               fingerprint=float(msg.voltage * 1000 + msg.charge),
                               value_for_range=float(msg.voltage))
            self.latest_battery = msg

        if self.trig_health.due(t):
            self.health.evaluate(t)
            for sid in self.health.specs:
                if self.health.status_of(sid) is not SensorStatus.OK:
                    self.injector.mark_detected_for_target(
                        sid, t, "sensor_health:" + self.health.health[sid].detail)
            self._check_innovation_gating(t)
            self._altitude_vote(t, 1.0 / self.trig_health.rate_hz)

    def _altitude_vote(self, t: float, dt: float) -> None:
        """Two-out-of-three altitude check.

        A barometer drift drags the filter's altitude with it (50 Hz of
        confident updates against 5 Hz of noisier GNSS heights), and the
        filter then blames GNSS. With a third, independent altitude -- the
        terrain map plus the rangefinder -- the culprit is the source that
        disagrees with both others. A suspect barometer is excluded from the
        filter until it agrees again.
        """
        if self._rf_alt is None or self._baro_alt is None or self._gnss_alt is None:
            return
        a = min(1.0, dt / 1.0)
        self._r_baro += a * ((self._baro_alt - self.ekf.b_baro - self._rf_alt) - self._r_baro)
        self._r_gnss += a * ((self._gnss_alt - self._rf_alt) - self._r_gnss)
        if not self.baro_excluded:
            bad = abs(self._r_baro) > 6.0 and abs(self._r_gnss) < 4.0
            self._vote_timer = self._vote_timer + dt if bad else 0.0
            if self._vote_timer > 1.5:
                self.baro_excluded = True
                self._clear_timer = 0.0
                self.injector.mark_detected_for_target(
                    "barometer", t, "altitude_vote:baro disagrees with GNSS and rangefinder")
        else:
            ok = abs(self._r_baro) < 3.0
            self._clear_timer = self._clear_timer + dt if ok else 0.0
            if self._clear_timer > 5.0:
                self.baro_excluded = False

    def _agl_estimate(self) -> float | None:
        """Tilt-corrected rangefinder height, if the reading is valid and fresh."""
        r = self.latest_range
        if (r is None or not np.isfinite(r.range)
                or self.health.status_of("rangefinder") is not SensorStatus.OK):
            return None
        roll, pitch, _ = self.ekf.euler
        return float(r.range * np.cos(roll) * np.cos(pitch)
                     - self.vehicle.p.leg_height + 0.05)

    def _control(self, t: float, dt: float) -> None:
        if not self._initialised_ekf:
            return
        self.resilience.step(
            t, dt, health_monitor=self.health, ekf=self.ekf,
            gnss_state=self.gnss_monitor.state,
            distance_travelled=self.vehicle.distance_travelled,
            goal_reached=self.goal_reached,
            mission_timeout=(t >= self.mission.timeout_s))
        new_trs = self.resilience.transitions[len(self.recorder.state_transitions):]
        self.recorder.state_transitions.extend(new_trs)

        ctl = self.controller
        ctl.speed_ceiling = self.resilience.speed_limit
        ctl.allow_motion = self.resilience.allow_motion
        # Battery failsafe: below 15 % land wherever the vehicle is.
        bat = self.latest_battery
        if bat is not None and bat.percentage < 0.15:
            ctl.allow_motion = False

        agl = self._agl_estimate()
        # Landing detector from the vehicle's own view: low and not moving.
        # With a valid rangefinder, "not moving" is judged from the measured
        # height's rate of change: during a GNSS outage the inertial velocity
        # estimate drifts, and a detector trusting it never saw the vehicle
        # had landed (it sat on the ground with the motors running).
        if agl is not None:
            if self._agl_prev is not None:
                self._agl_rate += 0.2 * ((agl - self._agl_prev) / dt - self._agl_rate)
            self._agl_prev = agl
            agl_now = agl
            still = abs(self._agl_rate) < 0.25
        else:
            self._agl_prev = None
            agl_now = self.ekf.p[2] - float(self.terrain.height_at(*self.ekf.p[:2]))
            still = abs(self.ekf.v[2]) < 0.35 and np.hypot(*self.ekf.v[:2]) < 0.6
        if agl_now < 0.35 and still:
            self._landed_timer += dt
        else:
            self._landed_timer = 0.0
        if self.vehicle.armed and ctl.phase in ("TAKEOFF", "CRUISE"):
            self._landed_est = False
        elif self._landed_timer > 0.6:
            self._landed_est = True

        # On the ground and disarmed the vehicle is known to be still.
        if self._landed_est and not self.vehicle.armed:
            self.ekf.update_zero_velocity()

        out = ctl.step(t, dt, est_pos=self.ekf.p, est_vel=self.ekf.v, est_yaw=self.ekf.yaw,
                       aligned=self._initialised_ekf, landed=self._landed_est, agl=agl,
                       horizontal_valid=self.resilience.nav_mode is NavMode.GNSS_INS)

        # Disturbance monitor: holding a large tilt for seconds means
        # something is pushing the airframe far harder than cruise drag.
        tilt = max(abs(out.roll_cmd), abs(out.pitch_cmd))
        heavy = out.tilt_saturated or tilt > 0.6 * np.radians(ctl.cfg.max_tilt_deg)
        self._sat_timer = self._sat_timer + dt if heavy else 0.0
        if self._sat_timer > 2.0:
            self.injector.mark_detected_for_target("world", t, "control:sustained_tilt")

        if ctl.arm_request and not self.vehicle.armed:
            self.vehicle.arm(True)
        elif not ctl.arm_request and self.vehicle.armed and self._landed_est:
            self.vehicle.arm(False)
        self.vehicle.set_attitude_target(out.roll_cmd, out.pitch_cmd, out.omega, out.thrust_cmd)

        if out.goal_reached and not self.goal_reached:
            self.goal_reached = True
            self.finish_reason = "landed at goal (estimated)"
            self.resilience.step(
                t, 0.0, health_monitor=self.health, ekf=self.ekf,
                gnss_state=self.gnss_monitor.state,
                distance_travelled=self.vehicle.distance_travelled, goal_reached=True)
        if ctl.phase == "FAILSAFE_LAND" and self._landed_est and not self.vehicle.armed:
            if self._failsafe_landed_t is None:
                self._failsafe_landed_t = t
        else:
            self._failsafe_landed_t = None
        self.last_control = out

    def step(self) -> bool:
        cfg = self.cfg
        dt = cfg.physics_dt
        t = self.clock.t
        self.injector.update(t)
        self.vehicle.step(dt, t)
        truth = self.vehicle.truth(t)
        for s in self.sensors.values():
            s.update(truth, t)
        self.truth_pub.update(truth, t)
        self._consume(t)
        if self.trig_control.due(t):
            self._control(t, 1.0 / 50.0)

        # Safety bookkeeping (recorder-side, ground truth): clearance is the
        # height above ground while flying, or the gap to an obstacle the
        # vehicle is level with.
        v = self.vehicle
        ctl_phase = getattr(getattr(self, "last_control", None), "phase", "")
        if not v.landed and ctl_phase == "CRUISE":
            clear = v.agl
            for o in self.world.obstacles:
                if o.active(t) and v.z - v.p.leg_height < o.z_base + o.height:
                    clear = min(clear, self.world.obstacle_distance_2d(v.x, v.y, t))
                    break
            self.min_clearance = min(self.min_clearance, clear)
        if v.crashed and self.collisions == 0:
            self.collisions = 1

        if self.recorder.due(t):
            self._record(t, truth)
        self.clock.tick()

        if self.goal_reached:
            self.finished = True
        elif v.crashed:
            self.finished = True
            self.finish_reason = "crashed (%s)" % v.crash_reason
            self.resilience._transition(MissionState.ABORTED, t, "vehicle crashed")
        elif self._failsafe_landed_t is not None and t - self._failsafe_landed_t > 3.0:
            self.finished = True
            self.finish_reason = "failsafe landing short of goal"
        elif t >= min(cfg.duration, self.mission.timeout_s):
            self.finished = True
            self.finish_reason = "timeout"
        elif self.resilience.state is MissionState.ABORTED:
            self.finished = True
            self.finish_reason = "aborted"
        return not self.finished

    def _record(self, t: float, truth) -> None:
        if not self._initialised_ekf:
            return
        ekf = self.ekf
        ctl = getattr(self, "last_control", None)
        bat = self.latest_battery
        gs = self.gnss_monitor.state
        fix = getattr(self.sensors["gnss"], "last_diag", {}) or {}
        true_rpy = quat_to_euler(truth.q)
        est_rpy = ekf.euler
        v = self.vehicle
        self.recorder.sample({
            "t": round(t, 4),
            "est_pos": ekf.p.tolist(), "true_pos": np.asarray(truth.p).tolist(),
            "pos_sigma_h": ekf.pos_sigma_horizontal(),
            "distance_travelled": v.distance_travelled,
            "true_x": truth.p[0], "true_y": truth.p[1], "true_z": truth.p[2],
            "true_yaw_deg": np.degrees(true_rpy[2]),
            "true_speed": float(np.linalg.norm(truth.v)),
            "est_x": ekf.p[0], "est_y": ekf.p[1], "est_z": ekf.p[2],
            "est_yaw_deg": np.degrees(est_rpy[2]),
            "est_speed": float(np.linalg.norm(ekf.v[:2])),
            "pos_error_h": float(np.linalg.norm(ekf.p[:2] - truth.p[:2])),
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
            "obstacle_distance": float("inf"),
            "slope_deg": 0.0,
            "battery_pct": (bat.percentage * 100.0 if bat else 0.0),
            "battery_v": (bat.voltage if bat else 0.0),
            "dr_time": self.resilience.dr_time,
            "dr_distance": self.resilience.dr_distance,
            "replan_count": self.replan_count,
            "min_clearance": self.min_clearance,
            "agl": v.agl, "est_agl": (ctl.agl_estimate if ctl else 0.0),
            "flight_phase": (ctl.phase if ctl else "PREFLIGHT"),
            "gyro_bias_x": ekf.b_g[0], "gyro_bias_y": ekf.b_g[1], "gyro_bias_z": ekf.b_g[2],
            "accel_bias_x": ekf.b_a[0], "accel_bias_y": ekf.b_a[1], "accel_bias_z": ekf.b_a[2],
            "baro_bias": ekf.b_baro,
        })

    def results(self) -> dict:
        res = super().results()
        o = res["record"]["outcome"]
        o["vehicle"] = "drone"
        o["crash_reason"] = self.vehicle.crash_reason
        o["failsafe_landing"] = self.finish_reason.startswith("failsafe")
        res["metrics"]["outcome"] = o
        return res
