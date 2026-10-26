"""Evaluation metrics, exactly the set the report's evaluation plan names.

Every metric compares the vehicle's own estimate or decision against the
simulator's ground truth, which is available here and nowhere else in the
system.

A note on the false-alarm rate, which is the metric most often quoted
dishonestly: it is computed over epochs when NO fault was active, using the
injector's ground-truth fault windows, and it counts *confirmed* detections.
A detector tuned to catch everything will show up here, which is the point.
"""
from __future__ import annotations

import numpy as np


def _arr(rows, key):
    return np.array([r[key] for r in rows], dtype=float)


def position_rmse(rows: list[dict], *, horizontal_only: bool = True) -> dict:
    """RMS magnitude of the estimated-position error against ground truth."""
    if not rows:
        return {}
    est = np.array([r["est_pos"] for r in rows], dtype=float)
    tru = np.array([r["true_pos"] for r in rows], dtype=float)
    d = est - tru
    h = np.linalg.norm(d[:, :2], axis=1)
    v = np.abs(d[:, 2])
    full = np.linalg.norm(d, axis=1)
    use = h if horizontal_only else full
    return {
        "position_rmse_m": float(np.sqrt(np.mean(use ** 2))),
        "position_rmse_horizontal_m": float(np.sqrt(np.mean(h ** 2))),
        "position_rmse_vertical_m": float(np.sqrt(np.mean(v ** 2))),
        "position_error_mean_m": float(np.mean(h)),
        "position_error_p95_m": float(np.percentile(h, 95)),
        "position_error_max_m": float(np.max(h)),
        "samples": int(len(rows)),
    }


def estimator_consistency(rows: list[dict]) -> dict:
    """Is the filter's reported uncertainty honest?

    The normalised error `|error| / sigma` should average about 1 for a
    consistent 2-D estimator. Well above 1 means the filter is overconfident,
    which is the dangerous direction: downstream logic will trust a bad
    estimate. Well below 1 means it is conservative, which costs performance
    but is safe.
    """
    if not rows:
        return {}
    est = np.array([r["est_pos"] for r in rows], dtype=float)
    tru = np.array([r["true_pos"] for r in rows], dtype=float)
    sig = _arr(rows, "pos_sigma_h")
    err = np.linalg.norm((est - tru)[:, :2], axis=1)
    ok = sig > 1e-9
    if not ok.any():
        return {}
    ratio = err[ok] / sig[ok]
    return {
        "normalised_error_mean": float(np.mean(ratio)),
        "normalised_error_p95": float(np.percentile(ratio, 95)),
        "fraction_within_3sigma": float(np.mean(ratio <= 3.0)),
        "overconfident": bool(np.mean(ratio) > 1.6),
    }


def detection_metrics(fault_events: list[dict]) -> dict:
    """Per-fault detection latency, plus the aggregate."""
    lat = [e["detection_latency"] for e in fault_events
           if e.get("detected") and e.get("detection_latency") is not None]
    declared = len(fault_events)
    return {
        "faults_declared": declared,
        "faults_detected": len(lat),
        "detection_rate": float(len(lat) / declared) if declared else None,
        "detection_latency_mean_s": float(np.mean(lat)) if lat else None,
        "detection_latency_max_s": float(np.max(lat)) if lat else None,
        "per_fault": [{
            "type": e["fault_type"], "target": e["target"],
            "onset": e["onset"], "detected": e.get("detected", False),
            "latency_s": e.get("detection_latency"),
            "detected_by": e.get("detected_by", ""),
        } for e in fault_events],
    }


def false_alarm_rate(monitor_history: list[dict],
                     fault_windows: list[tuple[float, float, int]],
                     *, guard_s: float = 2.0) -> dict:
    """Confirmed detections during epochs with no active fault.

    A guard band after each fault clears is excluded: the filter needs a
    moment to re-converge after a real fault ends, and counting that as a
    false alarm would be unfair in the other direction.
    """
    if not monitor_history:
        return {}

    def in_fault(t: float) -> bool:
        return any(on - 0.0 <= t < end + guard_s for on, end, _ in fault_windows)

    clean = [h for h in monitor_history if not in_fault(h["t"])]
    if not clean:
        return {"clean_epochs": 0}
    confirmed = sum(1 for h in clean if h.get("confirmed"))
    flagged = sum(1 for h in clean if h.get("flagged"))
    span = clean[-1]["t"] - clean[0]["t"]
    # Count transitions, not epochs, so one latched alarm is one false alarm.
    events, prev = 0, False
    for h in clean:
        if h.get("confirmed") and not prev:
            events += 1
        prev = bool(h.get("confirmed"))
    return {
        "clean_epochs": len(clean),
        "clean_span_s": float(span),
        "flagged_epoch_fraction": float(flagged / len(clean)),
        "confirmed_epoch_fraction": float(confirmed / len(clean)),
        "false_alarm_events": int(events),
        "false_alarms_per_hour": float(events / (span / 3600.0)) if span > 1 else None,
    }


