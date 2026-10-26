"""GNSS anomaly detection from innovation statistics and quality fields.

Five independent tests run in parallel, because the fault scenarios they have
to catch have genuinely different signatures:

  1. INSTANTANEOUS NIS      -- chi-square gate on one epoch's normalised
                               innovation squared. Catches a step jump.
  2. WINDOWED NIS           -- mean NIS over a window, tested against
                               chi2(3W)/W. A slow ramp never trips the
                               single-epoch gate but lifts the mean.
  3. CUSUM                  -- cumulative sum of normalised innovations per
                               axis, with drift allowance. The classical
                               minimum-delay detector for a small persistent
                               mean shift, which is what a careful spoof or a
                               multipath bias looks like.
  4. TEMPORAL CONSISTENCY   -- the reported position change between epochs
                               must agree with the velocity-implied
                               displacement. A position that teleports while
                               Doppler velocity stays smooth is physically
                               impossible for one receiver.
  5. QUALITY / INTEGRITY    -- fix status, satellite count, HDOP, and message
                               age. The receiver's own self-report.

Confirmation requires `confirm_count` consecutive flagged epochs. This is the
single most important parameter for the false-alarm rate: a 0.999 chi-square
gate fires on roughly 1 in 1000 clean epochs, so at 5 Hz an unconfirmed
detector would raise a false alarm every few minutes.

What this module deliberately does NOT claim
--------------------------------------------
A flagged anomaly is evidence of *inconsistency between a measurement and a
prediction*, not proof of spoofing. Multipath near a ridge, an unmodelled
manoeuvre, a timestamp error, or a bad filter tune produce the same residual.
The report is explicit about this and the status strings here say
"inconsistent", never "spoofed".
"""
from __future__ import annotations

from collections import deque
from dataclasses import dataclass, field

import numpy as np
from scipy import stats


@dataclass
class GnssMonitorConfig:
    # --- test 1: instantaneous NIS ----------------------------------------
    nis_dof: int = 3
    nis_p: float = 0.999                 # -> threshold 16.27 for dof 3
    # --- test 2: windowed NIS ---------------------------------------------
    window: int = 20                     # epochs (4 s at 5 Hz)
    window_p: float = 0.9995
    # --- test 3: CUSUM ----------------------------------------------------
    cusum_drift: float = 0.5             # allowance, in sigmas per epoch
    # h = 8 sigma with k = 0.5 drift. Three axes run independent charts, so
    # the per-epoch false-alarm rate is three times a single chart's; h = 6 was
    # measured to give ~14 false alarms/hour on clean data, h = 8 well under 1.
    cusum_threshold: float = 8.0         # in sigmas
    # --- test 4: temporal consistency -------------------------------------
    jump_sigma_mult: float = 6.0         # tolerance on velocity-implied motion
    jump_floor: float = 1.2              # m, absolute tolerance floor
    # --- test 5: integrity ------------------------------------------------
    min_satellites: int = 5
    max_hdop: float = 4.0
    max_age: float = 1.5                 # s, measurement age before "stale"
    # --- confirmation -----------------------------------------------------
    confirm_count: int = 3
    clear_count: int = 12                # clean epochs needed to clear


@dataclass
class GnssMonitorState:
    flagged: bool = False                 # this epoch tripped some test
    confirmed: bool = False               # sustained -> treat as a fault
    reasons: list[str] = field(default_factory=list)
    nis: float = 0.0
    nis_window_mean: float = 0.0
    cusum_max: float = 0.0
    innovation_norm: float = 0.0
    consecutive: int = 0
    clean_run: int = 0
    first_confirmed_time: float = -1.0
    outage: bool = False
    detail: str = ""


