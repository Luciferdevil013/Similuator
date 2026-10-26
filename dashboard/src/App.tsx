import { useState } from "react";
import { useTelemetry } from "./useTelemetry";
import type { ScreenId } from "./types";
import { StateBadge, num } from "./components/Panels";
import { MissionOverview } from "./screens/MissionOverview";
import { Simulation3D } from "./screens/Simulation3D";
import { SensorDiagnostics } from "./screens/SensorDiagnostics";
import { ExperimentResults } from "./screens/ExperimentResults";
import { ReplayExport } from "./screens/ReplayExport";

const SCREENS: { id: ScreenId; label: string }[] = [
  { id: "overview", label: "Mission" },
  { id: "simulation", label: "3D view" },
  { id: "sensors", label: "Sensors" },
  { id: "results", label: "Results" },
  { id: "replay", label: "Replay / export" },
];

export default function App() {
  const t = useTelemetry();
  const [screen, setScreen] = useState<ScreenId>("overview");

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
            </button>
          ))}
        </div>
        <div className="nav-right">
          {t.latest && <StateBadge state={t.latest.resilience.state} />}
          {t.latest && <span className="clock">t = {num(t.latest.t, 1)} s</span>}
          <span className={t.connected ? "dot ok" : "dot bad"} />
          <span className="muted small">
            {t.connected ? "bridge connected" : "bridge offline"}
          </span>
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

        {t.latest && t.world && screen === "overview" && (
          <MissionOverview latest={t.latest} world={t.world} history={t.history} />
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
