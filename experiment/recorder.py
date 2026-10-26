"""Experiment recorder: the only component that may read ground truth.

Records, per the report's reproducibility requirement, everything needed to
re-run a trial and to score it: the scenario configuration, the random seed,
the sensor parameter sets actually used, the fault log with onsets and
detections, state-machine transitions, monitor history, and a downsampled
time series of estimate versus truth.

Exports JSON (full record) and CSV (the time series), so results can be
loaded by the dashboard or by any analysis tool.
"""
from __future__ import annotations

import csv
import json
from dataclasses import asdict, is_dataclass
from pathlib import Path

import numpy as np


def _jsonable(o):
    if isinstance(o, np.ndarray):
        return [_jsonable(v) for v in o.tolist()]
    if isinstance(o, (np.integer,)):
        return int(o)
    if isinstance(o, (np.floating,)):
        f = float(o)
        return None if (np.isnan(f) or np.isinf(f)) else f
    if isinstance(o, (np.bool_,)):
        return bool(o)
    if isinstance(o, dict):
        return {str(k): _jsonable(v) for k, v in o.items()}
    if isinstance(o, (list, tuple, set)):
        return [_jsonable(v) for v in o]
    if is_dataclass(o) and not isinstance(o, type):
        return _jsonable(asdict(o))
    if isinstance(o, float):
        return None if (np.isnan(o) or np.isinf(o)) else o
    return o


TIMESERIES_COLUMNS = [
    "t",
    "true_x", "true_y", "true_z", "true_yaw_deg", "true_speed",
    "est_x", "est_y", "est_z", "est_yaw_deg", "est_speed",
    "pos_error_h", "pos_sigma_h", "yaw_error_deg", "yaw_sigma_deg",
    "gnss_nis", "gnss_innov_norm", "gnss_satellites", "gnss_hdop", "gnss_flagged",
    "gnss_confirmed", "nav_mode", "mission_state", "safe_action",
    "speed_cmd", "yaw_rate_cmd", "cross_track_error", "obstacle_distance",
    "slope_deg", "battery_pct", "battery_v", "distance_travelled",
    "dr_time", "dr_distance", "replan_count", "min_clearance",
    "gyro_bias_x", "gyro_bias_y", "gyro_bias_z",
    "accel_bias_x", "accel_bias_y", "accel_bias_z", "baro_bias",
]


