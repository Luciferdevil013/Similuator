import pytest

from experiment import scenario_schema as S
from experiment.runner import ScenarioConfig


def test_every_builtin_scenario_loads_and_validates():
    ids = [s["id"] for s in S.list_scenarios()]
    assert "baseline_normal" in ids and "gnss_outage" in ids
    for sid in ids:
        raw = S.build_config({"base": sid})
        assert ScenarioConfig.from_dict(raw).id == sid


@pytest.mark.parametrize("env", list(S.ENVIRONMENTS))
def test_environment_presets_apply(env):
    raw = S.build_config({"base": "baseline_normal", "environment": env})
    for k, v in S.ENVIRONMENTS[env]["world"].items():
        assert raw["world"][k] == v
    assert raw["environment"] == env


def test_full_edit_round_trip():
    raw = S.build_config({
        "base": "gnss_outage", "id": "edit_test", "environment": "dense_forest",
        "fields": {"seed": 7, "world.relief": 9.5, "resilience.speed_normal": 1.5,
                   "duration": 300},
        "mission": {"goal": [180, 170]},
        "faults": [{"type": "GNSS_OUTAGE", "onset": 60, "duration": 40},
                   {"type": "obstacle_appears", "onset": 30, "params": {"x": 60, "y": 60}}],
    })
    assert raw["seed"] == 7 and raw["world"]["relief"] == 9.5
    assert raw["mission"]["goal"] == [180.0, 170.0]
    assert raw["mission"]["timeout_s"] == 300.0          # follows duration
    assert raw["faults"][1]["type"] == "OBSTACLE_APPEARS"
    assert raw["faults"][1]["params"]["radius"] == 1.3   # default filled in


@pytest.mark.parametrize("edit,needle", [
    ({"fields": {"world.relief": 99}}, "outside"),
    ({"fields": {"__class__": 1}}, "cannot be edited"),
    ({"fields": {"seed": 1.5}}, "integer"),
    ({"fields": {"seed": True}}, "number"),
    ({"faults": [{"type": "NUKE"}]}, "unknown type"),
    ({"faults": [{"type": "IMU_BIAS", "params": {"evil": 1}}]}, "unknown params"),
    ({"faults": [{"type": "IMU_BIAS", "params": {"gyro_bias": [9, 0, 0]}}]}, "outside"),
    ({"faults": [{"type": "GNSS_OUTAGE", "target": "imu"}]}, "not allowed"),
    ({"faults": [{"type": "GNSS_OUTAGE", "onset": 5000}]}, "outside"),
    ({"mission": {"goal": [500, 10]}}, "outside the"),
    ({"mission": {"goal": [14, 14]}}, "20 m apart"),
    ({"base": "../../etc/passwd"}, "unknown base"),
    ({"id": "Bad Id!"}, "id must be"),
    ({"environment": "moon"}, "unknown environment"),
    ({"fields": {"resilience.speed_limited": 2.5}}, "must not exceed"),
])
def test_invalid_edits_are_refused(edit, needle):
    with pytest.raises(S.ScenarioError) as exc:
        S.build_config({"base": "baseline_normal", **edit})
    assert any(needle in e for e in exc.value.errors), exc.value.errors


def test_save_and_delete_custom(tmp_path, monkeypatch):
    monkeypatch.setattr(S, "CUSTOM_DIR", tmp_path / "custom")
    raw = S.build_config({"base": "gnss_outage", "id": "my_test", "environment": "flat_open"})
    p = S.save_custom(raw)
    assert p.exists()
    assert S.scenario_path("my_test") == p
    assert S.load_raw(p)["environment"] == "flat_open"
    with pytest.raises(S.ScenarioError):
        S.save_custom({**raw, "id": "gnss_outage"})      # cannot shadow a built-in
    assert S.delete_custom("my_test") and not p.exists()


def test_base_inheritance(tmp_path, monkeypatch):
    d = S.SCENARIO_DIR / "custom"
    d.mkdir(exist_ok=True)
    p = d / "inherit_test.yaml"
    try:
        p.write_text("base: ../_common.yaml\nid: inherit_test\nseed: 3\n")
        raw = S.load_raw(p)
        assert raw["seed"] == 3 and raw["world"]["size_x"] == 200.0
    finally:
        p.unlink()
        if not any(d.iterdir()):
            d.rmdir()


def test_current_values_fill_defaults():
    v = S.current_values(S.load_raw(S.scenario_path("baseline_normal")))
    assert set(v) == set(S.FIELDS)
    assert v["resilience.speed_normal"] == 1.8 and v["seed"] == 12345
