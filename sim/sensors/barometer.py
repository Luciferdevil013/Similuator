"""Barometric pressure sensor using the ISA troposphere model.

    p(h) = p0 (1 - L h / T0)^(g M / (R L)),   exponent = 5.25588
    T(h) = T0 - L h

A barometer gives excellent *relative* altitude and poor *absolute* altitude,
because the sea-level reference pressure moves with the weather. That is
modelled here as a slow Gauss-Markov bias on the reference pressure: it is
exactly why barometric height must be fused as a near-constant-bias
observation and never trusted as an absolute altitude.
"""
from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..msgs import FluidPressure, Temperature
from .base import GaussMarkov, Sensor, VehicleTruth

P0 = 101_325.0        # Pa, ISA sea-level pressure
T0 = 288.15           # K, ISA sea-level temperature
LAPSE = 0.0065        # K/m
ISA_EXPONENT = 5.25588
R_SPECIFIC = 287.053  # J/(kg K)


def isa_pressure(alt_m: float | np.ndarray, p_ref: float = P0) -> float | np.ndarray:
    """Pressure at geometric altitude under the ISA troposphere model."""
    return p_ref * np.power(np.maximum(1.0 - LAPSE * np.asarray(alt_m, dtype=float) / T0, 1e-6),
                            ISA_EXPONENT)


def isa_altitude(pressure_pa: float | np.ndarray, p_ref: float = P0) -> float | np.ndarray:
    """Inverse of `isa_pressure` -- pressure altitude."""
    return T0 / LAPSE * (1.0 - np.power(np.asarray(pressure_pa, dtype=float) / p_ref,
                                        1.0 / ISA_EXPONENT))


@dataclass
class BarometerParams:
    noise_sigma_pa: float = 2.5           # Pa RMS (MS5611 at high oversampling)
    bias_sigma_pa: float = 30.0           # Pa, weather drift amplitude
    bias_tau: float = 900.0               # s
    turn_on_bias_pa: float = 15.0         # Pa, 1-sigma offset after power-up
    temp_noise_k: float = 0.05            # K
    resolution_pa: float = 1.2            # Pa per LSB (24-bit, high OSR)
    # Airflow over the vehicle depresses the static port; proportional to q.
    dynamic_coeff: float = -0.35          # fraction of dynamic pressure
    air_density: float = 1.19             # kg/m^3 at the test site


class BarometerSensor(Sensor):
    frame_id = "baro_link"

    def __init__(self, sensor_id: str, rng: np.random.Generator, *,
                 rate_hz: float = 50.0, site_altitude: float = 0.0,
                 params: BarometerParams | None = None,
                 latency: float = 0.010, latency_jitter: float = 0.002):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or BarometerParams()
        self.site_altitude = float(site_altitude)
        self.turn_on_bias = rng.normal(0.0, self.p.turn_on_bias_pa)
        self._bias = GaussMarkov(self.p.bias_sigma_pa, self.p.bias_tau, rng, size=1)
        self._last_t: float | None = None

    def _sample(self, truth: VehicleTruth, stamp: float):
        dt = self.period if self._last_t is None else max(stamp - self._last_t, 1e-6)
        self._last_t = stamp

        alt = self.site_altitude + float(truth.p[2])
        p_true = isa_pressure(alt)

        # Static-port error from airspeed: q = 0.5 rho V^2.
        speed = float(np.linalg.norm(truth.v))
        q_dyn = 0.5 * self.p.air_density * speed ** 2
        p = p_true + self.p.dynamic_coeff * q_dyn
        p = p + self.turn_on_bias + float(self._bias.step(dt)[0]) + self._noise(self.p.noise_sigma_pa)

        if self.fault.bias is not None:
            p = p + float(np.asarray(self.fault.bias).ravel()[0])
        if self.fault.scale != 1.0:
            p = p * self.fault.scale
        p = np.round(p / self.p.resolution_pa) * self.p.resolution_pa

        temp_c = (T0 - LAPSE * alt) - 273.15 + self._noise(self.p.temp_noise_k)

        pm = FluidPressure(header=self._header(stamp))
        pm.fluid_pressure = float(p)
        pm.variance = self.p.noise_sigma_pa ** 2
        tm = Temperature(header=self._header(stamp))
        tm.temperature = float(temp_c)
        tm.variance = self.p.temp_noise_k ** 2
        return (pm, tm)

    def altitude_sigma(self) -> float:
        """Noise-equivalent altitude sigma at the site, for EKF tuning."""
        h = 1.0
        dpdh = (isa_pressure(self.site_altitude + h) - isa_pressure(self.site_altitude)) / h
        return abs(self.p.noise_sigma_pa / dpdh)

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "site_altitude_m": self.site_altitude,
            "noise_sigma_pa": self.p.noise_sigma_pa,
            "noise_equivalent_altitude_sigma_m": self.altitude_sigma(),
            "bias_sigma_pa": self.p.bias_sigma_pa,
            "bias_equivalent_altitude_m": self.p.bias_sigma_pa / 11.9,
            "bias_tau_s": self.p.bias_tau,
        })
        return d
