import { useEffect, useMemo, useRef, useState } from "react";
import { Card, Stat, num } from "../components/Panels";
import type { HistoryRow } from "../useTelemetry";
import type { ResultsMessage, Telemetry, WorldMessage } from "../types";

interface Props {
  history: HistoryRow[];
  world: WorldMessage | null;
  latest: Telemetry | null;
  results: ResultsMessage["metrics"] | null;
  sendCommand: (c: string, a?: Record<string, unknown>) => void;
  commandReady: boolean;
  commandLog: string[];
  token: string;
  setToken: (t: string) => void;
}

const CSV_COLUMNS: (keyof HistoryRow)[] = [
  "t", "estX", "estY", "trueX", "trueY", "posError", "posSigma",
  "yawErr", "nis", "cusum", "speed", "speedCmd", "clearance", "state", "flagged",
];

function toCsv(rows: HistoryRow[]): string {
  const head = CSV_COLUMNS.join(",");
  const body = rows.map((r) =>
    CSV_COLUMNS.map((c) => {
      const v = r[c];
      if (v === null || v === undefined) return "";
      if (typeof v === "number") return Number.isFinite(v) ? String(v) : "";
      return String(v);
    }).join(",")
  );
  return [head, ...body].join("\n");
}

function download(name: string, text: string, mime: string) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Replay of the session buffer, plus export, plus the command console.
 *
 * The replay scrubs the dashboard's own ring buffer -- it is a review tool
 * for the run you just watched, not a substitute for the recorder. The
 * authoritative record is the CSV and JSON the Python recorder writes per
 * trial; this export is a convenience for the window still in memory, and it
 * says so, because mixing up the two is how a report ends up citing numbers
 * nobody can reproduce.
 */
