"""Simulation sessions: several independent simulations in one bridge.

Each `SimulationSession` owns one `ScenarioRunner` and steps it from its own
asyncio task. The simulator is single-threaded and not re-entrant, so every
mutation of a runner happens inside that task: commands only set flags or
queue work, they never touch the runner from a socket callback.

All sessions share one Python process (and so one CPU core); with several
running at once each gets a share of it. Batch sweeps, which need throughput
rather than live pacing, run in worker processes instead (see batch_jobs).
"""
from __future__ import annotations

import asyncio
import contextlib
import itertools
import json
import time

from aiohttp import web

from experiment import scenario_schema as schema
from experiment.runner import ScenarioConfig, ScenarioRunner
from .snapshot import snapshot, world_static

MAX_SESSIONS = 6


class SimulationSession:
    def __init__(self, sid: str, raw_cfg: dict, *, label: str = "",
                 speed: float = 1.0, publish_hz: float = 20.0,
                 include_truth: bool = True, source: str = ""):
        self.id = sid
        self.raw_cfg = raw_cfg                 # validated scenario dict
        self.label = label or raw_cfg.get("id", sid)
        self.source = source                   # base scenario id it came from
        self.seed: int = int(raw_cfg.get("seed", 12345))
        self.speed = float(speed)
        self.publish_hz = float(publish_hz)
        self.include_truth = bool(include_truth)
        self.created = time.time()
        self.paused = False
        self.finished = False
        self.runner: ScenarioRunner | None = None
        self.static: dict = {}
        self.latest: dict = {}
        # Kept so a dashboard that connects (or reloads) after the run ended
        # still gets the final metrics, not a "still in progress" screen.
        self.results_msg: dict | None = None
        self.error: str | None = None
        self._subscribers: set[web.WebSocketResponse] = set()
        self._reset_requested = True
        self._stop = False
        self._step_budget = 0                  # one-shot stepping while paused
        self._pending_faults: list[dict] = []
        self._sent_path_version = -1
        self._building = False
        self.task: asyncio.Task | None = None

    # -- lifecycle -----------------------------------------------------
    def _build(self) -> None:
        cfg = ScenarioConfig.from_dict(self.raw_cfg)
        cfg.seed = int(self.seed)
        self.runner = ScenarioRunner(cfg)
        self.runner._replan(0.0, "initial plan")
        self.static = world_static(self.runner)
        self.latest = snapshot(self.runner, include_truth=self.include_truth)
        self._sent_path_version = -1
        self.finished = False
        self.results_msg = None
        self._pending_faults.clear()

    async def run(self) -> None:
        loop = asyncio.get_running_loop()
        while not self._stop:
            if self._reset_requested:
                self._reset_requested = False
                self._building = True
                try:
                    # Terrain generation takes a moment; keep the event loop
                    # (and every other session) responsive while it runs.
                    await loop.run_in_executor(None, self._build)
                except Exception as exc:          # report, don't kill the bridge
                    self.error = "build failed: %s" % exc
                    self.paused = True
                    await asyncio.sleep(0.5)
                    continue
                finally:
                    self._building = False
                self.error = None
                await self._broadcast({"type": "world", **self.static})

            r = self.runner
            if r is None:
                await asyncio.sleep(0.1)
                continue

            world_changed = False
            while self._pending_faults:
                f = self._pending_faults.pop(0)
                r.add_fault(f)
                world_changed |= f["type"] == "OBSTACLE_APPEARS"
            if world_changed:
                self.static = world_static(r)
                await self._broadcast({"type": "world_update", **self.static})

            dt = r.clock.dt
            wall0 = loop.time()
            budget = max(1, int((1.0 / self.publish_hz) / dt))
            alive = True
            if self.finished:
                pass                  # nothing left to simulate until a reset
            elif not self.paused:
                for _ in range(budget):
                    alive = r.step()
                    if not alive:
                        break
            elif self._step_budget > 0:
                n = min(self._step_budget, budget)
                self._step_budget -= n
                for _ in range(n):
                    alive = r.step()
                    if not alive:
                        break

            frame = snapshot(r, include_truth=self.include_truth,
                             last_path_version=self._sent_path_version)
            self._sent_path_version = r.replan_count
            just_finished = not alive and not self.finished
            if just_finished:
                self.finished = True
            frame["paused"] = self.paused
            frame["finished"] = self.finished
            frame["session"] = self.id
            self.latest = frame
            await self._broadcast(frame)

            if just_finished:
                with contextlib.suppress(Exception):
                    res = r.results()
                    self.results_msg = {"type": "results", "metrics": res["metrics"]}
                    await self._broadcast(self.results_msg)
                self.paused = True

            # Pace to wall clock so the dashboard animates at a watchable rate.
            target = (budget * dt) / max(self.speed, 1e-6)
            if self.paused or self.finished:
                target = 1.0 / self.publish_hz
            elapsed = loop.time() - wall0
            await asyncio.sleep(max(0.0, target - elapsed))

    def start(self) -> None:
        self.task = asyncio.create_task(self.run())

    async def stop(self) -> None:
        self._stop = True
        for ws in list(self._subscribers):
            with contextlib.suppress(Exception):
                await ws.close(code=4410, message=b"session closed")
        if self.task:
            self.task.cancel()
            with contextlib.suppress(asyncio.CancelledError, Exception):
                await self.task

    # -- subscribers ---------------------------------------------------
    def subscribe(self, ws: web.WebSocketResponse) -> None:
        self._subscribers.add(ws)

    def unsubscribe(self, ws: web.WebSocketResponse) -> None:
        self._subscribers.discard(ws)

    @property
    def subscriber_count(self) -> int:
        return len(self._subscribers)

    async def _broadcast(self, payload: dict) -> None:
        if not self._subscribers:
            return
        text = json.dumps(payload)
        dead = []
        for ws in list(self._subscribers):
            try:
                await ws.send_str(text)
            except Exception:
                dead.append(ws)
        for ws in dead:
            self._subscribers.discard(ws)

    async def send_initial(self, ws: web.WebSocketResponse) -> None:
        if self.static:
            await ws.send_str(json.dumps({"type": "world", **self.static}))
        if self.latest:
            await ws.send_str(json.dumps(self.latest))
        if self.results_msg:
            await ws.send_str(json.dumps(self.results_msg))

    # -- description ---------------------------------------------------
    def summary(self) -> dict:
        r = self.runner
        lat = self.latest or {}
        res = lat.get("resilience", {})
        prog = lat.get("mission_progress", {})
        return {
            "id": self.id,
            "label": self.label,
            "scenario": self.raw_cfg.get("id"),
            "source": self.source,
            "environment": self.raw_cfg.get("environment", "rolling_hills"),
            "seed": self.seed,
            "speed": self.speed,
            "paused": self.paused,
            "finished": self.finished,
            "building": self._building or self._reset_requested,
            "error": self.error,
            "t": lat.get("t", 0.0),
            "duration": float(self.raw_cfg.get("duration", 420.0)),
            "state": res.get("state"),
            "distance_to_goal_m": prog.get("distance_to_goal_m"),
            "collisions": prog.get("collisions"),
            "faults": len(r.injector.specs) if r else len(self.raw_cfg.get("faults", [])),
            "subscribers": self.subscriber_count,
            "created": self.created,
            "success": ((self.results_msg or {}).get("metrics", {})
                        .get("outcome", {}).get("mission_success")),
        }


