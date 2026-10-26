"""Sensor framework: ground-truth input, rates, transport latency, faults.

Three design rules hold for every sensor in this package, and they are what
make the resulting experiment credible rather than decorative:

1. A sensor is a *function of ground truth plus its own error model*. It never
   reads the estimator, the planner, or the fault scenario's intent.
2. Measurements are delivered through a latency queue. An algorithm receives a
   sample at `t + latency`, stamped with the time it was *taken*. Real
   pipelines behave this way and it is the only way a stale-data monitor can be
   tested honestly.
3. Faults are applied inside the sensor, to the measurement. The fault state is
   never visible to the monitoring or navigation code -- only the recorder sees
   it, for scoring detection latency.
"""
from __future__ import annotations

from collections import deque
from dataclasses import dataclass, field

import numpy as np

from ..msgs import FaultFlag, Header


@dataclass
class VehicleTruth:
    """Exact simulator state handed to sensors. Never reaches navigation code."""
    t: float = 0.0
    p: np.ndarray = field(default_factory=lambda: np.zeros(3))      # ENU position [m]
    v: np.ndarray = field(default_factory=lambda: np.zeros(3))      # ENU velocity [m/s]
    a: np.ndarray = field(default_factory=lambda: np.zeros(3))      # ENU accel [m/s^2]
    q: np.ndarray = field(default_factory=lambda: np.array([1.0, 0, 0, 0]))  # body->ENU
    omega: np.ndarray = field(default_factory=lambda: np.zeros(3))  # body rates [rad/s]
    # Vibration is the high-frequency specific-force content the rigid-body
    # integrator deliberately does not resolve: terrain roughness and motor
    # imbalance. The IMU must see it, because it is what makes a real inertial
    # solution drift faster off-road than on a smooth floor.
    vibration: np.ndarray = field(default_factory=lambda: np.zeros(3))
    wheel_omega: np.ndarray = field(default_factory=lambda: np.zeros(0))  # rad/s
    wheel_slip: np.ndarray = field(default_factory=lambda: np.zeros(0))   # ratio
    current_draw: float = 0.0        # A, total electrical load
    on_ground: bool = True
    surface_friction: float = 0.7


@dataclass
class FaultState:
    """Per-sensor fault modifiers set by the injector.

    Deliberately a plain container: the injector writes it, the sensor reads
    it, and nothing else in the system is allowed to look at it.
    """
    dropout: bool = False            # publish nothing at all
    drop_prob: float = 0.0           # per-sample Bernoulli loss
    stale: bool = False              # repeat the last payload
    freeze_stamp: bool = False       # ...and stop advancing its timestamp
    extra_delay: float = 0.0         # added transport latency [s]
    rate_scale: float = 1.0          # <1 publishes slower than nominal
    noise_scale: float = 1.0         # multiplies all additive noise
    bias: np.ndarray | None = None   # additive bias, sensor-specific units
    offset: np.ndarray | None = None # additive output offset (e.g. GNSS metres)
    scale: float = 1.0               # multiplicative scale error
    flags: int = int(FaultFlag.NONE)

    def active(self) -> bool:
        return (self.dropout or self.stale or self.drop_prob > 0 or
                self.extra_delay > 0 or self.rate_scale != 1.0 or
                self.noise_scale != 1.0 or self.bias is not None or
                self.offset is not None or self.scale != 1.0)

    def clear(self) -> None:
        self.__init__()


