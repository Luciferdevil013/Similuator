"""Scenario editing: environment presets, editable fields, validation.

Everything the dashboard is allowed to change about a simulation goes through
this module. The browser sends a small JSON edit ("start from gnss_outage, use
the mountain environment, seed 7, these faults"); `build_config` merges it
onto a scenario file and checks every value against the table below.

That table is an allow-list, in the same spirit as the bridge's command
registry: a field that is not listed cannot be set, a number outside its
bounds is refused rather than clamped, and fault parameters are checked per
fault type. Nothing here can name a module, a file path or a Python
attribute, so an edited scenario is still just data for the runner.
"""
from __future__ import annotations

import copy
import math
import re
from pathlib import Path

import yaml

from sim.msgs import FaultType

ROOT = Path(__file__).resolve().parent.parent
SCENARIO_DIR = ROOT / "experiments" / "scenarios"
CUSTOM_DIR = SCENARIO_DIR / "custom"

MAX_FAULTS = 12
ID_RE = re.compile(r"^[a-z0-9][a-z0-9_\-]{0,47}$")


class ScenarioError(ValueError):
    """An edit was refused. `errors` lists every problem, not just the first."""

    def __init__(self, errors: list[str]):
        super().__init__("; ".join(errors))
        self.errors = errors


# ----------------------------------------------------------------------
# environments
# ----------------------------------------------------------------------
#: World presets. Each is a partial `world:` block; anything not set keeps
#: the base scenario's value. Terrain and obstacle layout still come from the
#: seed, so (environment, seed) names one reproducible map.
ENVIRONMENTS: dict[str, dict] = {
    "rolling_hills": {
        "label": "Rolling hills",
        "description": "The reference map: moderate relief, scattered rocks and trees.",
        "world": {"relief": 14.0, "octaves": 6, "ridge_mix": 0.35,
                  "n_obstacles": 45, "keep_clear": 7.0, "max_slope_deg": 25.0},
    },
    "flat_open": {
        "label": "Flat open field",
        "description": "Gentle terrain and few obstacles. Isolates sensor faults from terrain effects.",
        "world": {"relief": 3.0, "octaves": 4, "ridge_mix": 0.1,
                  "n_obstacles": 15, "keep_clear": 7.0, "max_slope_deg": 25.0},
    },
    "mountain_pass": {
        "label": "Mountain pass",
        "description": "High relief with sharp ridges: long detours, steep cross-slopes. "
                       "Some seeds have no drivable route (the Fleet tab warns).",
        # 18 m / 0.45 is about the steepest that still leaves a route within
        # the rover's slope limits on most seeds; 24 m / 0.6 left none.
        "world": {"relief": 18.0, "octaves": 6, "ridge_mix": 0.45,
                  "n_obstacles": 30, "keep_clear": 8.0, "max_slope_deg": 25.0},
    },
    "dense_forest": {
        "label": "Dense forest",
        "description": "Low relief, many obstacles. Stresses LiDAR, costmap and replanning.",
        "world": {"relief": 8.0, "octaves": 5, "ridge_mix": 0.25,
                  "n_obstacles": 110, "keep_clear": 7.0, "max_slope_deg": 25.0},
    },
    "rocky_desert": {
        "label": "Rocky desert",
        "description": "Rough, broken ground with a medium obstacle field.",
        "world": {"relief": 11.0, "octaves": 8, "ridge_mix": 0.5,
                  "n_obstacles": 70, "keep_clear": 7.0, "max_slope_deg": 25.0},
    },
}


# ----------------------------------------------------------------------
# editable scalar fields: dotted path -> spec
# ----------------------------------------------------------------------
def _f(lo, hi, label, unit="", step=None, group="General"):
    return {"type": "float", "min": lo, "max": hi, "label": label,
            "unit": unit, "step": step, "group": group}


def _i(lo, hi, label, unit="", group="General"):
    return {"type": "int", "min": lo, "max": hi, "label": label,
            "unit": unit, "step": 1, "group": group}


