"""WebSocket + REST bridge between the simulators and the dashboard.

The bridge hosts any number of simulation SESSIONS (independent runners, each
with its own scenario, environment and seed), launches BATCH sweeps in worker
processes, and serves the scenario editor.

Security design, which the project report requires explicitly:

  * Telemetry and commands are DIFFERENT endpoints with different privileges.
    `/ws/telemetry` is broadcast-only -- anything a client sends on it is
    discarded, so a buggy dashboard cannot reach a simulator through the
    channel it uses to read.

  * There is no generic passthrough. Commands are verbs from a fixed table
    (bridge.sessions.COMMANDS), scenario edits are checked field by field
    against an allow-list with bounds (experiment.scenario_schema), and
    nothing a client sends can name a module, a file path, a topic or a
    Python attribute. This is the browser-facing half of the report's rule
    against exposing arbitrary ROS commands.

  * Every endpoint that changes state needs a shared token, generated at
    startup and printed once (header `X-Token` or `?token=`). The bridge binds
    to loopback by default. Neither is real authentication; they stop a page
    in another tab from driving the rig, which is the threat that actually
    exists on a developer's machine.

  * Faults are arithmetic applied to a simulated stream (or an obstacle in the
    simulated world) inside this program. Nothing is transmitted, no radio is
    touched and no operating-system state is changed, which is the isolation
    requirement the report sets for fault injection.

Run it with:

    python3 -m bridge.telemetry_server --scenario experiments/scenarios/baseline_normal.yaml
"""

from __future__ import annotations

import argparse
import asyncio
import json
import secrets
from pathlib import Path

from aiohttp import WSMsgType, web

from experiment import scenario_schema as schema
from .batch_jobs import BatchManager, list_runs, load_run
from .sessions import COMMANDS, SessionManager, run_command

ROOT = Path(__file__).resolve().parent.parent
SESSIONS = web.AppKey("sessions", SessionManager)
BATCHES = web.AppKey("batches", BatchManager)
TOKEN = web.AppKey("token", str)
SELFTEST = web.AppKey("selftest", dict)


def _json_error(status: int, errors) -> web.Response:
    if isinstance(errors, str):
        errors = [errors]
    return web.json_response({"ok": False, "errors": errors}, status=status)


