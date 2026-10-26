import { useEffect, useState } from "react";
import { Card } from "./Panels";
import { api } from "../api";
import type { SelfTestReport } from "../api";

/** Runs the backend component self-test (POST /api/selftest) and lists results. */
export function SelfTestPanel({ token, authed, compact = false }: {
  token: string; authed: boolean; compact?: boolean;
}) {
  const [report, setReport] = useState<SelfTestReport | null>(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<{ report: SelfTestReport | null }>("/api/selftest").then((r) => {
      if (r.ok && r.data.report) setReport(r.data.report);
    });
  }, []);

  const run = async () => {
    setRunning(true);
    setError(null);
    const r = await api.post<{ report: SelfTestReport }>("/api/selftest", token, {});
    setRunning(false);
    if (r.ok) setReport(r.data.report);
    else setError((r.errors ?? ["failed"]).join("; "));
  };

  const status = report
    ? <span className={`badge ${report.ok ? "ok" : "bad"}`}>{report.passed}/{report.total} passed</span>
    : <span className="badge">not run</span>;

  return (
    <Card title="Component self-test" className={compact ? "" : "span2"} right={status}>
      <p className="muted small" style={{ marginTop: 0 }}>
        Checks every component in isolation — sensor models, estimator, fault
        injector, planner, safety state machine — plus a short closed loop for
        each vehicle, against physical expectations.
      </p>
      <div className="btn-row">
        <button className="primary" disabled={!authed || running} onClick={run}>
          {running ? "running… (~15 s)" : "▶ run self-test"}
        </button>
        {report && <span className="muted small mono">last run {report.seconds}s</span>}
      </div>
      {error && <p className="alert">{error}</p>}
      {report && (
        <div>
          {report.results.map((r) => (
            <div className="check" key={r.check} title={r.detail}>
              <span className={`tag ${r.ok ? "pass" : "fail"}`}>{r.ok ? "PASS" : "FAIL"}</span>
              <span className="comp muted small">{r.component}</span>
              <span>
                {r.name}
                <div className="detail">{r.detail.split("\n")[0]}</div>
              </span>
              <span className="mono muted small" style={{ textAlign: "right" }}>{r.ms} ms</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