FIELDS: dict[str, dict] = {
    "seed": _i(0, 2 ** 31 - 1, "Random seed"),
    "duration": _f(60, 1200, "Max duration", "s", 10),

    "world.size_x": _f(100, 300, "World size X", "m", 10, "Environment"),
    "world.size_y": _f(100, 300, "World size Y", "m", 10, "Environment"),
    "world.relief": _f(0, 40, "Terrain relief", "m", 0.5, "Environment"),
    "world.octaves": _i(1, 8, "Terrain detail (octaves)", group="Environment"),
    "world.ridge_mix": _f(0, 1, "Ridge sharpness", "", 0.05, "Environment"),
    "world.max_slope_deg": _f(10, 35, "Max traversable slope", "deg", 1, "Environment"),
    "world.n_obstacles": _i(0, 200, "Obstacle count", group="Environment"),
    "world.keep_clear": _f(3, 20, "Clear radius at start/goal", "m", 0.5, "Environment"),

    "mission.goal_tolerance": _f(1, 10, "Goal tolerance", "m", 0.5, "Mission"),
    "mission.timeout_s": _f(60, 1200, "Mission timeout", "s", 10, "Mission"),

    "resilience.speed_normal": _f(0.3, 3.0, "Speed NORMAL", "m/s", 0.05, "Safety policy"),
    "resilience.speed_degraded": _f(0.1, 3.0, "Speed DEGRADED", "m/s", 0.05, "Safety policy"),
    "resilience.speed_limited": _f(0.1, 3.0, "Speed LIMITED", "m/s", 0.05, "Safety policy"),
    "resilience.dr_time_budget": _f(5, 600, "Dead-reckoning time budget", "s", 5, "Safety policy"),
    "resilience.dr_distance_budget": _f(5, 600, "Dead-reckoning distance budget", "m", 5, "Safety policy"),
    "resilience.sigma_warn": _f(0.5, 10, "Sigma -> DEGRADED", "m", 0.1, "Safety policy"),
    "resilience.sigma_unsafe": _f(1, 30, "Sigma -> SAFE_ACTION", "m", 0.5, "Safety policy"),
    "resilience.recovery_dwell": _f(0.5, 60, "Recovery validation time", "s", 0.5, "Safety policy"),

    "sensors.imu.rate_hz": _f(50, 400, "IMU rate", "Hz", 10, "Sensors"),
    "sensors.gnss.rate_hz": _f(1, 20, "GNSS rate", "Hz", 1, "Sensors"),
    "sensors.wheel_odom.rate_hz": _f(10, 100, "Wheel odometry rate", "Hz", 5, "Sensors"),
    "sensors.lidar.rate_hz": _f(2, 20, "LiDAR rate", "Hz", 1, "Sensors"),
    "sensors.magnetometer.rate_hz": _f(5, 100, "Magnetometer rate", "Hz", 5, "Sensors"),
}

SENSORS = ("imu", "gnss", "wheel_odom", "magnetometer", "barometer", "battery", "lidar")


# ----------------------------------------------------------------------
# faults
# ----------------------------------------------------------------------
def _vec(lo, hi, label, unit=""):
    return {"type": "vec3", "min": lo, "max": hi, "label": label, "unit": unit}


def _num(lo, hi, label, unit="", default=None):
    return {"type": "float", "min": lo, "max": hi, "label": label, "unit": unit,
            "default": default}


def _bool(label, default=False):
    return {"type": "bool", "label": label, "default": default}