def make_app(sessions: SessionManager, token: str) -> web.Application:
    app = web.Application(client_max_size=256 << 10)
    app[SESSIONS] = sessions
    app[BATCHES] = BatchManager()
    app[TOKEN] = token
    app[SELFTEST] = {}

    # -- helpers -------------------------------------------------------
    def authed(request: web.Request) -> bool:
        given = request.headers.get("X-Token") or request.query.get("token", "")
        return secrets.compare_digest(given, request.app[TOKEN])

    def require_token(handler):
        async def wrapped(request: web.Request):
            if not authed(request):
                return _json_error(403, "invalid or missing token")
            return await handler(request)
        return wrapped

    async def body(request: web.Request) -> dict:
        try:
            data = await request.json()
        except Exception:
            raise web.HTTPBadRequest(text=json.dumps({"ok": False, "errors": ["body must be JSON"]}),
                                     content_type="application/json")
        if not isinstance(data, dict):
            raise web.HTTPBadRequest(text=json.dumps({"ok": False, "errors": ["body must be an object"]}),
                                     content_type="application/json")
        return data

    def resolve_edit(edit: dict) -> dict:
        """A scenario id, or an editor payload, -> validated raw config."""
        return schema.build_config(edit)

    # -- websockets ----------------------------------------------------
    async def ws_telemetry(request: web.Request) -> web.WebSocketResponse:
        ws = web.WebSocketResponse(heartbeat=20.0, max_msg_size=4 << 20)
        await ws.prepare(request)
        s = sessions.get(request.query.get("session"))
        if s is None:
            await ws.send_str(json.dumps({"type": "no_session"}))
            await ws.close(code=4404, message=b"no such session")
            return ws
        s.subscribe(ws)
        try:
            await s.send_initial(ws)
            async for msg in ws:
                # Read-only by construction: inbound traffic is discarded.
                if msg.type is WSMsgType.ERROR:
                    break
        finally:
            s.unsubscribe(ws)
        return ws

    async def ws_command(request: web.Request) -> web.WebSocketResponse:
        """Legacy command socket; the dashboard now uses the REST endpoint."""
        ws = web.WebSocketResponse(heartbeat=20.0, max_msg_size=64 << 10)
        await ws.prepare(request)
        if not authed(request):
            await ws.send_str(json.dumps({"type": "error", "error": "invalid or missing token"}))
            await ws.close(code=4403, message=b"forbidden")
            return ws
        sid = request.query.get("session")
        await ws.send_str(json.dumps({"type": "ready", "commands": sorted(COMMANDS)}))
        async for msg in ws:
            if msg.type is not WSMsgType.TEXT:
                continue
            try:
                req = json.loads(msg.data)
                if not isinstance(req, dict):
                    raise ValueError("payload must be an object")
                s = sessions.get(sid)
                if s is None:
                    raise ValueError("no such session")
                reply = {"type": "ack", "command": req.get("command"), "id": req.get("id"),
                         "result": run_command(s, req.get("command"), req.get("args") or {})}
            except Exception as exc:
                reply = {"type": "error", "error": str(exc)}
            await ws.send_str(json.dumps(reply))
        return ws

    # -- info / scenarios ----------------------------------------------
    async def api_info(request: web.Request) -> web.Response:
        return web.json_response({
            "ok": True, "authed": authed(request),
            "commands": sorted(COMMANDS), "schema": schema.describe(),
        })

    async def api_scenarios(_r: web.Request) -> web.Response:
        return web.json_response({"ok": True, "scenarios": schema.list_scenarios()})

    async def api_scenario_get(request: web.Request) -> web.Response:
        sid = request.match_info["sid"]
        p = schema.scenario_path(sid)
        if p is None:
            return _json_error(404, "no scenario %r" % sid)
        raw = schema.load_raw(p)
        return web.json_response({
            "ok": True, "id": sid,
            "source": "custom" if p.parent == schema.CUSTOM_DIR else "builtin",
            "config": raw, "values": schema.current_values(raw)})

    async def api_validate(request: web.Request) -> web.Response:
        try:
            raw = resolve_edit(await body(request))
        except schema.ScenarioError as exc:
            return _json_error(422, exc.errors)
        return web.json_response({"ok": True, "config": raw,
                                  "values": schema.current_values(raw)})

    @require_token
    async def api_scenario_save(request: web.Request) -> web.Response:
        data = await body(request)
        if not data.get("id"):
            return _json_error(422, "a saved scenario needs an id")
        try:
            raw = resolve_edit(data)
            p = schema.save_custom(raw)
        except schema.ScenarioError as exc:
            return _json_error(422, exc.errors)
        return web.json_response({"ok": True, "id": raw["id"],
                                  "path": str(p.relative_to(ROOT))})

    @require_token
    async def api_scenario_delete(request: web.Request) -> web.Response:
        if not schema.delete_custom(request.match_info["sid"]):
            return _json_error(404, "no custom scenario with that id")
        return web.json_response({"ok": True})

    # -- sessions --------------------------------------------------------
    async def api_sessions(_r: web.Request) -> web.Response:
        return web.json_response({"ok": True, "sessions": sessions.list()})

    @require_token
    async def api_session_create(request: web.Request) -> web.Response:
        data = await body(request)
        try:
            raw = resolve_edit(data)
            edit = {k: v for k, v in data.items() if k not in ("label", "speed")}
            s = sessions.create(raw, label=str(data.get("label", ""))[:60],
                                speed=float(data.get("speed", 1.0)),
                                source=str(data.get("base", "")), edit=edit)
        except schema.ScenarioError as exc:
            return _json_error(422, exc.errors)
        except (ValueError, TypeError) as exc:
            return _json_error(422, str(exc))
        return web.json_response({"ok": True, "session": s.summary()})

    @require_token
    async def api_session_patch(request: web.Request) -> web.Response:
        """Change a running session: environment, vehicle, faults, any field."""
        s = sessions.get(request.match_info["sid"])
        if s is None:
            return _json_error(404, "no such session")
        data = await body(request)
        edit = dict(s.edit)
        edit.update({k: v for k, v in data.items() if k not in ("label", "speed")})
        try:
            result = s.reconfigure(edit)
        except schema.ScenarioError as exc:
            return _json_error(422, exc.errors)
        if "label" in data:
            s.label = str(data["label"])[:60]
        return web.json_response({"ok": True, "result": result, "session": s.summary()})

    @require_token
    async def api_session_delete(request: web.Request) -> web.Response:
        if not await sessions.close(request.match_info["sid"]):
            return _json_error(404, "no such session")
        return web.json_response({"ok": True})

    @require_token
    async def api_session_command(request: web.Request) -> web.Response:
        s = sessions.get(request.match_info["sid"])
        if s is None:
            return _json_error(404, "no such session")
        data = await body(request)
        try:
            result = run_command(s, data.get("command"), data.get("args") or {})
        except (ValueError, TypeError, KeyError) as exc:
            return _json_error(422, str(exc))
        return web.json_response({"ok": True, "command": data.get("command"),
                                  "result": result})

    # -- batches / runs ------------------------------------------------
    async def api_batches(request: web.Request) -> web.Response:
        return web.json_response({"ok": True, "batches": request.app[BATCHES].list()})

    async def api_batch_get(request: web.Request) -> web.Response:
        j = request.app[BATCHES].jobs.get(request.match_info["jid"])
        if j is None:
            return _json_error(404, "no such batch")
        return web.json_response({"ok": True, "batch": j.summary(rows=True)})

    @require_token
    async def api_batch_start(request: web.Request) -> web.Response:
        data = await body(request)
        seeds = data.get("seeds") or [12345]
        if (not isinstance(seeds, list) or not seeds or len(seeds) > 20
                or any(isinstance(x, bool) or not isinstance(x, int)
                       or not 0 <= x <= 2 ** 31 - 1 for x in seeds)):
            return _json_error(422, "seeds must be a list of 1-20 integers")
        edits = []
        for sid in data.get("scenarios") or []:
            edits.append((str(sid), {"base": str(sid)}))
        if data.get("edit"):
            e = dict(data["edit"])
            edits.append((str(e.get("id") or e.get("base") or "custom"), e))
        if not edits:
            return _json_error(422, "choose at least one scenario")
        trials = []
        try:
            for sid, e in edits:
                raw = resolve_edit(e)
                for sd in seeds:
                    trials.append((sid, raw, int(sd)))
            job = request.app[BATCHES].start(
                trials, jobs=int(data.get("jobs", 4)),
                label=str(data.get("label", ""))[:60])
        except schema.ScenarioError as exc:
            return _json_error(422, exc.errors)
        except (ValueError, TypeError) as exc:
            return _json_error(422, str(exc))
        return web.json_response({"ok": True, "batch": job.summary()})

    @require_token
    async def api_batch_cancel(request: web.Request) -> web.Response:
        j = request.app[BATCHES].jobs.get(request.match_info["jid"])
        if j is None:
            return _json_error(404, "no such batch")
        j.cancel()
        return web.json_response({"ok": True})

    async def api_runs(_r: web.Request) -> web.Response:
        loop = asyncio.get_running_loop()
        rows = await loop.run_in_executor(None, list_runs)
        return web.json_response({"ok": True, "runs": rows})

    async def api_run_get(request: web.Request) -> web.Response:
        r = load_run(request.match_info["path"])
        if r is None:
            return _json_error(404, "no such run")
        return web.json_response({"ok": True, **r})

    @require_token
    async def api_selftest(request: web.Request) -> web.Response:
        """Run the component self-test in a worker process (CPU-bound)."""
        from concurrent.futures import ProcessPoolExecutor
        from experiment.selftest import run_all
        only = request.query.get("only") or None
        loop = asyncio.get_running_loop()
        with ProcessPoolExecutor(max_workers=1) as ex:
            report = await loop.run_in_executor(ex, run_all, only)
        request.app[SELFTEST]["last"] = report
        return web.json_response({"ok": True, "report": report})

    async def api_selftest_last(request: web.Request) -> web.Response:
        return web.json_response({"ok": True, "report": request.app[SELFTEST].get("last")})

    async def health(_r: web.Request) -> web.Response:
        return web.json_response({"ok": True, "sessions": sessions.list()})

    r = app.router
    r.add_get("/ws/telemetry", ws_telemetry)
    r.add_get("/ws/command", ws_command)
    r.add_get("/healthz", health)
    r.add_get("/api/info", api_info)
    r.add_get("/api/scenarios", api_scenarios)
    r.add_post("/api/scenarios", api_scenario_save)
    r.add_post("/api/scenarios/validate", api_validate)
    r.add_get("/api/scenarios/{sid}", api_scenario_get)
    r.add_delete("/api/scenarios/{sid}", api_scenario_delete)
    r.add_get("/api/sessions", api_sessions)
    r.add_post("/api/sessions", api_session_create)
    r.add_delete("/api/sessions/{sid}", api_session_delete)
    r.add_patch("/api/sessions/{sid}", api_session_patch)
    r.add_post("/api/selftest", api_selftest)
    r.add_get("/api/selftest", api_selftest_last)
    r.add_post("/api/sessions/{sid}/command", api_session_command)
    r.add_get("/api/batches", api_batches)
    r.add_post("/api/batches", api_batch_start)
    r.add_get("/api/batches/{jid}", api_batch_get)
    r.add_delete("/api/batches/{jid}", api_batch_cancel)
    r.add_get("/api/runs", api_runs)
    r.add_get("/api/runs/{path:.+}", api_run_get)

    async def on_shutdown(a: web.Application) -> None:
        await a[BATCHES].shutdown()
        await sessions.close_all()
    app.on_shutdown.append(on_shutdown)

    dist = ROOT / "dashboard" / "dist"
    if dist.is_dir():
        async def index(_r: web.Request) -> web.StreamResponse:
            return web.FileResponse(dist / "index.html")

        # "/" must serve the app itself, not a directory listing.
        r.add_get("/", index)
        r.add_static("/", dist, follow_symlinks=False)
    else:
        async def no_build(_r: web.Request) -> web.Response:
            return web.Response(
                status=503, content_type="text/plain",
                text="Dashboard not built. Run:  cd dashboard && npm install && npm run build\n"
                     "or use the dev server:  cd dashboard && npm run dev  (http://localhost:5173)\n")

        r.add_get("/", no_build)
    return app


