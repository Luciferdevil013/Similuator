"""Battery model: OCV-R equivalent circuit with coulomb counting.

    V_terminal = OCV(SoC) - I R_internal(T, SoC)
    dSoC/dt    = -I / (3600 Q)

The OCV curve is a measured-shape Li-ion NMC characteristic, which is flat
across the middle of its range. That flatness is the physical reason voltage
alone is a poor state-of-charge indicator, and it is why the energy-health
signal the resilience manager uses is coulomb-counted rather than read off the
terminal voltage.
"""
from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..msgs import BatteryState, PowerSupplyStatus
from .base import Sensor, VehicleTruth

# State of charge -> open-circuit voltage per cell, Li-ion NMC.
_SOC_POINTS = np.array([0.00, 0.05, 0.10, 0.20, 0.30, 0.40, 0.50,
                        0.60, 0.70, 0.80, 0.90, 0.95, 1.00])
_OCV_POINTS = np.array([3.00, 3.35, 3.50, 3.60, 3.67, 3.73, 3.79,
                        3.87, 3.96, 4.05, 4.13, 4.17, 4.20])


def cell_ocv(soc: float | np.ndarray) -> float | np.ndarray:
    return np.interp(np.clip(soc, 0.0, 1.0), _SOC_POINTS, _OCV_POINTS)


@dataclass
class BatteryParams:
    cells_series: int = 6
    capacity_ah: float = 10.0
    r_cell_ohm: float = 0.012            # per cell at 25 C, mid SoC
    quiescent_current_a: float = 1.8     # avionics, compute, sensors
    initial_soc: float = 0.92
    thermal_mass_j_k: float = 5_200.0    # J/K for the whole pack
    thermal_conductance_w_k: float = 3.1 # W/K to ambient
    ambient_c: float = 18.0
    voltage_noise_v: float = 0.008
    current_noise_a: float = 0.05
    voltage_resolution_v: float = 0.001
    current_resolution_a: float = 0.01


class BatterySensor(Sensor):
    frame_id = "battery"

    def __init__(self, sensor_id: str, rng: np.random.Generator, *,
                 rate_hz: float = 5.0, params: BatteryParams | None = None,
                 latency: float = 0.02, latency_jitter: float = 0.004):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or BatteryParams()
        self.soc = float(self.p.initial_soc)
        self.temp_c = float(self.p.ambient_c)
        self.charge_ah = self.soc * self.p.capacity_ah
        self._last_t: float | None = None
        self.energy_wh_used = 0.0

    def _r_internal(self) -> float:
        """Internal resistance rises when cold and when nearly empty."""
        r = self.p.r_cell_ohm * self.p.cells_series
        r *= 1.0 + 0.025 * (25.0 - self.temp_c)          # ~2.5%/K below 25 C
        r *= 1.0 + 1.8 * max(0.0, 0.15 - self.soc) / 0.15  # steep rise under 15%
        return max(r, 1e-4)

    def _sample(self, truth: VehicleTruth, stamp: float) -> BatteryState:
        dt = self.period if self._last_t is None else max(stamp - self._last_t, 1e-6)
        self._last_t = stamp

        current = max(0.0, float(truth.current_draw)) + self.p.quiescent_current_a
        r = self._r_internal()
        v_pack = float(cell_ocv(self.soc)) * self.p.cells_series - current * r

        # Coulomb counting is the state update; voltage is only an output.
        self.charge_ah = max(0.0, self.charge_ah - current * dt / 3600.0)
        self.soc = self.charge_ah / self.p.capacity_ah
        self.energy_wh_used += v_pack * current * dt / 3600.0

        # Lumped thermal model: I^2 R heating against conduction to ambient.
        q_in = current ** 2 * r
        q_out = self.p.thermal_conductance_w_k * (self.temp_c - self.p.ambient_c)
        self.temp_c += (q_in - q_out) * dt / self.p.thermal_mass_j_k

        v_meas = v_pack + self._noise(self.p.voltage_noise_v)
        i_meas = current + self._noise(self.p.current_noise_a)
        if self.fault.bias is not None:
            b = np.asarray(self.fault.bias, dtype=float).ravel()
            v_meas += b[0]
            if b.size > 1:
                i_meas += b[1]
        v_meas = round(v_meas / self.p.voltage_resolution_v) * self.p.voltage_resolution_v
        i_meas = round(i_meas / self.p.current_resolution_a) * self.p.current_resolution_a

        msg = BatteryState(header=self._header(stamp))
        msg.voltage = float(v_meas)
        # ROS sign convention: current is negative while discharging.
        msg.current = float(-i_meas)
        msg.temperature = float(self.temp_c + self._noise(0.15))
        msg.charge = float(self.charge_ah)
        msg.capacity = self.p.capacity_ah
        msg.design_capacity = self.p.capacity_ah
        msg.percentage = float(np.clip(self.soc, 0.0, 1.0))
        msg.power_supply_status = int(PowerSupplyStatus.DISCHARGING if current > 0.01
                                      else PowerSupplyStatus.NOT_CHARGING)
        msg.cell_voltage = np.full(self.p.cells_series, v_meas / self.p.cells_series)
        return msg

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "cells_series": self.p.cells_series,
            "capacity_ah": self.p.capacity_ah,
            "nominal_voltage_v": float(cell_ocv(0.5)) * self.p.cells_series,
            "pack_resistance_ohm": self.p.r_cell_ohm * self.p.cells_series,
            "initial_soc": self.p.initial_soc,
            "quiescent_current_a": self.p.quiescent_current_a,
        })
        return d
