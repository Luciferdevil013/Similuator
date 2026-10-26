"""Ground-truth publisher.

Kept in the sensor package for symmetry, but it is NOT a sensor: it has no
noise, no latency and no fault model. It exists so the recorder and the
evaluation tools can score the estimator.

The report states the rule plainly and this module enforces it structurally:
ground truth must never reach a navigation node. The only consumer wired to
this publisher is the experiment recorder; the EKF, the monitors, the planner
and the resilience manager are constructed without a reference to it.
"""
from __future__ import annotations

import numpy as np

from ..msgs import Odometry
from ..rotations import quat_to_euler
from .base import VehicleTruth


class GroundTruthPublisher:
    """Zero-error pose/velocity source for evaluation only."""

    sensor_id = "ground_truth"
    frame_id = "map"

    def __init__(self, rate_hz: float = 50.0):
        self.rate_hz = float(rate_hz)
        self.period = 1.0 / self.rate_hz
        self._next_due = 0.0
        self.latest: Odometry | None = None

    def update(self, truth: VehicleTruth, t: float) -> Odometry | None:
        if t + 1e-12 < self._next_due:
            return None
        self._next_due += self.period
        od = Odometry()
        od.header.stamp = t
        od.header.frame_id = self.frame_id
        od.child_frame_id = "base_link_truth"
        od.position = np.asarray(truth.p, dtype=float).copy()
        od.orientation = np.asarray(truth.q, dtype=float).copy()
        od.linear = np.asarray(truth.v, dtype=float).copy()
        od.angular = np.asarray(truth.omega, dtype=float).copy()
        self.latest = od
        return od

    @staticmethod
    def as_dict(truth: VehicleTruth) -> dict:
        rpy = quat_to_euler(truth.q)
        return {
            "t": truth.t,
            "position": np.asarray(truth.p).tolist(),
            "velocity": np.asarray(truth.v).tolist(),
            "quaternion": np.asarray(truth.q).tolist(),
            "roll_deg": float(np.degrees(rpy[0])),
            "pitch_deg": float(np.degrees(rpy[1])),
            "yaw_deg": float(np.degrees(rpy[2])),
            "speed": float(np.linalg.norm(truth.v)),
            "omega": np.asarray(truth.omega).tolist(),
        }

    def reset(self) -> None:
        self._next_due = 0.0
        self.latest = None