async def _serve(args) -> None:
    token = args.token or secrets.token_urlsafe(18)
    sessions = SessionManager(include_truth=not args.no_truth, publish_hz=args.publish_hz)
    app = make_app(sessions, token)
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, args.bind, args.port)
    await site.start()

    for scen in args.scenario or []:
        if not scen:
            continue
        sid = Path(scen).stem
        edit = {"base": sid}
        if args.seed is not None:
            edit["fields"] = {"seed": args.seed}
        sessions.create(schema.build_config(edit), speed=args.speed, source=sid, edit=edit)

    print("ResilienceLab telemetry bridge")
    print("  dashboard  : http://%s:%d/?token=%s" % (args.bind, args.port, token))
    print("  sessions   : %s" % (", ".join(Path(x).stem for x in args.scenario if x)
                                 or "(none; launch from the Lab tab)"))
    print("  telemetry  : ws://%s:%d/ws/telemetry?session=<id>   (read-only)" % (args.bind, args.port))
    print("  REST API   : http://%s:%d/api/...   (X-Token header for changes)" % (args.bind, args.port))
    print("  ground truth in stream: %s" % (not args.no_truth))
    try:
        await asyncio.Event().wait()
    except asyncio.CancelledError:
        pass
    finally:
        await runner.cleanup()


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--scenario", action="append", default=None,
                    help="scenario to start as a session; repeat for several "
                         "(default: baseline_normal; pass '' to start with none)")
    ap.add_argument("--seed", type=int, default=None)
    ap.add_argument("--bind", default="127.0.0.1",
                    help="loopback by default; this bridge has no real auth")
    ap.add_argument("--port", type=int, default=8787)
    ap.add_argument("--speed", type=float, default=1.0,
                    help="wall-clock pacing multiplier for the first session")
    ap.add_argument("--publish-hz", type=float, default=20.0)
    ap.add_argument("--token", default=None,
                    help="shared secret for state-changing requests (generated if omitted)")
    ap.add_argument("--no-truth", action="store_true",
                    help="omit ground truth from the stream")
    args = ap.parse_args(argv)
    if args.scenario is None:
        args.scenario = [str(ROOT / "experiments/scenarios/baseline_normal.yaml")]
    try:
        asyncio.run(_serve(args))
    except KeyboardInterrupt:
        pass
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