class GnssMonitor:
    """Consumes GNSS innovations and fix quality; emits a confirmed verdict."""

    def __init__(self, cfg: GnssMonitorConfig | None = None):
        self.cfg = cfg or GnssMonitorConfig()
        c = self.cfg
        self.nis_threshold = float(stats.chi2.ppf(c.nis_p, c.nis_dof))
        # Mean of W independent chi2(3) variables: chi2(3W)/W.
        self.window_threshold = float(stats.chi2.ppf(c.window_p, c.nis_dof * c.window) / c.window)
        self.scalar_threshold = float(stats.chi2.ppf(c.nis_p, 1))

        self._nis_hist: deque[float] = deque(maxlen=c.window)
        self._cusum_hi = np.zeros(3)
        self._cusum_lo = np.zeros(3)
        self.state = GnssMonitorState()
        self._last_fix_t: float | None = None
        self._last_fix_p: np.ndarray | None = None
        self.history: list[dict] = []

    def reset(self) -> None:
        self._nis_hist.clear()
        self._cusum_hi[:] = 0.0
        self._cusum_lo[:] = 0.0
        self.state = GnssMonitorState()
        self._last_fix_t = None
        self._last_fix_p = None

    # -- main entry --------------------------------------------------------
    def update(self, t: float, *, innovation: np.ndarray | None, nis: float | None,
               innovation_cov_diag: np.ndarray | None,
               fix_status: int, num_satellites: int, hdop: float,
               measurement_age: float, position_enu: np.ndarray | None,
               velocity_enu: np.ndarray | None, no_fix: bool) -> GnssMonitorState:
        c = self.cfg
        s = self.state
        reasons: list[str] = []

        # --- outage is a distinct condition, not an anomaly -------------
        s.outage = bool(no_fix or fix_status < 0)
        if s.outage:
            reasons.append("no_fix")
            self._note(t, s, reasons, "GNSS reports no fix")
            return s

        # --- test 5: integrity / quality
        if num_satellites < c.min_satellites:
            reasons.append("few_satellites:%d" % num_satellites)
        if hdop > c.max_hdop:
            reasons.append("high_hdop:%.1f" % hdop)
        if measurement_age > c.max_age:
            reasons.append("stale_fix:%.2fs" % measurement_age)

        # --- test 1: instantaneous NIS
        if nis is not None and np.isfinite(nis):
            s.nis = float(nis)
            self._nis_hist.append(float(nis))
            if nis > self.nis_threshold:
                reasons.append("nis:%.1f>%.1f" % (nis, self.nis_threshold))

            # --- test 2: windowed mean NIS
            if len(self._nis_hist) == self._nis_hist.maxlen:
                m = float(np.mean(self._nis_hist))
                s.nis_window_mean = m
                if m > self.window_threshold:
                    reasons.append("nis_window:%.2f>%.2f" % (m, self.window_threshold))

        # --- test 3: CUSUM on normalised innovations
        if innovation is not None and innovation_cov_diag is not None:
            sd = np.sqrt(np.maximum(np.asarray(innovation_cov_diag, dtype=float), 1e-12))
            z = np.asarray(innovation, dtype=float) / sd
            s.innovation_norm = float(np.linalg.norm(innovation))
            self._cusum_hi = np.maximum(0.0, self._cusum_hi + z - c.cusum_drift)
            self._cusum_lo = np.maximum(0.0, self._cusum_lo - z - c.cusum_drift)
            s.cusum_max = float(max(self._cusum_hi.max(), self._cusum_lo.max()))
            if s.cusum_max > c.cusum_threshold:
                axis = int(np.argmax(np.maximum(self._cusum_hi, self._cusum_lo)))
                reasons.append("cusum[%s]:%.1f" % ("ENU"[axis], s.cusum_max))
                # Reset the accumulators that alarmed. A CUSUM chart is reset
                # on every alarm by definition; leaving it latched above the
                # threshold makes it flag on every subsequent epoch, which
                # drove the measured false-alarm rate to 0.8% of epochs
                # instead of the intended fraction of a percent.
                self._cusum_hi[self._cusum_hi > c.cusum_threshold] = 0.0
                self._cusum_lo[self._cusum_lo > c.cusum_threshold] = 0.0

        # --- test 4: temporal consistency against Doppler velocity
        if position_enu is not None and self._last_fix_p is not None and self._last_fix_t is not None:
            dt = t - self._last_fix_t
            if 1e-3 < dt < 5.0:
                moved = np.asarray(position_enu, dtype=float) - self._last_fix_p
                expected = (np.zeros(3) if velocity_enu is None
                            else np.asarray(velocity_enu, dtype=float) * dt)
                resid = float(np.linalg.norm(moved - expected))
                # Tolerance from the position noise of both epochs.
                tol = c.jump_floor
                if innovation_cov_diag is not None:
                    tol = max(tol, c.jump_sigma_mult *
                              float(np.sqrt(np.sum(np.asarray(innovation_cov_diag)))) * np.sqrt(2))
                if resid > tol:
                    reasons.append("jump:%.2fm>%.2fm" % (resid, tol))

        if position_enu is not None:
            self._last_fix_p = np.asarray(position_enu, dtype=float).copy()
            self._last_fix_t = t

        self._note(t, s, reasons, "; ".join(reasons) if reasons else "nominal")
        return s

    # -- confirmation ------------------------------------------------------
    def _note(self, t: float, s: GnssMonitorState, reasons: list[str], detail: str) -> None:
        c = self.cfg
        s.flagged = bool(reasons)
        s.reasons = reasons
        s.detail = detail
        if s.flagged:
            s.consecutive += 1
            s.clean_run = 0
        else:
            s.consecutive = 0
            s.clean_run += 1

        if not s.confirmed and s.consecutive >= c.confirm_count:
            s.confirmed = True
            if s.first_confirmed_time < 0:
                s.first_confirmed_time = t
        elif s.confirmed and s.clean_run >= c.clear_count:
            s.confirmed = False
            s.first_confirmed_time = -1.0
            self._cusum_hi[:] = 0.0
            self._cusum_lo[:] = 0.0

        self.history.append({
            "t": t, "flagged": s.flagged, "confirmed": s.confirmed,
            "nis": s.nis, "nis_window": s.nis_window_mean,
            "cusum": s.cusum_max, "outage": s.outage, "reasons": list(reasons),
        })

    def thresholds(self) -> dict:
        return {
            "nis_instant": self.nis_threshold,
            "nis_window_mean": self.window_threshold,
            "window_epochs": self.cfg.window,
            "cusum_threshold_sigma": self.cfg.cusum_threshold,
            "cusum_drift_sigma": self.cfg.cusum_drift,
            "confirm_count": self.cfg.confirm_count,
            "clear_count": self.cfg.clear_count,
        }