# ----------------------------------------------------------------------
# commands
# ----------------------------------------------------------------------
def _cmd_pause(s: SimulationSession, _a: dict) -> dict:
    s.paused = True
    return {"paused": True}


def _cmd_resume(s: SimulationSession, _a: dict) -> dict:
    if s.finished:
        raise ValueError("run has finished; use reset to run it again")
    s.paused = False
    return {"paused": False}


def _cmd_step(s: SimulationSession, args: dict) -> dict:
    n = int(args.get("steps", 1))
    if not 1 <= n <= 20_000:
        raise ValueError("steps must be between 1 and 20000")
    s.paused = True
    s._step_budget += n
    return {"queued_steps": s._step_budget}


def _cmd_set_speed(s: SimulationSession, args: dict) -> dict:
    v = float(args.get("speed", 1.0))
    if not 0.05 <= v <= 50.0:
        raise ValueError("speed must be between 0.05 and 50")
    s.speed = v
    return {"speed": v}


def _cmd_reset(s: SimulationSession, args: dict) -> dict:
    if "seed" in args:
        sd = int(args["seed"])
        if not 0 <= sd <= 2 ** 31 - 1:
            raise ValueError("seed out of range")
        s.seed = sd
    s._reset_requested = True
    s.paused = False
    return {"reset": True, "seed": s.seed}


