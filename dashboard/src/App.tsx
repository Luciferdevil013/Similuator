import { useCallback, useEffect, useState } from "react";
import { useTelemetry } from "./useTelemetry";
import type { ScreenId } from "./types";
import { StateBadge, num } from "./components/Panels";
import { MissionOverview } from "./screens/MissionOverview";
import { Simulation3D } from "./screens/Simulation3D";
import { SensorDiagnostics } from "./screens/SensorDiagnostics";
import { ExperimentResults } from "./screens/ExperimentResults";
import { ReplayExport } from "./screens/ReplayExport";
import { ScenarioLab } from "./screens/ScenarioLab";
import { Fleet } from "./screens/Fleet";
import { api, initialToken, storeToken } from "./api";
import type { ScenarioListing, Schema, SessionSummary } from "./api";

const SCREENS: { id: ScreenId; label: string; needsSession: boolean }[] = [
  { id: "overview", label: "Mission", needsSession: true },
  { id: "simulation", label: "3D view", needsSession: true },
  { id: "sensors", label: "Sensors", needsSession: true },
  { id: "results", label: "Results", needsSession: true },
  { id: "replay", label: "Replay / control", needsSession: true },
  { id: "lab", label: "Lab", needsSession: false },
  { id: "fleet", label: "Fleet", needsSession: false },
];

export default function App() {
  const [token, setTokenState] = useState(initialToken);
  const [authed, setAuthed] = useState(false);
  const [schema, setSchema] = useState<Schema | null>(null);
  const [scenarios, setScenarios] = useState<ScenarioListing[]>([]);
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [bridgeUp, setBridgeUp] = useState(true);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [screen, setScreen] = useState<ScreenId>("overview");

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
    // Follow the first session until the user picks one; drop a closed one.
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

  const current = SCREENS.find((s) => s.id === screen)!;
  const showSessionScreen = current.needsSession;
  const currentSession = sessions.find((s) => s.id === sessionId);

  return (
    <div className="app">
      <nav className="nav">
        <div className="brand">
          ResilienceLab
          <small>SITL autonomy &amp; resilience testbed</small>
        </div>
        <div className="tabs">
          {SCREENS.map((s) => (
            <button
              key={s.id}
              className={screen === s.id ? "tab active" : "tab"}
              onClick={() => setScreen(s.id)}
            >
              {s.label}
              {s.id === "fleet" && sessions.length > 0 && (
                <span className="count">{sessions.length}</span>
              )}
            </button>
          ))}
        </div>
        <div className="nav-right">
          <select
            className="session-select"
            value={sessionId ?? ""}
            onChange={(e) => setSessionId(e.target.value || null)}
            title="simulation session shown in the Mission/3D/Sensors/Results/Replay tabs"
          >
            {sessions.length === 0 && <option value="">no sessions</option>}
            {sessions.map((s) => (
              <option key={s.id} value={s.id}>
                {s.id} · {s.label}
              </option>
            ))}
          </select>
          {t.latest && <StateBadge state={t.latest.resilience.state} />}
          {t.latest && <span className="clock">t = {num(t.latest.t, 1)} s</span>}
          <span className={bridgeUp ? "dot ok" : "dot bad"} />
          <span className="muted small">
            {bridgeUp ? (authed ? "bridge · control" : "bridge · read-only") : "bridge offline"}
          </span>
        </div>
      </nav>

      <main>
        {!bridgeUp && (
          <div className="splash">
            <h1>Waiting for the telemetry bridge</h1>
            <p>Start it with:</p>
            <pre>./run_demo.sh</pre>
            <p className="muted">The dashboard reconnects on its own once the bridge is up.</p>
          </div>
        )}

        {bridgeUp && showSessionScreen && !sessionId && (
          <div className="splash">
            <h1>No simulation running</h1>
            <p className="muted">Design a scenario and launch it from the Lab.</p>
            <button className="primary" onClick={() => setScreen("lab")}>Open the Lab</button>
          </div>
        )}

        {showSessionScreen && sessionId && !t.latest && bridgeUp && (
          <div className="splash">
            <h1>{t.missing ? "Session closed" : "Building the world…"}</h1>
            <p className="muted">
              {t.missing ? "Pick another session from the menu." : "Generating terrain and obstacles."}
            </p>
          </div>
        )}

        {showSessionScreen && currentSession?.warning && (
          <p className="alert banner">⚠ {currentSession.warning}</p>
        )}

        {t.latest && t.world && screen === "overview" && (
          <MissionOverview latest={t.latest} world={t.world} history={t.history} />
        )}
        {t.latest && t.world && screen === "simulation" && (
          <Simulation3D latest={t.latest} world={t.world} path={t.path} />
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
          />
        )}
        {screen === "lab" && schema && (
          <ScenarioLab
            schema={schema}
            scenarios={scenarios}
            token={token}
            authed={authed}
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
        <span>
          Ground truth is shown for scoring and display only; the navigation
          stack never reads it.
        </span>
        <span>
          GNSS flags report that streams <em>disagree</em> — no cause is claimed.
        </span>
      </footer>
    </div>
  );
}