export function ReplayExport({
  history, world, latest, results, sendCommand, commandReady,
  commandLog, token, setToken,
}: Props) {
  const [idx, setIdx] = useState<number | null>(null);
  const [tokenDraft, setTokenDraft] = useState(token);
  const [speed, setSpeed] = useState(1);
  const timerRef = useRef<number | undefined>(undefined);

  const row = idx === null ? history[history.length - 1] : history[idx];
  const span = useMemo(
    () =>
      history.length > 1
        ? [history[0].t, history[history.length - 1].t]
        : [0, 0],
    [history]
  );

  const play = () => {
    window.clearInterval(timerRef.current);
    let i = idx ?? 0;
    timerRef.current = window.setInterval(() => {
      i += 1;
      if (i >= history.length) {
        window.clearInterval(timerRef.current);
        setIdx(null);
        return;
      }
      setIdx(i);
    }, 50);
  };
  const pausePlayback = () => window.clearInterval(timerRef.current);

  const faults = world?.faults_declared ?? [];

  // Ask the bridge which scenarios it will load, once the console is
  // authorised. The list is the server's, not a hard-coded copy here.
  useEffect(() => {
    if (commandReady) sendCommand("list_scenarios");
  }, [commandReady, sendCommand]);

  const scenarios = useMemo(() => {
    for (const line of commandLog) {
      const m = line.match(/^list_scenarios: (.+)$/);
      if (!m) continue;
      try {
        const parsed = JSON.parse(m[1]) as { scenarios?: string[] };
        if (parsed.scenarios) return parsed.scenarios;
      } catch {
        /* a malformed log line is not worth failing the panel for */
      }
    }
    return [];
  }, [commandLog]);

  return (
    <div className="grid">
      <Card title="Replay" className="span2">
        {history.length < 2 ? (
          <p className="muted">Nothing buffered yet.</p>
        ) : (
          <>
            <input
              className="scrub"
              type="range"
              min={0}
              max={history.length - 1}
              value={idx ?? history.length - 1}
              onChange={(e) => {
                pausePlayback();
                setIdx(Number(e.target.value));
              }}
            />
            <div className="replay-controls">
              <button onClick={play}>▶ play</button>
              <button onClick={pausePlayback}>⏸ pause</button>
              <button onClick={() => { pausePlayback(); setIdx(null); }}>
                ⏭ live
              </button>
              <span className="muted">
                buffer {span[0].toFixed(1)}–{span[1].toFixed(1)} s ·{" "}
                {history.length} frames
                {idx !== null && " · scrubbing"}
              </span>
            </div>
            {row && (
              <div className="stat-row">
                <Stat label="t" value={num(row.t, 2)} unit="s" />
                <Stat label="state" value={row.state} />
                <Stat label="error" value={num(row.posError)} unit="m" />
                <Stat label="σ" value={num(row.posSigma)} unit="m" />
                <Stat label="NIS" value={num(row.nis)} />
                <Stat
                  label="GNSS"
                  value={row.flagged ? "inconsistent" : "consistent"}
                  tone={row.flagged ? "bad" : "ok"}
                />
              </div>
            )}
          </>
        )}
      </Card>

      <Card title="Export">
        <p className="muted small">
          This exports the dashboard's in-memory buffer. The authoritative
          per-trial record is written by the Python recorder as{" "}
          <code>timeseries.csv</code>, <code>metrics.json</code>,{" "}
          <code>events.csv</code> and <code>result.json</code> under{" "}
          <code>runs/</code>.
        </p>
        <div className="btn-row">
          <button
            disabled={history.length === 0}
            onClick={() =>
              download(
                `${world?.scenario.id ?? "session"}_seed${world?.scenario.seed ?? 0}_buffer.csv`,
                toCsv(history),
                "text/csv"
              )
            }
          >
            buffer → CSV ({history.length})
          </button>
          <button
            disabled={!results}
            onClick={() =>
              download(
                `${world?.scenario.id ?? "session"}_metrics.json`,
                JSON.stringify(results, null, 1),
                "application/json"
              )
            }
          >
            metrics → JSON
          </button>
          <button
            disabled={!world}
            onClick={() =>
              download(
                `${world?.scenario.id ?? "session"}_scenario.json`,
                JSON.stringify(
                  { scenario: world?.scenario, mission: world?.mission,
                    faults_declared: world?.faults_declared },
                  null, 1
                ),
                "application/json"
              )
            }
          >
            scenario → JSON
          </button>
        </div>
        {world && (
          <div className="stat-row">
            <Stat label="scenario" value={world.scenario.id} />
            <Stat label="seed" value={world.scenario.seed} />
          </div>
        )}
      </Card>

      <Card
        title="Command console"
        right={
          <span className={commandReady ? "badge ok" : "badge"}>
            {commandReady ? "authorised" : "read-only"}
          </span>
        }
      >
        <p className="muted small">
          Telemetry is read-only. Commands need the token the bridge prints at
          startup, and only the verbs below exist — the browser cannot name a
          topic, a node or a Python attribute.
        </p>
        <div className="btn-row">
          <input
            className="token"
            type="password"
            placeholder="bridge token"
            value={tokenDraft}
            onChange={(e) => setTokenDraft(e.target.value)}
          />
          <button onClick={() => setToken(tokenDraft)}>connect</button>
        </div>
        <div className="btn-row">
          <button disabled={!commandReady} onClick={() => sendCommand("pause")}>
            pause
          </button>
          <button disabled={!commandReady} onClick={() => sendCommand("resume")}>
            resume
          </button>
          <button
            disabled={!commandReady}
            onClick={() => sendCommand("step", { steps: 400 })}
          >
            step 1 s
          </button>
          <button
            disabled={!commandReady}
            onClick={() => sendCommand("reset", {})}
          >
            reset
          </button>
        </div>
        {scenarios.length > 0 && (
          <div className="btn-row">
            <select
              className="token"
              disabled={!commandReady}
              value={
                world ? scenarios.find((n) => n.startsWith(world.scenario.id)) ?? "" : ""
              }
              onChange={(e) =>
                sendCommand("load_scenario", { name: e.target.value })
              }
            >
              {scenarios.map((n) => (
                <option key={n} value={n}>
                  {n.replace(/\.yaml$/, "").replace(/_/g, " ")}
                </option>
              ))}
            </select>
            <button
              disabled={!commandReady}
              onClick={() =>
                sendCommand("reset", {
                  seed: Math.floor(Math.random() * 100000),
                })
              }
              title="Re-run the same scenario with a different random seed."
            >
              new seed
            </button>
          </div>
        )}
        <div className="btn-row">
          <label className="muted small">
            pacing ×{speed}
            <input
              type="range" min={1} max={30} step={1} value={speed}
              disabled={!commandReady}
              onChange={(e) => {
                const v = Number(e.target.value);
                setSpeed(v);
                sendCommand("set_speed", { speed: v });
              }}
            />
          </label>
        </div>
        {faults.length > 0 && (
          <>
            <p className="muted small">
              Declared faults for this scenario. Each is arithmetic applied to a
              simulated stream inside the simulator process — nothing is
              transmitted and no system state is changed.
            </p>
            <div className="btn-row">
              {faults.map((f, i) => (
                <button
                  key={i}
                  disabled={!commandReady}
                  onClick={() => sendCommand("inject_declared_fault", { index: i })}
                  title={`${f.type} on ${f.target}, declared onset ${f.onset} s`}
                >
                  inject {f.type.replace(/_/g, " ").toLowerCase()}
                </button>
              ))}
            </div>
          </>
        )}
        {commandLog.length > 0 && (
          <pre className="log">{commandLog.slice(0, 12).join("\n")}</pre>
        )}
        {latest?.paused && <p className="reason">simulation paused</p>}
      </Card>
    </div>
  );
}