#: Per fault type: allowed targets (first is the default), parameter specs,
#: and a one-line description for the editor.
FAULTS: dict[str, dict] = {
    "GNSS_OUTAGE": {
        "targets": ["gnss"], "params": {},
        "description": "Receiver stops producing fixes.",
    },
    "GNSS_INCONSISTENCY": {
        "targets": ["gnss"],
        "params": {"offset": _vec(-100, 100, "Position offset (E,N,U)", "m"),
                   "drift_per_s": _vec(-2, 2, "Drift rate (E,N,U)", "m/s")},
        "defaults": {"offset": [8.0, 0.0, 0.0], "drift_per_s": [0.0, 0.0, 0.0]},
        "description": "Fixes are offset from the true position (spoof-like).",
    },
    "IMU_BIAS": {
        "targets": ["imu"],
        "params": {"gyro_bias": _vec(-0.2, 0.2, "Gyro bias (x,y,z)", "rad/s"),
                   "accel_bias": _vec(-2, 2, "Accel bias (x,y,z)", "m/s^2")},
        "defaults": {"gyro_bias": [0.0, 0.0, 0.01], "accel_bias": [0.0, 0.0, 0.0]},
        "description": "Constant (optionally ramped) bias added to the IMU.",
    },
    "LIDAR_DROPOUT": {
        "targets": ["lidar"],
        "params": {"drop_prob": _num(0, 1, "Drop probability", "", 1.0)},
        "description": "Scans stop (1.0) or are dropped at random.",
    },
    "STALE_MESSAGES": {
        "targets": ["gnss", "imu", "wheel_odom", "lidar", "magnetometer", "barometer"],
        "params": {"freeze_stamp": _bool("Freeze timestamps"),
                   "extra_delay": _num(0, 10, "Extra delay", "s", 0.0)},
        "description": "Stream repeats an old payload and/or arrives late.",
    },
    "COMMUNICATION_LOSS": {
        "targets": ["wheel_odom", "gnss", "imu", "lidar", "magnetometer", "barometer"],
        "params": {"total": _bool("Total loss", True),
                   "drop_prob": _num(0, 1, "Drop probability", "", 0.0),
                   "extra_delay": _num(0, 10, "Extra delay", "s", 0.0)},
        "description": "A sensor link is lost or degraded.",
    },
    "OBSTACLE_APPEARS": {
        "targets": ["world"],
        "params": {"x": _num(0, 300, "X", "m"), "y": _num(0, 300, "Y", "m"),
                   "radius": _num(0.3, 5, "Radius", "m", 1.3),
                   "height": _num(0.5, 5, "Height", "m", 2.2)},
        "defaults": {"x": 100.0, "y": 100.0, "radius": 1.3, "height": 2.2},
        "description": "An unmapped obstacle appears; only LiDAR can see it.",
    },
    "WHEEL_SLIP": {
        "targets": ["wheel_odom"],
        "params": {"excess": _num(-0.9, 2, "Excess speed fraction", "", 0.25)},
        "description": "Encoders over/under-report speed.",
    },
    "BARO_DRIFT": {
        "targets": ["barometer"],
        "params": {"pressure_pa": _num(-2000, 2000, "Pressure offset", "Pa", 120.0)},
        "description": "Barometric pressure offset.",
    },
    "MAG_INTERFERENCE": {
        "targets": ["magnetometer"],
        "params": {"field_t": _vec(-1e-4, 1e-4, "Field offset (x,y,z)", "T")},
        "defaults": {"field_t": [2.0e-5, 0.0, 0.0]},
        "description": "Local magnetic disturbance corrupts heading.",
    },
}
assert set(FAULTS) == {f.name for f in FaultType if f is not FaultType.NONE}


# ----------------------------------------------------------------------
# loading
# ----------------------------------------------------------------------
def _deep_merge(base: dict, over: dict) -> dict:
    out = copy.deepcopy(base)
    for k, v in over.items():
        if isinstance(v, dict) and isinstance(out.get(k), dict):
            out[k] = _deep_merge(out[k], v)
        else:
            out[k] = copy.deepcopy(v)
    return out


def load_raw(path: str | Path, _depth: int = 0) -> dict:
    """Read a scenario YAML, resolving an optional `base:` file it extends."""
    path = Path(path)
    with open(path) as fh:
        raw = yaml.safe_load(fh) or {}
    base = raw.pop("base", None)
    if base:
        if _depth > 4:
            raise ScenarioError(["scenario 'base' chain is too deep"])
        bp = (path.parent / str(base)).resolve()
        if SCENARIO_DIR.resolve() not in bp.parents:
            raise ScenarioError(["scenario 'base' must live in experiments/scenarios"])
        raw = _deep_merge(load_raw(bp, _depth + 1), raw)
    return raw


