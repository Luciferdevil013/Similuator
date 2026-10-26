"""Quadrotor rigid-body model for the drone pipeline.

Level of detail, chosen to match what the navigation and safety logic needs:

  * Translational dynamics are the real thing: thrust along the body z axis,
    gravity, and aerodynamic drag against the AIR (not the ground), so wind
    pushes the vehicle and the controller has to lean into it.
  * Attitude is commanded as (roll, pitch, yaw rate, thrust), the interface a
    PX4 attitude controller exposes to the position loop. The inner loop is
    modelled as a first-order response with a time constant and slew limits
    rather than as four motors and a mixer; that is the abstraction PX4 SITL
    offers a position controller too.
  * Wind is a mean vector plus Ornstein-Uhlenbeck turbulence, plus any gust
    the fault injector adds (WIND_GUST).
  * Ground contact: the vehicle sits on its legs at the terrain height when
    landed; touching down faster than the gear tolerates, or flying into an
    obstacle or the hillside, is a crash and is latched.
  * Motor vibration (specific force at blade-pass frequencies, scaled with
    thrust) and battery current (hover power scales with thrust^1.5, the
    momentum-theory result) feed the IMU and battery models.

Like the rover model, this object is ground truth: only sensors and the
recorder may read it.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from ..rotations import euler_to_quat, quat_to_matrix, wrap_pi
from ..sensors.base import VehicleTruth


@dataclass
class QuadParams:
    mass: float = 1.6                  # kg
    max_thrust_to_weight: float = 2.2
    max_tilt_deg: float = 35.0
    max_yaw_rate: float = 1.6          # rad/s
    tau_attitude: float = 0.10         # s, attitude loop response
    tau_thrust: float = 0.04           # s, motor spin-up
    attitude_slew: float = 6.0         # rad/s, max roll/pitch rate
    drag_xy: float = 0.32              # N per (m/s) of airspeed, horizontal
    drag_z: float = 0.45               # N per (m/s), vertical
    leg_height: float = 0.18           # m, body origin above ground when landed
    crash_speed_v: float = 2.6         # m/s vertical touchdown limit
    crash_speed_h: float = 5.0         # m/s horizontal speed at ground contact (tip-over)
    hover_current_a: float = 16.0      # A at hover thrust
    vibration_g: float = 0.35          # m/s^2 rms specific-force vibration at hover
    # Wind (also editable per environment)
    wind_mean: tuple[float, float, float] = (0.0, 0.0, 0.0)   # m/s, ENU
    turbulence: float = 0.6            # m/s rms gust
    turbulence_tau: float = 2.5        # s correlation time
    initial_pose: tuple[float, float, float] = (0.0, 0.0, 0.0)   # x, y, yaw


class QuadDynamics:
    kind = "drone"

    def __init__(self, params: QuadParams, world, rng: np.random.Generator):
        self.p = params
        self.world = world
        self.rng = rng
        x, y, yaw = params.initial_pose
        z = float(world.terrain.height_at(x, y)) + params.leg_height
        self.pos = np.array([float(x), float(y), z])
        self.vel = np.zeros(3)
        self.acc = np.zeros(3)
        self.roll = 0.0
        self.pitch = 0.0
        self.yaw = float(yaw)
        self.roll_rate = self.pitch_rate = self.yaw_rate = 0.0
        self.thrust = 0.0                         # N
        self.weight = self.p.mass * world.frame.gravity
        self.max_thrust = self.p.max_thrust_to_weight * self.weight

        self.cmd_roll = self.cmd_pitch = 0.0
        self.cmd_yaw_rate = 0.0
        self.cmd_thrust = 0.0
        self.armed = False

        self.landed = True
        self.crashed = False
        self.crash_reason = ""
        self.distance_travelled = 0.0
        self.current_draw = 0.0
        self._turb = np.zeros(3)
        self.gust_fault = np.zeros(3)             # set by the fault injector
        self._vib = np.zeros(3)

    # -- compatibility with the rover interface (dashboard / recorder) ------
    @property
    def x(self) -> float:
        return float(self.pos[0])

    @property
    def y(self) -> float:
        return float(self.pos[1])

    @property
    def z(self) -> float:
        return float(self.pos[2])

    @property
    def v(self) -> float:
        """Horizontal ground speed."""
        return float(np.hypot(self.vel[0], self.vel[1]))

    @property
    def agl(self) -> float:
        return float(self.pos[2] - self.world.terrain.height_at(self.pos[0], self.pos[1])
                     - self.p.leg_height)

    def wind(self) -> np.ndarray:
        return np.asarray(self.p.wind_mean, dtype=float) + self._turb + self.gust_fault

    # -- commands -------------------------------------------------------------
    def arm(self, on: bool = True) -> None:
        self.armed = bool(on) and not self.crashed

    def set_attitude_target(self, roll: float, pitch: float, yaw_rate: float,
                            thrust: float) -> None:
        tmax = np.radians(self.p.max_tilt_deg)
        self.cmd_roll = float(np.clip(roll, -tmax, tmax))
        self.cmd_pitch = float(np.clip(pitch, -tmax, tmax))
        self.cmd_yaw_rate = float(np.clip(yaw_rate, -self.p.max_yaw_rate, self.p.max_yaw_rate))
        self.cmd_thrust = float(np.clip(thrust, 0.0, self.max_thrust))

    # -- integration ----------------------------------------------------------
    def step(self, dt: float, t: float) -> None:
        p = self.p
        g = self.world.frame.gravity
        if self.crashed or not self.armed:
            self.cmd_thrust = 0.0

        # Turbulence: Ornstein-Uhlenbeck per axis (vertical gusts are weaker).
        a = np.exp(-dt / p.turbulence_tau)
        sig = p.turbulence * np.array([1.0, 1.0, 0.4])
        self._turb = a * self._turb + np.sqrt(1 - a * a) * sig * self.rng.normal(0, 1, 3)

        # Attitude inner loop: first order towards the command, slew limited.
        prev = np.array([self.roll, self.pitch, self.yaw])
        for name, cmd in (("roll", self.cmd_roll), ("pitch", self.cmd_pitch)):
            cur = getattr(self, name)
            rate = np.clip((cmd - cur) / p.tau_attitude, -p.attitude_slew, p.attitude_slew)
            setattr(self, name, cur + rate * dt)
        if not self.landed:
            self.yaw = float(wrap_pi(self.yaw + self.cmd_yaw_rate * dt))
        self.thrust += (self.cmd_thrust - self.thrust) * min(1.0, dt / p.tau_thrust)
        if self.landed:
            self.roll *= 0.9
            self.pitch *= 0.9
        now = np.array([self.roll, self.pitch, self.yaw])
        d = now - prev
        d[2] = wrap_pi(d[2])
        self.roll_rate, self.pitch_rate, self.yaw_rate = d / dt

        # Forces in ENU.
        R = quat_to_matrix(euler_to_quat(self.roll, self.pitch, self.yaw))
        f_thrust = R[:, 2] * self.thrust
        air = self.vel - self.wind()
        f_drag = -np.array([p.drag_xy * air[0], p.drag_xy * air[1], p.drag_z * air[2]])
        f = f_thrust + f_drag + np.array([0.0, 0.0, -self.weight])
        acc = f / p.mass

        ground = float(self.world.terrain.height_at(self.pos[0], self.pos[1])) + p.leg_height
        if self.landed:
            # Resting on the gear: lift off only once thrust beats weight.
            if f_thrust[2] > self.weight * 1.02 and self.armed:
                self.landed = False
            else:
                acc = np.zeros(3)
                self.vel[:] = 0.0
                self.pos[2] = ground

        if not self.landed:
            self.vel = self.vel + acc * dt
            step = self.vel * dt
            self.pos = self.pos + step
            self.distance_travelled += float(np.hypot(step[0], step[1]))
            ground = float(self.world.terrain.height_at(self.pos[0], self.pos[1])) + p.leg_height
            if self.pos[2] <= ground:
                vz, vh = -self.vel[2], float(np.hypot(self.vel[0], self.vel[1]))
                if vz > p.crash_speed_v or vh > p.crash_speed_h:
                    self._crash(t, "ground impact at %.1f m/s vertical, %.1f m/s horizontal"
                                % (vz, vh))
                self.pos[2] = ground
                self.vel[:] = 0.0
                acc = np.zeros(3)
                self.landed = True
            self._check_obstacles(t)
        self.acc = acc

        # Motor vibration (body frame), scaled by thrust.
        frac = self.thrust / max(self.weight, 1e-6)
        self._vib = self.rng.normal(0.0, p.vibration_g * frac, 3) if self.thrust > 0 else np.zeros(3)

        # Battery: momentum-theory power ~ T^1.5 while armed.
        self.current_draw = (p.hover_current_a * max(frac, 0.0) ** 1.5) if self.armed else 0.0

    def _check_obstacles(self, t: float) -> None:
        w = self.world
        for o in w.obstacles:
            if not o.active(t):
                continue
            top = o.z_base + o.height
            if self.pos[2] - self.p.leg_height > top:
                continue
            if w.obstacle_distance_2d(self.pos[0], self.pos[1], t) < 0.25:
                self._crash(t, "collision with obstacle %s" % o.oid)
                return

    def _crash(self, t: float, reason: str) -> None:
        if not self.crashed:
            self.crashed = True
            self.crash_reason = "%.2f s: %s" % (t, reason)
            self.armed = False

    # -- truth ------------------------------------------------------------------
    def body_rates(self) -> np.ndarray:
        """Body angular velocity from Euler rates (ZYX), as for the rover."""
        sr, cr = np.sin(self.roll), np.cos(self.roll)
        sp, cp = np.sin(self.pitch), np.cos(self.pitch)
        return np.array([self.roll_rate - sp * self.yaw_rate,
                         cr * self.pitch_rate + sr * cp * self.yaw_rate,
                         -sr * self.pitch_rate + cr * cp * self.yaw_rate])

    def truth(self, t: float) -> VehicleTruth:
        return VehicleTruth(
            t=t,
            p=self.pos.copy(),
            v=self.vel.copy(),
            a=self.acc.copy(),
            q=euler_to_quat(self.roll, self.pitch, self.yaw),
            omega=self.body_rates(),
            vibration=self._vib.copy(),
            current_draw=self.current_draw,
            on_ground=self.landed,
        )

    def state_dict(self) -> dict:
        return {
            "x": self.x, "y": self.y, "z": self.z, "agl": self.agl,
            "roll": self.roll, "pitch": self.pitch, "yaw": self.yaw,
            "vel": self.vel.tolist(), "thrust_ratio": self.thrust / self.weight,
            "landed": self.landed, "armed": self.armed, "crashed": self.crashed,
            "wind": self.wind().tolist(), "distance": self.distance_travelled,
        }
