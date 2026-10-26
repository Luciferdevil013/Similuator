"""Per-sensor health monitoring: heartbeats, staleness, rate and range checks.

The subtle case this is built around is the difference between two failures
that look alike from outside:

  * FROZEN   -- the timestamp stops advancing. Easy: a timeout catches it.
  * STALE    -- the timestamp keeps advancing but the payload never changes.
                A naive "did I get a message recently" check sees a perfectly
                healthy stream. This is the dangerous one, and it is caught
                here by comparing payload fingerprints across samples.

Everything is judged from message metadata and content only. The monitor is
never told that a fault was injected.
"""
from __future__ import annotations

from collections import deque
from dataclasses import dataclass, field

import numpy as np

from sim.msgs import FaultFlag, Header, SensorHealth, SensorStatus


@dataclass
class SensorSpec:
    """What the monitor expects of a sensor, declared up front."""
    sensor_id: str
    expected_rate_hz: float
    timeout_factor: float = 4.0        # missed periods before TIMEOUT
    stale_repeats: int = 4             # identical payloads before STALE
    rate_tolerance: float = 0.55       # fraction of nominal before RATE_LOW
    value_min: float | None = None
    value_max: float | None = None
    window_s: float = 3.0              # availability window
    critical: bool = False             # navigation cannot continue without it

    @property
    def period(self) -> float:
        return 1.0 / max(self.expected_rate_hz, 1e-9)

    @property
    def timeout(self) -> float:
        return self.timeout_factor * self.period


