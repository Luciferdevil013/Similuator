import { useCallback, useEffect, useState } from "react";
import { useTelemetry } from "./useTelemetry";
import type { ScreenId } from "./types";
import { StateBadge, num } from "./components/Panels";
import { Icon } from "./components/Icons";
import { Home } from "./screens/Home";
import { MissionOverview } from "./screens/MissionOverview";
import { Simulation3D } from "./screens/Simulation3D";
import { SensorDiagnostics } from "./screens/SensorDiagnostics";
import { ExperimentResults } from "./screens/ExperimentResults";
import { ReplayExport } from "./screens/ReplayExport";
import { ScenarioLab } from "./screens/ScenarioLab";
import { Fleet } from "./screens/Fleet";
import { api, initialToken, storeToken } from "./api";
import type { ScenarioListing, Schema, SessionSummary, Vehicle } from "./api";

const SCREENS: { id: ScreenId; label: string; icon: string; needsSession: boolean; sub: string }[] = [
  { id: "home", label: "Home", icon: "home", needsSession: false, sub: "Overview of the testbed" },
  { id: "overview", label: "Mission", icon: "mission", needsSession: true, sub: "State, localisation and faults" },
  { id: "simulation", label: "3D view", icon: "cube", needsSession: true, sub: "Terrain, vehicle and path" },
  { id: "sensors", label: "Sensors", icon: "sensors", needsSession: true, sub: "Health, residuals and biases" },
  { id: "results", label: "Results", icon: "results", needsSession: true, sub: "Scored against ground truth" },
  { id: "replay", label: "Replay & control", icon: "replay", needsSession: true, sub: "Scrub, export, inject faults live" },
  { id: "lab", label: "Lab", icon: "lab", needsSession: false, sub: "Design and launch scenarios" },
  { id: "fleet", label: "Fleet", icon: "fleet", needsSession: false, sub: "Sessions, batches and archive" },
];