def scenario_path(sid: str) -> Path | None:
    if not ID_RE.match(sid or ""):
        return None
    for d in (SCENARIO_DIR, CUSTOM_DIR):
        p = d / ("%s.yaml" % sid)
        if p.is_file():
            return p
    return None


def list_scenarios() -> list[dict]:
    out = []
    for d, source in ((SCENARIO_DIR, "builtin"), (CUSTOM_DIR, "custom")):
        if not d.is_dir():
            continue
        for p in sorted(d.glob("*.yaml")):
            if p.stem.startswith("_"):
                continue
            try:
                raw = load_raw(p)
            except Exception as exc:                 # a broken file must not hide the rest
                out.append({"id": p.stem, "source": source, "error": str(exc)})
                continue
            out.append({
                "id": p.stem, "source": source,
                "description": str(raw.get("description", "")).strip(),
                "environment": raw.get("environment", "rolling_hills"),
                "seed": raw.get("seed"),
                "faults": [{"type": f.get("type"), "target": f.get("target"),
                            "onset": f.get("onset"), "duration": f.get("duration")}
                           for f in raw.get("faults", []) or []],
            })
    return out


# ----------------------------------------------------------------------
# validation
# ----------------------------------------------------------------------
def _get(d: dict, dotted: str):
    cur = d
    for part in dotted.split("."):
        if not isinstance(cur, dict) or part not in cur:
            return None
        cur = cur[part]
    return cur


def _set(d: dict, dotted: str, value) -> None:
    parts = dotted.split(".")
    cur = d
    for part in parts[:-1]:
        nxt = cur.get(part)
        if not isinstance(nxt, dict):
            nxt = {}
            cur[part] = nxt
        cur = nxt
    cur[parts[-1]] = value


def _num_ok(v, spec, name, errors) -> float | int | None:
    if isinstance(v, bool) or not isinstance(v, (int, float)):
        errors.append("%s must be a number" % name)
        return None
    if not math.isfinite(float(v)):
        errors.append("%s must be finite" % name)
        return None
    if spec["type"] == "int":
        if float(v) != int(v):
            errors.append("%s must be an integer" % name)
            return None
        v = int(v)
    else:
        v = float(v)
    if not spec["min"] <= v <= spec["max"]:
        errors.append("%s=%s is outside [%s, %s]" % (name, v, spec["min"], spec["max"]))
        return None
    return v


def _check_param(v, spec, name, errors):
    t = spec["type"]
    if t == "bool":
        if not isinstance(v, bool):
            errors.append("%s must be true or false" % name)
            return None
        return v
    if t == "vec3":
        if not isinstance(v, (list, tuple)) or len(v) != 3:
            errors.append("%s must be a list of 3 numbers" % name)
            return None
        out = [_num_ok(x, {"type": "float", "min": spec["min"], "max": spec["max"]},
                       "%s[%d]" % (name, i), errors) for i, x in enumerate(v)]
        return None if any(x is None for x in out) else out
    return _num_ok(v, {"type": "float", "min": spec["min"], "max": spec["max"]}, name, errors)


