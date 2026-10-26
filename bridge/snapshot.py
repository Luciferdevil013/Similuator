"""Telemetry snapshot assembly.

One place that turns live simulator state into the JSON the dashboard draws.
It is deliberately separate from the transport in `telemetry_server`, and it
is deliberately READ-ONLY: it accepts a runner and returns plain data, with
no path back from a snapshot to the simulator.

Two things are kept out on purpose.

Ground truth is included only under an explicit `include_truth` flag, and the
flag is owned by the server configuration rather than by the browser. The
dashboard draws the true pose next to the estimate so an operator can see the
error, which is the point of the platform, but it must never become an input
to navigation. Keeping it in a clearly named block, published on a separate
key, is what makes an accidental dependency obvious in review.

Raw sensor payloads are not published either. A 720-beam scan at 20 Hz is
230 kB/s of JSON per client, and the dashboard needs a decimated outline, not
the measurement. The scan is downsampled here, once, for every client.
"""

from __future__ import annotations

import math
from typing import Any

import numpy as np

from sim.msgs import FaultType


def _f(x) -> float:
    """JSON-safe float: NaN and +-inf are not valid JSON numbers.

    Rounded to millimetre / milli-unit precision. Full double precision costs
    about seventeen characters per number and conveys nothing an operator can
    see on a screen; at 20 Hz across every field it was most of the bandwidth.
    """
    v = float(x)
    return round(v, 4) if math.isfinite(v) else None


def _vec(a) -> list:
    return [_f(v) for v in np.asarray(a, dtype=float).ravel()]


def scan_outline(ranges, angles, max_points: int = 180,
                 range_max: float = 40.0) -> dict:
    """Decimate a scan to a drawable outline.

    Reduction is by minimum within each bucket, not by taking every n-th beam.
    Subsampling a scan can step straight over a thin obstacle between two
    beams; a bucket minimum keeps the nearest surface in every direction,
    which is the one an operator needs to see.
    """
    if ranges is None or angles is None:
        return {"angles": [], "ranges": [], "max_range": range_max}
    r = np.asarray(ranges, dtype=float)
    a = np.asarray(angles, dtype=float)
    if r.size == 0:
        return {"angles": [], "ranges": [], "max_range": range_max}
    n = min(max_points, r.size)
    idx = np.linspace(0, r.size, n + 1).astype(int)
    out_a, out_r = [], []
    for lo, hi in zip(idx[:-1], idx[1:]):
        if hi <= lo:
            continue
        seg = r[lo:hi]
        finite = np.isfinite(seg)
        out_a.append(_f(a[lo:hi].mean()))
        out_r.append(_f(seg[finite].min()) if finite.any() else None)
    return {"angles": out_a, "ranges": out_r, "max_range": _f(range_max)}


