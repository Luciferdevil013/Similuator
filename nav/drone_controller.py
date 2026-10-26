"""Multicopter mission and position controller.

Structure follows PX4's split: a mission state machine produces position /
velocity setpoints, a cascaded P (position) -> PI (velocity) loop turns them
into an acceleration demand, and the acceleration demand becomes the
(roll, pitch, yaw rate, thrust) attitude setpoint the vehicle accepts.

Everything here runs on the ESTIMATED state. The only map knowledge is the
prior terrain model (DEM), used to choose a cruise altitude with clearance
over the hills ahead -- the same prior the rover's costmap is built from.

Mission phases:

    PREFLIGHT  on the ground, disarmed, waiting for the estimator to align
    TAKEOFF    vertical climb to the cruise height above the start
    CRUISE     follow the start->goal line at cruise speed; altitude set from
               the highest terrain in a look-ahead window plus clearance
    DESCEND    hold over the goal, descend to the landing gate height
    LAND       slow final descent until touchdown is detected
    LANDED     disarmed on the ground

The resilience manager can override at any time. Its speed limit caps the
horizontal speed; withdrawing permission to move (SAFE_ACTION) means LAND IN
PLACE -- a multicopter cannot "stop and hold" without a trustworthy position,
and descending on the barometer is the failsafe PX4 uses for the same case.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from sim.rotations import wrap_pi

PHASES = ("PREFLIGHT", "TAKEOFF", "CRUISE", "DESCEND", "LAND", "LANDED",
          "FAILSAFE_LAND")


@dataclass
class DroneControllerConfig:
    cruise_agl: float = 20.0           # m above the terrain ahead
    cruise_speed: float = 8.0          # m/s
    climb_rate: float = 2.5            # m/s
    descent_rate: float = 1.8          # m/s
    land_rate: float = 0.6             # m/s, final descent
    land_gate_agl: float = 3.0         # m, switch from DESCEND to LAND
    goal_radius: float = 1.5           # m, horizontal capture radius at the goal
    lookahead: float = 12.0            # m, carrot distance along the track
    terrain_window: float = 30.0       # m of track ahead checked for altitude
    preflight_time: float = 2.0        # s after alignment before arming
    kp_pos: float = 0.9
    kp_vel: float = 1.8
    ki_vel: float = 0.35
    kp_z: float = 1.0
    kp_vz: float = 3.0
    ki_vz: float = 0.6
    max_accel_xy: float = 4.5          # m/s^2
    max_tilt_deg: float = 30.0
    kp_yaw: float = 1.2
    failsafe_land_rate: float = 1.0    # m/s while landing on a failsafe


@dataclass
class DroneControlOutput:
    # Fields shared with the rover's ControlOutput so the dashboard and the
    # recorder can treat both vehicles alike.
    v: float = 0.0                       # commanded horizontal speed
    omega: float = 0.0                   # commanded yaw rate
    cross_track_error: float = 0.0
    heading_error: float = 0.0
    distance_to_goal: float = 0.0
    obstacle_distance: float = float("inf")
    speed_limit_reason: str = "nominal"
    emergency_stop: bool = False
    stuck: bool = False
    replan_requested: bool = False
    replan_reason: str = ""
    goal_reached: bool = False
    # Drone-specific.
    phase: str = "PREFLIGHT"
    alt_setpoint: float = 0.0
    agl_estimate: float = float("nan")
    roll_cmd: float = 0.0
    pitch_cmd: float = 0.0
    thrust_cmd: float = 0.0
    tilt_saturated: bool = False


class DroneController:
    def __init__(self, cfg: DroneControllerConfig, terrain, *, mass: float,
                 gravity: float, max_thrust: float, start, goal):
        self.cfg = cfg
        self.terrain = terrain
        self.mass = float(mass)
        self.g = float(gravity)
        self.max_thrust = float(max_thrust)
        self.start = np.asarray(start, dtype=float)[:2]
        self.goal = np.asarray(goal, dtype=float)[:2]
        self.phase = "PREFLIGHT"
        self._t_phase = 0.0
        self._aligned_at: float | None = None
        self._i_vel = np.zeros(2)
        self._i_vz = 0.0
        self._hold_xy: np.ndarray | None = None
        self._z_sp: float | None = None
        self.speed_ceiling = cfg.cruise_speed
        self.allow_motion = True
        self.arm_request = False
        self.last = DroneControlOutput()

    # -- helpers ------------------------------------------------------------
    def _set_phase(self, name: str, t: float) -> None:
        if name != self.phase:
            self.phase = name
            self._t_phase = t

    def _track(self, pos: np.ndarray):
        """Projection onto the start->goal line: (along, cross, unit dir)."""
        d = self.goal - self.start
        L = float(np.linalg.norm(d)) or 1.0
        u = d / L
        rel = pos - self.start
        along = float(rel @ u)
        cross = float(rel[0] * u[1] - rel[1] * u[0])
        return along, cross, u, L

    def _cruise_altitude(self, pos: np.ndarray) -> float:
        """Highest terrain over the next stretch of track, plus clearance."""
        along, _, u, L = self._track(pos)
        s = np.linspace(max(0.0, along - 5.0), min(L, along + self.cfg.terrain_window), 16)
        pts = self.start[None, :] + s[:, None] * u[None, :]
        pts = np.vstack([pts, pos[None, :]])
        h = self.terrain.height_at(pts[:, 0], pts[:, 1])
        return float(np.max(h)) + self.cfg.cruise_agl

    # -- main step -----------------------------------------------------------
    def step(self, t: float, dt: float, *, est_pos: np.ndarray, est_vel: np.ndarray,
             est_yaw: float, aligned: bool, landed: bool,
             agl: float | None, horizontal_valid: bool = True) -> DroneControlOutput:
        c = self.cfg
        out = DroneControlOutput()
        p = np.asarray(est_pos, dtype=float)
        v = np.asarray(est_vel, dtype=float)
        xy = p[:2]
        out.distance_to_goal = float(np.linalg.norm(self.goal - xy))
        ground_est = float(self.terrain.height_at(xy[0], xy[1]))
        agl_est = float(agl) if agl is not None and np.isfinite(agl) else p[2] - ground_est
        out.agl_estimate = agl_est

        # ---- failsafe override: land in place ---------------------------
        if not self.allow_motion and self.phase not in ("PREFLIGHT", "LANDED"):
            if self.phase != "FAILSAFE_LAND":
                self._hold_xy = xy.copy()
                self._set_phase("FAILSAFE_LAND", t)
        elif self.phase == "FAILSAFE_LAND" and self.allow_motion:
            # Permission restored while still airborne: climb back and resume.
            self._set_phase("TAKEOFF", t)
            self._z_sp = None

        # ---- mission state machine ---------------------------------------
        if self.phase == "PREFLIGHT":
            if aligned and self._aligned_at is None:
                self._aligned_at = t
            if (self._aligned_at is not None and t - self._aligned_at >= c.preflight_time
                    and self.allow_motion):
                self.arm_request = True
                self._hold_xy = xy.copy()
                self._z_sp = ground_est + c.cruise_agl
                self._set_phase("TAKEOFF", t)
        elif self.phase == "TAKEOFF":
            if self._z_sp is None:
                self._z_sp = max(p[2], ground_est + c.cruise_agl)
            if p[2] >= self._z_sp - 1.0:
                self._set_phase("CRUISE", t)
        elif self.phase == "CRUISE":
            if out.distance_to_goal < c.goal_radius * 2.0:
                self._hold_xy = self.goal.copy()
                self._set_phase("DESCEND", t)
        elif self.phase == "DESCEND":
            if agl_est <= c.land_gate_agl:
                self._set_phase("LAND", t)
        elif self.phase == "LAND":
            if landed:
                self._set_phase("LANDED", t)
                self.arm_request = False
        elif self.phase == "FAILSAFE_LAND":
            if landed:
                self.arm_request = False

        out.phase = self.phase
        if self.phase in ("PREFLIGHT", "LANDED") or (self.phase == "FAILSAFE_LAND" and landed):
            out.speed_limit_reason = self.phase.lower()
            out.goal_reached = self.phase == "LANDED" and out.distance_to_goal <= c.goal_radius * 2.5
            self._i_vel[:] = 0.0
            self._i_vz = 0.0
            self.last = out
            return out

        # ---- horizontal setpoint -------------------------------------------
        vmax = min(c.cruise_speed, self.speed_ceiling)
        along, cross, u, L = self._track(xy)
        out.cross_track_error = cross
        yaw_sp = est_yaw
        if self.phase == "CRUISE":
            carrot_s = min(L, along + c.lookahead)
            carrot = self.start + u * carrot_s
            to = carrot - xy
            dist_goal = out.distance_to_goal
            # Slow down approaching the goal so the descent starts over it.
            v_goal = np.sqrt(2.0 * 0.8 * c.max_accel_xy * 0.5 * max(dist_goal - 1.0, 0.0))
            speed = min(vmax, v_goal + 0.5)
            n = float(np.linalg.norm(to)) or 1.0
            v_sp_xy = to / n * speed
            yaw_sp = float(np.arctan2(u[1], u[0]))
            out.speed_limit_reason = "ceiling" if self.speed_ceiling < c.cruise_speed else "cruise"
        else:
            hold = self._hold_xy if self._hold_xy is not None else xy
            v_sp_xy = c.kp_pos * (hold - xy)
            sp = float(np.linalg.norm(v_sp_xy))
            lim = min(vmax, 3.0)
            if sp > lim:
                v_sp_xy *= lim / sp
            out.speed_limit_reason = self.phase.lower()
        out.heading_error = float(wrap_pi(yaw_sp - est_yaw))
        out.v = float(np.linalg.norm(v_sp_xy))

        # ---- vertical setpoint ------------------------------------------------
        if self.phase == "TAKEOFF":
            vz_sp = float(np.clip(c.kp_z * (self._z_sp - p[2]), -c.descent_rate, c.climb_rate))
            out.alt_setpoint = self._z_sp
        elif self.phase == "CRUISE":
            z_sp = self._cruise_altitude(xy)
            # Never descend below the clearance over the ground right here.
            z_sp = max(z_sp, ground_est + 0.6 * c.cruise_agl)
            vz_sp = float(np.clip(c.kp_z * (z_sp - p[2]), -c.descent_rate, c.climb_rate))
            out.alt_setpoint = z_sp
        elif self.phase == "DESCEND":
            vz_sp = -c.descent_rate
            out.alt_setpoint = ground_est + c.land_gate_agl
        elif self.phase == "LAND":
            vz_sp = -c.land_rate
            out.alt_setpoint = ground_est
        else:                                         # FAILSAFE_LAND
            vz_sp = -c.failsafe_land_rate if agl_est > 2.5 else -c.land_rate
            out.alt_setpoint = ground_est
            out.speed_limit_reason = "failsafe_land"

        # ---- velocity loop -> acceleration demand -----------------------------
        e_v = v_sp_xy - v[:2]
        self._i_vel = np.clip(self._i_vel + e_v * dt, -4.0, 4.0)
        a_xy = c.kp_vel * e_v + c.ki_vel * self._i_vel
        na = float(np.linalg.norm(a_xy))
        if na > c.max_accel_xy:
            a_xy *= c.max_accel_xy / na
        e_vz = vz_sp - v[2]
        self._i_vz = float(np.clip(self._i_vz + e_vz * dt, -3.0, 3.0))
        a_z = c.kp_vz * e_vz + c.ki_vz * self._i_vz

        # ---- acceleration -> attitude + thrust --------------------------------
        f = self.mass * np.array([a_xy[0], a_xy[1], a_z + self.g])
        f[2] = max(f[2], 0.2 * self.mass * self.g)
        cy, sy = np.cos(est_yaw), np.sin(est_yaw)
        fx = cy * f[0] + sy * f[1]                    # yaw-aligned frame
        fy = -sy * f[0] + cy * f[1]
        pitch = float(np.arctan2(fx, f[2]))
        roll = float(np.arctan2(-fy, np.hypot(fx, f[2])))
        tmax = np.radians(c.max_tilt_deg)
        out.tilt_saturated = bool(abs(pitch) > 0.95 * tmax or abs(roll) > 0.95 * tmax)
        pitch = float(np.clip(pitch, -tmax, tmax))
        roll = float(np.clip(roll, -tmax, tmax))
        thrust = float(f[2] / max(np.cos(roll) * np.cos(pitch), 0.3))
        thrust = float(np.clip(thrust, 0.0, self.max_thrust))
        if self.phase == "LAND" and landed:
            thrust = 0.0
        if self.phase == "FAILSAFE_LAND" and not horizontal_valid:
            # The horizontal estimate is not trustworthy: steering on it would
            # chase drift. Land level, as PX4 does without a position fix; the
            # vehicle drifts with the wind but nothing worse.
            roll = pitch = 0.0
            thrust = float(np.clip(self.mass * (a_z + self.g), 0.0, self.max_thrust))
            out.speed_limit_reason = "failsafe_land_level"

        out.roll_cmd, out.pitch_cmd, out.thrust_cmd = roll, pitch, thrust
        out.omega = float(np.clip(c.kp_yaw * out.heading_error, -1.2, 1.2))
        self.last = out
        return out
