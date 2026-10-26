"""Component self-test: check every part of the stack in isolation.

    python3 -m experiment.selftest            # human-readable report
    python3 -m experiment.selftest --json     # machine-readable

Each check builds the smallest setup that exercises one component (a sensor
model, the estimator, the planner, the safety state machine, a short closed
loop for each vehicle) and compares the result with a physical expectation.
The dashboard runs the same checks through POST /api/selftest.

This complements tests/ (pytest): those guard the code during development,
this lets an operator confirm the components behave on the machine that is
about to run the demo.
"""
from __future__ import annotations

import argparse
import json
import sys
import time
import traceback
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))


class CheckFailed(AssertionError):
    pass


def expect(cond: bool, msg: str) -> None:
    if not cond:
        raise CheckFailed(msg)


# ----------------------------------------------------------------------
# fixtures
# ----------------------------------------------------------------------
def _small_world(relief: float = 4.0, obstacles=()):
    from sim.geodesy import LocalFrame
    from sim.rng import RngHub
    from sim.terrain import Terrain
    from sim.world import MagneticModel, Mission, Obstacle, World
    rng = RngHub(7)
    terrain = Terrain(size_x=80.0, size_y=80.0, resolution=0.5, rng=rng.stream("terrain"),
                      relief=relief, octaves=4)
    frame = LocalFrame(47.3977, 8.5456, 488.0)
    mission = Mission(start=np.array([10.0, 40.0]), goal=np.array([70.0, 40.0]))
    world = World(terrain, frame, mission, MagneticModel())
    for i, (x, y, r) in enumerate(obstacles):
        world.add_obstacle(Obstacle("t%d" % i, "cylinder", x, y, 3.0, radius=r))
    return world, rng


def _truth_at_rest(world, x=40.0, y=40.0, z_above=0.3, yaw=0.0):
    from sim.rotations import euler_to_quat
    from sim.sensors.base import VehicleTruth
    z = float(world.terrain.height_at(x, y)) + z_above
    return VehicleTruth(p=np.array([x, y, z]), q=euler_to_quat(0.0, 0.0, yaw))


def _collect(sensor, truth, seconds):
    msgs = []
    for k in range(int(seconds / 0.0025)):
        t = k * 0.0025          # integer steps, like SimClock: no float drift
        truth.t = t
        sensor.update(truth, t)
        msgs.extend(sensor.poll(t))
    return msgs


# ----------------------------------------------------------------------
# checks
# ----------------------------------------------------------------------
def check_imu_at_rest():
    from sim.sensors.imu import ImuSensor
    world, rng = _small_world()
    imu = ImuSensor("imu", rng.stream("imu"), gravity=world.frame.gravity)
    msgs = _collect(imu, _truth_at_rest(world), 5.0)
    acc = np.mean([m.linear_acceleration for m in msgs], axis=0)
    gyr = np.mean([m.angular_velocity for m in msgs], axis=0)
    expect(abs(acc[2] - world.frame.gravity) < 0.25,
           "vertical specific force %.3f, expected ~%.3f" % (acc[2], world.frame.gravity))
    expect(np.linalg.norm(gyr) < 0.02, "gyro reads %.4f rad/s at rest" % np.linalg.norm(gyr))
    return "%d samples, f_z=%.3f m/s^2, |gyro|=%.4f rad/s" % (len(msgs), acc[2], np.linalg.norm(gyr))


def check_gnss_accuracy():
    from sim.sensors.gnss import GnssSensor
    world, rng = _small_world()
    gnss = GnssSensor("gnss", rng.stream("gnss"), world.frame, world=world)
    truth = _truth_at_rest(world)
    msgs = _collect(gnss, truth, 30.0)
    errs = []
    for fix, _tw in msgs:
        if fix.status >= 0:
            p = world.frame.lla_to_enu(fix.latitude, fix.longitude, fix.altitude)
            errs.append(np.linalg.norm(p[:2] - truth.p[:2]))
    expect(len(errs) > 100, "only %d fixes in 30 s" % len(errs))
    rms = float(np.sqrt(np.mean(np.square(errs))))
    expect(rms < 4.0, "horizontal error RMS %.2f m" % rms)
    return "%d fixes, horizontal RMS %.2f m" % (len(errs), rms)


