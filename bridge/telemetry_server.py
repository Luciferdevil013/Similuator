"""WebSocket bridge between the simulator and the dashboard.

Security design, which the project report requires explicitly:

  * Telemetry and commands are DIFFERENT endpoints with different privileges.
    `/ws/telemetry` is broadcast-only -- anything a client sends on it is
    discarded, so a compromised or buggy dashboard cannot reach the simulator
    through the channel it uses to read.

  * There is no generic command passthrough. `/ws/command` accepts only the
    verbs in COMMANDS, each with a declared, bounded signature, and the
    handler looks the verb up in that table. The browser cannot name a Python
    attribute, a module, a topic or a node, so "publish to an arbitrary topic"
    is not a thing the protocol can express. This is the browser-facing half
    of the report's rule against exposing arbitrary ROS commands.

  * Commands need a shared token, generated at startup and printed once. The
    bridge also binds to loopback by default. Neither is real authentication;
    they stop a page in another tab from driving the rig, which is the threat
    that actually exists on a developer's machine.

  * Faults are injected by index into the scenario's own DECLARED fault list.
    A client cannot invent a fault, and in particular cannot reach anything
    outside the process: every fault in this platform is arithmetic applied
    to a simulated stream inside this one program. Nothing is transmitted,
    no radio is touched and no operating-system state is changed, which is
    the isolation requirement the report sets for fault injection.

Run it with:

    python3 -m bridge.telemetry_server --scenario experiments/scenarios/baseline_normal.yaml
"""

from __future__ import annotations

import argparse
import asyncio
import contextlib
import json
import secrets
import time
from pathlib import Path

from aiohttp import WSMsgType, web

from experiment.runner import ScenarioConfig, ScenarioRunner
from .snapshot import snapshot, world_static

ROOT = Path(__file__).resolve().parent.parent


# ----------------------------------------------------------------------
# simulation host
# ----------------------------------------------------------------------
class SimulationHost:
    """Owns the runner and steps it on a wall-clock schedule.

    The simulator is single-threaded and not re-entrant, so every mutation
    happens here, in the one asyncio task that owns it. Command handlers set
    flags; they never touch the runner directly from a socket callback.
    """

    def __init__(self, scenario: str | Path, *, seed: int | None = None,
                 speed: float = 1.0, publish_hz: float = 20.0,
                 include_truth: bool = True):
        self.scenario_path = str(scenario)
        self.seed = seed
        self.speed = float(speed)
        self.publish_hz = float(publish_hz)
        self.include_truth = bool(include_truth)
        self.paused = False
        self.runner: ScenarioRunner | None = None
        self.static: dict = {}
        self.latest: dict = {}
        self._subscribers: set[web.WebSocketResponse] = set()
        self._reset_requested = True
        self._stop = False
        self._step_budget = 0          # one-shot stepping while paused

    # -- lifecycle -----------------------------------------------------
    def _build(self) -> None:
        cfg = ScenarioConfig.load(self.scenario_path)
        if self.seed is not None:
            cfg.seed = int(self.seed)
        self.runner = ScenarioRunner(cfg)
        self.runner._replan(0.0, "initial plan")
        self.static = world_static(self.runner)
        self.latest = snapshot(self.runner, include_truth=self.include_truth)
        self._sent_path_version = -1

    async def run(self) -> None:
        loop = asyncio.get_running_loop()
        next_pub = 0.0
        while not self._stop:
            if self._reset_requested:
                self._reset_requested = False
                self._build()
                await self._broadcast({"type": "world", **self.static})
                next_pub = 0.0

            r = self.runner
            dt = r.clock.dt
            wall0 = loop.time()
            # Advance one publish interval of simulated time per iteration.
            budget = max(1, int((1.0 / self.publish_hz) / dt))
            alive = True
            if not self.paused:
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
            frame["paused"] = self.paused
            frame["finished"] = not alive
            self.latest = frame
            await self._broadcast(frame)

            if not alive:
                with contextlib.suppress(Exception):
                    res = r.results()
                    await self._broadcast({"type": "results",
                                           "metrics": res["metrics"]})
                self.paused = True

            # Pace to wall clock so the dashboard animates at a watchable rate.
            target = (budget * dt) / max(self.speed, 1e-6)
            elapsed = loop.time() - wall0
            await asyncio.sleep(max(0.0, target - elapsed))

    def stop(self) -> None:
        self._stop = True

    # -- subscribers ---------------------------------------------------
    def subscribe(self, ws: web.WebSocketResponse) -> None:
        self._subscribers.add(ws)

    def unsubscribe(self, ws: web.WebSocketResponse) -> None:
        self._subscribers.discard(ws)

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


