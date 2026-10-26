"""Pure-pursuit path tracking with LiDAR-based local avoidance.

The controller consumes the ESTIMATED pose, never ground truth. That is the
whole point of the exercise: when the estimate degrades, the controller's
behaviour degrades with it, and the resilience manager has to notice.

Steering: pure pursuit. A lookahead point is taken on the path at distance L,
transformed into the body frame, and the arc through it has curvature

    kappa = 2 y_local / L^2

The lookahead scales with speed, because a fixed L either oscillates at speed
or corners sluggishly when slow.

Speed: the minimum of several independent limits -- path curvature (lateral
acceleration), terrain slope, measured obstacle proximity, distance to goal,
and whatever ceiling the resilience manager has imposed. Taking the minimum
means a new constraint can only ever slow the vehicle down.

Local avoidance has two levels:
  * a virtual-bumper steering bias, which nudges around a close obstacle
    without abandoning the path;
  * a hard stop when something enters the braking distance in the forward
    sector, which also raises a replan request. Braking distance is computed
    from the current speed and decel limit, so the stop distance is physical
    rather than a tuned constant.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from sim.rotations import wrap_pi


@dataclass
class ControllerConfig:
    # --- pure pursuit ------------------------------------------------------
    lookahead_min: float = 1.1          # m
    lookahead_max: float = 3.2          # m
    lookahead_gain: float = 1.5         # s, L = gain * v
    goal_tolerance: float = 2.5         # m

    # --- speed limits ------------------------------------------------------
    max_speed: float = 1.8              # m/s
    min_speed: float = 0.25             # m/s while still tracking
    max_lateral_accel: float = 1.2      # m/s^2, sets cornering speed
    max_decel: float = 1.4              # m/s^2
    slope_slowdown_deg: float = 12.0    # slope at which slowdown begins
    slope_stop_deg: float = 26.0        # slope at which speed goes to minimum

    # --- yaw control -------------------------------------------------------
    max_yaw_rate: float = 1.5           # rad/s
    heading_kp: float = 1.9             # used when turning in place
    in_place_turn_threshold: float = 0.85  # rad; beyond this, turn before driving

    # --- obstacle avoidance ------------------------------------------------
    forward_sector_deg: float = 55.0    # half-angle of the braking sector
    bumper_sector_deg: float = 85.0     # half-angle of the steering-bias sector
    safety_margin: float = 0.75         # m added to braking distance
    bumper_range: float = 2.6           # m, where the steering bias starts
    bumper_gain: float = 1.1            # rad/s per unit normalised intrusion
    vehicle_half_width: float = 0.38    # m, used to ignore beams that miss us
    # Absolute standoff enforced on every bearing, not just ahead.
    min_standoff: float = 0.85          # m, surface-to-sensor
    # Extra width added to the braking corridor beyond the vehicle itself.
    corridor_margin: float = 0.45       # m

    # --- health ------------------------------------------------------------
    stuck_speed: float = 0.07           # m/s
    stuck_time: float = 3.5             # s below stuck_speed while commanded
    cross_track_replan: float = 3.5     # m off path -> request a replan


@dataclass
class ControlOutput:
    v: float = 0.0
    omega: float = 0.0
    lookahead_point: np.ndarray | None = None
    cross_track_error: float = 0.0
    heading_error: float = 0.0
    distance_to_goal: float = 0.0
    progress: float = 0.0               # 0..1 along the path
    speed_limit_reason: str = "nominal"
    obstacle_distance: float = float("inf")
    emergency_stop: bool = False
    replan_requested: bool = False
    replan_reason: str = ""
    stuck: bool = False
    goal_reached: bool = False


class PurePursuitController:
    def __init__(self, cfg: ControllerConfig | None = None):
        self.cfg = cfg or ControllerConfig()
        self.path: np.ndarray | None = None
        self._idx = 0
        self._stuck_timer = 0.0
        self._path_s: np.ndarray | None = None
        self.speed_ceiling = self.cfg.max_speed      # set by the resilience manager
        self.allow_motion = True
        self.last: ControlOutput = ControlOutput()

    # -- path management ---------------------------------------------------
    def set_path(self, path: np.ndarray | None) -> None:
        if path is None or len(path) < 2:
            self.path = None
            self._path_s = None
            self._idx = 0
            return
        self.path = np.asarray(path, dtype=float)[:, :2]
        seg = np.linalg.norm(np.diff(self.path, axis=0), axis=1)
        self._path_s = np.concatenate([[0.0], np.cumsum(seg)])
        self._idx = 0

    @property
    def path_length(self) -> float:
        return float(self._path_s[-1]) if self._path_s is not None else 0.0

    def _advance_index(self, pos: np.ndarray) -> int:
        """Move the tracking index forward to the closest point ahead.

        Searching only forward from the current index stops the controller
        from snapping back to an earlier part of a path that loops near
        itself, which would make it drive the loop again.
        """
        if self.path is None:
            return 0
        n = len(self.path)
        window = min(n, self._idx + 60)
        d = np.linalg.norm(self.path[self._idx:window] - pos[None, :2], axis=1)
        self._idx = self._idx + int(np.argmin(d))
        return self._idx

    # -- obstacle processing -----------------------------------------------
    def _scan_features(self, ranges: np.ndarray, angles: np.ndarray, speed: float):
        """Nearest obstacle in the braking sector, plus a steering bias.

        Beams are rejected when their lateral offset at the obstacle shows
        they will pass beside the vehicle; otherwise every beam on a wide
        corridor would brake for things the vehicle would clear.
        """
        c = self.cfg
        out = {"min_dist": float("inf"), "bias": 0.0, "blocked": False, "angle": 0.0}
        if ranges is None or angles is None or len(ranges) == 0:
            return out
        finite = np.isfinite(ranges)
        if not finite.any():
            return out
        r = ranges[finite]
        a = angles[finite]

        # Lateral offset of each return relative to the vehicle centreline.
        lateral = np.abs(r * np.sin(a))
        forward = r * np.cos(a)

        brake_sec = np.abs(a) <= np.radians(c.forward_sector_deg)
        in_corridor = (brake_sec
                       & (lateral <= c.vehicle_half_width + c.corridor_margin)
                       & (forward > 0))
        if in_corridor.any():
            k = int(np.argmin(r[in_corridor]))
            out["min_dist"] = float(r[in_corridor][k])
            out["angle"] = float(a[in_corridor][k])

        # Omnidirectional proximity guard. The braking corridor only looks
        # ahead, so an obstacle the vehicle is passing leaves the 55 degree
        # sector before closest approach and is never braked for -- which is
        # how a glancing pass ends up at 0.21 m on a 0.38 m-wide vehicle.
        # This guard watches every bearing instead. It is the one safety
        # check that does not depend on the position estimate at all: LiDAR
        # measures true range to a real surface, so it still holds when
        # localisation is degraded, which is exactly when it is needed.
        nearest_any = float(np.min(r)) if r.size else float("inf")
        out["nearest_any"] = nearest_any
        out["too_close"] = nearest_any < c.min_standoff
        # Only a too-close return in the FORWARD half-plane forces a stop:
        # driving forward closes on it. One abeam or behind still limits the
        # speed to a creep (see "standoff" below), but stopping for it froze
        # the vehicle for good -- it could never move away from the thing it
        # was too close to, and every replan from inside the inflated zone
        # failed, so the run ended in a timeout.
        close = r < c.min_standoff
        out["too_close_ahead"] = bool(np.any(close & (np.abs(a) < np.pi / 2)))

        # Braking distance from the current speed, plus a fixed margin.
        stop_dist = speed ** 2 / (2.0 * max(c.max_decel, 1e-3)) + c.safety_margin
        out["blocked"] = bool(out["min_dist"] < stop_dist or out["too_close_ahead"])
        out["stop_distance"] = float(stop_dist)

        # Virtual bumper: returns inside `bumper_range` push the heading away,
        # weighted by how close they are and which side they are on.
        bsec = np.abs(a) <= np.radians(c.bumper_sector_deg)
        near = bsec & (r < c.bumper_range) & (lateral < 1.5)
        if near.any():
            rn, an = r[near], a[near]
            w = np.clip(1.0 - rn / c.bumper_range, 0.0, 1.0) ** 2
            # Push left for obstacles on the right and vice versa.
            out["bias"] = float(-c.bumper_gain * np.sum(w * np.sign(an)) / max(w.sum(), 1e-6)
                                * np.max(w))
        return out

    # -- main step ---------------------------------------------------------
    def step(self, dt: float, est_pos: np.ndarray, est_yaw: float, est_speed: float, *,
             ranges: np.ndarray | None = None, angles: np.ndarray | None = None,
             slope_rad: float = 0.0, goal: np.ndarray | None = None) -> ControlOutput:
        c = self.cfg
        out = ControlOutput()
        pos = np.asarray(est_pos, dtype=float)[:2]

        if goal is not None:
            out.distance_to_goal = float(np.linalg.norm(np.asarray(goal, dtype=float)[:2] - pos))
            if out.distance_to_goal <= c.goal_tolerance:
                out.goal_reached = True
                self.last = out
                return out

        if self.path is None or len(self.path) < 2:
            out.speed_limit_reason = "no_path"
            out.replan_requested = True
            out.replan_reason = "no path available"
            self.last = out
            return out

        idx = self._advance_index(pos)
        out.progress = float(self._path_s[idx] / max(self.path_length, 1e-9))

        # --- cross-track error against the current path segment
        j = min(idx + 1, len(self.path) - 1)
        seg = self.path[j] - self.path[idx]
        seg_len = float(np.linalg.norm(seg))
        if seg_len > 1e-9:
            tangent = seg / seg_len
            rel = pos - self.path[idx]
            out.cross_track_error = float(rel[0] * tangent[1] - rel[1] * tangent[0])
        else:
            out.cross_track_error = float(np.linalg.norm(pos - self.path[idx]))

        # --- lookahead point
        L = float(np.clip(c.lookahead_gain * max(est_speed, 0.3),
                          c.lookahead_min, c.lookahead_max))
        target_s = self._path_s[idx] + L
        if target_s >= self.path_length:
            tp = self.path[-1]
        else:
            k = int(np.searchsorted(self._path_s, target_s))
            k = min(k, len(self.path) - 1)
            k0 = max(k - 1, 0)
            span = self._path_s[k] - self._path_s[k0]
            frac = 0.0 if span < 1e-9 else (target_s - self._path_s[k0]) / span
            tp = self.path[k0] + frac * (self.path[k] - self.path[k0])
        out.lookahead_point = tp

        # --- pure pursuit curvature in the body frame
        d = tp - pos
        cy, sy = np.cos(-est_yaw), np.sin(-est_yaw)
        x_local = d[0] * cy - d[1] * sy
        y_local = d[0] * sy + d[1] * cy
        dist = max(float(np.hypot(x_local, y_local)), 1e-6)
        kappa = 2.0 * y_local / (dist * dist)
        out.heading_error = float(wrap_pi(np.arctan2(d[1], d[0]) - est_yaw))

        # --- obstacle features
        feats = self._scan_features(ranges, angles, est_speed)
        out.obstacle_distance = feats["min_dist"]

        # --- speed limits, lowest wins
        limits = {"ceiling": self.speed_ceiling, "max": c.max_speed}
        if abs(kappa) > 1e-6:
            limits["curvature"] = float(np.sqrt(c.max_lateral_accel / abs(kappa)))
        sd = np.degrees(abs(slope_rad))
        if sd > c.slope_slowdown_deg:
            f = 1.0 - 0.85 * np.clip((sd - c.slope_slowdown_deg) /
                                     max(c.slope_stop_deg - c.slope_slowdown_deg, 1e-6), 0, 1)
            limits["slope"] = float(max(c.min_speed, c.max_speed * f))
        if np.isfinite(feats["min_dist"]):
            # Decelerate so the vehicle can stop before the obstacle.
            usable = max(feats["min_dist"] - c.safety_margin, 0.0)
            limits["obstacle"] = float(np.sqrt(2.0 * c.max_decel * usable))
        # Inside the standoff, creep regardless of which way the obstacle lies.
        if feats.get("too_close"):
            limits["standoff"] = c.min_speed
        if goal is not None:
            limits["goal"] = float(max(c.min_speed,
                                       np.sqrt(2.0 * c.max_decel *
                                               max(out.distance_to_goal - c.goal_tolerance, 0.0))))
        reason = min(limits, key=limits.get)
        v_cmd = float(max(0.0, limits[reason]))
        out.speed_limit_reason = reason

        # --- turn in place when the path doubles back
        if abs(out.heading_error) > c.in_place_turn_threshold and est_speed < 0.6:
            out.v = 0.0
            out.omega = float(np.clip(c.heading_kp * out.heading_error,
                                      -c.max_yaw_rate, c.max_yaw_rate))
            out.speed_limit_reason = "turn_in_place"
        else:
            out.v = v_cmd
            out.omega = float(np.clip(kappa * max(v_cmd, 0.25) + feats["bias"],
                                      -c.max_yaw_rate, c.max_yaw_rate))

        # --- hard stop
        if feats["blocked"]:
            out.v = 0.0
            out.emergency_stop = True
            out.speed_limit_reason = "emergency_stop"
            out.replan_requested = True
            out.replan_reason = ("obstacle at %.2f m inside %.2f m braking distance"
                                 % (feats["min_dist"], feats.get("stop_distance", 0.0)))

        if abs(out.cross_track_error) > c.cross_track_replan:
            out.replan_requested = True
            out.replan_reason = "cross-track error %.2f m" % out.cross_track_error

        # --- the resilience manager can forbid motion outright
        if not self.allow_motion:
            out.v = 0.0
            out.omega = 0.0
            out.speed_limit_reason = "motion_inhibited"

        # --- stuck detection
        commanded = abs(out.v) > 0.05 or abs(out.omega) > 0.05
        if commanded and est_speed < c.stuck_speed and not out.emergency_stop:
            self._stuck_timer += dt
        else:
            self._stuck_timer = 0.0
        if self._stuck_timer >= c.stuck_time:
            out.stuck = True
            out.replan_requested = True
            out.replan_reason = "no progress for %.1f s" % self._stuck_timer

        self.last = out
        return out

    def reset(self) -> None:
        self.path = None
        self._path_s = None
        self._idx = 0
        self._stuck_timer = 0.0
        self.speed_ceiling = self.cfg.max_speed
        self.allow_motion = True