class ExperimentRecorder:
    def __init__(self, scenario_id: str, seed: int, *, rate_hz: float = 20.0):
        self.scenario_id = scenario_id
        self.seed = int(seed)
        self.period = 1.0 / float(rate_hz)
        self._next_due = 0.0
        self.timeseries: list[dict] = []
        self.rows: list[dict] = []
        self.config: dict = {}
        self.sensor_specs: dict = {}
        self.fault_events: list[dict] = []
        self.state_transitions: list[dict] = []
        self.gnss_monitor_history: list[dict] = []
        self.sensor_stats: dict = {}
        self.outcome: dict = {}
        self.notes: list[str] = []
        self.straight_line_m = 0.0
        self.first_plan_length_m = None
        self.fault_windows: list[tuple] = []
        self.plans: list[dict] = []
        self.world_summary: dict = {}

    # -- configuration -----------------------------------------------------
    def set_config(self, config: dict, world_summary: dict, sensor_specs: dict) -> None:
        self.config = _jsonable(config)
        self.world_summary = _jsonable(world_summary)
        self.sensor_specs = _jsonable(sensor_specs)

    def note(self, text: str) -> None:
        self.notes.append(text)

    def record_plan(self, t: float, path, stats: dict, reason: str) -> None:
        length = float(stats.get("length_m", 0.0)) if stats else 0.0
        if self.first_plan_length_m is None and length > 0:
            self.first_plan_length_m = length
        self.plans.append({
            "t": round(t, 3), "reason": reason,
            "ok": bool(stats.get("ok", False)) if stats else False,
            "length_m": round(length, 3),
            "waypoints": int(0 if path is None else len(path)),
            "expansions": int(stats.get("expansions", 0)) if stats else 0,
            "fail_reason": (stats.get("reason", "") if stats else "no stats"),
        })

    # -- per-step sampling -------------------------------------------------
    def due(self, t: float) -> bool:
        if t + 1e-12 >= self._next_due:
            self._next_due += self.period
            return True
        return False

    def sample(self, row: dict) -> None:
        """Append one time-series row. `row` carries both truth and estimate."""
        self.rows.append(row)
        self.timeseries.append({
            "t": row["t"],
            "est_pos": list(row["est_pos"]),
            "true_pos": list(row["true_pos"]),
            "pos_sigma_h": row["pos_sigma_h"],
            "distance_travelled": row.get("distance_travelled", 0.0),
        })

    # -- export ------------------------------------------------------------
    def record(self) -> dict:
        return {
            "scenario_id": self.scenario_id,
            "seed": self.seed,
            "config": self.config,
            "world": self.world_summary,
            "sensor_specs": self.sensor_specs,
            "timeseries": self.timeseries,
            "fault_events": self.fault_events,
            "fault_windows": self.fault_windows,
            "state_transitions": self.state_transitions,
            "gnss_monitor_history": self.gnss_monitor_history,
            "sensor_stats": self.sensor_stats,
            "plans": self.plans,
            "outcome": self.outcome,
            "straight_line_m": self.straight_line_m,
            "first_plan_length_m": self.first_plan_length_m,
            "notes": self.notes,
        }

    def write(self, out_dir: str | Path, *, metrics: dict | None = None) -> dict:
        """Write result.json, timeseries.csv and metrics.json. Returns the paths."""
        d = Path(out_dir)
        d.mkdir(parents=True, exist_ok=True)
        paths = {}

        rec = _jsonable(self.record())
        paths["result"] = str(d / "result.json")
        with open(paths["result"], "w") as fh:
            json.dump(rec, fh, indent=1)

        paths["timeseries"] = str(d / "timeseries.csv")
        with open(paths["timeseries"], "w", newline="") as fh:
            w = csv.DictWriter(fh, fieldnames=TIMESERIES_COLUMNS, extrasaction="ignore")
            w.writeheader()
            for r in self.rows:
                w.writerow({k: _csv_value(r.get(k)) for k in TIMESERIES_COLUMNS})

        if metrics is not None:
            paths["metrics"] = str(d / "metrics.json")
            with open(paths["metrics"], "w") as fh:
                json.dump(_jsonable(metrics), fh, indent=1)

        paths["events"] = str(d / "events.csv")
        with open(paths["events"], "w", newline="") as fh:
            w = csv.writer(fh)
            w.writerow(["kind", "t", "detail"])
            for e in self.fault_events:
                w.writerow(["fault_onset", e.get("onset"),
                            "%s on %s" % (e.get("fault_type"), e.get("target"))])
                if e.get("detected"):
                    w.writerow(["fault_detected", e.get("detection_time"),
                                "%s by %s (latency %.2fs)" %
                                (e.get("fault_type"), e.get("detected_by"),
                                 e.get("detection_latency") or 0.0)])
            for tr in self.state_transitions:
                w.writerow(["state_transition", tr.get("t"),
                            "%s -> %s: %s" % (tr.get("from"), tr.get("to"), tr.get("reason"))])
            for p in self.plans:
                w.writerow(["plan", p.get("t"),
                            "%s: %s, %.1f m" % (p.get("reason"),
                                                "ok" if p.get("ok") else
                                                "FAILED (%s)" % (p.get("fail_reason") or "?"),
                                                p.get("length_m", 0.0))])
        return paths


def _csv_value(v):
    if v is None:
        return ""
    if isinstance(v, (bool, np.bool_)):
        return int(v)
    if isinstance(v, (list, tuple, np.ndarray)):
        return ";".join("%.6g" % float(x) for x in np.asarray(v).ravel())
    if isinstance(v, (float, np.floating)):
        f = float(v)
        return "" if (np.isnan(f) or np.isinf(f)) else "%.6g" % f
    return v