class Sensor:
    """Base class: fixed-rate sampling plus a latency queue.

    Subclasses implement `_sample(truth, stamp)` and return a message, or
    `None` to represent a physically-missing reading (for example a LiDAR beam
    set with no return at all).
    """

    #: nominal frame this sensor's data is expressed in
    frame_id: str = "base_link"

    def __init__(self, sensor_id: str, rate_hz: float, rng: np.random.Generator, *,
                 latency: float = 0.0, latency_jitter: float = 0.0,
                 frame_id: str | None = None):
        self.sensor_id = sensor_id
        self.rate_hz = float(rate_hz)
        self.period = 1.0 / float(rate_hz)
        self.rng = rng
        self.latency = float(latency)
        self.latency_jitter = float(latency_jitter)
        if frame_id is not None:
            self.frame_id = frame_id

        self.fault = FaultState()
        self.enabled = True
        self._seq = 0
        self._next_due = 0.0
        self._queue: deque[tuple[float, object]] = deque()
        self._last_msg: object | None = None
        self._last_stamp: float = 0.0
        self.published_count = 0
        self.dropped_count = 0

    # -- rate / latency ----------------------------------------------------
    def _effective_period(self) -> float:
        return self.period / max(1e-6, self.fault.rate_scale)

    def _transport_delay(self) -> float:
        d = self.latency + self.fault.extra_delay
        if self.latency_jitter > 0:
            # Jitter is one-sided: a packet can arrive late but never early.
            d += abs(self.rng.normal(0.0, self.latency_jitter))
        return max(0.0, d)

    def update(self, truth: VehicleTruth, t: float) -> None:
        """Advance the sensor to time `t`, queueing any samples that came due."""
        if not self.enabled:
            return
        # Catch up on every due sample, so a sensor faster than the caller's
        # step still produces the right number of messages.
        guard = 0
        while t + 1e-12 >= self._next_due and guard < 10_000:
            guard += 1
            stamp = self._next_due
            self._next_due += self._effective_period()

            if self.fault.dropout:
                self.dropped_count += 1
                continue
            if self.fault.drop_prob > 0 and self.rng.random() < self.fault.drop_prob:
                self.dropped_count += 1
                continue

            if self.fault.stale and self._last_msg is not None:
                msg = self._clone_stale(self._last_msg, stamp)
            else:
                msg = self._sample(truth, stamp)
                if msg is None:
                    self.dropped_count += 1
                    continue
                self._last_msg = msg
                self._last_stamp = stamp

            self._seq += 1
            if hasattr(msg, "header"):
                msg.header.seq = self._seq
            self.published_count += 1
            self._queue.append((stamp + self._transport_delay(), msg))

    def poll(self, t: float) -> list:
        """Pop every queued message whose arrival time has been reached.

        Sorting by arrival time matters once jitter is enabled: without it a
        jittered sample could be delivered out of order, which is realistic but
        would be indistinguishable from a bug. Real drivers reorder; so do we.
        """
        out = []
        while self._queue and self._queue[0][0] <= t + 1e-12:
            out.append(self._queue.popleft()[1])
        if len(out) > 1:
            out.sort(key=lambda m: getattr(m, "header", Header()).stamp)
        return out

    def reset(self) -> None:
        self._seq = 0
        self._next_due = 0.0
        self._queue.clear()
        self._last_msg = None
        self._last_stamp = 0.0
        self.published_count = 0
        self.dropped_count = 0
        self.fault.clear()

    # -- hooks -------------------------------------------------------------
    def _sample(self, truth: VehicleTruth, stamp: float):
        raise NotImplementedError

    def _clone_stale(self, msg, stamp: float):
        """Repeat the previous payload, as a wedged driver or sensor would.

        With `freeze_stamp` the timestamp also stops advancing -- the classic
        hard-frozen-driver failure. Without it the timestamp advances while the
        payload does not, which is the subtler and more dangerous case, since
        naive timeout checks see a healthy stream.
        """
        import copy
        clone = copy.deepcopy(msg)
        if hasattr(clone, "header"):
            clone.header.stamp = self._last_stamp if self.fault.freeze_stamp else stamp
        return clone

    def _header(self, stamp: float) -> Header:
        return Header(stamp=stamp, frame_id=self.frame_id, seq=self._seq + 1)

    def _noise(self, sigma, size=None):
        """Gaussian noise scaled by the current fault's noise multiplier."""
        s = np.asarray(sigma, dtype=float) * self.fault.noise_scale
        return self.rng.normal(0.0, 1.0, size) * s if size is not None else self.rng.normal(0.0, s)

    def describe(self) -> dict:
        return {
            "sensor_id": self.sensor_id,
            "frame_id": self.frame_id,
            "rate_hz": self.rate_hz,
            "latency_s": self.latency,
            "latency_jitter_s": self.latency_jitter,
            "type": type(self).__name__,
        }


class GaussMarkov:
    """First-order Gauss-Markov (Ornstein-Uhlenbeck) scalar or vector process.

    x_{k+1} = exp(-dt/tau) x_k + sqrt(1 - exp(-2 dt/tau)) * sigma * w

    This is the correct model for the *correlated* part of a real error -- GNSS
    multipath/ionosphere residual, barometer weather drift, magnetometer
    environment. The discretisation above holds the stationary standard
    deviation at exactly `sigma` for any step size, unlike the naive
    `x += -x*dt/tau + sigma*sqrt(dt)*w`, which depends on dt.
    """

    def __init__(self, sigma, tau: float, rng: np.random.Generator, size: int = 1,
                 initial: np.ndarray | float | None = None):
        self.sigma = np.asarray(sigma, dtype=float)
        self.tau = float(tau)
        self.rng = rng
        self.size = size
        if initial is None:
            # Start from the stationary distribution so there is no warm-up
            # transient that could be mistaken for a fault.
            self.x = self.rng.normal(0.0, 1.0, size) * self.sigma
        else:
            self.x = np.broadcast_to(np.asarray(initial, dtype=float), (size,)).astype(float).copy()

    def step(self, dt: float) -> np.ndarray:
        a = np.exp(-dt / self.tau)
        self.x = a * self.x + np.sqrt(max(0.0, 1.0 - a * a)) * self.sigma * self.rng.normal(0.0, 1.0, self.size)
        return self.x


class RandomWalk:
    """Brownian bias drift: dx = sigma_rw * sqrt(dt) * w.

    Used for inertial bias instability, where the error genuinely has no
    restoring force -- which is exactly why an inertial-only solution cannot
    be trusted indefinitely, one of the stated safety principles.
    """

    def __init__(self, sigma_rw, rng: np.random.Generator, size: int = 1,
                 initial: np.ndarray | float = 0.0):
        self.sigma_rw = np.asarray(sigma_rw, dtype=float)
        self.rng = rng
        self.size = size
        self.x = np.broadcast_to(np.asarray(initial, dtype=float), (size,)).astype(float).copy()

    def step(self, dt: float) -> np.ndarray:
        self.x = self.x + self.sigma_rw * np.sqrt(dt) * self.rng.normal(0.0, 1.0, self.size)
        return self.x