def world_static(runner) -> dict:
    """The parts of the scene that never change, sent once on connect."""
    w = runner.world
    tr = runner.terrain
    step = max(1, tr.height.shape[0] // 140)      # cap the mesh the browser gets
    h = tr.height[::step, ::step]
    return {
        "terrain": {
            "origin": [_f(tr.x0), _f(tr.y0)],
            "resolution": _f(tr.res * step),
            "shape": list(h.shape),
            "height": [[_f(v) for v in row] for row in h],
            "z_range": [_f(tr.height.min()), _f(tr.height.max())],
        },
        "obstacles": [
            {"id": o.oid, "kind": o.kind, "x": _f(o.x), "y": _f(o.y),
             "z_base": _f(o.z_base), "height": _f(o.height),
             "radius": _f(o.radius), "half_x": _f(o.half_x),
             "half_y": _f(o.half_y), "yaw": _f(o.yaw),
             "known_a_priori": bool(o.known_a_priori),
             "spawn_time": _f(o.spawn_time)}
            for o in w.obstacles],
        "mission": {
            "start": _vec(runner.mission.start),
            "goal": _vec(runner.mission.goal),
            "start_yaw_deg": _f(math.degrees(runner.mission.start_yaw)),
            "goal_tolerance": _f(getattr(runner.mission, "goal_tolerance", 2.0)),
            "timeout_s": _f(runner.mission.timeout_s),
        },
        "scenario": {
            "id": runner.cfg.id,
            "description": runner.cfg.description,
            "seed": int(runner.cfg.seed),
            "duration_s": _f(runner.cfg.duration),
            "environment": runner.cfg.environment,
        },
        "vehicle": {
            "type": getattr(runner, "vehicle_type", "ugv"),
            "cruise_agl": (float(runner.controller.cfg.cruise_agl)
                           if getattr(runner, "vehicle_type", "ugv") == "drone" else None),
        },
        # Declared windows are the SCORING TRUTH: when each fault really ran,
        # independent of whether anything noticed. The dashboard draws these
        # against the monitor's detection times so the latency is visible as a
        # gap rather than asserted as a number.
        "fault_windows": [
            {"onset": _f(a), "end": _f(b), "type": FaultType(k).name}
            for a, b, k in runner.injector.active_windows()],
        "faults_declared": [
            {"type": s.fault_type.name, "target": s.target,
             "onset": _f(s.onset), "duration": _f(s.duration),
             "ramp": _f(s.ramp)}
            for s in runner.injector.specs],
    }


def snapshot(runner, *, include_truth: bool = True,
             last_path_version: int = -1) -> dict:
    """Current state, as the dashboard's telemetry frame."""
    ekf = runner.ekf
    res = runner.resilience
    gm = runner.gnss_monitor.state
    ctl = getattr(runner, "last_control", None)
    t = runner.clock.t

    out: dict[str, Any] = {
        "type": "telemetry",
        "t": _f(t),
        "estimate": {
            "position": _vec(ekf.p),
            "velocity": _vec(ekf.v),
            "yaw_deg": _f(math.degrees(ekf.yaw)),
            "roll_deg": _f(math.degrees(ekf.euler[0])),
            "pitch_deg": _f(math.degrees(ekf.euler[1])),
            "pos_sigma_h": _f(ekf.pos_sigma_horizontal()),
            "vel_sigma": _f(ekf.vel_sigma()),
            "yaw_sigma_deg": _f(math.degrees(ekf.yaw_sigma())),
            "gyro_bias": _vec(ekf.b_g),
            "accel_bias": _vec(ekf.b_a),
            "baro_bias": _f(ekf.b_baro),
            "odom_scale": _f(ekf.odom_scale),
            "updates": int(ekf.last.get("updates", 0)),
            "rejections": int(ekf.last.get("rejections", 0)),
        },
        "resilience": {
            "state": res.state.name,
            "previous_state": res.previous_state.name if res.previous_state else None,
            "nav_mode": res.nav_mode.name,
            "safe_action": res.safe_action.name if res.safe_action else None,
            "speed_limit": _f(res.speed_limit),
            "reason": res.reason,
            "allow_motion": bool(res.allow_motion),
            "dead_reckoning_time_s": _f(res.dr_time),
            "dead_reckoning_distance_m": _f(res.dr_distance),
        },
        # Evidence-based wording throughout: the monitor reports that streams
        # DISAGREE, never that a stream is being spoofed. It cannot tell the
        # difference between interference, multipath and a receiver fault, so
        # it does not claim to.
        "gnss_integrity": {
            "flagged": bool(gm.flagged),
            "confirmed": bool(gm.confirmed),
            "status": ("inconsistent" if gm.flagged else "consistent"),
            "nis": _f(gm.nis),
            "nis_window_mean": _f(gm.nis_window_mean),
            "cusum_max": _f(gm.cusum_max),
            "innovation_norm": _f(gm.innovation_norm),
            "reasons": list(gm.reasons),
            "detail": gm.detail,
            "outage": bool(gm.outage),
        },
        # The health monitor already returns plain dicts; pass them through
        # rather than re-deriving, so the dashboard and the recorded CSV agree.
        "sensors": runner.health.snapshot(),
        "mission_progress": {
            "distance_travelled_m": _f(runner.ugv.distance_travelled),
            "distance_to_goal_m": _f(np.linalg.norm(
                np.asarray(runner.mission.goal) - ekf.p[:2])),
            "goal_reached": bool(runner.goal_reached),
            "replans": int(runner.replan_count),
            "failed_plans": int(runner.failed_plans),
            "collisions": int(runner.collisions),
            "min_clearance_m": _f(runner.min_clearance),
        },
        # end_time < 0 means the fault is still running. Detection is
        # reported as the monitor's own claim, with its latency, so the
        # dashboard can show "declared at 120 s, flagged at 123.8 s" rather
        # than implying the system knew all along.
        "faults_active": [
            {"type": FaultType(e.fault_type).name, "target": e.target,
             "onset": _f(e.onset_time),
             "detected": bool(e.detected),
             "detected_time": (_f(e.detection_time) if e.detected else None),
             "detected_by": e.detected_by,
             "detection_latency_s": (_f(e.detection_time - e.onset_time)
                                     if e.detected else None)}
            for e in runner.injector.events if e.end_time < 0.0],
        # The planned path only changes on a replan, so it is sent with a
        # version and omitted while unchanged -- it is the largest field in
        # the frame and the dashboard already has it.
        "path_version": int(runner.replan_count),
        # Mission-state history and the full fault record, not just what is
        # live right now. Both are short -- a run produces a handful of
        # transitions -- and sending them whole keeps the dashboard correct
        # after a reconnect instead of having it reassemble a timeline from
        # frames it may have missed.
        "transitions": list(runner.resilience.transitions),
        "fault_history": runner.injector.summary(),
    }

    if ctl is not None:
        out["control"] = {
            "speed_cmd": _f(ctl.v),
            "yaw_rate_cmd": _f(ctl.omega),
            "cross_track_m": _f(ctl.cross_track_error),
            "heading_error_deg": _f(math.degrees(ctl.heading_error)),
            "distance_to_goal_m": _f(ctl.distance_to_goal),
            "obstacle_distance_m": _f(ctl.obstacle_distance),
            "limiting_constraint": ctl.speed_limit_reason,
            "emergency_stop": bool(ctl.emergency_stop),
            "stuck": bool(ctl.stuck),
        }

    if last_path_version != runner.replan_count:
        out["path"] = ([[_f(p[0]), _f(p[1])] for p in runner.plan_path[::2]]
                       if runner.plan_path is not None else [])

    scan = getattr(runner, "latest_scan", None)
    if scan is not None:
        out["lidar"] = scan_outline(
            getattr(scan, "ranges", None), getattr(scan, "angles", None),
            range_max=getattr(runner.sensors["lidar"].p, "range_max", 40.0))

    bat = getattr(runner, "latest_battery", None)
    if bat is not None:
        out["battery"] = {
            "voltage": _f(getattr(bat, "voltage", 0.0)),
            "current": _f(getattr(bat, "current", 0.0)),
            "percentage": _f(getattr(bat, "percentage", 0.0)),
            "temperature": _f(getattr(bat, "temperature", 0.0)),
        }

    if getattr(runner, "vehicle_type", "ugv") == "drone":
        v = runner.vehicle
        c = getattr(runner, "last_control", None)
        out["drone"] = {
            "phase": c.phase if c else "PREFLIGHT",
            "armed": bool(v.armed),
            "landed_estimate": bool(runner._landed_est),
            "agl_estimate_m": _f(c.agl_estimate) if c else None,
            "alt_setpoint_m": _f(c.alt_setpoint) if c else None,
            "est_altitude_m": _f(ekf.p[2]),
            "vertical_speed_mps": _f(ekf.v[2]),
            "thrust_ratio": _f(v.thrust / max(v.weight, 1e-6)),
            "tilt_cmd_deg": _f(math.degrees(max(abs(c.roll_cmd), abs(c.pitch_cmd)))) if c else 0.0,
            "baro_excluded": bool(getattr(runner, "baro_excluded", False)),
            "rangefinder_m": (_f(runner.latest_range.range)
                              if getattr(runner, "latest_range", None) is not None else None),
        }

    if include_truth:
        # Scoring and display only. Never an input to navigation.
        truth = runner.ugv.truth(t)
        out["ground_truth"] = {
            "position": _vec(truth.p),
            "velocity": _vec(truth.v),
            "yaw_deg": _f(math.degrees(runner.ugv.yaw)),
            "roll_deg": _f(math.degrees(runner.ugv.roll)),
            "pitch_deg": _f(math.degrees(runner.ugv.pitch)),
            "speed": _f(runner.ugv.v),
            "position_error_m": _f(np.linalg.norm(ekf.p[:2] - np.asarray(truth.p)[:2])),
            "agl_m": _f(getattr(runner.ugv, "agl", 0.0)),
            "wind": (_vec(runner.vehicle.wind())
                     if getattr(runner, "vehicle_type", "ugv") == "drone" else None),
            "crashed": bool(getattr(runner.ugv, "crashed", False)),
            "_note": "scoring and display only; not a navigation input",
        }
    return out