def _cmd_inject_declared_fault(s: SimulationSession, args: dict) -> dict:
    """Re-trigger one of the scenario's own declared faults, by index."""
    r = s.runner
    if r is None:
        raise ValueError("simulation not running")
    specs = r.injector.specs
    i = int(args.get("index", -1))
    if not 0 <= i < len(specs):
        raise ValueError("index must be 0..%d" % (len(specs) - 1))
    spec = specs[i]
    spec.onset = float(r.clock.t)
    return {"armed": spec.fault_type.name, "target": spec.target, "onset": spec.onset}


def _cmd_list_declared_faults(s: SimulationSession, _a: dict) -> dict:
    r = s.runner
    specs = [] if r is None else r.injector.specs
    return {"faults": [
        {"index": i, "type": f.fault_type.name, "target": f.target,
         "onset": f.onset, "duration": f.duration}
        for i, f in enumerate(specs)]}


def _cmd_inject_fault(s: SimulationSession, args: dict) -> dict:
    """Inject a NEW fault, starting now. Validated against the fault schema.

    The fault types, targets and parameter bounds are the same allow-list the
    scenario editor uses; the result is arithmetic on a simulated stream (or
    an obstacle in the simulated world) and nothing else.
    """
    r = s.runner
    if r is None or s.finished:
        raise ValueError("simulation not running")
    errors: list[str] = []
    w = r.terrain
    f = schema.validate_fault(dict(args.get("fault") or {}, onset=0.0),
                              duration=1e9, world_size=(w.size_x, w.size_y),
                              errors=errors, where="fault")
    if f is None:
        raise ValueError("; ".join(errors))
    if len(r.injector.specs) + len(s._pending_faults) >= 64:
        raise ValueError("too many faults in this session")
    s._pending_faults.append(f)
    return {"queued": f["type"], "target": f["target"], "at": round(r.clock.t, 2)}


#: The complete set of verbs a client may use on a session.
COMMANDS = {
    "pause": _cmd_pause,
    "resume": _cmd_resume,
    "step": _cmd_step,
    "set_speed": _cmd_set_speed,
    "reset": _cmd_reset,
    "inject_declared_fault": _cmd_inject_declared_fault,
    "list_declared_faults": _cmd_list_declared_faults,
    "inject_fault": _cmd_inject_fault,
}


def run_command(s: SimulationSession, verb, args) -> dict:
    if not isinstance(args, dict):
        raise ValueError("args must be an object")
    fn = COMMANDS.get(verb)
    if fn is None:
        raise ValueError("unknown command %r; allowed: %s" % (verb, ", ".join(sorted(COMMANDS))))
    return fn(s, args)


# ----------------------------------------------------------------------
# manager
# ----------------------------------------------------------------------
class SessionManager:
    def __init__(self, *, include_truth: bool = True, publish_hz: float = 20.0):
        self.sessions: dict[str, SimulationSession] = {}
        self.include_truth = include_truth
        self.publish_hz = publish_hz
        self._ids = itertools.count(1)

    def create(self, raw_cfg: dict, *, label: str = "", speed: float = 1.0,
               source: str = "") -> SimulationSession:
        if len(self.sessions) >= MAX_SESSIONS:
            raise ValueError("at most %d simultaneous sessions; close one first" % MAX_SESSIONS)
        if not 0.05 <= float(speed) <= 50.0:
            raise ValueError("speed must be between 0.05 and 50")
        sid = "s%d" % next(self._ids)
        s = SimulationSession(sid, raw_cfg, label=label, speed=speed,
                              publish_hz=self.publish_hz,
                              include_truth=self.include_truth, source=source)
        self.sessions[sid] = s
        s.start()
        return s

    def get(self, sid: str | None) -> SimulationSession | None:
        if sid:
            return self.sessions.get(sid)
        return next(iter(self.sessions.values()), None)

    async def close(self, sid: str) -> bool:
        s = self.sessions.pop(sid, None)
        if s is None:
            return False
        await s.stop()
        return True

    async def close_all(self) -> None:
        for sid in list(self.sessions):
            await self.close(sid)

    def list(self) -> list[dict]:
        return [s.summary() for s in self.sessions.values()]
