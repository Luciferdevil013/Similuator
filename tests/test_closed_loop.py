from experiment import scenario_schema as S
from experiment.runner import ScenarioConfig, ScenarioRunner


def short_run(edit, seconds):
    raw = S.build_config(edit)
    raw["detail"] = "fast"
    cfg = ScenarioConfig.from_dict(raw)
    cfg.duration = seconds
    cfg.mission["timeout_s"] = seconds
    r = ScenarioRunner(cfg)
    res = r.run()
    return r, res


def test_baseline_runs_and_scores():
    r, res = short_run({"base": "baseline_normal"}, 25)
    m = res["metrics"]
    assert m["accuracy"]["position_rmse_m"] < 3.0
    assert r.collisions == 0
    assert r.ugv.distance_travelled > 15


def test_runtime_fault_injection_is_scored():
    raw = S.build_config({"base": "baseline_normal"})
    raw["detail"] = "fast"
    cfg = ScenarioConfig.from_dict(raw)
    cfg.duration = 30
    cfg.mission["timeout_s"] = 30
    r = ScenarioRunner(cfg)
    r._replan(0.0, "initial plan")
    while r.clock.t < 10:
        r.step()
    errors = []
    f = S.validate_fault({"type": "LIDAR_DROPOUT", "duration": 8}, 1e9, (200, 200), errors)
    assert not errors
    r.add_fault(f)
    while r.step():
        pass
    m = r.results()["metrics"]
    assert m["detection"]["faults_declared"] == 1
    assert m["detection"]["faults_detected"] == 1
    states = [tr["to"] for tr in r.resilience.transitions]
    assert "SAFE_ACTION" in states


def test_open_ground_does_not_trip_lidar_stale():
    # Regression: on a flat, nearly empty map every scan has no returns and
    # used to be flagged STALE, which stopped the rover at t = 0.5 s.
    r, _ = short_run({"base": "baseline_normal", "environment": "flat_open"}, 30)
    assert not any("lidar" in tr["reason"] for tr in r.resilience.transitions)
    assert r.ugv.distance_travelled > 20