# ----------------------------------------------------------------------
# command registry
# ----------------------------------------------------------------------
def _cmd_pause(host: SimulationHost, _a: dict) -> dict:
    host.paused = True
    return {"paused": True}


def _cmd_resume(host: SimulationHost, _a: dict) -> dict:
    host.paused = False
    return {"paused": False}


def _cmd_step(host: SimulationHost, args: dict) -> dict:
    n = int(args.get("steps", 1))
    if not 1 <= n <= 20_000:
        raise ValueError("steps must be between 1 and 20000")
    host.paused = True
    host._step_budget += n
    return {"queued_steps": host._step_budget}


def _cmd_set_speed(host: SimulationHost, args: dict) -> dict:
    v = float(args.get("speed", 1.0))
    if not 0.05 <= v <= 50.0:
        raise ValueError("speed must be between 0.05 and 50")
    host.speed = v
    return {"speed": v}


def _cmd_reset(host: SimulationHost, args: dict) -> dict:
    if "seed" in args:
        sd = int(args["seed"])
        if not 0 <= sd <= 2 ** 31 - 1:
            raise ValueError("seed out of range")
        host.seed = sd
    host._reset_requested = True
    host.paused = False
    return {"reset": True, "seed": host.seed}


def _cmd_inject_declared_fault(host: SimulationHost, args: dict) -> dict:
    """Trigger one of the scenario's own declared faults, by index.

    The index is into the scenario file's fault list, so the set of faults a
    client can cause is fixed before the server starts. The fault itself is
    an arithmetic change to a simulated sensor stream inside this process.
    """
    r = host.runner
    if r is None:
        raise ValueError("simulation not running")
    specs = r.injector.specs
    i = int(args.get("index", -1))
    if not 0 <= i < len(specs):
        raise ValueError("index must be 0..%d" % (len(specs) - 1))
    spec = specs[i]
    spec.onset = float(r.clock.t)
    return {"armed": spec.fault_type.name, "target": spec.target,
            "onset": spec.onset}


def _cmd_list_declared_faults(host: SimulationHost, _a: dict) -> dict:
    r = host.runner
    specs = [] if r is None else r.injector.specs
    return {"faults": [
        {"index": i, "type": s.fault_type.name, "target": s.target,
         "onset": s.onset, "duration": s.duration}
        for i, s in enumerate(specs)]}


#: The complete set of verbs the browser may use. Anything else is refused.
COMMANDS = {
    "pause": _cmd_pause,
    "resume": _cmd_resume,
    "step": _cmd_step,
    "set_speed": _cmd_set_speed,
    "reset": _cmd_reset,
    "inject_declared_fault": _cmd_inject_declared_fault,
    "list_declared_faults": _cmd_list_declared_faults,
}


