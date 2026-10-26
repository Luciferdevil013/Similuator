import { useCallback, useEffect, useState } from "react";
import { Card, StateBadge, num } from "../components/Panels";
import { api } from "../api";
import type { BatchSummary, SessionSummary, SummaryRow } from "../api";

interface Props {
  sessions: SessionSummary[];
  current: string | null;
  token: string;
  authed: boolean;
  onOpen: (id: string) => void;
  refreshSessions: () => void;
}

function yn(b: boolean | null | undefined) {
  if (b === null || b === undefined) return <span className="muted">–</span>;
  return b ? <span className="ok-text">yes</span> : <span className="bad-text">no</span>;
}

function RowsTable({ rows, onPick }: { rows: SummaryRow[]; onPick?: (r: SummaryRow) => void }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>scenario</th><th>seed</th><th>success</th><th>final state</th>
            <th>RMSE m</th><th>detected</th><th>latency s</th><th>collisions</th>
            <th>duration s</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={onPick ? "clickable" : ""} onClick={() => onPick?.(r)}>
              <td>{r.scenario}</td>
              <td>{r.seed}</td>
              <td>{yn(r.mission_success)}</td>
              <td>{r.final_state}</td>
              <td>{num(r.rmse_m)}</td>
              <td>{r.faults_declared ? `${r.faults_detected}/${r.faults_declared}` : "–"}</td>
              <td>{num(r.detection_latency_s)}</td>
              <td className={r.collision_steps ? "bad-text" : ""}>{r.collision_steps}</td>
              <td>{num(r.duration_s, 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Fleet({ sessions, current, token, authed, onOpen, refreshSessions }: Props) {
  const [batches, setBatches] = useState<BatchSummary[]>([]);
  const [openBatch, setOpenBatch] = useState<BatchSummary | null>(null);
  const [runs, setRuns] = useState<SummaryRow[]>([]);
  const [run, setRun] = useState<{ path: string; metrics: Record<string, Record<string, unknown>>;
                                   events?: { kind: string; t: string; detail: string }[] } | null>(null);
  const [log, setLog] = useState<string>("");

  const loadBatches = useCallback(async () => {
    const r = await api.get<{ batches: BatchSummary[] }>("/api/batches");
    if (r.ok) setBatches(r.data.batches);
  }, []);
  const loadRuns = useCallback(async () => {
    const r = await api.get<{ runs: SummaryRow[] }>("/api/runs");
    if (r.ok) setRuns(r.data.runs);
  }, []);

  useEffect(() => {
    loadBatches();
    loadRuns();
    const t = window.setInterval(loadBatches, 2500);
    return () => window.clearInterval(t);
  }, [loadBatches, loadRuns]);

  // Keep an expanded batch's rows fresh while it runs.
  useEffect(() => {
    if (!openBatch) return;
    const id = openBatch.id;
    const refresh = async () => {
      const r = await api.get<{ batch: BatchSummary }>(`/api/batches/${id}`);
      if (r.ok) setOpenBatch(r.data.batch);
    };
    refresh();
    if (openBatch.state !== "running" && openBatch.state !== "queued") return;
    const t = window.setInterval(refresh, 3000);
    return () => window.clearInterval(t);
  }, [openBatch?.id, openBatch?.state]);

  const cmd = async (id: string, command: string, args: Record<string, unknown> = {}) => {
    const r = await api.post(`/api/sessions/${id}/command`, token, { command, args });
    setLog(r.ok ? `${id}: ${command} ok` : `${id}: ${(r.errors ?? []).join("; ")}`);
    refreshSessions();
  };
  const close = async (id: string) => {
    const r = await api.del(`/api/sessions/${id}`, token);
    setLog(r.ok ? `${id} closed` : (r.errors ?? []).join("; "));
    refreshSessions();
  };
  const cancelBatch = async (id: string) => {
    await api.del(`/api/batches/${id}`, token);
    loadBatches();
  };
  const pickRun = async (r: SummaryRow) => {
    if (!r.path) return;
    const res = await api.get<{ path: string; metrics: Record<string, Record<string, unknown>>;
                                events?: { kind: string; t: string; detail: string }[] }>(
      `/api/runs/${r.path}`);
    if (res.ok) setRun(res.data);
  };

  return (
    <div className="grid">
      <Card title={`Live sessions (${sessions.length})`} className="span2"
            right={<span className="muted small">all run concurrently in the bridge</span>}>
        {sessions.length === 0 ? (
          <p className="muted">No sessions. Launch one from the Lab tab.</p>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>id</th><th>label</th><th>scenario</th><th>environment</th><th>seed</th>
                  <th>progress</th><th>state</th><th>faults</th><th>result</th><th></th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s) => (
                  <tr key={s.id} className={s.id === current ? "current" : ""}>
                    <td>{s.id}</td>
                    <td>{s.label}</td>
                    <td>{s.scenario}</td>
                    <td>{s.environment.replace(/_/g, " ")}</td>
                    <td>{s.seed}</td>
                    <td style={{ minWidth: 130 }}>
                      <div className="progress mini">
                        <div className="progress-fill"
                             style={{ width: `${Math.min(100, (100 * s.t) / s.duration)}%` }} />
                        <span>
                          {s.building ? "building…" : `${num(s.t, 0)} s`}
                          {s.paused && !s.finished ? " · paused" : ""}
                        </span>
                      </div>
                    </td>
                    <td>{s.state ? <StateBadge state={s.state} /> : "–"}</td>
                    <td>{s.faults}</td>
                    <td>{s.finished ? yn(s.success) : <span className="muted">running</span>}</td>
                    <td className="actions">
                      <button onClick={() => onOpen(s.id)}>open</button>
                      {s.paused ? (
                        <button disabled={!authed || s.finished} onClick={() => cmd(s.id, "resume")}>resume</button>
                      ) : (
                        <button disabled={!authed} onClick={() => cmd(s.id, "pause")}>pause</button>
                      )}
                      <button disabled={!authed} onClick={() => cmd(s.id, "reset")}>restart</button>
                      <button disabled={!authed} onClick={() => close(s.id)}>close</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {s_error(sessions)}
        {log && <p className="muted small">{log}</p>}
      </Card>

      <Card title="Batch sweeps" className="span2"
            right={<span className="muted small">start one from the Lab tab</span>}>
        {batches.length === 0 && <p className="muted">No batches yet.</p>}
        {batches.map((b) => (
          <div key={b.id} className="batch">
            <div className="btn-row">
              <b>{b.label || b.id}</b>
              <span className={`badge ${b.state === "done" ? "ok" : b.state === "cancelled" ? "bad" : "warn"}`}>
                {b.state}
              </span>
              <div className="progress mini grow">
                <div className="progress-fill" style={{ width: `${(100 * b.done) / b.total}%` }} />
                <span>{b.done}/{b.total} trials · {b.succeeded} succeeded · {b.jobs} workers</span>
              </div>
              <button onClick={() => setOpenBatch(openBatch?.id === b.id ? null : b)}>
                {openBatch?.id === b.id ? "hide" : "results"}
              </button>
              {(b.state === "running" || b.state === "queued") && (
                <button disabled={!authed} onClick={() => cancelBatch(b.id)}>cancel</button>
              )}
            </div>
            {b.errors.length > 0 && <p className="alert">{b.errors.join("\n")}</p>}
            {openBatch?.id === b.id && openBatch.rows && (
              <>
                <RowsTable rows={openBatch.rows} />
                <p className="muted small">Written to <code>{b.out_dir}/</code> (summary.md, summary.csv, one folder per trial).</p>
              </>
            )}
          </div>
        ))}
      </Card>

      <Card title={`Run archive (${runs.length})`} className="span2"
            right={<button onClick={loadRuns}>refresh</button>}>
        <p className="muted small">Every recorded trial under <code>runs/</code>. Click a row for its metrics and event log.</p>
        <RowsTable rows={runs.slice(0, 60)} onPick={pickRun} />
      </Card>

      {run && (
        <Card title={`Run · ${run.path}`} className="span2"
              right={<button onClick={() => setRun(null)}>close</button>}>
          <div className="grid">
            <div>
              {["outcome", "accuracy", "detection", "recovery"].map((sec) => (
                <table key={sec} className="table compact">
                  <thead><tr><th colSpan={2}>{sec}</th></tr></thead>
                  <tbody>
                    {Object.entries(run.metrics[sec] ?? {})
                      .filter(([, v]) => typeof v !== "object" || v === null)
                      .map(([k, v]) => (
                        <tr key={k}><th>{k}</th><td>{typeof v === "number" ? num(v, 3) : String(v)}</td></tr>
                      ))}
                  </tbody>
                </table>
              ))}
            </div>
            <div>
              <pre className="log tall">
                {(run.events ?? []).map((e) => `${Number(e.t).toFixed(2).padStart(8)}  ${e.kind.padEnd(17)} ${e.detail}`).join("\n")}
              </pre>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

function s_error(sessions: SessionSummary[]) {
  const bad = sessions.filter((s) => s.error);
  if (!bad.length) return null;
  return <p className="alert">{bad.map((s) => `${s.id}: ${s.error}`).join("\n")}</p>;
}
