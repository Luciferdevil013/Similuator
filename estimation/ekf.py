"""Error-state (indirect) Kalman filter for INS / GNSS / odometry fusion.

Why error-state rather than a direct EKF on the quaternion: the attitude error
is parameterised as a 3-vector rotation, so the covariance stays full rank and
there is no quaternion-norm constraint to fight. This is the standard
formulation in PX4's EKF2 and in every serious INS implementation.

State
-----
Nominal (carried outside the covariance):
    p (3) ENU position, v (3) ENU velocity, q (4) body->ENU quaternion,
    b_g (3) gyro bias, b_a (3) accel bias, b_baro (1) barometer bias

Error state, 16 elements, which is what P describes:
    [ dp(3)  dv(3)  dtheta(3)  db_g(3)  db_a(3)  db_baro(1) ]

The report's baseline is a 15-state EKF. The barometer-bias state is the one
addition, and it is there for a concrete reason: the barometer's reference
pressure drifts with the weather (modelled as a ~30 Pa Gauss-Markov process,
about 2.5 m of altitude). Without a bias state that drift is indistinguishable
from real altitude change, so either the filter follows it or the barometer has
to be de-weighted into uselessness. PX4's EKF2 carries this state for the same
reason.

Propagation (strapdown, body-frame error):
    w = w_meas - b_g,   a = a_meas - b_a
    q <- q (x) exp(w dt / 2)
    v <- v + (R a + g) dt
    p <- p + v dt + (R a + g) dt^2 / 2

Error dynamics:
    d/dt dp     = dv
    d/dt dv     = -R [a]x dtheta - R db_a + n_a
    d/dt dtheta = -[w]x dtheta - db_g + n_g
    d/dt db_*   = n_b*

Observations
------------
    GNSS position  -- ENU, with the antenna lever arm, R from the receiver
    GNSS velocity  -- Doppler, far more accurate than differencing position
    barometer      -- altitude, through the bias state
    wheel odometry -- body-frame longitudinal speed, plus the non-holonomic
                      lateral constraint v_body_y = 0. The lateral constraint
                      is what makes heading observable while dead reckoning:
                      it ties the velocity direction to the body axis.
    magnetometer   -- tilt-compensated yaw, weak (sigma ~15 deg) because an
                      uncalibrated vehicle magnetometer is genuinely poor
    zero-velocity  -- when the encoders say stopped, clamp velocity. This is
                      the strongest bias-observability event available and
                      real INS implementations lean on it heavily.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from sim.rotations import (quat_mul, quat_normalize, quat_to_euler,
                           quat_to_matrix, rotvec_to_quat, skew, wrap_pi)

# Error-state index blocks.
IP = slice(0, 3)
IV = slice(3, 6)
ITH = slice(6, 9)
IBG = slice(9, 12)
IBA = slice(12, 15)
IBB = slice(15, 16)
# Wheel-odometry scale error. Terrain slip makes the encoders over-report
# ground speed by several percent, and the fraction changes with the surface,
# so it is a state to be estimated rather than a calibration constant. It is
# observable whenever GNSS is available, and estimating it is what makes the
# odometry worth dead-reckoning on once GNSS is gone.
IOS = slice(16, 17)
NX = 17


@dataclass
class EkfConfig:
    # --- process noise: must match the IMU's documented densities ---------
    gyro_noise_density: float = 4.887e-5     # rad/s/sqrt(Hz)
    accel_noise_density: float = 6.867e-4    # m/s^2/sqrt(Hz)
    gyro_bias_rw: float = 4.0e-6             # rad/s/sqrt(s)
    accel_bias_rw: float = 1.0e-4            # m/s^2/sqrt(s)
    baro_bias_rw: float = 0.02               # m/sqrt(s)
    # Odometry scale drifts as the vehicle crosses between surfaces.
    odom_scale_rw: float = 0.004             # 1/sqrt(s)
    init_odom_scale_sigma: float = 0.12      # fractional
    # Inflation on the IMU densities. A real IMU sees vibration and
    # unmodelled scale/misalignment error that the white-noise density does
    # not cover, so the filter is told its inertial inputs are somewhat worse
    # than the datasheet. Tuning this below 1.0 is how INS filters diverge.
    imu_noise_inflation: float = 2.5

    # --- observation noise -----------------------------------------------
    gnss_pos_inflation: float = 1.0          # trust the receiver's own covariance
    gnss_vel_inflation: float = 1.2
    # A diverged filter rejects every measurement forever unless the gate can
    # reopen; these control that escape hatch.
    reject_lockout_count: int = 8
    reject_lockout_inflation: float = 4.0
    lockout_tags: tuple[str, ...] = ("gnss_pos", "gnss_vel")
    # Wheel odometry is the only velocity reference left in a GNSS outage. If
    # the velocity estimate has drifted outside the gate, a run of rejected
    # odometry is the filter being wrong, not the wheels: widen the VELOCITY
    # covariance only (never position) so the encoders can pull it back.
    # 15 samples at 50 Hz is 0.3 s, longer than a transient slip.
    odom_lockout_count: int = 15
    # How much the specific force may change over one transport delay. This
    # sets how far a delayed measurement may be trusted after extrapolation.
    accel_jerk_sigma: float = 2.0            # m/s^2
    # Lateral slip admitted per rad/s of yaw rate (skid-steer ICR shift).
    odom_lateral_rate_sigma: float = 0.35    # (m/s) per (rad/s)
    # Fractional speed error: nominal-radius error plus unmodelled slip.
    odom_scale_sigma: float = 0.08   # residual random part, bias is a state
    baro_sigma: float = 0.35                 # m
    odom_speed_sigma: float = 0.06           # m/s
    odom_lateral_sigma: float = 0.10         # m/s, non-holonomic constraint
    # A ground vehicle does not move along its own body z axis either; the
    # allowance covers suspension travel and terrain roughness. Without this
    # row vertical body velocity is unobserved once GNSS is gone.
    odom_vertical_sigma: float = 0.15        # m/s
    mag_yaw_sigma: float = 0.26              # rad (~15 deg)
    zupt_vel_sigma: float = 0.02             # m/s
    zupt_gyro_sigma: float = 0.004           # rad/s

    # --- gating -----------------------------------------------------------
    gnss_pos_gate: float = 16.27             # chi2(3), p = 0.999
    gnss_vel_gate: float = 16.27
    scalar_gate: float = 10.83               # chi2(1), p = 0.999

    # --- initial uncertainty ---------------------------------------------
    init_pos_sigma: float = 3.0
    init_vel_sigma: float = 0.5
    init_att_sigma: float = 0.09             # rad, roll/pitch from gravity
    init_yaw_sigma: float = 0.6              # rad, yaw poorly known at start
    init_bg_sigma: float = 4.0e-3
    init_ba_sigma: float = 6.0e-2
    init_bb_sigma: float = 2.5

    # Covariance floor on horizontal position, in m^2 per axis.
    #
    # The filter treats each GNSS fix as independent, but roughly 85% of real
    # GNSS error variance is correlated over ~150 s (ionosphere, clock,
    # ephemeris, multipath). Averaging does not reduce that part, so without a
    # floor the reported sigma shrinks towards the white-noise limit -- it was
    # measured at 0.15 m while the actual error sat at 0.95 m, a 6-sigma
    # inconsistency. An overconfident filter is the dangerous direction: the
    # resilience manager's thresholds and the monitor's gate both read sigma.
    #
    # The floor is set to the correlated error's standard deviation, so the
    # filter never claims better accuracy than the un-modelled error allows.
    # The alternative is to carry three GNSS bias states, which is more
    # elegant but would also absorb a slowly-injected offset into the bias
    # estimate and blunt exactly the detection this platform exists to study.
    pos_variance_floor: float = 0.49         # m^2  (0.7 m per axis)
    alt_variance_floor: float = 1.0          # m^2  (baro bias is slower still)

    gravity: float = 9.80665
    max_dt: float = 0.05                     # s, clamp on IMU gaps


class ErrorStateEkf:
    def __init__(self, cfg: EkfConfig | None = None):
        self.cfg = cfg or EkfConfig()
        c = self.cfg
        self.p = np.zeros(3)
        self.v = np.zeros(3)
        self.q = np.array([1.0, 0.0, 0.0, 0.0])
        self.b_g = np.zeros(3)
        self.b_a = np.zeros(3)
        self.b_baro = 0.0
        self.odom_scale = 0.0        # fractional, 0 = encoders read true speed

        self.P = np.diag(np.concatenate([
            np.full(3, c.init_pos_sigma ** 2),
            np.full(3, c.init_vel_sigma ** 2),
            np.array([c.init_att_sigma ** 2, c.init_att_sigma ** 2, c.init_yaw_sigma ** 2]),
            np.full(3, c.init_bg_sigma ** 2),
            np.full(3, c.init_ba_sigma ** 2),
            np.array([c.init_bb_sigma ** 2]),
            np.array([c.init_odom_scale_sigma ** 2]),
        ]))
        self.g_enu = np.array([0.0, 0.0, -c.gravity])

        self.t = 0.0
        self.omega_body = np.zeros(3)
        self._consec_reject: dict[str, int] = {}
        self.last_accel_enu = np.zeros(3)
        self.last_gyro_raw = np.zeros(3)
        self.initialised = False
        self.last_imu_t: float | None = None
        self.imu_count = 0
        # Diagnostics the monitors and the recorder read. Writing them here
        # keeps the filter the single source of innovation statistics.
        self.last = {
            "gnss_pos_nis": 0.0, "gnss_pos_innov": np.zeros(3),
            "gnss_pos_rejected": False, "gnss_vel_nis": 0.0,
            "baro_innov": 0.0, "odom_innov": np.zeros(3), "mag_innov": 0.0,
            "updates": 0, "rejections": 0,
        }

    # -- initialisation ----------------------------------------------------
    def initialise(self, t: float, position: np.ndarray, yaw: float = 0.0, *,
                   velocity: np.ndarray | None = None,
                   roll: float = 0.0, pitch: float = 0.0) -> None:
        from sim.rotations import euler_to_quat
        self.t = float(t)
        self.p = np.asarray(position, dtype=float).copy()
        self.v = np.zeros(3) if velocity is None else np.asarray(velocity, dtype=float).copy()
        self.q = euler_to_quat(roll, pitch, yaw)
        self.last_imu_t = float(t)
        self.initialised = True

    # -- convenience -------------------------------------------------------
    @property
    def R(self) -> np.ndarray:
        return quat_to_matrix(self.q)

    @property
    def euler(self) -> np.ndarray:
        return quat_to_euler(self.q)

    @property
    def yaw(self) -> float:
        return float(quat_to_euler(self.q)[2])

    def pos_sigma_horizontal(self) -> float:
        return float(np.sqrt(max(self.P[0, 0] + self.P[1, 1], 0.0)))

    def vel_sigma(self) -> float:
        return float(np.sqrt(max(np.trace(self.P[IV, IV]), 0.0)))

    def yaw_sigma(self) -> float:
        return float(np.sqrt(max(self.P[8, 8], 0.0)))

    # -- propagation -------------------------------------------------------
    def propagate(self, t: float, gyro: np.ndarray, accel: np.ndarray) -> None:
        """Advance the nominal state and covariance on one IMU sample."""
        if not self.initialised:
            return
        c = self.cfg
        dt = t - (self.last_imu_t if self.last_imu_t is not None else t)
        if dt <= 0:
            return
        # A long gap means samples were lost. Clamping keeps the linearisation
        # valid; the lost time still shows up as grown covariance.
        dt = min(dt, c.max_dt)
        self.last_imu_t = t
        self.t = t
        self.imu_count += 1

        # Keep the RAW gyro, not the corrected rate, for the GNSS velocity
        # lever arm. The correction must be re-applied with the *current* bias
        # estimate at use time, otherwise the bias column of that update's
        # Jacobian claims a sensitivity the cached value does not have, and
        # every epoch injects a spurious gyro-bias correction -- which then
        # drifts yaw through the attitude propagation.
        self.last_gyro_raw = np.asarray(gyro, dtype=float).copy()
        w = np.asarray(gyro, dtype=float) - self.b_g
        self.omega_body = w.copy()
        a_b = np.asarray(accel, dtype=float) - self.b_a
        R = quat_to_matrix(self.q)
        a_enu = R @ a_b + self.g_enu
        self.last_accel_enu = a_enu.copy()

        # --- nominal state: trapezoidal position, exact attitude exponential
        self.p = self.p + self.v * dt + 0.5 * a_enu * dt * dt
        self.v = self.v + a_enu * dt
        self.q = quat_normalize(quat_mul(self.q, rotvec_to_quat(w * dt)))

        # --- error-state transition
        F = np.zeros((NX, NX))
        F[IP, IV] = np.eye(3)
        F[IV, ITH] = -R @ skew(a_b)
        F[IV, IBA] = -R
        F[ITH, ITH] = -skew(w)
        F[ITH, IBG] = -np.eye(3)
        Fdt = F * dt
        # Second-order expansion: the dv/dtheta coupling is strong enough under
        # high specific force that first order loses consistency.
        Phi = np.eye(NX) + Fdt + 0.5 * (Fdt @ Fdt)

        # --- process noise, discretised
        k = c.imu_noise_inflation ** 2
        qa = (c.accel_noise_density ** 2) * k
        qg = (c.gyro_noise_density ** 2) * k
        qbg = c.gyro_bias_rw ** 2
        qba = c.accel_bias_rw ** 2
        qbb = c.baro_bias_rw ** 2

        Q = np.zeros((NX, NX))
        # Accelerometer white noise drives velocity, and position through it;
        # the dt^3/3 and dt^2/2 cross terms matter over an outage.
        Q[IV, IV] = np.eye(3) * qa * dt
        Q[IP, IP] = np.eye(3) * qa * dt ** 3 / 3.0
        Q[IP, IV] = np.eye(3) * qa * dt ** 2 / 2.0
        Q[IV, IP] = Q[IP, IV]
        Q[ITH, ITH] = np.eye(3) * qg * dt
        Q[IBG, IBG] = np.eye(3) * qbg * dt
        Q[IBA, IBA] = np.eye(3) * qba * dt
        Q[IBB, IBB] = np.eye(1) * qbb * dt
        Q[IOS, IOS] = np.eye(1) * c.odom_scale_rw ** 2 * dt

        self.P = Phi @ self.P @ Phi.T + Q
        self._symmetrise()

    # -- generic update ----------------------------------------------------
    def _update(self, innov: np.ndarray, H: np.ndarray, Rm: np.ndarray,
                gate: float | None, tag: str) -> tuple[bool, float]:
        """Joseph-form Kalman update with chi-square gating.

        Returns (accepted, NIS). The NIS is returned whether or not the update
        is accepted, because a rejected measurement's NIS is exactly the signal
        the fault monitors need.
        """
        S = H @ self.P @ H.T + Rm
        try:
            Sinv = np.linalg.inv(S)
        except np.linalg.LinAlgError:
            return False, float("inf")
        nis = float(innov @ Sinv @ innov)
        # Publish the innovation covariance from the PRIOR, which is what a
        # drift detector must normalise by. Reading the posterior P after the
        # update understates it and makes every normalised residual look huge.
        self.last["%s_S_diag" % tag] = np.diag(S).copy()
        if gate is not None and nis > gate:
            self.last["rejections"] += 1
            n = self._consec_reject.get(tag, 0) + 1
            self._consec_reject[tag] = n
            # Gate lockout guard. A chi-square gate protects a *converged*
            # filter from outliers, but if the filter itself diverges the gate
            # rejects every subsequent measurement and the divergence becomes
            # permanent -- the estimator can never be pulled back even though
            # the sensor is healthy. After a sustained run of rejections the
            # honest conclusion is that the covariance, not the measurement,
            # is wrong: inflate it so the gate reopens and the filter can
            # re-acquire. The rejections are still counted and reported, so a
            # genuinely faulty stream is not silently swallowed.
            # Only the absolute aiding sources can pull a diverged filter
            # back. A rejected odometry constraint means the vehicle is
            # slipping or sliding, which is information, not divergence --
            # inflating the covariance for it would just loosen the filter
            # every time the ground got loose.
            if (tag in self.cfg.lockout_tags
                    and n >= self.cfg.reject_lockout_count):
                self.P[:6, :6] *= self.cfg.reject_lockout_inflation
                self._symmetrise()
                self._consec_reject[tag] = 0
                self.last["lockout_resets"] = self.last.get("lockout_resets", 0) + 1
            elif tag == "odom" and n >= self.cfg.odom_lockout_count:
                self.P[IV, IV] *= self.cfg.reject_lockout_inflation
                self._symmetrise()
                self._consec_reject[tag] = 0
                self.last["odom_lockout_resets"] = (
                    self.last.get("odom_lockout_resets", 0) + 1)
            return False, nis
        self._consec_reject[tag] = 0

        K = self.P @ H.T @ Sinv
        dx = K @ innov
        # Joseph form: numerically stable and keeps P positive definite even
        # after thousands of updates, unlike (I-KH)P.
        IKH = np.eye(NX) - K @ H
        self.P = IKH @ self.P @ IKH.T + K @ Rm @ K.T
        self._inject(dx)
        self._symmetrise()
        self.last["updates"] += 1
        return True, nis

    def _inject(self, dx: np.ndarray) -> None:
        """Apply the error state to the nominal state and reset it to zero."""
        self.p = self.p + dx[IP]
        self.v = self.v + dx[IV]
        # Body-frame (local) attitude error: q <- q (x) exp(dtheta/2)
        self.q = quat_normalize(quat_mul(self.q, rotvec_to_quat(dx[ITH])))
        self.b_g = self.b_g + dx[IBG]
        self.b_a = self.b_a + dx[IBA]
        self.b_baro = float(self.b_baro + dx[IBB][0])
        self.odom_scale = float(self.odom_scale + dx[IOS][0])

    def _symmetrise(self) -> None:
        self.P = 0.5 * (self.P + self.P.T)
        # Variance floors stop a well-observed channel collapsing to zero and
        # then refusing all further information.
        d = np.diag(self.P).copy()
        c = self.cfg
        floor = np.concatenate([
            np.array([c.pos_variance_floor, c.pos_variance_floor, c.alt_variance_floor]),
            np.full(3, 1e-8), np.full(3, 1e-10),
            np.full(3, 1e-14), np.full(3, 1e-12), np.array([1e-6]),
            np.array([1e-8])])
        np.fill_diagonal(self.P, np.maximum(d, floor))

    # -- observations ------------------------------------------------------
    def update_gnss_position(self, p_meas: np.ndarray, cov: np.ndarray,
                             antenna_offset: np.ndarray | None = None,
                             *, age: float = 0.0,
                             gate: bool = True) -> tuple[bool, float]:
        R = quat_to_matrix(self.q)
        r = np.zeros(3) if antenna_offset is None else np.asarray(antenna_offset, dtype=float)
        # The measurement describes where the antenna was when the receiver
        # sampled it, not where it is now. Carry it forward over the known
        # transport delay with the filter's own velocity, then widen R by the
        # uncertainty in that extrapolation; ignoring the delay biases the
        # innovation by v * age, which at 1.8 m/s and 0.2 s is 0.36 m.
        age = max(0.0, float(age))
        pred = self.p + R @ r
        innov = np.asarray(p_meas, dtype=float) + self.v * age - pred
        H = np.zeros((3, NX))
        H[:, IP] = np.eye(3)
        # The lever arm makes position sensitive to attitude.
        H[:, ITH] = -R @ skew(r)
        Rm = np.asarray(cov, dtype=float).reshape(3, 3) * self.cfg.gnss_pos_inflation
        Rm = Rm + np.eye(3) * (self.cfg.accel_jerk_sigma * age * age * 0.5) ** 2
        ok, nis = self._update(innov, H, Rm,
                               self.cfg.gnss_pos_gate if gate else None, "gnss_pos")
        self.last.update({"gnss_pos_nis": nis, "gnss_pos_innov": innov,
                          "gnss_pos_rejected": not ok})
        return ok, nis

    def update_gnss_velocity(self, v_meas: np.ndarray, cov: np.ndarray,
                             antenna_offset: np.ndarray | None = None,
                             *, age: float = 0.0,
                             gate: bool = True) -> tuple[bool, float]:
        """Doppler velocity observation, referred to the antenna phase centre.

        The receiver measures the velocity of its *antenna*, not of the IMU
        origin the state vector tracks.  The two differ by the rotational term
        R (omega x r), which for r = 0.35 m and a 1.6 rad/s turn is 0.56 m/s --
        sixteen sigma against a 0.035 m/s Doppler measurement.  Leaving it out
        does not merely bias the update, it makes the chi-square gate reject
        every epoch of a turn, which removes the one observation that keeps
        roll and pitch observable while the vehicle is moving.
        """
        R = quat_to_matrix(self.q)
        r = np.zeros(3) if antenna_offset is None else np.asarray(antenna_offset, dtype=float)
        omega = self.last_gyro_raw - self.b_g
        w_r = np.cross(omega, r)
        pred = self.v + R @ w_r
        # Same transport delay as the position fix. Velocity is the tighter
        # measurement of the two (0.035 m/s against 1.4 m), so the delay
        # matters far more here: one tenth of a second of 1 m/s^2 braking is
        # three sigma all by itself.
        age = max(0.0, float(age))
        innov = np.asarray(v_meas, dtype=float) + self.last_accel_enu * age - pred
        H = np.zeros((3, NX))
        H[:, IV] = np.eye(3)
        # Attitude rotates the rotational term; gyro bias changes omega itself.
        H[:, ITH] = -R @ skew(w_r)
        H[:, IBG] = R @ skew(r)
        Rm = np.asarray(cov, dtype=float).reshape(3, 3) * self.cfg.gnss_vel_inflation
        Rm = Rm + np.eye(3) * (self.cfg.accel_jerk_sigma * age) ** 2
        ok, nis = self._update(innov, H, Rm,
                               self.cfg.gnss_vel_gate if gate else None, "gnss_vel")
        self.last.update({"gnss_vel_nis": nis, "gnss_vel_innov": innov,
                          "gnss_vel_rejected": not ok})
        return ok, nis

    def update_baro_altitude(self, alt_meas: float, sigma: float | None = None):
        """Altitude observation, offset by the estimated barometer bias."""
        s = self.cfg.baro_sigma if sigma is None else sigma
        innov = np.array([float(alt_meas) - (self.p[2] + self.b_baro)])
        H = np.zeros((1, NX))
        H[0, 2] = 1.0
        H[0, IBB] = 1.0
        ok, nis = self._update(innov, H, np.array([[s ** 2]]),
                               self.cfg.scalar_gate, "baro")
        self.last["baro_innov"] = float(innov[0])
        return ok, nis

    def update_wheel_odometry(self, speed_body_x: float, *,
                              speed_sigma: float | None = None,
                              lateral_sigma: float | None = None):
        """Body-frame velocity from the encoders, plus v_body_y = 0.

        The lateral constraint is the important half. It states that the
        vehicle cannot move sideways, which couples the velocity direction to
        the heading and is what keeps yaw observable with no GNSS. Its
        Jacobian therefore has an attitude block.
        """
        c = self.cfg
        ss = c.odom_speed_sigma if speed_sigma is None else speed_sigma
        # Wheel odometry error is dominated by a SCALE error, not by additive
        # noise: the encoder count is converted with a nominal wheel radius,
        # and the real rolling radius differs by about a percent while terrain
        # slip removes several percent more. Both act in proportion to speed,
        # and neither can be calibrated away because slip depends on the
        # surface. A fixed additive sigma therefore fits a standing vehicle
        # and rejects a sixth of every straight-line drive -- which is exactly
        # where the lateral constraint earns its keep.
        ss = float(np.hypot(ss, c.odom_scale_sigma * abs(float(speed_body_x))))
        # Measured on this platform: 10.4 percent total, of which 6.5 points
        # are the slip bias the state now absorbs, leaving ~8 percent random.
        ls = c.odom_lateral_sigma if lateral_sigma is None else lateral_sigma
        # "Cannot move sideways" is only true of an Ackermann vehicle. A
        # skid-steer machine turns *by* sliding its wheels, so its lateral
        # velocity grows with yaw rate: the instantaneous centre of rotation
        # sits off the axle by roughly omega * wheelbase. Holding the lateral
        # residual to a fixed 0.1 m/s therefore rejects half of every turn.
        # Widen the constraint with the turn rate instead of abandoning it --
        # it still pins the heading when driving straight, which is where it
        # does the work.
        ls = float(np.hypot(ls, c.odom_lateral_rate_sigma * abs(self.omega_body[2])))
        R = quat_to_matrix(self.q)
        v_body = R.T @ self.v
        # The encoders report (1 + scale) times the true forward speed.
        gain = 1.0 + self.odom_scale
        innov = np.array([float(speed_body_x) - gain * v_body[0],
                          0.0 - v_body[1],
                          0.0 - v_body[2]])
        # d(R^T v)/d(dtheta) = [R^T v]x  for a body-frame error perturbation.
        J = skew(v_body)
        H = np.zeros((3, NX))
        H[0, IV] = gain * R.T[0, :]
        H[1, IV] = R.T[1, :]
        H[2, IV] = R.T[2, :]
        H[0, ITH] = gain * J[0, :]
        H[1, ITH] = J[1, :]
        H[2, ITH] = J[2, :]
        # The scale error is observed through the forward speed only; the
        # non-holonomic constraints carry no scale.
        H[0, IOS] = v_body[0]
        Rm = np.diag([ss ** 2, ls ** 2, c.odom_vertical_sigma ** 2])
        ok, nis = self._update(innov, H, Rm, 16.27, "odom")   # chi2(3), p=0.999
        self.last["odom_innov"] = innov
        return ok, nis

    def update_mag_yaw(self, mag_body: np.ndarray, declination_rad: float,
                       sigma: float | None = None):
        """Tilt-compensated magnetic heading as a scalar yaw observation."""
        s = self.cfg.mag_yaw_sigma if sigma is None else sigma
        roll, pitch, yaw = quat_to_euler(self.q)
        m = np.asarray(mag_body, dtype=float)

        # Tilt-compensate by rotating the body field into a LEVEL frame using
        # the filter's own roll and pitch. Doing it with the rotation matrix,
        # rather than the textbook trigonometric compass formula, avoids
        # importing that formula's NED / y-right sign conventions into this
        # ENU / y-left system -- which is how an exactly-90-degree heading
        # offset got in here the first time.
        from sim.rotations import euler_to_quat
        R_level = quat_to_matrix(euler_to_quat(roll, pitch, 0.0))
        b = R_level @ m

        # In ENU with yaw measured from East about +z, a level magnetometer
        # sees  b_x = H sin(yaw + decl),  b_y = H cos(yaw + decl),
        # where H is the horizontal field intensity. Hence:
        if abs(b[0]) < 1e-15 and abs(b[1]) < 1e-15:
            return False, 0.0
        yaw_meas = np.arctan2(b[0], b[1]) - declination_rad
        innov = np.array([float(wrap_pi(yaw_meas - yaw))])
        # Yaw is not simply the third component of a BODY-frame attitude error.
        # From the Euler-rate kinematics for the Z-Y-X sequence,
        #     d(yaw) = [0, sin(roll)/cos(pitch), cos(roll)/cos(pitch)] . dtheta
        # which matters once the vehicle is tilted -- and a rover on a 14 deg
        # slope is always tilted.
        H = np.zeros((1, NX))
        secp = 1.0 / max(np.cos(pitch), 0.17)       # clamp near gimbal lock
        H[0, 6] = 0.0
        H[0, 7] = np.sin(roll) * secp
        H[0, 8] = np.cos(roll) * secp
        ok, nis = self._update(innov, H, np.array([[s ** 2]]),
                               self.cfg.scalar_gate, "mag")
        self.last["mag_innov"] = float(innov[0])
        return ok, nis

    def update_zero_velocity(self, *, with_gyro: bool = True):
        """Zero-velocity update for a confirmed-stationary vehicle.

        Clamping velocity to zero while the accelerometer still reports a
        specific force is what lets the filter separate accelerometer bias
        from genuine acceleration. With the gyro clamp it also pins gyro bias.
        """
        c = self.cfg
        innov = -self.v
        H = np.zeros((3, NX))
        H[:, IV] = np.eye(3)
        ok, _ = self._update(innov, H, np.eye(3) * c.zupt_vel_sigma ** 2, None, "zupt")
        if with_gyro:
            # Stationary means the true body rate is zero, so the current
            # gyro reading is bias: observe b_g directly.
            # (A zero innovation here only shrank the bias covariance without
            # ever correcting the bias, so yaw drifted ~2 deg/s while parked
            # and the vehicle restarted facing the wrong way.)
            innov_g = self.last_gyro_raw - self.b_g
            Hg = np.zeros((3, NX))
            Hg[:, IBG] = np.eye(3)
            self._update(innov_g, Hg, np.eye(3) * c.zupt_gyro_sigma ** 2, None, "zupt_g")
        return ok

    # -- export ------------------------------------------------------------
    def state_dict(self) -> dict:
        rpy = quat_to_euler(self.q)
        return {
            "t": self.t,
            "position": self.p.tolist(),
            "velocity": self.v.tolist(),
            "quaternion": self.q.tolist(),
            "roll_deg": float(np.degrees(rpy[0])),
            "pitch_deg": float(np.degrees(rpy[1])),
            "yaw_deg": float(np.degrees(rpy[2])),
            "gyro_bias": self.b_g.tolist(),
            "accel_bias": self.b_a.tolist(),
            "baro_bias": self.b_baro,
            "pos_sigma_h": self.pos_sigma_horizontal(),
            "pos_sigma_z": float(np.sqrt(max(self.P[2, 2], 0.0))),
            "vel_sigma": self.vel_sigma(),
            "yaw_sigma_deg": float(np.degrees(self.yaw_sigma())),
            "updates": self.last["updates"],
            "rejections": self.last["rejections"],
        }
