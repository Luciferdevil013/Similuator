"""Downward-facing distance sensor (LiDAR-Lite / TFmini class) for the drone.

Measures slant range from the sensor to the terrain along the body -z axis,
so tilt lengthens the reading by 1/cos(tilt) -- the estimator has to correct
for that, exactly as PX4 does with its distance-sensor tilt compensation.
Beyond `range_max`, or at extreme tilt, there is no return (NaN), which is a
missing reading, not a zero.
"""
from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..msgs import Header
from ..rotations import quat_to_matrix
from .base import Sensor, VehicleTruth


@dataclass
class Range:
    """sensor_msgs/msg/Range."""
    header: Header
    radiation_type: int = 1              # INFRARED
    field_of_view: float = 0.03          # rad
    min_range: float = 0.1
    max_range: float = 40.0
    range: float = float("nan")          # m


@dataclass
class RangefinderParams:
    range_min: float = 0.1
    range_max: float = 40.0
    noise_m: float = 0.02
    noise_fraction: float = 0.01         # additional error proportional to range
    max_tilt_deg: float = 45.0
    mount_offset: float = 0.05           # m below the body origin


class RangefinderSensor(Sensor):
    frame_id = "rangefinder_link"

    def __init__(self, sensor_id: str, rng: np.random.Generator, world, *,
                 rate_hz: float = 20.0, params: RangefinderParams | None = None,
                 latency: float = 0.01, latency_jitter: float = 0.002):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or RangefinderParams()
        self.world = world

    def _sample(self, truth: VehicleTruth, stamp: float) -> Range:
        R = quat_to_matrix(truth.q)
        down = -R[:, 2]                                  # sensor axis in ENU
        msg = Range(header=self._header(stamp), min_range=self.p.range_min,
                    max_range=self.p.range_max)
        cos_tilt = -down[2]
        if cos_tilt < np.cos(np.radians(self.p.max_tilt_deg)):
            return msg                                   # pointing too far from down
        origin = np.asarray(truth.p, dtype=float) + down * self.p.mount_offset
        # March along the beam to the first terrain intersection (coarse then
        # fine). Terrain is smooth at this scale, so 0.5 m steps then a
        # bisection are plenty.
        T = self.world.terrain
        prev_s, s = 0.0, 0.0
        hit = None
        while s <= self.p.range_max:
            q = origin + down * s
            if q[2] <= T.height_at(q[0], q[1]):
                hit = (prev_s, s)
                break
            prev_s, s = s, s + 0.5
        if hit is None:
            return msg
        lo, hi = hit
        for _ in range(12):
            mid = 0.5 * (lo + hi)
            q = origin + down * mid
            if q[2] <= T.height_at(q[0], q[1]):
                hi = mid
            else:
                lo = mid
        r = 0.5 * (lo + hi)
        if r < self.p.range_min:
            r = self.p.range_min
        sigma = np.hypot(self.p.noise_m, self.p.noise_fraction * r) * self.fault.noise_scale
        r = r + self.rng.normal(0.0, sigma)
        if self.fault.bias is not None:
            r += float(np.asarray(self.fault.bias).ravel()[0])
        msg.range = float(r)
        return msg

    def describe(self) -> dict:
        d = super().describe()
        d.update({"range_max_m": self.p.range_max, "noise_m": self.p.noise_m,
                  "noise_fraction": self.p.noise_fraction})
        return d