# ----------------------------------------------------------------------
# HTTP / WS application
# ----------------------------------------------------------------------
def make_app(host: SimulationHost, token: str) -> web.Application:
    app = web.Application()
    app["host"] = host
    app["token"] = token

    async def ws_telemetry(request: web.Request) -> web.WebSocketResponse:
        ws = web.WebSocketResponse(heartbeat=20.0, max_msg_size=4 << 20)
        await ws.prepare(request)
        h: SimulationHost = request.app["host"]
        h.subscribe(ws)
        try:
            await ws.send_str(json.dumps({"type": "world", **h.static}))
            if h.latest:
                await ws.send_str(json.dumps(h.latest))
            async for msg in ws:
                # Read-only by construction: inbound traffic is discarded.
                # A client that wants to change something must open the
                # command socket and present the token.
                if msg.type is WSMsgType.ERROR:
                    break
        finally:
            h.unsubscribe(ws)
        return ws

    async def ws_command(request: web.Request) -> web.WebSocketResponse:
        ws = web.WebSocketResponse(heartbeat=20.0, max_msg_size=64 << 10)
        await ws.prepare(request)
        h: SimulationHost = request.app["host"]
        authed = secrets.compare_digest(
            request.query.get("token", ""), request.app["token"])
        if not authed:
            await ws.send_str(json.dumps({"type": "error",
                                          "error": "invalid or missing token"}))
            await ws.close(code=4403, message=b"forbidden")
            return ws
        await ws.send_str(json.dumps({"type": "ready",
                                      "commands": sorted(COMMANDS)}))
        async for msg in ws:
            if msg.type is not WSMsgType.TEXT:
                continue
            reply: dict
            try:
                req = json.loads(msg.data)
                if not isinstance(req, dict):
                    raise ValueError("payload must be an object")
                verb = req.get("command")
                args = req.get("args") or {}
                if not isinstance(args, dict):
                    raise ValueError("args must be an object")
                fn = COMMANDS.get(verb)
                if fn is None:
                    raise ValueError("unknown command %r; allowed: %s"
                                     % (verb, ", ".join(sorted(COMMANDS))))
                reply = {"type": "ack", "command": verb, "id": req.get("id"),
                         "result": fn(h, args)}
            except Exception as exc:
                reply = {"type": "error", "error": str(exc)}
            await ws.send_str(json.dumps(reply))
        return ws

    async def health(_r: web.Request) -> web.Response:
        h: SimulationHost = app["host"]
        return web.json_response({
            "ok": True,
            "scenario": h.scenario_path,
            "paused": h.paused,
            "t": (h.runner.clock.t if h.runner else 0.0),
            "subscribers": len(h._subscribers),
        })

    app.router.add_get("/ws/telemetry", ws_telemetry)
    app.router.add_get("/ws/command", ws_command)
    app.router.add_get("/healthz", health)

    dist = ROOT / "dashboard" / "dist"
    if dist.is_dir():
        app.router.add_static("/", dist, show_index=True, follow_symlinks=False)
    return app


async def _serve(args) -> None:
    token = args.token or secrets.token_urlsafe(18)
    host = SimulationHost(args.scenario, seed=args.seed, speed=args.speed,
                          publish_hz=args.publish_hz,
                          include_truth=not args.no_truth)
    app = make_app(host, token)
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, args.bind, args.port)
    await site.start()
    print("ResilienceLab telemetry bridge")
    print("  scenario   : %s" % args.scenario)
    print("  telemetry  : ws://%s:%d/ws/telemetry   (read-only)" % (args.bind, args.port))
    print("  command    : ws://%s:%d/ws/command?token=%s" % (args.bind, args.port, token))
    print("  commands   : %s" % ", ".join(sorted(COMMANDS)))
    print("  ground truth in stream: %s" % (not args.no_truth))
    sim = asyncio.create_task(host.run())
    try:
        await sim
    except asyncio.CancelledError:
        pass
    finally:
        host.stop()
        await runner.cleanup()


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--scenario",
                    default=str(ROOT / "experiments/scenarios/baseline_normal.yaml"))
    ap.add_argument("--seed", type=int, default=None)
    ap.add_argument("--bind", default="127.0.0.1",
                    help="loopback by default; this bridge has no real auth")
    ap.add_argument("--port", type=int, default=8787)
    ap.add_argument("--speed", type=float, default=1.0,
                    help="wall-clock pacing multiplier")
    ap.add_argument("--publish-hz", type=float, default=20.0)
    ap.add_argument("--token", default=None,
                    help="shared secret for the command socket (generated if omitted)")
    ap.add_argument("--no-truth", action="store_true",
                    help="omit ground truth from the stream")
    args = ap.parse_args(argv)
    try:
        asyncio.run(_serve(args))
    except KeyboardInterrupt:
        pass
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