export default function App() {
  const [token, setTokenState] = useState(initialToken);
  const [authed, setAuthed] = useState(false);
  const [schema, setSchema] = useState<Schema | null>(null);
  const [scenarios, setScenarios] = useState<ScenarioListing[]>([]);
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [bridgeUp, setBridgeUp] = useState(true);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [screen, setScreen] = useState<ScreenId>("home");
  const [labPreset, setLabPreset] = useState<{ vehicle?: Vehicle; environment?: string; n: number }>({ n: 0 });
  const [envMsg, setEnvMsg] = useState<string | null>(null);

  const t = useTelemetry(sessionId, token);

  const setToken = useCallback((v: string) => {
    storeToken(v);
    setTokenState(v);
  }, []);

  useEffect(() => {
    api.getAuthed<{ authed: boolean; schema: Schema }>("/api/info", token).then((r) => {
      if (r.ok) {
        setSchema(r.data.schema);
        setAuthed(r.data.authed);
      }
    });
  }, [token]);

  const refreshScenarios = useCallback(() => {
    api.get<{ scenarios: ScenarioListing[] }>("/api/scenarios").then((r) => {
      if (r.ok) setScenarios(r.data.scenarios);
    });
  }, []);
  useEffect(refreshScenarios, [refreshScenarios]);

  const refreshSessions = useCallback(async () => {
    const r = await api.get<{ sessions: SessionSummary[] }>("/api/sessions");
    setBridgeUp(r.ok);
    if (!r.ok) return;
    setSessions(r.data.sessions);
    setSessionId((cur) => {
      const ids = r.data.sessions.map((s) => s.id);
      if (cur && ids.includes(cur)) return cur;
      return ids[0] ?? null;
    });
  }, []);
  useEffect(() => {
    refreshSessions();
    const iv = window.setInterval(refreshSessions, 2000);
    return () => window.clearInterval(iv);
  }, [refreshSessions]);

  const openSession = (id: string) => {
    setSessionId(id);
    setScreen("overview");
  };
  const openLab = (preset?: { vehicle?: Vehicle; environment?: string }) => {
    setLabPreset((p) => ({ ...preset, n: p.n + 1 }));
    setScreen("lab");
  };

  const current = SCREENS.find((s) => s.id === screen)!;
  const currentSession = sessions.find((s) => s.id === sessionId);

  const switchEnvironment = async (env: string) => {
    if (!sessionId) return;
    setEnvMsg("switching to " + env.replace(/_/g, " ") + "…");
    const ok = await t.sendCommand("set_environment", { environment: env });
    setEnvMsg(ok ? null : "environment change refused (token?)");
    refreshSessions();
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" />
          <span className="brand-name">ResilienceLab<small>SITL resilience testbed</small></span>
        </div>

        <nav className="nav-group">
          <span className="nav-label">Navigate</span>
          {SCREENS.map((s) => (
            <button
              key={s.id}
              className={screen === s.id ? "nav-item active" : "nav-item"}
              onClick={() => setScreen(s.id)}
              disabled={s.needsSession && !sessionId}
            >
              <Icon name={s.icon} />
              {s.label}
              {s.id === "fleet" && sessions.length > 0 && <span className="count">{sessions.length}</span>}
            </button>
          ))}
        </nav>

        {sessions.length > 0 && (
          <div className="side-sessions">
            <span className="nav-label">Live sessions</span>
            {sessions.map((s) => (
              <button
                key={s.id}
                className={s.id === sessionId ? "side-session current" : "side-session"}
                onClick={() => openSession(s.id)}
                title={`${s.label} · ${s.environment} · seed ${s.seed}`}
              >
                <span className={`dot ${s.finished ? "idle" : s.state === "NORMAL" || s.state === "COMPLETE" ? "ok" : s.state ? "warn" : "idle"}`} />
                <span className="lbl">{s.vehicle === "drone" ? "✈ " : "◼ "}{s.label}</span>
                <span className="t">{num(s.t, 0)}s</span>
              </button>
            ))}
          </div>
        )}

        <div className="side-foot">
          <span className={bridgeUp ? "dot ok" : "dot bad"} />
          {bridgeUp ? (authed ? "bridge · control" : "bridge · read-only") : "bridge offline"}
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <h1 className="page-title">
            {current.label}
            <small>{current.sub}</small>
          </h1>
          <div className="topbar-right">
            {current.needsSession && currentSession && (
              <>
                <span className="chip">
                  <Icon name={currentSession.vehicle === "drone" ? "drone" : "rover"} size={14} />
                  {currentSession.vehicle === "drone" ? "quadrotor" : "rover"}
                </span>
                {schema && (
                  <select
                    value={currentSession.environment}
                    onChange={(e) => switchEnvironment(e.target.value)}
                    disabled={!authed}
                    title="Restart this simulation in another environment"
                  >
                    {Object.entries(schema.environments).map(([k, e]) => (
                      <option key={k} value={k}>🌍 {e.label}</option>
                    ))}
                  </select>
                )}
              </>
            )}
            <select
              className="session-select"
              value={sessionId ?? ""}
              onChange={(e) => setSessionId(e.target.value || null)}
              title="Session shown in the Mission / 3D / Sensors / Results / Replay pages"
            >
              {sessions.length === 0 && <option value="">no sessions</option>}
              {sessions.map((s) => (
                <option key={s.id} value={s.id}>{s.id} · {s.label}</option>
              ))}
            </select>
            {t.latest && <StateBadge state={t.latest.resilience.state} />}
            {t.latest && <span className="clock">t {num(t.latest.t, 1)}s</span>}
          </div>
        </header>

        <main>
          {envMsg && <p className="reason" style={{ marginTop: 0, marginBottom: 14 }}>{envMsg}</p>}

          {!bridgeUp && (
            <div className="splash">
              <h1>Waiting for the bridge</h1>
              <p className="muted">Start the backend, then this page reconnects by itself:</p>
              <pre>./run_demo.sh</pre>
            </div>
          )}

          {bridgeUp && current.needsSession && !sessionId && (
            <div className="splash">
              <h1>No simulation running</h1>
              <p className="muted">Design a scenario and launch it from the Lab.</p>
              <button className="primary" onClick={() => openLab()}>Open the Lab</button>
            </div>
          )}

          {current.needsSession && sessionId && !t.latest && bridgeUp && (
            <div className="splash">
              <h1>{t.missing ? "Session closed" : "Building the world…"}</h1>
              <p className="muted">
                {t.missing ? "Pick another session." : "Generating terrain, obstacles and sensors."}
              </p>
            </div>
          )}

          {current.needsSession && currentSession?.warning && (
            <p className="alert banner">⚠ {currentSession.warning}</p>
          )}

          {screen === "home" && (
            <Home schema={schema} sessions={sessions} token={token} authed={authed}
                  openLab={openLab} openSession={openSession} openFleet={() => setScreen("fleet")} />
          )}
          {t.latest && t.world && screen === "overview" && (
            <MissionOverview latest={t.latest} world={t.world} history={t.history} />
          )}
          {t.latest && t.world && screen === "simulation" && (
            <Simulation3D latest={t.latest} world={t.world} path={t.path} history={t.history} />
          )}
          {t.latest && screen === "sensors" && (
            <SensorDiagnostics latest={t.latest} history={t.history} />
          )}
          {sessionId && t.latest && screen === "results" && (
            <ExperimentResults results={t.results} latest={t.latest} world={t.world} />
          )}
          {sessionId && t.latest && screen === "replay" && (
            <ReplayExport
              history={t.history}
              world={t.world}
              latest={t.latest}
              results={t.results}
              sendCommand={t.sendCommand}
              authed={authed}
              commandLog={t.commandLog}
              token={token}
              setToken={setToken}
              schema={schema}
              vehicle={currentSession?.vehicle ?? "ugv"}
            />
          )}
          {screen === "lab" && schema && (
            <ScenarioLab
              key={labPreset.n}
              schema={schema}
              scenarios={scenarios}
              token={token}
              authed={authed}
              preset={labPreset}
              onLaunched={(s) => {
                refreshSessions();
                openSession(s.id);
              }}
              onBatchStarted={() => setScreen("fleet")}
              refreshScenarios={refreshScenarios}
            />
          )}
          {screen === "fleet" && (
            <Fleet
              sessions={sessions}
              current={sessionId}
              token={token}
              authed={authed}
              onOpen={openSession}
              refreshSessions={refreshSessions}
            />
          )}
        </main>

        <footer className="foot">
          <span>Ground truth is for scoring and display only — the navigation stack never reads it.</span>
          <span>GNSS flags report that streams <em>disagree</em>; no cause is claimed.</span>
        </footer>
      </div>
    </div>
  );
}
