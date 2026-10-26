import asyncio

from aiohttp.test_utils import TestClient, TestServer

from bridge.sessions import SessionManager
from bridge.telemetry_server import make_app

H = {"X-Token": "secret"}


def with_client(fn):
    async def go():
        app = make_app(SessionManager(), "secret")
        async with TestClient(TestServer(app)) as c:
            await fn(c)
    asyncio.run(go())


def test_info_and_scenarios():
    async def t(c):
        r = await (await c.get("/api/info")).json()
        assert r["ok"] and not r["authed"] and "dense_forest" in r["schema"]["environments"]
        r = await (await c.get("/api/info", headers=H)).json()
        assert r["authed"]
        r = await (await c.get("/api/scenarios")).json()
        assert any(s["id"] == "gnss_outage" for s in r["scenarios"])
        r = await (await c.get("/api/scenarios/gnss_outage")).json()
        assert r["values"]["seed"] == 12345
        assert (await c.get("/api/scenarios/nope")).status == 404
    with_client(t)


def test_mutations_need_the_token():
    async def t(c):
        for method, path in [("post", "/api/sessions"), ("post", "/api/batches"),
                             ("post", "/api/scenarios"), ("delete", "/api/sessions/s1")]:
            resp = await getattr(c, method)(path, json={})
            assert resp.status == 403, path
    with_client(t)


def test_session_lifecycle_and_commands():
    async def t(c):
        r = await (await c.post("/api/sessions", headers=H, json={
            "base": "baseline_normal", "environment": "flat_open",
            "fields": {"duration": 60}, "speed": 50})).json()
        assert r["ok"], r
        sid = r["session"]["id"]
        for _ in range(100):                    # wait for the world to build
            ss = (await (await c.get("/api/sessions")).json())["sessions"]
            if ss[0]["t"] > 1.0:
                break
            await asyncio.sleep(0.1)
        assert ss[0]["environment"] == "flat_open"

        async def cmd(command, **args):
            return await (await c.post("/api/sessions/%s/command" % sid, headers=H,
                                       json={"command": command, "args": args})).json()
        assert (await cmd("pause"))["ok"]
        assert (await cmd("set_speed", speed=999))["ok"] is False
        assert (await cmd("os.system"))["ok"] is False
        bad = await cmd("inject_fault", fault={"type": "IMU_BIAS", "params": {"gyro_bias": [5, 0, 0]}})
        assert bad["ok"] is False and "outside" in bad["errors"][0]
        ok = await cmd("inject_fault", fault={"type": "OBSTACLE_APPEARS", "params": {"x": 50, "y": 50}})
        assert ok["ok"], ok
        bad_edit = await (await c.post("/api/sessions", headers=H, json={
            "base": "baseline_normal", "fields": {"world.relief": 500}})).json()
        assert bad_edit["ok"] is False
        assert (await (await c.delete("/api/sessions/" + sid, headers=H)).json())["ok"]
        assert (await (await c.get("/api/sessions")).json())["sessions"] == []
    with_client(t)


def test_telemetry_socket_streams_world_then_frames():
    async def t(c):
        r = await (await c.post("/api/sessions", headers=H, json={
            "base": "baseline_normal", "fields": {"duration": 60}, "speed": 50})).json()
        sid = r["session"]["id"]
        ws = await c.ws_connect("/ws/telemetry?session=" + sid)
        kinds = []
        for _ in range(40):
            msg = await asyncio.wait_for(ws.receive_json(), 30)
            kinds.append(msg["type"])
            if kinds.count("telemetry") >= 3:
                break
        assert kinds[0] == "world" and "telemetry" in kinds
        await ws.close()
        ws2 = await c.ws_connect("/ws/telemetry?session=nope")
        assert (await ws2.receive_json())["type"] == "no_session"
    with_client(t)