def check_lidar_sees_obstacle():
    from sim.sensors.lidar import LidarParams, LidarSensor
    world, rng = _small_world(relief=0.0, obstacles=[(50.0, 40.0, 1.0)])
    lidar = LidarSensor("lidar", rng.stream("lidar"), world,
                        params=LidarParams(publish_cloud=False))
    msgs = _collect(lidar, _truth_at_rest(world, x=40.0, y=40.0, z_above=0.5), 0.5)
    scan = msgs[-1][0]
    r = np.asarray(scan.ranges)
    a = np.linspace(scan.angle_min, scan.angle_max, len(r))
    ahead = r[np.abs(a) < np.radians(3)]
    hit = float(np.nanmin(np.where(np.isfinite(ahead), ahead, np.nan)))
    expect(abs(hit - 9.0) < 0.5, "obstacle surface at %.2f m, expected 9.0 m" % hit)
    return "obstacle 9.0 m ahead measured at %.2f m" % hit


def check_rangefinder_height():
    from sim.sensors.rangefinder import RangefinderSensor
    world, rng = _small_world(relief=0.0)
    rf = RangefinderSensor("rangefinder", rng.stream("rf"), world)
    msgs = _collect(rf, _truth_at_rest(world, z_above=15.0), 1.0)
    r = float(np.mean([m.range for m in msgs]))
    expect(abs(r - 14.95) < 0.4, "range %.2f m at 15 m height" % r)
    return "hovering 15 m up, range %.2f m" % r


def check_ekf_static_convergence():
    from estimation.ekf import ErrorStateEkf
    ekf = ErrorStateEkf()
    ekf.initialise(0.0, np.array([3.0, -2.0, 0.0]))       # 3.6 m initial error
    rng = np.random.default_rng(3)
    g = np.array([0.0, 0.0, 9.80665])
    t = 0.0
    for k in range(2000):
        t += 0.005
        ekf.propagate(t, np.zeros(3), g)
        if k % 40 == 0:
            ekf.update_gnss_position(rng.normal(0, 0.8, 3), np.diag([0.64] * 3).ravel())
        if k % 4 == 0:
            ekf.update_zero_velocity()
    err = float(np.linalg.norm(ekf.p[:2]))
    expect(err < 1.0, "position error %.2f m after 10 s of fixes" % err)
    return "initial error 3.6 m -> %.2f m (sigma %.2f m)" % (err, ekf.pos_sigma_horizontal())


def check_ekf_gyro_bias():
    from estimation.ekf import ErrorStateEkf
    ekf = ErrorStateEkf()
    ekf.initialise(0.0, np.zeros(3))
    g = np.array([0.0, 0.0, 9.80665])
    t = 0.0
    for k in range(2000):
        t += 0.005
        ekf.propagate(t, np.array([0.0, 0.0, 0.01]), g)
        if k % 4 == 0:
            ekf.update_zero_velocity()
    expect(abs(ekf.b_g[2] - 0.01) < 0.002, "learned gyro bias %.4f, true 0.0100" % ekf.b_g[2])
    return "learned z gyro bias %.4f rad/s (true 0.0100)" % ekf.b_g[2]


def check_fault_injector():
    from faults.injector import FaultInjector, FaultSpec
    from sim.msgs import FaultType
    from sim.sensors.gnss import GnssSensor
    world, rng = _small_world()
    gnss = GnssSensor("gnss", rng.stream("gnss"), world.frame, world=world)
    inj = FaultInjector("selftest", rng.stream("faults"))
    inj.add(FaultSpec(FaultType.GNSS_OUTAGE, "gnss", onset=1.0, duration=2.0))
    inj.bind({"gnss": gnss}, world)
    truth = _truth_at_rest(world)
    counts = {"before": 0, "during": 0, "after": 0}
    for k in range(int(4.5 / 0.0025)):
        t = k * 0.0025
        inj.update(t)
        truth.t = t
        gnss.update(truth, t)
        # Judge each fix by when it was SAMPLED: one taken just before the
        # onset can legitimately arrive after it (transport latency).
        for fix, _tw in gnss.poll(t):
            st = fix.header.stamp
            counts["before" if st < 1.0 else ("during" if st < 3.0 else "after")] += 1
    expect(counts["during"] == 0, "%d fixes published during the outage" % counts["during"])
    expect(counts["before"] > 0 and counts["after"] > 0, "stream did not resume: %s" % counts)
    return "fixes before/during/after outage: %(before)d / %(during)d / %(after)d" % counts


