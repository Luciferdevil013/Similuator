import { useEffect, useMemo, useState } from "react";
import { useTelemetry } from "./useTelemetry";
import type { ScreenId } from "./types";
import { StateBadge, num } from "./components/Panels";
import { MissionOverview } from "./screens/MissionOverview";
import { MapScreen } from "./screens/MapScreen";
import { MissionControl } from "./components/MissionControl";
import { Simulation3D } from "./screens/Simulation3D";
import { SensorDiagnostics } from "./screens/SensorDiagnostics";
import { ExperimentResults } from "./screens/ExperimentResults";
import { ReplayExport } from "./screens/ReplayExport";

const SCREENS: { id: ScreenId; label: string }[] = [
  { id: "overview", label: "Mission" },
  { id: "map", label: "Map" },
  { id: "simulation", label: "3D view" },
  { id: "sensors", label: "Sensors" },
  { id: "results", label: "Results" },
  { id: "replay", label: "Replay / export" },
];

export default function App() {
  const t = useTelemetry();
  const [screen, setScreen] = useState<ScreenId>("overview");

  // The scenario list comes from the bridge, so the picker in the header and
  // the one in the console cannot drift apart.
  const scenarios = useMemo(() => {
    for (const line of t.commandLog) {
      const m = line.match(/^list_scenarios: (.+)$/);
      if (!m) continue;
      try {
        const parsed = JSON.parse(m[1]) as { scenarios?: string[] };
        if (parsed.scenarios) return parsed.scenarios;
      } catch {
        /* a malformed log line should not empty the picker */
      }
    }
    return [] as string[];
  }, [t.commandLog]);

  useEffect(() => {
    if (t.commandReady) t.sendCommand("list_scenarios");
  }, [t.commandReady, t.sendCommand]);

  // Space toggles run/pause, the way every other transport control works.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(el.tagName)) return;
      e.preventDefault();
      if (!t.commandReady) return;
      t.sendCommand(t.latest?.paused ? "resume" : "pause");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [t.commandReady, t.latest?.paused, t.sendCommand]);

  // Number keys switch screens. During a run you want to jump between the map
  // and the sensor table without hunting for a tab with the mouse.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      const i = Number(e.key) - 1;
      if (Number.isInteger(i) && i >= 0 && i < SCREENS.length) {
        setScreen(SCREENS[i].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="app">
      <nav className="nav">
        <div className="brand">
          ResilienceLab
          <small>SITL autonomy &amp; resilience testbed</small>
        </div>
        <div className="tabs">
          {SCREENS.map((s, i) => (
            <button
              key={s.id}
              className={screen === s.id ? "tab active" : "tab"}
              onClick={() => setScreen(s.id)}
              title={`${s.label}  (${i + 1})`}
            >
              {s.label}
              <kbd>{i + 1}</kbd>
            </button>
          ))}
        </div>
        <MissionControl
          latest={t.latest}
          ready={t.commandReady}
          scenarios={scenarios}
          onCommand={t.sendCommand}
        />
        <div className="nav-right">
          {t.latest && <StateBadge state={t.latest.resilience.state} />}
          {t.latest && <span className="clock">t = {num(t.latest.t, 1)} s</span>}
          <span className={t.connected ? "dot ok" : "dot bad"} />
          <span className="muted small">
            {t.connected ? "bridge connected" : "bridge offline"}
          </span>
          {t.connected && !t.commandReady && (
            <span
              className="badge warn"
              title={
                t.tokenAuto === false
                  ? "The bridge would not hand this page the token. Enter it on the Replay / export screen."
                  : "Authorising the command channel…"
              }
            >
              {t.tokenAuto === false ? "read-only" : "authorising…"}
            </span>
          )}
        </div>
      </nav>

      <main>
        {!t.connected && !t.latest && (
          <div className="splash">
            <h1>Waiting for the telemetry bridge</h1>
            <p>Start it with:</p>
            <pre>
python3 -m bridge.telemetry_server \
  --scenario experiments/scenarios/baseline_normal.yaml
            </pre>
            <p className="muted">
              The dashboard reconnects on its own once the bridge is up.
            </p>
          </div>
        )}

        {t.latest && t.latest.started === false && (
          <div className="start-overlay">
            <div className="start-card">
              <h1>Ready to run</h1>
              <p className="muted">
                {t.world?.scenario.id.replace(/_/g, " ")} · seed{" "}
                {t.world?.scenario.seed} ·{" "}
                {t.world?.scenario.duration_s.toFixed(0)} s
              </p>
              {t.world?.scenario.description && (
                <p className="muted small">{t.world.scenario.description}</p>
              )}
              <button
                className="mc-primary big"
                disabled={!t.commandReady}
                onClick={() => t.sendCommand("resume")}
              >
                ▶ Start simulation
              </button>
              {!t.commandReady && (
                <p className="muted small">
                  Waiting for the command channel. If this does not clear,
                  enter the bridge token on the Replay / export screen.
                </p>
              )}
            </div>
          </div>
        )}

        {t.latest && t.world && screen === "overview" && (
          <MissionOverview latest={t.latest} world={t.world} history={t.history} />
        )}
        {t.latest && t.world && screen === "map" && (
          <MapScreen latest={t.latest} world={t.world} path={t.path} history={t.history} />
        )}
        {t.latest && t.world && screen === "simulation" && (
          <Simulation3D latest={t.latest} world={t.world} path={t.path} />
        )}
        {t.latest && screen === "sensors" && (
          <SensorDiagnostics latest={t.latest} history={t.history} />
        )}
        {screen === "results" && (
          <ExperimentResults results={t.results} latest={t.latest} world={t.world} />
        )}
        {screen === "replay" && (
          <ReplayExport
            history={t.history}
            world={t.world}
            latest={t.latest}
            results={t.results}
            sendCommand={t.sendCommand}
            commandReady={t.commandReady}
            commandLog={t.commandLog}
            token={t.token}
            setToken={t.setToken}
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
