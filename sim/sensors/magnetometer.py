"""Three-axis magnetometer with hard- and soft-iron distortion.

    B_meas = S (R^T B_enu) + b_hard + n

`S` is the soft-iron matrix (the vehicle's ferrous structure reshaping the
field) and `b_hard` is the hard-iron offset (permanent magnetisation plus any
DC current loop near the sensor). Both are fixed per build and are the reason
a magnetometer needs calibration before it yields usable heading.

Heading from a magnetometer also needs the local declination to become true
North, and it is corrupted by any nearby current -- which is what the
MAG_INTERFERENCE fault exercises.
"""
from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..msgs import MagneticField
from ..rotations import quat_to_matrix
from .base import GaussMarkov, Sensor, VehicleTruth


@dataclass
class MagnetometerParams:
    noise_sigma_t: float = 3.0e-7        # T (0.3 uT RMS, LIS3MDL/BMM150 class)
    hard_iron_sigma_t: float = 8.0e-6    # T, 1-sigma per axis
    soft_iron_sigma: float = 0.03        # dimensionless, 1-sigma
    # Slow environmental drift: temperature and the vehicle's own changing
    # current draw move the apparent field over tens of seconds.
    drift_sigma_t: float = 5.0e-7
    drift_tau: float = 60.0
    # Current-proportional field from the motor harness: B = k * I.
    current_coupling_t_per_a: float = 2.5e-8
    resolution_t: float = 1.46e-8        # T per LSB (16-bit over +-4 gauss)


class MagnetometerSensor(Sensor):
    frame_id = "mag_link"

    def __init__(self, sensor_id: str, rng: np.random.Generator, field_enu: np.ndarray, *,
                 rate_hz: float = 50.0, params: MagnetometerParams | None = None,
                 latency: float = 0.005, latency_jitter: float = 0.001):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or MagnetometerParams()
        self.field_enu = np.asarray(field_enu, dtype=float)

        self.hard_iron = rng.normal(0.0, self.p.hard_iron_sigma_t, 3)
        S = np.eye(3) + rng.normal(0.0, self.p.soft_iron_sigma, (3, 3))
        self.soft_iron = 0.5 * (S + S.T)      # physically symmetric
        self._drift = GaussMarkov(self.p.drift_sigma_t, self.p.drift_tau, rng, size=3)
        self._last_t: float | None = None

    def _sample(self, truth: VehicleTruth, stamp: float) -> MagneticField:
        dt = self.period if self._last_t is None else max(stamp - self._last_t, 1e-6)
        self._last_t = stamp

        R = quat_to_matrix(truth.q)                  # body -> ENU
        b_body = R.T @ self.field_enu
        b = self.soft_iron @ b_body + self.hard_iron + self._drift.step(dt)
        b = b + self.p.current_coupling_t_per_a * truth.current_draw * np.array([1.0, 0.3, -0.2])
        b = b + self._noise(self.p.noise_sigma_t, 3)

        if self.fault.bias is not None:
            b = b + np.asarray(self.fault.bias, dtype=float).ravel()[:3]
        if self.fault.scale != 1.0:
            b = b * self.fault.scale

        b = np.round(b / self.p.resolution_t) * self.p.resolution_t

        msg = MagneticField(header=self._header(stamp))
        msg.magnetic_field = b
        s2 = (self.p.noise_sigma_t ** 2 + self.p.drift_sigma_t ** 2)
        msg.magnetic_field_covariance = np.diag([s2] * 3).ravel()
        return msg

    def calibration(self, residual_fraction: float = 0.10) -> dict:
        """The calibration a pre-mission ellipsoid fit would produce.

        Every real vehicle magnetometer is calibrated before use -- the
        familiar figure-of-eight routine fits an ellipsoid to the measured
        field and solves for the hard-iron offset and soft-iron matrix. Without
        it the heading is unusable: the hard-iron offset here is ~26 uT against
        a 48 uT field, which is tens of degrees of heading error.

        The fit is imperfect, so `residual_fraction` of each distortion is left
        uncorrected. That residual is what sets the achievable heading
        accuracy, and it is why the filter is told sigma ~15 deg rather than
        the sensor's much smaller noise figure.
        """
        f = float(np.clip(residual_fraction, 0.0, 1.0))
        hard_est = self.hard_iron * (1.0 - f)
        soft_est = np.eye(3) + (self.soft_iron - np.eye(3)) * (1.0 - f)
        return {"hard_iron": hard_est, "soft_iron_inv": np.linalg.inv(soft_est),
                "residual_fraction": f}

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "reference_field_enu_nT": (self.field_enu * 1e9).tolist(),
            "field_intensity_nT": float(np.linalg.norm(self.field_enu) * 1e9),
            "hard_iron_uT": (self.hard_iron * 1e6).tolist(),
            "noise_sigma_uT": self.p.noise_sigma_t * 1e6,
        })
        return d