def validate_fault(f: dict, duration: float, world_size: tuple[float, float],
                   errors: list[str], where: str = "fault") -> dict | None:
    if not isinstance(f, dict):
        errors.append("%s must be an object" % where)
        return None
    ftype = str(f.get("type", "")).upper()
    spec = FAULTS.get(ftype)
    if spec is None:
        errors.append("%s: unknown type %r" % (where, f.get("type")))
        return None
    target = f.get("target") or spec["targets"][0]
    if target not in spec["targets"]:
        errors.append("%s: target %r not allowed for %s (allowed: %s)"
                      % (where, target, ftype, ", ".join(spec["targets"])))
    n = len(errors)
    onset = _num_ok(f.get("onset", 0.0), {"type": "float", "min": 0, "max": duration},
                    where + ".onset", errors)
    dur = f.get("duration", -1.0)
    if dur not in (-1, -1.0):
        dur = _num_ok(dur, {"type": "float", "min": 0.1, "max": 1200},
                      where + ".duration", errors)
    ramp = _num_ok(f.get("ramp", 0.0), {"type": "float", "min": 0, "max": 300},
                   where + ".ramp", errors)
    params_in = f.get("params") or {}
    if not isinstance(params_in, dict):
        errors.append("%s.params must be an object" % where)
        params_in = {}
    unknown = set(params_in) - set(spec["params"])
    if unknown:
        errors.append("%s: unknown params for %s: %s" % (where, ftype, ", ".join(sorted(unknown))))
    params = dict(spec.get("defaults", {}))
    for k, ps in spec["params"].items():
        if k in params_in:
            v = _check_param(params_in[k], ps, "%s.params.%s" % (where, k), errors)
            if v is not None:
                params[k] = v
        elif ps.get("default") is not None and k not in params:
            params[k] = ps["default"]
    if ftype == "OBSTACLE_APPEARS":
        for k, lim in (("x", world_size[0]), ("y", world_size[1])):
            if k in params and not 3.0 <= params[k] <= lim - 3.0:
                errors.append("%s: obstacle %s=%.1f is outside the world" % (where, k, params[k]))
    if len(errors) > n:
        return None
    label = str(f.get("label", ""))[:80]
    return {"type": ftype, "target": target, "onset": onset, "duration": dur,
            "ramp": ramp, "params": params, "label": label}


def build_config(edit: dict) -> dict:
    """Merge a dashboard edit onto a base scenario and validate the result.

    `edit` keys: base (scenario id), id, description, environment, fields
    ({dotted: value}), mission ({start: [x, y], goal: [x, y]}), faults (list).
    Returns a raw dict suitable for `ScenarioConfig(**raw)`.
    """
    if not isinstance(edit, dict):
        raise ScenarioError(["edit must be an object"])
    errors: list[str] = []
    base_id = str(edit.get("base") or "baseline_normal")
    bp = scenario_path(base_id)
    if bp is None:
        raise ScenarioError(["unknown base scenario %r" % base_id])
    raw = load_raw(bp)
    raw.pop("environment", None)

    env = edit.get("environment")
    if env:
        if env not in ENVIRONMENTS:
            errors.append("unknown environment %r" % env)
        else:
            raw["world"] = _deep_merge(raw.get("world", {}), ENVIRONMENTS[env]["world"])
            raw["environment"] = env

    sid = edit.get("id")
    if sid is not None:
        if not ID_RE.match(str(sid)):
            errors.append("id must be 1-48 chars of a-z, 0-9, '_' or '-'")
        else:
            raw["id"] = str(sid)
    if "description" in edit:
        raw["description"] = str(edit["description"])[:500]

    fields = edit.get("fields") or {}
    if not isinstance(fields, dict):
        errors.append("fields must be an object")
        fields = {}
    for key, value in fields.items():
        spec = FIELDS.get(key)
        if spec is None:
            errors.append("field %r cannot be edited" % key)
            continue
        v = _num_ok(value, spec, key, errors)
        if v is not None:
            _set(raw, key, v)

    w = raw.setdefault("world", {})
    size = (float(w.get("size_x", 200.0)), float(w.get("size_y", 200.0)))
    mission = edit.get("mission") or {}
    for k in ("start", "goal"):
        if k in mission:
            p = mission[k]
            if (not isinstance(p, (list, tuple)) or len(p) != 2
                    or any(isinstance(x, bool) or not isinstance(x, (int, float)) for x in p)):
                errors.append("mission.%s must be [x, y]" % k)
                continue
            raw.setdefault("mission", {})[k] = [float(p[0]), float(p[1])]
    m = raw.setdefault("mission", {})
    for k in ("start", "goal"):
        p = m.get(k)
        if p is not None and not (5.0 <= p[0] <= size[0] - 5.0 and 5.0 <= p[1] <= size[1] - 5.0):
            errors.append("mission.%s %s is outside the %gx%g m world (5 m margin)"
                          % (k, list(p), size[0], size[1]))
    if m.get("start") is not None and m.get("goal") is not None:
        if math.dist(m["start"], m["goal"]) < 20.0:
            errors.append("start and goal must be at least 20 m apart")
    # The mission timeout follows the run length unless set explicitly.
    if "duration" in fields and "mission.timeout_s" not in fields:
        m["timeout_s"] = float(raw["duration"])

    r = raw.get("resilience", {})
    if r:
        sn = r.get("speed_normal", 1.8)
        if r.get("speed_degraded", 0.9) > sn or r.get("speed_limited", 0.55) > sn:
            errors.append("degraded/limited speeds must not exceed the NORMAL speed")

    duration = float(raw.get("duration", 420.0))
    if "faults" in edit:
        fl = edit["faults"]
        if not isinstance(fl, list):
            errors.append("faults must be a list")
            fl = []
        if len(fl) > MAX_FAULTS:
            errors.append("at most %d faults" % MAX_FAULTS)
            fl = fl[:MAX_FAULTS]
        out = []
        for i, f in enumerate(fl):
            v = validate_fault(f, duration, size, errors, "faults[%d]" % i)
            if v is not None:
                out.append(v)
        raw["faults"] = out

    if errors:
        raise ScenarioError(errors)
    return raw