def check_planner():
    from nav.astar import TerrainAStar
    from nav.costmap import Costmap
    world, _ = _small_world(relief=2.0, obstacles=[(40.0, 40.0, 3.0)])
    cm = Costmap(world.terrain, resolution=0.75)
    cm.seed_known_obstacles(world.obstacles, 0.0)
    path, stats = TerrainAStar(cm).plan(np.array([10.0, 40.0]), np.array([70.0, 40.0]))
    expect(path is not None, "no path around a single obstacle: %s" % stats)
    clear = min(world.obstacle_distance_2d(x, y, 0.0) for x, y in path)
    expect(clear > 0.4, "path passes %.2f m from the obstacle" % clear)
    return "%.1f m path, %d expansions, min clearance %.2f m" % (
        stats["length_m"], stats["expansions"], clear)


def check_controller_standoff():
    from nav.controller import ControllerConfig, PurePursuitController
    c = PurePursuitController(ControllerConfig())
    a = np.linspace(-np.pi, np.pi, 360, endpoint=False)
    ahead = np.full(360, np.inf)
    ahead[np.abs(a) < 0.05] = 0.6
    behind = np.full(360, np.inf)
    behind[np.abs(np.abs(a) - np.pi) < 0.05] = 0.6
    expect(c._scan_features(ahead, a, 0.0)["blocked"], "did not brake for an obstacle ahead")
    expect(not c._scan_features(behind, a, 0.0)["blocked"], "froze for an obstacle behind")
    return "brakes for 0.6 m ahead, may creep away from 0.6 m behind"


def check_safety_fsm():
    from resilience.manager import ResilienceConfig, ResilienceManager
    from sim.msgs import MissionState, SensorStatus

    class Health:
        def __init__(self, down):
            self.specs = {k: None for k in ("imu", "gnss", "wheel_odom", "lidar")}
            self.down = set(down)

        def status_of(self, s):
            return SensorStatus.TIMEOUT if s in self.down else SensorStatus.OK

    class Ekf:
        def pos_sigma_horizontal(self):
            return 0.99

    class Gnss:
        outage = confirmed = False

    def run(down, seconds):
        m = ResilienceManager(ResilienceConfig())
        t = 0.0
        while t < seconds:
            m.step(t, 0.02, health_monitor=Health(down), ekf=Ekf(), gnss_state=Gnss(),
                   distance_travelled=0.0)
            t += 0.02
        return m.state

    s1 = run({"gnss"}, 1.5)
    s2 = run({"lidar"}, 1.0)
    s3 = run({"gnss", "wheel_odom"}, 1.5)
    expect(s1 is MissionState.LIMITED_OPERATION, "GNSS loss -> %s" % s1.name)
    expect(s2 is MissionState.SAFE_ACTION, "LiDAR loss -> %s" % s2.name)
    expect(s3 is MissionState.SAFE_ACTION, "GNSS + odometry loss -> %s" % s3.name)
    return "GNSS loss -> %s, LiDAR loss -> %s, no fallback -> %s" % (s1.name, s2.name, s3.name)


def check_scenario_validation():
    from experiment import scenario_schema as S
    S.build_config({"base": "gnss_outage", "environment": "dense_forest"})
    S.build_config({"base": "drone_baseline", "environment": "mountain_pass"})
    refused = 0
    for bad in ({"fields": {"world.relief": 99}}, {"faults": [{"type": "NUKE"}]},
                {"base": "../x"}, {"vehicle": "drone", "faults": [{"type": "LIDAR_DROPOUT"}]}):
        try:
            S.build_config({"base": "baseline_normal", **bad})
        except S.ScenarioError:
            refused += 1
    expect(refused == 4, "only %d of 4 invalid edits refused" % refused)
    return "valid edits accepted, 4/4 invalid edits refused"