def recovery_metrics(transitions: list[dict], fault_events: list[dict]) -> dict:
    """Time from each fault onset to a validated safe outcome.

    "Safe outcome" is whichever comes first: entering SAFE_ACTION (the vehicle
    protected itself) or returning to NORMAL through RECOVERY (the fault was
    ridden out and validated).
    """
    out = []
    for e in fault_events:
        onset = e["onset"]
        resolved = None
        for tr in transitions:
            if tr["t"] < onset:
                continue
            if tr["to"] in ("SAFE_ACTION", "NORMAL", "COMPLETE"):
                resolved = tr
                break
        out.append({
            "fault_type": e["fault_type"], "onset": onset,
            "resolved_as": resolved["to"] if resolved else None,
            "recovery_time_s": round(resolved["t"] - onset, 3) if resolved else None,
        })
    times = [o["recovery_time_s"] for o in out if o["recovery_time_s"] is not None]
    return {
        "per_fault": out,
        "recovery_time_mean_s": float(np.mean(times)) if times else None,
        "recovery_time_max_s": float(np.max(times)) if times else None,
        "unresolved_faults": sum(1 for o in out if o["recovery_time_s"] is None),
    }


def path_efficiency(rows: list[dict], *, straight_line_m: float,
                    planned_m: float | None = None) -> dict:
    """Distance actually driven versus the straight line and the plan."""
    if not rows:
        return {}
    dist = float(rows[-1].get("distance_travelled", 0.0))
    out = {
        "distance_travelled_m": dist,
        "straight_line_m": float(straight_line_m),
        "efficiency_vs_straight_line": float(straight_line_m / dist) if dist > 1e-6 else None,
    }
    if planned_m:
        out["planned_path_m"] = float(planned_m)
        out["efficiency_vs_plan"] = float(planned_m / dist) if dist > 1e-6 else None
    return out


def data_availability(sensor_stats: dict) -> dict:
    """Fraction of expected messages that arrived and were considered valid."""
    out = {}
    for sid, st in sensor_stats.items():
        exp = st.get("expected", 0)
        got = st.get("published", 0)
        out[sid] = {
            "expected": exp, "published": got,
            "dropped": st.get("dropped", 0),
            "availability": float(got / exp) if exp else None,
        }
    overall = [v["availability"] for v in out.values() if v["availability"] is not None]
    return {"per_sensor": out,
            "mean_availability": float(np.mean(overall)) if overall else None}


def mission_outcome(rows: list[dict], *, goal_reached: bool, final_state: str,
                    collisions: int, min_clearance: float,
                    duration_s: float, timeout_s: float) -> dict:
    """Did the trial succeed, under the safety constraints declared up front?

    Success requires reaching the goal AND never colliding AND not ending in an
    aborted state. A run that stops safely short of the goal is NOT a success --
    it is a correct safe response, which is scored separately. Conflating the
    two is how a system that never moves can appear to have a perfect record.
    """
    safe = collisions == 0 and final_state != "ABORTED"
    return {
        "goal_reached": bool(goal_reached),
        "final_state": final_state,
        "collisions": int(collisions),
        "min_obstacle_clearance_m": float(min_clearance),
        "duration_s": float(duration_s),
        "timed_out": bool(duration_s >= timeout_s - 1e-6),
        "safe": bool(safe),
        "mission_success": bool(goal_reached and safe),
        "safe_stop_short_of_goal": bool(not goal_reached and safe
                                        and final_state in ("SAFE_ACTION", "COMPLETE")),
    }


def summarise(record: dict) -> dict:
    """Assemble the full metric set for one trial."""
    rows = record.get("timeseries", [])
    faults = record.get("fault_events", [])
    out = {
        "scenario_id": record.get("scenario_id"),
        "seed": record.get("seed"),
        "accuracy": position_rmse(rows),
        "consistency": estimator_consistency(rows),
        "detection": detection_metrics(faults),
        "false_alarms": false_alarm_rate(record.get("gnss_monitor_history", []),
                                         record.get("fault_windows", [])),
        "recovery": recovery_metrics(record.get("state_transitions", []), faults),
        "path": path_efficiency(rows,
                                straight_line_m=record.get("straight_line_m", 0.0),
                                planned_m=record.get("first_plan_length_m")),
        "availability": data_availability(record.get("sensor_stats", {})),
        "outcome": record.get("outcome", {}),
    }
    return out
