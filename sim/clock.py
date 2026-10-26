"""Deterministic simulation clock.

Every timestamp in the system comes from here. Wall-clock time is never read
inside the simulation or algorithm code, which is what makes a run with a
fixed seed byte-identical on replay -- a hard requirement from the evaluation
plan (fixed, documented seeds per trial).
"""
from __future__ import annotations


class SimClock:
    def __init__(self, dt: float, t0: float = 0.0):
        if dt <= 0:
            raise ValueError("dt must be positive")
        self.dt = float(dt)
        self._t0 = float(t0)
        self._step = 0

    @property
    def t(self) -> float:
        # Accumulating step*dt rather than t += dt keeps the clock free of
        # floating-point drift over long runs.
        return self._t0 + self._step * self.dt

    @property
    def step_index(self) -> int:
        return self._step

    def tick(self) -> float:
        self._step += 1
        return self.t

    def reset(self) -> None:
        self._step = 0


class RateTrigger:
    """Fires at a fixed rate on a clock that may run much faster.

    Holds the exact next-due time in rational form so a 7 Hz sensor on a
    400 Hz clock neither drifts nor jitters by an accumulated epsilon.
    """

    def __init__(self, rate_hz: float, phase: float = 0.0):
        if rate_hz <= 0:
            raise ValueError("rate_hz must be positive")
        self.period = 1.0 / float(rate_hz)
        self.rate_hz = float(rate_hz)
        self._n = 0
        self._phase = float(phase) * self.period

    def due(self, t: float) -> bool:
        if t + 1e-12 >= self._phase + self._n * self.period:
            self._n += 1
            return True
        return False

    def reset(self) -> None:
        self._n = 0