class SensorHealthMonitor:
    def __init__(self):
        self.specs: dict[str, SensorSpec] = {}
        self._arrivals: dict[str, deque] = {}
        self._last_stamp: dict[str, float] = {}
        self._last_arrival: dict[str, float] = {}
        self._last_valid: dict[str, float] = {}
        self._fingerprint: dict[str, float] = {}
        self._repeat_count: dict[str, int] = {}
        self._frozen_stamp_count: dict[str, int] = {}
        self.health: dict[str, SensorHealth] = {}

    def register(self, spec: SensorSpec) -> None:
        self.specs[spec.sensor_id] = spec
        self._arrivals[spec.sensor_id] = deque()
        self._repeat_count[spec.sensor_id] = 0
        self._frozen_stamp_count[spec.sensor_id] = 0
        h = SensorHealth(sensor_id=spec.sensor_id,
                         status=int(SensorStatus.OFFLINE),
                         expected_rate_hz=spec.expected_rate_hz)
        h.availability = 0.0
        self.health[spec.sensor_id] = h

    # -- ingestion ---------------------------------------------------------
    def report(self, sensor_id: str, stamp: float, arrival_t: float,
               fingerprint: float | None = None,
               value_for_range: float | None = None) -> None:
        """Record one received message.

        `fingerprint` is a cheap scalar digest of the payload -- for an IMU the
        sum of its components, for a scan the sum of its finite ranges. Exact
        equality across samples is what identifies a repeated payload; real
        sensor noise makes a genuine repeat essentially impossible.
        """
        spec = self.specs.get(sensor_id)
        if spec is None:
            return
        flags = 0
        self._arrivals[sensor_id].append(arrival_t)
        cutoff = arrival_t - spec.window_s
        while self._arrivals[sensor_id] and self._arrivals[sensor_id][0] < cutoff:
            self._arrivals[sensor_id].popleft()

        prev_stamp = self._last_stamp.get(sensor_id)
        if prev_stamp is not None and stamp <= prev_stamp + 1e-9:
            self._frozen_stamp_count[sensor_id] += 1
            flags |= int(FaultFlag.STALE)
        else:
            self._frozen_stamp_count[sensor_id] = 0

        if fingerprint is not None:
            prev_fp = self._fingerprint.get(sensor_id)
            if prev_fp is not None and fingerprint == prev_fp:
                self._repeat_count[sensor_id] += 1
            else:
                self._repeat_count[sensor_id] = 0
            self._fingerprint[sensor_id] = fingerprint
        else:
            # No digest offered (e.g. an empty scan): nothing to compare, so
            # the repeat run is broken rather than carried over.
            self._repeat_count[sensor_id] = 0
            self._fingerprint.pop(sensor_id, None)

        in_range = True
        if value_for_range is not None:
            if not np.isfinite(value_for_range):
                in_range = False
                flags |= int(FaultFlag.OUT_OF_RANGE)
            if spec.value_min is not None and value_for_range < spec.value_min:
                in_range = False
                flags |= int(FaultFlag.OUT_OF_RANGE)
            if spec.value_max is not None and value_for_range > spec.value_max:
                in_range = False
                flags |= int(FaultFlag.OUT_OF_RANGE)

        self._last_stamp[sensor_id] = stamp
        self._last_arrival[sensor_id] = arrival_t
        if in_range and self._repeat_count[sensor_id] < spec.stale_repeats:
            self._last_valid[sensor_id] = stamp

        h = self.health[sensor_id]
        h.fault_flags = flags
        h.last_valid_stamp = self._last_valid.get(sensor_id, 0.0)

    # -- evaluation --------------------------------------------------------
    def evaluate(self, now: float) -> dict[str, SensorHealth]:
        """Recompute every sensor's status at the current time."""
        for sid, spec in self.specs.items():
            h = self.health[sid]
            h.header = Header(stamp=now, frame_id="monitor")
            arrivals = self._arrivals[sid]
            # Measured rate over the window; the window may be partly elapsed
            # at the start of a run, so divide by the elapsed part.
            span = max(min(spec.window_s, now), 1e-6)
            rate = len(arrivals) / span
            h.message_rate_hz = float(rate)
            h.availability = float(min(1.0, rate / spec.expected_rate_hz))

            last_arr = self._last_arrival.get(sid)
            flags = h.fault_flags
            status = SensorStatus.OK

            if last_arr is None:
                status = SensorStatus.OFFLINE
            else:
                age = now - last_arr
                if age > spec.timeout:
                    status = SensorStatus.TIMEOUT
                    flags |= int(FaultFlag.DROPOUT)
                elif self._repeat_count[sid] >= spec.stale_repeats:
                    # Payload identical across several samples: the stream is
                    # alive but carries no new information.
                    status = SensorStatus.STALE
                    flags |= int(FaultFlag.STALE)
                elif self._frozen_stamp_count[sid] >= 2:
                    status = SensorStatus.STALE
                    flags |= int(FaultFlag.STALE)
                elif flags & int(FaultFlag.OUT_OF_RANGE):
                    status = SensorStatus.INVALID
                elif rate < spec.rate_tolerance * spec.expected_rate_hz:
                    status = SensorStatus.DEGRADED
                    flags |= int(FaultFlag.RATE_LOW)

            h.status = int(status)
            h.fault_flags = flags
            h.detail = self._describe(spec, h, now)
        return self.health

    @staticmethod
    def _describe(spec: SensorSpec, h: SensorHealth, now: float) -> str:
        st = SensorStatus(h.status)
        if st is SensorStatus.OK:
            return "%.1f Hz" % h.message_rate_hz
        if st is SensorStatus.OFFLINE:
            return "no data received"
        if st is SensorStatus.TIMEOUT:
            return "no message for >%.2f s" % spec.timeout
        if st is SensorStatus.STALE:
            return "payload not advancing"
        if st is SensorStatus.INVALID:
            return "value out of declared range"
        return "%.1f Hz, expected %.1f Hz" % (h.message_rate_hz, spec.expected_rate_hz)

    # -- queries -----------------------------------------------------------
    def status_of(self, sensor_id: str) -> SensorStatus:
        h = self.health.get(sensor_id)
        return SensorStatus(h.status) if h else SensorStatus.OFFLINE

    def is_healthy(self, sensor_id: str) -> bool:
        return self.status_of(sensor_id) is SensorStatus.OK

    def unhealthy(self) -> list[str]:
        return [s for s in self.specs if not self.is_healthy(s)]

    def critical_failures(self) -> list[str]:
        return [s for s, spec in self.specs.items()
                if spec.critical and not self.is_healthy(s)]

    def snapshot(self) -> dict:
        return {
            sid: {
                "status": SensorStatus(h.status).name,
                "rate_hz": round(h.message_rate_hz, 2),
                "expected_hz": h.expected_rate_hz,
                "availability": round(h.availability, 3),
                "flags": h.fault_flags,
                "last_valid": round(h.last_valid_stamp, 3),
                "detail": h.detail,
            } for sid, h in self.health.items()
        }
