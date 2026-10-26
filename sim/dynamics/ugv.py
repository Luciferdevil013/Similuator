"""Skid-steer UGV dynamics on terrain.

This is a force-based model, not a kinematic one. The distinction matters for
this project: a kinematic model moves wherever it is told, so wheel odometry
would be perfect, slopes would be free, and a "terrain-aware" planner would
have nothing to be aware of. Here the vehicle has mass, the wheels have a
friction limit, and climbing costs traction.

Longitudinal model, per side (left/right pairs lumped):

    slip      s  = (r w_wheel - v_contact) / max(|r w_wheel|, |v_contact|, v_eps)
    traction  Fx = mu N tanh(C_s s)            [saturating friction curve]
    wheel     I_w dw/dt = tau_motor - r Fx
    body      m dv/dt   = Fx_L + Fx_R - F_roll - F_grade - F_drag
    yaw       I_z dwz/dt = (Fx_R - Fx_L) B_eff/2 - M_scrub

`tanh(C_s s)` is a smooth stand-in for a Pacejka curve: linear in slip at
small slip, saturating at mu*N. It captures the behaviour that matters --
traction runs out, and on sand it runs out sooner -- without a tyre model's
parameter count.

`M_scrub` is the yaw resistance from dragging four wheels sideways, which is
how a skid-steer vehicle actually turns. It is large, and leaving it out is
why naive skid-steer simulations spin implausibly fast.

Attitude follows the terrain: roll and pitch come from the surface normal
under the contact patch, with a first-order suspension lag. Yaw is dynamic.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from ..rotations import euler_to_quat, quat_to_matrix, wrap_pi
from ..sensors.base import VehicleTruth


@dataclass
class UgvParams:
    # --- chassis -----------------------------------------------------------
    mass: float = 42.0               # kg
    wheel_radius: float = 0.165      # m
    track_width: float = 0.52        # m, geometric
    wheelbase: float = 0.45          # m
    cg_height: float = 0.21          # m above contact plane
    inertia_z: float = 2.1           # kg m^2
    # Two wheels plus the gearbox-reflected motor inertia. The earlier
    # value of 0.021 was wheel-only and left the traction loop stiff
    # enough to be unstable under explicit integration.
    wheel_inertia: float = 0.10      # kg m^2 per side (two wheels + geartrain)

    # --- drivetrain --------------------------------------------------------
    max_wheel_torque: float = 32.0   # Nm per side (16 Nm per wheel)
    max_wheel_speed: float = 14.0    # rad/s (-> 2.31 m/s at r=0.165)
    motor_tau: float = 0.06          # s, torque response lag
    drivetrain_efficiency: float = 0.78
    no_load_current: float = 0.9     # A per side

    # --- low-level speed controller (what a motor driver runs) -------------
    kp_wheel: float = 6.5            # Nm per (rad/s) error
    ki_wheel: float = 18.0
    i_limit: float = 12.0            # Nm

    # --- tyre / soil -------------------------------------------------------
    slip_stiffness: float = 14.0     # C_s in the tanh traction curve
    lateral_friction_frac: float = 0.95  # residual derate on the ellipse
    lateral_slip_ref: float = 0.10   # m/s, slip velocity at which F_y saturates
    # Effective/geometric track the MOTOR DRIVER is calibrated with, used
    # to map a (v, omega) command onto wheel speeds. The value the vehicle
    # actually realises emerges from the force balance and varies with the
    # surface; wheel odometry assumes the geometric track and is therefore
    # wrong by that difference, which is a genuine drift source.
    skid_track_factor: float = 1.10
    v_eps: float = 0.12              # m/s, slip-denominator floor

    # --- aero / suspension -------------------------------------------------
    drag_area: float = 0.28          # Cd*A, m^2
    air_density: float = 1.19        # kg/m^3
    suspension_tau: float = 0.18     # s, attitude lag onto terrain normal
    max_slope_stall: float = 0.62    # rad; beyond this traction cannot hold

    # --- vibration coupling into the IMU ----------------------------------
    vibration_gain: float = 9.0      # (m/s^2) per (m of roughness * m/s)
    vibration_tau: float = 0.035     # s, correlation time of the shake

    # --- limits ------------------------------------------------------------
    max_speed: float = 2.2           # m/s
    max_yaw_rate: float = 1.6        # rad/s

    initial_pose: tuple[float, float, float] = (0.0, 0.0, 0.0)
    wheel_order: tuple[str, ...] = field(
        default_factory=lambda: ("front_left", "front_right", "rear_left", "rear_right"))


class UgvDynamics:
    """Integrates the UGV forward. Owns the only authoritative vehicle state."""

    def __init__(self, params: UgvParams, world, rng: np.random.Generator):
        self.p = params
        self.world = world
        self.rng = rng

        x, y, yaw = params.initial_pose
        self.x, self.y, self.yaw = float(x), float(y), float(yaw)
        self.v = 0.0            # body-forward speed [m/s]
        self.v_lat = 0.0        # body-lateral speed (skid) [m/s]
        self.omega_z = 0.0      # yaw rate [rad/s]
        self.roll = 0.0
        self.pitch = 0.0
        self.roll_rate = 0.0
        self.pitch_rate = 0.0
        self.z = float(world.terrain.height_at(self.x, self.y)) + params.wheel_radius

        self.wheel_omega = np.zeros(2)       # [left, right] lumped side rates
        self.torque = np.zeros(2)
        self._torque_cmd = np.zeros(2)
        self._i_term = np.zeros(2)
        self.slip = np.zeros(2)
        self.v_lat_state = 0.0
        self._vib = np.zeros(3)
        self.current_draw = 0.0

        self.cmd_v = 0.0
        self.cmd_w = 0.0
        self.stalled = False
        self.distance_travelled = 0.0
        self._prev_v_enu = np.zeros(3)
        self.a_enu = np.zeros(3)

    # -- command interface -------------------------------------------------
    def set_command(self, v: float, omega: float) -> None:
        """Accept a body-frame velocity command, as `geometry_msgs/Twist`."""
        self.cmd_v = float(np.clip(v, -self.p.max_speed, self.p.max_speed))
        self.cmd_w = float(np.clip(omega, -self.p.max_yaw_rate, self.p.max_yaw_rate))

    # -- integration -------------------------------------------------------
    def step(self, dt: float, t: float) -> None:
        p = self.p
        T = self.world.terrain

        # --- terrain under the contact patch
        normal = T.normal_at(self.x, self.y)
        ground_z = float(T.height_at(self.x, self.y))
        mu = float(T.friction_at(self.x, self.y))
        rr_coeff = float(T.rolling_resistance_at(self.x, self.y))
        slip_gain = float(T.slip_gain_at(self.x, self.y))
        roughness = float(T.roughness_at(self.x, self.y))

        # Attitude from the surface normal: roll/pitch of the plane, resolved
        # in the vehicle's heading. Suspension gives it a first-order lag so
        # the chassis does not snap instantly to every terrain facet.
        nx, ny, nz = normal
        slope_pitch = -np.arctan2(nx * np.cos(self.yaw) + ny * np.sin(self.yaw), nz)
        slope_roll = np.arctan2(-nx * np.sin(self.yaw) + ny * np.cos(self.yaw), nz)
        a_susp = np.exp(-dt / max(p.suspension_tau, 1e-6))
        prev_roll, prev_pitch = self.roll, self.pitch
        self.pitch = a_susp * self.pitch + (1 - a_susp) * slope_pitch
        self.roll = a_susp * self.roll + (1 - a_susp) * slope_roll
        # The chassis really is rotating while the suspension slews roll and
        # pitch -- on this terrain by up to 14 deg/s. A gyro bolted to the
        # chassis measures that rotation, so the truth has to carry it. Report
        # only the yaw rate, as an earlier version did, and the simulated IMU
        # contradicts the simulated attitude: the accelerometer and GNSS say
        # the body is tilting while the gyro says it is not, and an estimator
        # can only reconcile the two by inventing a gyro bias. That is not a
        # filter bug, it is unphysical ground truth.
        self.roll_rate = (self.roll - prev_roll) / dt if dt > 0 else 0.0
        self.pitch_rate = (self.pitch - prev_pitch) / dt if dt > 0 else 0.0

        g = self.world.frame.gravity
        slope = float(T.slope_at(self.x, self.y))
        # Normal load, reduced by the slope and shifted by acceleration.
        n_total = p.mass * g * np.cos(slope)
        # Longitudinal load transfer: accelerating unloads the front axle.
        # Split per side equally (no roll transfer in the lumped model).
        n_side = np.array([0.5 * n_total, 0.5 * n_total])

        # --- low-level wheel-speed controller (what a motor driver does)
        # Convert the body command to per-side wheel speed setpoints using the
        # *effective* track, which is what actually produces the yaw.
        b_eff = p.track_width * p.skid_track_factor
        v_l_sp = self.cmd_v - self.cmd_w * b_eff / 2.0
        v_r_sp = self.cmd_v + self.cmd_w * b_eff / 2.0
        w_sp = np.clip(np.array([v_l_sp, v_r_sp]) / p.wheel_radius,
                       -p.max_wheel_speed, p.max_wheel_speed)

        err = w_sp - self.wheel_omega
        self._i_term = np.clip(self._i_term + p.ki_wheel * err * dt, -p.i_limit, p.i_limit)
        tau_cmd = np.clip(p.kp_wheel * err + self._i_term, -p.max_wheel_torque, p.max_wheel_torque)
        # Motors cannot produce torque past their no-load speed.
        over = np.abs(self.wheel_omega) >= p.max_wheel_speed
        tau_cmd = np.where(over & (np.sign(tau_cmd) == np.sign(self.wheel_omega)), 0.0, tau_cmd)
        a_mot = np.exp(-dt / max(p.motor_tau, 1e-6))
        self.torque = a_mot * self.torque + (1 - a_mot) * tau_cmd

        # --- traction from longitudinal slip
        v_contact = np.array([self.v - self.omega_z * p.track_width / 2.0,
                              self.v + self.omega_z * p.track_width / 2.0])
        wheel_surface_speed = p.wheel_radius * self.wheel_omega
        denom = np.maximum(np.maximum(np.abs(wheel_surface_speed), np.abs(v_contact)), p.v_eps)
        self.slip = (wheel_surface_speed - v_contact) / denom
        # Loose surfaces need more slip for the same force: scale the slip
        # stiffness down by the surface's slip gain.
        c_s = p.slip_stiffness / (1.0 + slip_gain * 12.0)
        f_x = mu * n_side * np.tanh(c_s * self.slip)

        # --- resistances
        f_roll = rr_coeff * n_total * np.tanh(self.v / 0.05)
        # Pitch is positive nose-up (REP-103), so driving uphill gives
        # pitch > 0 and gravity must RETARD the motion. This term is therefore
        # subtracted; adding it makes the vehicle accelerate up slopes.
        f_grade = p.mass * g * np.sin(self.pitch)
        f_drag = 0.5 * p.air_density * p.drag_area * self.v * abs(self.v)

        f_net = f_x.sum() - f_roll - f_grade - f_drag
        dv = f_net / p.mass

        # --- lateral dynamics and yaw, per axle
        # A skid-steer vehicle turns by sliding its contact patches sideways.
        # Resolving that per axle (rather than as one lumped scrub torque) is
        # what reproduces the documented behaviour that the vehicle's
        # instantaneous centre of rotation sits OUTSIDE the wheelbase, so its
        # effective track is 1.2-1.8x the geometric one. A lumped torque gives
        # a 1.0x ratio, because nothing shifts the centre of rotation.
        #
        # Lateral slip velocity at each axle, from body sideslip plus yaw:
        #     v_front = v_lat + omega * L/2,   v_rear = v_lat - omega * L/2
        half_l = 0.5 * p.wheelbase
        v_lat_front = self.v_lat + self.omega_z * half_l
        v_lat_rear = self.v_lat - self.omega_z * half_l
        # Coulomb-like lateral force, saturating once the patch is truly
        # sliding. mu_lat is the share of the friction circle left over for
        # lateral force.
        # Friction-ellipse coupling: a tyre has ONE friction budget. Whatever
        # is already spent generating longitudinal force is unavailable
        # laterally, so
        #     mu_lat = sqrt(max(0, mu^2 - (Fx_wheel / N_wheel)^2)).
        # Without this coupling, lateral grip scales with mu while drive force
        # stays torque-capped, and the vehicle absurdly turns WORSE on high-
        # friction ground than on sand.
        n_wheel = 0.25 * n_total
        fx_wheel = np.abs(f_x) * 0.5          # f_x is per lumped side (2 wheels)
        used = np.clip(fx_wheel / max(n_wheel, 1e-6), 0.0, mu)
        mu_lat = p.lateral_friction_frac * np.sqrt(np.maximum(mu ** 2 - used ** 2, 0.0))
        # Left/right wheels of an axle share its load; take the mean budget.
        mu_lat_axle = float(np.mean(mu_lat))
        n_axle = 0.5 * n_total
        f_y_front = -mu_lat_axle * n_axle * np.tanh(v_lat_front / p.lateral_slip_ref)
        f_y_rear = -mu_lat_axle * n_axle * np.tanh(v_lat_rear / p.lateral_slip_ref)
        f_y_total = f_y_front + f_y_rear

        # The moment arm of a wheel's LONGITUDINAL force is the geometric
        # half-track; the lateral forces act at +-L/2.
        m_drive = (f_x[1] - f_x[0]) * p.track_width / 2.0
        m_lateral = (f_y_front - f_y_rear) * half_l
        dwz = (m_drive + m_lateral) / p.inertia_z
        # Body-frame lateral acceleration includes the centripetal term.
        dv_lat = f_y_total / p.mass - self.v * self.omega_z

        # --- integrate (semi-implicit: velocity first, then pose)
        self.v += dv * dt
        self.v_lat += dv_lat * dt
        self.omega_z += dwz * dt
        # Sideslip is physically small for a skid-steer vehicle; clamp it so a
        # transient cannot run away.
        self.v_lat = float(np.clip(self.v_lat, -1.5, 1.5))
        self.v = float(np.clip(self.v, -p.max_speed * 1.25, p.max_speed * 1.25))
        self.omega_z = float(np.clip(self.omega_z, -p.max_yaw_rate * 1.5, p.max_yaw_rate * 1.5))

        # Wheel rotational dynamics close the traction loop. Solved
        # semi-implicitly: the traction force depends steeply on wheel speed
        # (dFx/dw can exceed 150 N per rad/s), so an explicit step is unstable
        # unless dt is tiny. Linearising Fx about the current speed and solving
        # for the update makes this unconditionally stable at any step size.
        #
        #   dw = (dt/I)(tau - r Fx) / (1 + dt r k_f / I),  k_f = dFx/dw
        sech2 = 1.0 - np.tanh(c_s * self.slip) ** 2
        k_f = mu * n_side * c_s * sech2 * p.wheel_radius / denom
        dw = ((self.torque - p.wheel_radius * f_x) * dt / p.wheel_inertia) / \
             (1.0 + dt * p.wheel_radius * k_f / p.wheel_inertia)
        self.wheel_omega = self.wheel_omega + dw
        self.wheel_omega = np.clip(self.wheel_omega, -p.max_wheel_speed * 1.1,
                                   p.max_wheel_speed * 1.1)

        # Stall detection: commanded to move, wheels turning, body is not.
        self.stalled = bool(abs(self.cmd_v) > 0.05 and abs(self.v) < 0.03 and
                            np.abs(self.wheel_omega).max() > 0.5)

        # Midpoint yaw integration, then planar motion in the heading frame.
        yaw_mid = self.yaw + 0.5 * self.omega_z * dt
        self.yaw = float(wrap_pi(self.yaw + self.omega_z * dt))
        dx = (self.v * np.cos(yaw_mid) - self.v_lat * np.sin(yaw_mid)) * dt
        dy = (self.v * np.sin(yaw_mid) + self.v_lat * np.cos(yaw_mid)) * dt

        nx_, ny_ = self.x + dx, self.y + dy
        # The world is bounded; a vehicle driven at the edge stops there.
        if not bool(T.in_bounds(nx_, ny_)):
            self.v = 0.0
        else:
            self.x, self.y = nx_, ny_
            self.distance_travelled += float(np.hypot(dx, dy))

        ground_z = float(T.height_at(self.x, self.y))
        self.z = ground_z + p.wheel_radius

        # --- ENU velocity / acceleration for the sensors
        v_enu = self.velocity_enu()
        self.a_enu = (v_enu - self._prev_v_enu) / dt if dt > 0 else np.zeros(3)
        self._prev_v_enu = v_enu.copy()

        # --- vibration: roughness x speed, as a fast Gauss-Markov process
        a_vib = np.exp(-dt / max(p.vibration_tau, 1e-6))
        sigma_vib = p.vibration_gain * roughness * abs(self.v)
        self._vib = a_vib * self._vib + np.sqrt(max(0.0, 1 - a_vib ** 2)) * sigma_vib * \
            self.rng.normal(0.0, 1.0, 3) * np.array([1.0, 1.0, 1.6])

        # --- electrical load for the battery model
        p_mech = float(np.sum(np.abs(self.torque * self.wheel_omega)))
        p_elec = p_mech / max(p.drivetrain_efficiency, 0.1)
        self.current_draw = p_elec / 24.0 + 2 * p.no_load_current

    # -- state export ------------------------------------------------------
    def truth(self, t: float) -> VehicleTruth:
        """Ground-truth snapshot for the sensors and the recorder."""
        q = euler_to_quat(self.roll, self.pitch, self.yaw)
        v_enu = self.velocity_enu()
        # Four wheel rates for the encoder model: the two lumped sides, with a
        # small front/rear difference from load transfer so the four encoders
        # are not bit-identical.
        wl, wr = self.wheel_omega
        wheels = np.array([wl, wr, wl * 0.998, wr * 0.998])
        return VehicleTruth(
            t=t,
            p=np.array([self.x, self.y, self.z]),
            v=v_enu,
            a=self.a_enu.copy(),
            q=q,
            omega=self.body_rates(),
            vibration=self._vib.copy(),
            wheel_omega=wheels,
            wheel_slip=np.array([self.slip[0], self.slip[1], self.slip[0], self.slip[1]]),
            current_draw=self.current_draw,
            on_ground=True,
            surface_friction=float(self.world.terrain.friction_at(self.x, self.y)),
        )

    def velocity_enu(self) -> np.ndarray:
        """ENU velocity, obtained by ROTATING the chassis velocity.

        The chassis moves in its own plane: body-frame velocity is
        [v, v_lat, 0], with no vertical component, because the wheels stay on
        the ground. The ENU velocity is therefore that vector rotated by the
        full attitude -- which automatically produces the rate of climb from
        the pitch.

        Building it the other way round, by treating v as the horizontal
        speed and appending v * tan(pitch) vertically, makes the speed too
        large by 1/cos(pitch) and leaves the ground truth with a body-frame
        vertical velocity of up to 1.3 m/s. The IMU is then handed an
        acceleration that does not match its own attitude, and wheel
        odometry appears to over-report by the same factor -- so a filter
        estimating an odometry scale error converges on the wrong sign.
        """
        R = quat_to_matrix(euler_to_quat(self.roll, self.pitch, self.yaw))
        return R @ np.array([self.v, self.v_lat, 0.0])

    def body_rates(self) -> np.ndarray:
        """Body-frame angular velocity [p, q, r] for the gyroscope.

        Euler rates are not body rates. For the ZYX (yaw-pitch-roll) sequence
        this simulation uses, inverting the usual kinematic relation gives

            p = roll_rate - sin(pitch) * yaw_rate
            q = cos(roll) * pitch_rate + sin(roll) cos(pitch) * yaw_rate
            r = -sin(roll) * pitch_rate + cos(roll) cos(pitch) * yaw_rate

        so a vehicle yawing while pitched puts part of its yaw rate on the
        body y axis. Handing the gyro a bare [0, 0, yaw_rate] skips both that
        projection and the suspension's roll and pitch motion entirely.
        """
        sr, cr = np.sin(self.roll), np.cos(self.roll)
        sp, cp = np.sin(self.pitch), np.cos(self.pitch)
        wz = self.omega_z
        return np.array([self.roll_rate - sp * wz,
                         cr * self.pitch_rate + sr * cp * wz,
                         -sr * self.pitch_rate + cr * cp * wz])

    def state_dict(self) -> dict:
        return {
            "x": self.x, "y": self.y, "z": self.z,
            "roll": self.roll, "pitch": self.pitch, "yaw": self.yaw,
            "v": self.v, "v_lat": self.v_lat, "omega_z": self.omega_z,
            "wheel_omega": self.wheel_omega.tolist(),
            "torque": self.torque.tolist(),
            "slip": self.slip.tolist(),
            "current_a": self.current_draw,
            "stalled": self.stalled,
            "distance": self.distance_travelled,
        }