def _closed_loop(base: str, seconds: float, **fields):
    from experiment import scenario_schema as S
    from experiment.runner import ScenarioConfig, make_runner
    raw = S.build_config({"base": base, "fields": fields} if fields else {"base": base})
    raw["detail"] = "fast"
    cfg = ScenarioConfig.from_dict(raw)
    cfg.duration = seconds
    cfg.mission["timeout_s"] = seconds
    r = make_runner(cfg)
    r._replan(0.0, "initial plan")
    while r.step():
        pass
    return r


def check_ugv_closed_loop():
    r = _closed_loop("baseline_normal", 25.0)
    err = float(np.linalg.norm(r.ekf.p[:2] - [r.ugv.x, r.ugv.y]))
    expect(r.ugv.distance_travelled > 15, "rover drove only %.1f m in 25 s" % r.ugv.distance_travelled)
    expect(err < 3.0, "position error %.2f m" % err)
    expect(r.collisions == 0, "collided")
    return "drove %.0f m in 25 s, position error %.2f m, no collisions" % (
        r.ugv.distance_travelled, err)


def check_drone_closed_loop():
    r = _closed_loop("drone_baseline", 25.0)
    v = r.vehicle
    expect(not v.crashed, "crashed: %s" % v.crash_reason)
    expect(v.agl > 10.0, "only %.1f m above ground after 25 s" % v.agl)
    expect(v.distance_travelled > 20, "flew only %.1f m" % v.distance_travelled)
    err = float(np.linalg.norm(r.ekf.p - v.pos))
    expect(err < 3.0, "3-D position error %.2f m" % err)
    return "took off, %.0f m above ground, %.0f m flown, 3-D error %.2f m" % (
        v.agl, v.distance_travelled, err)


CHECKS = [
    ("sensors", "IMU at rest reads gravity", check_imu_at_rest),
    ("sensors", "GNSS accuracy", check_gnss_accuracy),
    ("sensors", "LiDAR ranges an obstacle", check_lidar_sees_obstacle),
    ("sensors", "Rangefinder height", check_rangefinder_height),
    ("estimation", "EKF converges on GNSS", check_ekf_static_convergence),
    ("estimation", "EKF learns gyro bias at rest", check_ekf_gyro_bias),
    ("faults", "Fault injector silences and restores a stream", check_fault_injector),
    ("navigation", "A* plans around an obstacle", check_planner),
    ("navigation", "Controller standoff guard", check_controller_standoff),
    ("safety", "Resilience state machine transitions", check_safety_fsm),
    ("config", "Scenario validation", check_scenario_validation),
    ("closed loop", "Rover drives (25 s)", check_ugv_closed_loop),
    ("closed loop", "Drone takes off and cruises (25 s)", check_drone_closed_loop),
]


def run_all(only: str | None = None) -> dict:
    results = []
    t_all = time.time()
    for component, name, fn in CHECKS:
        if only and only not in (component, fn.__name__):
            continue
        t0 = time.time()
        try:
            detail = fn()
            ok = True
        except CheckFailed as exc:
            ok, detail = False, str(exc)
        except Exception as exc:                      # a crash is a failure, with context
            ok = False
            detail = "%s: %s\n%s" % (type(exc).__name__, exc,
                                     traceback.format_exc(limit=3))
        results.append({"component": component, "name": name, "check": fn.__name__,
                        "ok": ok, "detail": detail, "ms": round((time.time() - t0) * 1000)})
    return {"ok": all(r["ok"] for r in results), "passed": sum(r["ok"] for r in results),
            "total": len(results), "seconds": round(time.time() - t_all, 2),
            "results": results}


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="ResilienceLab component self-test")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--only", help="run one component group or check function")
    args = ap.parse_args(argv)
    rep = run_all(args.only)
    if args.json:
        print(json.dumps(rep, indent=1))
    else:
        for r in rep["results"]:
            print("  %s  %-12s %-46s %6d ms  %s" % ("PASS" if r["ok"] else "FAIL",
                                                  r["component"], r["name"], r["ms"],
                                                  r["detail"].splitlines()[0]))
        print("\n%d/%d checks passed in %.1f s" % (rep["passed"], rep["total"], rep["seconds"]))
    return 0 if rep["ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
