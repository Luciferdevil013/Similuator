"""MEMS IMU model (industrial grade, ICM-42688-P / BMI088 class).

Measurement equations
---------------------
Gyroscope, in body axes:

    w_meas = (I + M_g) (w_true + w_earth) + b_g(t) + G_g a_body + n_g
    b_g(t) = b_g(0) + rate random walk           [bias instability]
    n_g    ~ N(0, (ND_g / sqrt(dt))^2)           [white noise]

Accelerometer, measuring *specific force* (what an accelerometer physically
senses -- never the kinematic acceleration):

    f_body = R^T (a_enu - g_enu),   g_enu = (0, 0, -g)
    a_meas = (I + M_a) (f_body + lever-arm terms) + b_a(t) + n_a

The lever-arm terms account for the IMU not sitting at the body origin:

    f_imu = f_body + alpha x r + w x (w x r)

Every coefficient below is a published datasheet-class figure, listed with its
units, because the report requires each sensor's noise assumptions to be
documented rather than tuned to taste.

Why noise is scaled by 1/sqrt(dt): a noise *density* ND (units/sqrt(Hz))
produces discrete samples of standard deviation ND/sqrt(dt). That is the
scaling which makes the integrated angle random walk equal ND exactly, and it
is the same convention the EKF's process noise uses, so generator and
estimator agree by construction.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from ..msgs import Imu
from ..rotations import quat_to_matrix, skew
from .base import RandomWalk, Sensor, VehicleTruth


@dataclass
class ImuParams:
    # --- gyroscope ---------------------------------------------------------
    gyro_noise_density: float = 4.887e-5    # rad/s/sqrt(Hz)  (0.0028 deg/s/sqrt(Hz))
    gyro_bias_rw: float = 4.0e-6            # rad/s/sqrt(s)   in-run bias instability
    gyro_turn_on_bias: float = 3.5e-3       # rad/s, 1-sigma  (0.2 deg/s)
    gyro_scale_err: float = 0.005           # 1-sigma, fraction
    gyro_misalign: float = 1.75e-3          # 1-sigma, rad (0.1 deg)
    gyro_g_sens: float = 1.78e-4            # (rad/s)/(m/s^2)  ~0.1 deg/s/g
    gyro_range: float = 34.9                # rad/s (+-2000 deg/s)
    gyro_lsb: float = 1.065e-3              # rad/s per LSB (16-bit over +-2000 dps)

    # --- accelerometer -----------------------------------------------------
    accel_noise_density: float = 6.867e-4   # m/s^2/sqrt(Hz)  (70 ug/sqrt(Hz))
    accel_bias_rw: float = 1.0e-4           # m/s^2/sqrt(s)
    accel_turn_on_bias: float = 4.9e-2      # m/s^2, 1-sigma  (5 mg)
    accel_scale_err: float = 0.003          # 1-sigma, fraction
    accel_misalign: float = 1.75e-3         # 1-sigma, rad
    accel_range: float = 156.9              # m/s^2 (+-16 g)
    accel_lsb: float = 4.788e-3             # m/s^2 per LSB (16-bit over +-16 g)

    # --- mounting ----------------------------------------------------------
    lever_arm: np.ndarray = field(default_factory=lambda: np.array([0.08, 0.0, 0.12]))
    include_earth_rate: bool = True


class ImuSensor(Sensor):
    frame_id = "imu_link"

    def __init__(self, sensor_id: str, rng: np.random.Generator, *,
                 rate_hz: float = 200.0, gravity: float = 9.80665,
                 earth_rate_enu: np.ndarray | None = None,
                 params: ImuParams | None = None,
                 latency: float = 0.002, latency_jitter: float = 0.0004):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or ImuParams()
        self.gravity = float(gravity)
        self.g_enu = np.array([0.0, 0.0, -self.gravity])
        self.earth_rate_enu = (np.zeros(3) if earth_rate_enu is None or not self.p.include_earth_rate
                               else np.asarray(earth_rate_enu, dtype=float))

        # Fixed per-unit errors: drawn once at construction, exactly as a
        # physical unit has a fixed (unknown) calibration after power-up.
        self.b_g0 = rng.normal(0.0, self.p.gyro_turn_on_bias, 3)
        self.b_a0 = rng.normal(0.0, self.p.accel_turn_on_bias, 3)
        self.M_g = self._misalignment_matrix(rng, self.p.gyro_scale_err, self.p.gyro_misalign)
        self.M_a = self._misalignment_matrix(rng, self.p.accel_scale_err, self.p.accel_misalign)
        self.G_g = rng.normal(0.0, self.p.gyro_g_sens, (3, 3))

        # Time-varying bias instability.
        self.b_g = RandomWalk(self.p.gyro_bias_rw, rng, 3, initial=self.b_g0)
        self.b_a = RandomWalk(self.p.accel_bias_rw, rng, 3, initial=self.b_a0)

        self._last_omega = np.zeros(3)
        self._last_t: float | None = None
        self.saturated = False

    @staticmethod
    def _misalignment_matrix(rng, scale_sigma: float, misalign_sigma: float) -> np.ndarray:
        """Combined scale-factor and axis-misalignment error matrix M.

        Diagonal entries are scale errors; off-diagonals are small rotations
        between the nominal and true sensitive axes.
        """
        M = rng.normal(0.0, misalign_sigma, (3, 3))
        M[np.diag_indices(3)] = rng.normal(0.0, scale_sigma, 3)
        return M

    # -- noise helpers -----------------------------------------------------
    def _white(self, density: float, dt: float) -> np.ndarray:
        sigma = density / np.sqrt(max(dt, 1e-9))
        return self.rng.normal(0.0, 1.0, 3) * sigma * self.fault.noise_scale

    def _quantize(self, v: np.ndarray, lsb: float, limit: float) -> np.ndarray:
        """ADC saturation then uniform quantisation, in that physical order."""
        clipped = np.clip(v, -limit, limit)
        if np.any(np.abs(v) >= limit - 1e-12):
            self.saturated = True
        return np.round(clipped / lsb) * lsb

    # -- sampling ----------------------------------------------------------
    def _sample(self, truth: VehicleTruth, stamp: float) -> Imu:
        dt = self.period if self._last_t is None else max(stamp - self._last_t, 1e-6)
        self._last_t = stamp
        self.saturated = False

        R = quat_to_matrix(truth.q)          # body -> ENU
        w_true = np.asarray(truth.omega, dtype=float)

        # Angular acceleration by backward difference of the true rate. A real
        # IMU does not measure this; it is needed only for the lever-arm term.
        alpha = (w_true - self._last_omega) / dt
        self._last_omega = w_true.copy()

        # --- specific force at the body origin, then transported to the IMU
        f_body = R.T @ (np.asarray(truth.a, dtype=float) - self.g_enu)
        r = self.p.lever_arm
        f_imu = f_body + np.cross(alpha, r) + np.cross(w_true, np.cross(w_true, r))
        # Terrain-induced vibration is already a body-frame specific force.
        f_imu = f_imu + np.asarray(truth.vibration, dtype=float)

        # --- gyro
        w_sensed = w_true + (R.T @ self.earth_rate_enu if self.earth_rate_enu.any() else 0.0)
        b_g = self.b_g.step(dt)
        gyro = (np.eye(3) + self.M_g) @ w_sensed + b_g + self.G_g @ f_imu
        gyro = gyro + self._white(self.p.gyro_noise_density, dt)

        # --- accel
        b_a = self.b_a.step(dt)
        accel = (np.eye(3) + self.M_a) @ f_imu + b_a
        accel = accel + self._white(self.p.accel_noise_density, dt)

        # --- injected faults ---------------------------------------------
        # `bias` is a 6-vector (gyro xyz, accel xyz) so one fault can perturb
        # either or both triads; `scale` models a gain fault.
        if self.fault.bias is not None:
            b = np.asarray(self.fault.bias, dtype=float).ravel()
            if b.size == 6:
                gyro = gyro + b[:3]
                accel = accel + b[3:]
            elif b.size == 3:
                gyro = gyro + b
        if self.fault.scale != 1.0:
            gyro = gyro * self.fault.scale
            accel = accel * self.fault.scale

        gyro = self._quantize(gyro, self.p.gyro_lsb, self.p.gyro_range)
        accel = self._quantize(accel, self.p.accel_lsb, self.p.accel_range)

        # Reported covariance is the *white* noise only -- the receiver cannot
        # know its own instantaneous bias. This is what the EKF consumes.
        gvar = (self.p.gyro_noise_density / np.sqrt(dt)) ** 2
        avar = (self.p.accel_noise_density / np.sqrt(dt)) ** 2

        msg = Imu(header=self._header(stamp))
        msg.angular_velocity = gyro
        msg.linear_acceleration = accel
        msg.angular_velocity_covariance = np.diag([gvar] * 3).ravel()
        msg.linear_acceleration_covariance = np.diag([avar] * 3).ravel()
        # ROS convention: orientation_covariance[0] = -1 declares "this device
        # provides no orientation estimate". This is a raw IMU, so attitude is
        # the estimator's job -- we never hand it the true quaternion.
        msg.orientation = np.array([1.0, 0.0, 0.0, 0.0])
        oc = np.zeros(9)
        oc[0] = -1.0
        msg.orientation_covariance = oc
        return msg

    def truth_bias(self) -> dict:
        """Current true biases -- recorder/evaluation only, never to the EKF."""
        return {"gyro_bias": self.b_g.x.copy(), "accel_bias": self.b_a.x.copy()}

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "gyro_noise_density_rad_s_rtHz": self.p.gyro_noise_density,
            "gyro_bias_rw_rad_s_rts": self.p.gyro_bias_rw,
            "accel_noise_density_m_s2_rtHz": self.p.accel_noise_density,
            "accel_bias_rw_m_s3_rtHz": self.p.accel_bias_rw,
            "gyro_sigma_at_rate_rad_s": self.p.gyro_noise_density * np.sqrt(self.rate_hz),
            "accel_sigma_at_rate_m_s2": self.p.accel_noise_density * np.sqrt(self.rate_hz),
            "lever_arm_m": self.p.lever_arm.tolist(),
            "turn_on_gyro_bias_rad_s": self.b_g0.tolist(),
            "turn_on_accel_bias_m_s2": self.b_a0.tolist(),
        })
        return d
