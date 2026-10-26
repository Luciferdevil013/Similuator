"""Scenario-driven fault injection.

Every fault is declared in a scenario file with an onset, a duration and
parameters, and is applied by writing to the target sensor's `FaultState`.
Three properties make the result scoreable:

  * REPRODUCIBLE. Onsets are simulation times, not wall-clock, and any
    randomness comes from the seeded RNG. The same scenario and seed inject
    exactly the same faults.
  * ISOLATED. Faults act only on simulated sensor streams inside this process.
    Nothing touches the host operating system, any network interface, or any
    radio -- the report is explicit about this, and the GNSS "inconsistency"
    fault is an arithmetic offset on a simulated measurement, not a
    transmission of any kind.
  * OBSERVABLE-ONLY-BY-EFFECT. The injector records the ground-truth onset and
    clear times for scoring, but the monitors never read this record. Detection
    latency is measured by comparing the monitor's own first confirmed
    detection against the injector's log.

Ramped onsets are supported because the slowly-varying faults are the hard
ones: a bias that ramps in over ten seconds never trips a single-epoch gate
and must be caught by the drift detectors.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from sim.msgs import FaultEvent, FaultFlag, FaultType, Header


@dataclass
class FaultSpec:
    """One declared fault from a scenario file."""
    fault_type: FaultType
    target: str                        # sensor id, or "world" for obstacles
    onset: float                       # s, simulation time
    duration: float = -1.0             # s; -1 means "until the run ends"
    ramp: float = 0.0                  # s to reach full magnitude
    params: dict = field(default_factory=dict)
    label: str = ""

    @property
    def end(self) -> float:
        return float("inf") if self.duration < 0 else self.onset + self.duration

    def magnitude(self, t: float) -> float:
        """Fraction of full magnitude at time `t` (0..1), honouring the ramp."""
        if t < self.onset:
            return 0.0
        if self.ramp <= 0:
            return 1.0
        return float(min(1.0, (t - self.onset) / self.ramp))


class FaultInjector:
    def __init__(self, scenario_id: str, rng: np.random.Generator):
        self.scenario_id = scenario_id
        self.rng = rng
        self.specs: list[FaultSpec] = []
        self.events: list[FaultEvent] = []
        self._active: dict[int, FaultEvent] = {}
        self._sensors: dict[str, object] = {}
        self._world = None
        self._dynamics = None
        self._spawned: set[int] = set()

    # -- wiring ------------------------------------------------------------
    def bind(self, sensors: dict, world=None, dynamics=None) -> None:
        self._sensors = dict(sensors)
        self._world = world
        self._dynamics = dynamics

    def add(self, spec: FaultSpec) -> None:
        self.specs.append(spec)

    # -- per-step application ---------------------------------------------
    def update(self, t: float) -> list[FaultEvent]:
        """Apply or clear every declared fault for the current time.

        Returns the events that changed state this step, so the recorder can
        log onsets and clears without polling.
        """
        changed: list[FaultEvent] = []
        for k, spec in enumerate(self.specs):
            active = spec.onset <= t < spec.end
            was = k in self._active

            if active and not was:
                ev = FaultEvent(header=Header(stamp=t, frame_id="fault_injector"),
                                scenario_id=self.scenario_id,
                                fault_type=int(spec.fault_type),
                                target=spec.target, onset_time=t, end_time=-1.0,
                                params=dict(spec.params))
                self._active[k] = ev
                self.events.append(ev)
                changed.append(ev)
            elif not active and was:
                ev = self._active.pop(k)
                ev.end_time = t
                self._clear(spec)
                changed.append(ev)

            if active:
                self._apply(spec, t)
        return changed

    # -- effects -----------------------------------------------------------
    def _fault_of(self, target: str):
        s = self._sensors.get(target)
        return getattr(s, "fault", None) if s is not None else None

    def _apply(self, spec: FaultSpec, t: float) -> None:
        ft = spec.fault_type
        mag = spec.magnitude(t)
        p = spec.params
        f = self._fault_of(spec.target)

        if ft is FaultType.GNSS_OUTAGE:
            # Total loss of fix: the receiver publishes nothing at all.
            if f is not None:
                f.dropout = True
                f.flags = int(FaultFlag.DROPOUT)

        elif ft is FaultType.GNSS_INCONSISTENCY:
            # A position offset the receiver is unaware of, so its reported
            # covariance stays small while its error grows. This is the
            # signature the NIS/CUSUM tests are built to catch.
            if f is not None:
                off = np.asarray(p.get("offset", [8.0, 0.0, 0.0]), dtype=float)
                drift = np.asarray(p.get("drift_per_s", [0.0, 0.0, 0.0]), dtype=float)
                f.offset = off * mag + drift * max(0.0, t - spec.onset)
                f.flags = int(FaultFlag.INCONSISTENT | FaultFlag.BIAS)

        elif ft is FaultType.IMU_BIAS:
            if f is not None:
                gb = np.asarray(p.get("gyro_bias", [0.0, 0.0, 0.0]), dtype=float)
                ab = np.asarray(p.get("accel_bias", [0.0, 0.0, 0.0]), dtype=float)
                f.bias = np.concatenate([gb, ab]) * mag
                f.flags = int(FaultFlag.BIAS)

        elif ft is FaultType.LIDAR_DROPOUT:
            if f is not None:
                prob = float(p.get("drop_prob", 1.0))
                if prob >= 1.0:
                    f.dropout = True
                else:
                    f.drop_prob = prob * mag
                f.flags = int(FaultFlag.DROPOUT)

        elif ft is FaultType.STALE_MESSAGES:
            if f is not None:
                f.stale = True
                # Freezing the timestamp too is the easy-to-catch variant; the
                # default repeats the payload while the stamp advances, which
                # defeats a plain timeout check.
                f.freeze_stamp = bool(p.get("freeze_stamp", False))
                f.extra_delay = float(p.get("extra_delay", 0.0)) * mag
                f.flags = int(FaultFlag.STALE | FaultFlag.DELAY)

        elif ft is FaultType.COMMUNICATION_LOSS:
            # Suppress a selected stream, as a lost link or a crashed node
            # would. Modelled as dropout plus added latency on the target.
            if f is not None:
                f.dropout = bool(p.get("total", True))
                f.extra_delay = float(p.get("extra_delay", 0.0)) * mag
                f.drop_prob = float(p.get("drop_prob", 0.0)) * mag
                f.flags = int(FaultFlag.DROPOUT | FaultFlag.DELAY)

        elif ft is FaultType.OBSTACLE_APPEARS:
            # The world already holds the obstacle with a spawn time; it
            # becomes solid on its own. Recording the event is all that is
            # needed here, so the detection clock starts at the right moment.
            pass

        elif ft is FaultType.WHEEL_SLIP:
            # Extra slip: scale the encoder output so odometry over-reports
            # distance, as it does on loose ground.
            if f is not None:
                f.scale = 1.0 + float(p.get("excess", 0.25)) * mag
                f.flags = int(FaultFlag.BIAS)

        elif ft is FaultType.BARO_DRIFT:
            if f is not None:
                f.bias = np.array([float(p.get("pressure_pa", 120.0)) * mag])
                f.flags = int(FaultFlag.BIAS)

        elif ft is FaultType.MAG_INTERFERENCE:
            if f is not None:
                b = np.asarray(p.get("field_t", [2.0e-5, 0.0, 0.0]), dtype=float)
                f.bias = b * mag
                f.flags = int(FaultFlag.BIAS | FaultFlag.NOISE)
                f.noise_scale = 1.0 + 3.0 * mag

    def _clear(self, spec: FaultSpec) -> None:
        f = self._fault_of(spec.target)
        if f is not None:
            f.clear()

    # -- scoring support ---------------------------------------------------
    def mark_detected(self, fault_type: FaultType, t: float, by: str) -> bool:
        """Record the first confirmed detection of an active fault of this type."""
        for ev in self._active.values():
            if ev.fault_type == int(fault_type) and not ev.detected:
                ev.detected = True
                ev.detection_time = t
                ev.detected_by = by
                return True
        return False

    def mark_detected_for_target(self, target: str, t: float, by: str) -> bool:
        """Record detection of an active fault acting on `target`.

        The monitors do not know what KIND of fault is present -- they only
        conclude that a particular stream is untrustworthy. Scoring by target
        rather than by type keeps that honest: a detector that says "GNSS is
        inconsistent" is credited against whichever GNSS fault was active, and
        gets no credit at all if none was.
        """
        for ev in self._active.values():
            if ev.target == target and not ev.detected:
                ev.detected = True
                ev.detection_time = t
                ev.detected_by = by
                return True
        return False

    def active_types(self) -> set[int]:
        return {ev.fault_type for ev in self._active.values()}

    def active_windows(self) -> list[tuple[float, float, int]]:
        """(onset, end, type) for every declared fault -- the scoring truth."""
        return [(s.onset, s.end, int(s.fault_type)) for s in self.specs]

    def is_fault_active(self, t: float, fault_type: FaultType | None = None) -> bool:
        for s in self.specs:
            if s.onset <= t < s.end and (fault_type is None or s.fault_type is fault_type):
                return True
        return False

    def summary(self) -> list[dict]:
        return [{
            "scenario_id": e.scenario_id,
            "fault_type": FaultType(e.fault_type).name,
            "target": e.target,
            "onset": round(e.onset_time, 3),
            "end": (round(e.end_time, 3) if e.end_time >= 0 else None),
            "detected": e.detected,
            "detection_time": (round(e.detection_time, 3) if e.detection_time >= 0 else None),
            "detection_latency": (round(e.detection_time - e.onset_time, 3)
                                  if e.detected else None),
            "detected_by": e.detected_by,
            "params": e.params,
        } for e in self.events]
