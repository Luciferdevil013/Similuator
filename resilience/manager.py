"""Resilience manager: an explicit finite state machine over navigation health.

States and the conditions that move between them are deliberately written out
rather than implied by scattered conditionals, because the report asks for
documented transition conditions and because a safety state machine that
cannot be read cannot be reviewed.

    NORMAL             sensors and estimate acceptable
      -> DEGRADED        any confirmed fault, or uncertainty above warn level
    DEGRADED           a fault exists; remaining inputs are being assessed
      -> LIMITED_OPERATION  a documented fallback is available AND its inputs
                            validate
      -> SAFE_ACTION        uncertainty too high, or a critical sensor is gone
      -> RECOVERY           fault cleared
    LIMITED_OPERATION  continuing inside an explicit budget
      -> SAFE_ACTION        budget spent, or uncertainty crossed the limit
      -> RECOVERY           fault cleared
    SAFE_ACTION        stopped and holding (a rover's safe state)
      -> RECOVERY           inputs restored and validated
    RECOVERY           restored inputs on probation
      -> NORMAL             sustained clean for `recovery_dwell` seconds
      -> SAFE_ACTION        regressed

Two design rules carried straight from the report's safety principles:

1. "Do not assume alternative sensors always provide enough information."
   LIMITED_OPERATION is entered only when the fallback's own inputs are
   checked healthy -- not merely because GNSS was lost.

2. "Inertial navigation drifts over time; IMU-only operation cannot guarantee
   accurate position indefinitely." So LIMITED_OPERATION carries a hard budget
   in BOTH time and distance, and expiry forces SAFE_ACTION even if nothing
   else has gone wrong. This is the mechanism that stops the vehicle driving
   confidently on a dead-reckoned estimate that has quietly become useless.

The manager reads sensor health, the filter's own covariance, and the GNSS
monitor's verdict. It never reads ground truth or the fault injector.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from sim.msgs import (Header, MissionState, MissionStatus, NavMode,
                      NavigationHealth, SafeAction, SensorStatus)


@dataclass
class ResilienceConfig:
    # --- uncertainty thresholds (metres of horizontal position sigma) -----
    sigma_warn: float = 1.8            # NORMAL -> DEGRADED
    sigma_limit: float = 4.0           # -> LIMITED_OPERATION ceiling
    sigma_unsafe: float = 7.0           # -> SAFE_ACTION
    sigma_recover: float = 1.5          # must fall below this to clear

    # --- dead-reckoning budget -------------------------------------------
    dr_time_budget: float = 75.0        # s without a validated global fix
    dr_distance_budget: float = 60.0    # m travelled on dead reckoning

    # --- speed policy by state -------------------------------------------
    speed_normal: float = 1.8           # m/s
    speed_degraded: float = 0.9
    speed_limited: float = 0.55

    # --- dwell times (hysteresis, to stop state chatter) ------------------
    degraded_dwell: float = 0.4         # s a condition must hold to enter
    recovery_dwell: float = 6.0         # s clean before returning to NORMAL
    safe_action_min_hold: float = 3.0   # s minimum in SAFE_ACTION

    # --- sensors that navigation cannot continue without ------------------
    critical_sensors: tuple[str, ...] = ("imu",)
    # Sensors the dead-reckoning fallback itself depends on. If these are not
    # healthy, the fallback is not available and the answer is SAFE_ACTION.
    fallback_sensors: tuple[str, ...] = ("imu", "wheel_odom")


class ResilienceManager:
    def __init__(self, cfg: ResilienceConfig | None = None, scenario_id: str = ""):
        self.cfg = cfg or ResilienceConfig()
        self.scenario_id = scenario_id
        self.state = MissionState.NORMAL
        self.previous_state = MissionState.IDLE
        self.state_entry_time = 0.0
        self.safe_action = SafeAction.NONE
        self.reason = "initialised"
        self.nav_mode = NavMode.GNSS_INS

        self._cond_timer: dict[str, float] = {}
        self._dr_start_t: float | None = None
        self._dr_start_dist: float | None = None
        self.dr_time = 0.0
        self.dr_distance = 0.0
        self.transitions: list[dict] = []
        self.speed_limit = self.cfg.speed_normal
        self.allow_motion = True

    # -- helpers -----------------------------------------------------------
    def _hold(self, key: str, condition: bool, dt: float, required: float) -> bool:
        """True once `condition` has held continuously for `required` seconds."""
        self._cond_timer[key] = (self._cond_timer.get(key, 0.0) + dt) if condition else 0.0
        return self._cond_timer[key] >= required

    def _transition(self, new: MissionState, t: float, reason: str,
                    action: SafeAction = SafeAction.NONE) -> None:
        if new is self.state:
            return
        self.transitions.append({
            "t": round(t, 3),
            "from": self.state.name, "to": new.name,
            "reason": reason,
            "dr_time": round(self.dr_time, 2),
            "dr_distance": round(self.dr_distance, 2),
        })
        self.previous_state = self.state
        self.state = new
        self.state_entry_time = t
        self.reason = reason
        self.safe_action = action
        self._cond_timer.clear()

    # -- main step ---------------------------------------------------------
    def step(self, t: float, dt: float, *, health_monitor, ekf,
             gnss_state, distance_travelled: float,
             goal_reached: bool = False, mission_timeout: bool = False) -> MissionStatus:
        c = self.cfg

        # --- gather evidence (all from the vehicle's own view of itself)
        critical_down = [s for s in c.critical_sensors
                         if health_monitor.status_of(s) is not SensorStatus.OK]
        fallback_down = [s for s in c.fallback_sensors
                         if health_monitor.status_of(s) is not SensorStatus.OK]
        gnss_bad = bool(gnss_state.outage or gnss_state.confirmed)
        sigma_h = ekf.pos_sigma_horizontal()

        # --- dead-reckoning accounting: running since the last good fix
        if gnss_bad:
            if self._dr_start_t is None:
                self._dr_start_t = t
                self._dr_start_dist = distance_travelled
            self.dr_time = t - self._dr_start_t
            self.dr_distance = distance_travelled - (self._dr_start_dist or 0.0)
        else:
            self._dr_start_t = None
            self._dr_start_dist = None
            self.dr_time = 0.0
            self.dr_distance = 0.0

        budget_spent = (self.dr_time > c.dr_time_budget or
                        self.dr_distance > c.dr_distance_budget)

        # --- navigation mode, reported for operator visibility
        if critical_down:
            self.nav_mode = NavMode.LOST
        elif gnss_bad and not fallback_down:
            self.nav_mode = NavMode.DEAD_RECKONING
        elif gnss_bad and fallback_down:
            self.nav_mode = NavMode.HELD
        else:
            self.nav_mode = NavMode.GNSS_INS

        # --- terminal states
        if goal_reached:
            self._transition(MissionState.COMPLETE, t, "goal reached")
        elif mission_timeout and self.state not in (MissionState.COMPLETE,
                                                    MissionState.ABORTED):
            self._transition(MissionState.ABORTED, t, "mission timeout",
                             SafeAction.STOP_AND_HOLD)

        s = self.state
        # ------------------------------------------------------------------
        if s is MissionState.NORMAL:
            if critical_down:
                self._transition(MissionState.SAFE_ACTION, t,
                                 "critical sensor unavailable: %s" % ",".join(critical_down),
                                 SafeAction.STOP_AND_HOLD)
            elif self._hold("deg", gnss_bad or sigma_h > c.sigma_warn, dt, c.degraded_dwell):
                self._transition(MissionState.DEGRADED, t,
                                 ("GNSS fault confirmed" if gnss_bad
                                  else "position sigma %.2f m > %.2f m" % (sigma_h, c.sigma_warn)))

        elif s is MissionState.DEGRADED:
            if critical_down or sigma_h > c.sigma_unsafe:
                self._transition(MissionState.SAFE_ACTION, t,
                                 ("critical sensor unavailable: %s" % ",".join(critical_down)
                                  if critical_down
                                  else "position sigma %.2f m > unsafe limit %.2f m"
                                       % (sigma_h, c.sigma_unsafe)),
                                 SafeAction.STOP_AND_HOLD)
            elif fallback_down:
                # Safety principle 1: the fallback's own inputs must be valid.
                self._transition(MissionState.SAFE_ACTION, t,
                                 "no validated fallback: %s unhealthy" % ",".join(fallback_down),
                                 SafeAction.STOP_AND_HOLD)
            elif budget_spent:
                self._transition(MissionState.SAFE_ACTION, t,
                                 "dead-reckoning budget spent (%.0f s, %.0f m)"
                                 % (self.dr_time, self.dr_distance),
                                 SafeAction.STOP_AND_HOLD)
            elif not gnss_bad and sigma_h < c.sigma_recover:
                self._transition(MissionState.RECOVERY, t, "fault cleared, validating")
            elif sigma_h <= c.sigma_limit:
                self._transition(MissionState.LIMITED_OPERATION, t,
                                 "fallback validated; continuing within budget "
                                 "(%.0f s / %.0f m)" % (c.dr_time_budget, c.dr_distance_budget),
                                 SafeAction.SLOW)

        elif s is MissionState.LIMITED_OPERATION:
            if critical_down or fallback_down:
                self._transition(MissionState.SAFE_ACTION, t,
                                 "fallback inputs lost: %s"
                                 % ",".join(critical_down + fallback_down),
                                 SafeAction.STOP_AND_HOLD)
            elif budget_spent:
                self._transition(MissionState.SAFE_ACTION, t,
                                 "dead-reckoning budget spent (%.0f s, %.0f m)"
                                 % (self.dr_time, self.dr_distance),
                                 SafeAction.STOP_AND_HOLD)
            elif sigma_h > c.sigma_unsafe:
                self._transition(MissionState.SAFE_ACTION, t,
                                 "position sigma %.2f m > unsafe limit %.2f m"
                                 % (sigma_h, c.sigma_unsafe),
                                 SafeAction.STOP_AND_HOLD)
            elif not gnss_bad:
                self._transition(MissionState.RECOVERY, t, "fault cleared, validating")

        elif s is MissionState.SAFE_ACTION:
            held = (t - self.state_entry_time) >= c.safe_action_min_hold
            clean = (not critical_down and not gnss_bad and sigma_h < c.sigma_recover)
            if held and self._hold("rec", clean, dt, c.degraded_dwell):
                self._transition(MissionState.RECOVERY, t,
                                 "inputs restored, validating before resuming")

        elif s is MissionState.RECOVERY:
            clean = (not critical_down and not gnss_bad and sigma_h < c.sigma_recover)
            if not clean:
                self._transition(MissionState.SAFE_ACTION, t,
                                 "recovery check failed, holding",
                                 SafeAction.STOP_AND_HOLD)
            elif self._hold("norm", clean, dt, c.recovery_dwell):
                self._transition(MissionState.NORMAL, t,
                                 "validated clean for %.0f s" % c.recovery_dwell)

        # --- policy that follows from the state
        if self.state in (MissionState.SAFE_ACTION, MissionState.ABORTED):
            self.allow_motion = False
            self.speed_limit = 0.0
            self.safe_action = SafeAction.STOP_AND_HOLD
        elif self.state is MissionState.COMPLETE:
            self.allow_motion = False
            self.speed_limit = 0.0
            self.safe_action = SafeAction.NONE
        elif self.state is MissionState.LIMITED_OPERATION:
            self.allow_motion = True
            self.speed_limit = c.speed_limited
            self.safe_action = SafeAction.SLOW
        elif self.state is MissionState.DEGRADED:
            self.allow_motion = True
            self.speed_limit = c.speed_degraded
            self.safe_action = SafeAction.SLOW
        elif self.state is MissionState.RECOVERY:
            # Recovery moves, but no faster than DEGRADED allows: the inputs
            # are restored but not yet trusted.
            self.allow_motion = True
            self.speed_limit = c.speed_degraded
            self.safe_action = SafeAction.NONE
        else:
            self.allow_motion = True
            self.speed_limit = c.speed_normal
            self.safe_action = SafeAction.NONE

        return self.status(t)

    # -- outputs -----------------------------------------------------------
    def status(self, t: float, progress: float = 0.0,
               distance_to_goal: float = 0.0, replan_count: int = 0) -> MissionStatus:
        return MissionStatus(
            header=Header(stamp=t, frame_id="resilience_manager"),
            scenario_id=self.scenario_id,
            state=int(self.state), previous_state=int(self.previous_state),
            state_entry_time=self.state_entry_time,
            progress=progress, distance_to_goal=distance_to_goal,
            safe_action=int(self.safe_action), reason=self.reason,
            replan_count=replan_count)

    def nav_health(self, t: float, ekf, gnss_state) -> NavigationHealth:
        return NavigationHealth(
            header=Header(stamp=t, frame_id="resilience_manager"),
            estimate_valid=self.state not in (MissionState.SAFE_ACTION,
                                              MissionState.ABORTED),
            position_sigma=ekf.pos_sigma_horizontal(),
            velocity_sigma=ekf.vel_sigma(),
            yaw_sigma=ekf.yaw_sigma(),
            nav_mode=int(self.nav_mode),
            gnss_nis=float(gnss_state.nis),
            gnss_rejected=bool(gnss_state.confirmed),
            innovation_norm=float(gnss_state.innovation_norm),
            dead_reckoning_time=self.dr_time)

    def snapshot(self) -> dict:
        return {
            "state": self.state.name,
            "previous_state": self.previous_state.name,
            "reason": self.reason,
            "safe_action": self.safe_action.name,
            "nav_mode": self.nav_mode.name,
            "speed_limit": self.speed_limit,
            "allow_motion": self.allow_motion,
            "dr_time": round(self.dr_time, 2),
            "dr_distance": round(self.dr_distance, 2),
            "dr_time_budget": self.cfg.dr_time_budget,
            "dr_distance_budget": self.cfg.dr_distance_budget,
            "transitions": len(self.transitions),
        }
