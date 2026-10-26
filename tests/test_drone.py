import numpy as np

from experiment import scenario_schema as S
from experiment.runner import ScenarioConfig, make_runner
from experiment.drone_runner import DroneScenarioRunner


def fly(base, seconds=None, **fields):
    edit = {"base": base}
    if fields:
        edit["fields"] = fields
    cfg = ScenarioConfig.from_dict(S.build_config(edit))
    if seconds:
        cfg.duration = seconds
        cfg.mission["timeout_s"] = seconds
    r = make_runner(cfg)
    assert isinstance(r, DroneScenarioRunner)
    r.run()
    return r


def test_drone_baseline_mission_completes():
    r = fly("drone_baseline")
    o = r.results()["metrics"]["outcome"]
    assert o["mission_success"] and o["final_state"] == "COMPLETE"
    assert np.linalg.norm(r.vehicle.pos[:2] - r.mission.goal) < 3.0
    assert not r.vehicle.crashed
    assert r.min_clearance > 10.0              # cruised well above the terrain


def test_gnss_outage_triggers_failsafe_landing_not_a_crash():
    r = fly("drone_gnss_outage")
    o = r.results()["metrics"]["outcome"]
    assert not r.vehicle.crashed
    assert o["final_state"] == "SAFE_ACTION" and o["safe_stop_short_of_goal"]
    assert any(tr["to"] == "LIMITED_OPERATION" for tr in r.resilience.transitions)


def test_spoofed_gnss_is_not_followed():
    r = fly("drone_gnss_spoof")
    m = r.results()["metrics"]
    assert m["detection"]["faults_detected"] == 1
    assert m["accuracy"]["position_error_max_m"] < 5.0   # 25 m offset rejected


def test_baro_drift_is_voted_out():
    r = fly("drone_baro_drift")
    m = r.results()["metrics"]
    assert m["outcome"]["mission_success"]
    assert any("altitude_vote" in (f.get("detected_by") or "") for f in m["detection"]["per_fault"])


def test_controller_attitude_signs():
    # Forward acceleration demand must pitch the thrust vector forward.
    from nav.drone_controller import DroneController, DroneControllerConfig
    from sim.rotations import euler_to_quat, quat_to_matrix

    class Flat:
        def height_at(self, x, y):
            return np.zeros_like(np.asarray(x, dtype=float))

    for yaw in (0.0, 1.0, -2.0):
        c = DroneController(DroneControllerConfig(), Flat(), mass=1.6, gravity=9.81,
                            max_thrust=35.0, start=[0, 0], goal=[100, 100])
        c.phase = "CRUISE"
        c._z_sp = 20.0
        out = c.step(0.0, 0.02, est_pos=np.array([0.0, 0.0, 20.0]), est_vel=np.zeros(3),
                     est_yaw=yaw, aligned=True, landed=False, agl=20.0)
        R = quat_to_matrix(euler_to_quat(out.roll_cmd, out.pitch_cmd, yaw))
        thrust_dir = R[:, 2]
        assert thrust_dir[0] > 0 and thrust_dir[1] > 0      # leans towards the goal (NE)