def save_custom(raw: dict) -> Path:
    """Persist a validated config as experiments/scenarios/custom/<id>.yaml."""
    sid = str(raw.get("id", ""))
    if not ID_RE.match(sid):
        raise ScenarioError(["a saved scenario needs a valid id"])
    if (SCENARIO_DIR / ("%s.yaml" % sid)).is_file():
        raise ScenarioError(["%r is a built-in scenario; choose another id" % sid])
    CUSTOM_DIR.mkdir(parents=True, exist_ok=True)
    p = CUSTOM_DIR / ("%s.yaml" % sid)
    with open(p, "w") as fh:
        yaml.safe_dump(raw, fh, sort_keys=False)
    return p


def delete_custom(sid: str) -> bool:
    if not ID_RE.match(sid or ""):
        return False
    p = CUSTOM_DIR / ("%s.yaml" % sid)
    if p.is_file():
        p.unlink()
        return True
    return False


def describe() -> dict:
    """Everything the editor needs to render its form."""
    return {
        "environments": {k: {"label": v["label"], "description": v["description"],
                             "world": v["world"]} for k, v in ENVIRONMENTS.items()},
        "fields": FIELDS,
        "faults": FAULTS,
        "sensors": list(SENSORS),
        "max_faults": MAX_FAULTS,
    }


#: Values the runner uses when a scenario file leaves a field out.
_RUNNER_DEFAULTS = {
    "seed": 12345, "duration": 420.0,
    "world.size_x": 200.0, "world.size_y": 200.0, "world.relief": 14.0,
    "world.octaves": 6, "world.ridge_mix": 0.35, "world.max_slope_deg": 25.0,
    "world.n_obstacles": 45, "world.keep_clear": 7.0,
    "mission.goal_tolerance": 2.5, "mission.timeout_s": 420.0,
    "sensors.imu.rate_hz": 200.0, "sensors.gnss.rate_hz": 5.0,
    "sensors.wheel_odom.rate_hz": 50.0, "sensors.lidar.rate_hz": 10.0,
    "sensors.magnetometer.rate_hz": 50.0,
}


def _defaults() -> dict:
    from resilience.manager import ResilienceConfig
    d = dict(_RUNNER_DEFAULTS)
    rc = ResilienceConfig()
    for k in FIELDS:
        if k.startswith("resilience."):
            d[k] = getattr(rc, k.split(".", 1)[1])
    return d


def current_values(raw: dict) -> dict:
    """The editable fields' values in a resolved config, for pre-filling the form."""
    dflt = _defaults()
    out = {}
    for k in FIELDS:
        v = _get(raw, k)
        out[k] = dflt.get(k) if v is None else v
    return out
