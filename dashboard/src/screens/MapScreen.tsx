import { Card, Stat, StateBadge, num } from "../components/Panels";
import { MapView } from "../components/MapView";
import { Timeline } from "../components/Timeline";
import { Sparkline } from "../components/Sparkline";
import type { HistoryRow } from "../useTelemetry";
import type { Telemetry, WorldMessage } from "../types";

interface Props {
  latest: Telemetry;
  world: WorldMessage;
  path: number[][];
  history: HistoryRow[];
}

export function MapScreen({ latest, world, path, history }: Props) {
  const gt = latest.ground_truth;
  const recent = history.slice(-240);

  return (
    <div className="grid">
      <Card
        title="Tactical map"
        className="span2"
        right={<StateBadge state={latest.resilience.state} />}
      >
        <MapView world={world} latest={latest} path={path} history={history} height={480} />
        <div className="legend3d">
          <span><i style={{ background: "#4a9eff" }} />estimate + 2σ</span>
          <span><i style={{ background: "#f0803c" }} />ground truth &amp; driven track</span>
          <span><i style={{ background: "#f05d5d" }} />track while GNSS inconsistent</span>
          <span><i style={{ background: "#ffd866" }} />LiDAR returns</span>
          <span><i style={{ background: "#8c6239" }} />known obstacle</span>
          <span><i style={{ background: "#c2502f" }} />discovered obstacle</span>
        </div>
      </Card>

      <Card title="Mission timeline" className="span2">
        <Timeline
          t={latest.t}
          duration={world.scenario.duration_s}
          transitions={latest.transitions}
          faultWindows={world.fault_windows}
          faults={latest.fault_history}
        />
        {latest.transitions.length > 0 && (
          <table className="table compact tl-table">
            <thead>
              <tr><th>t</th><th>transition</th><th>reason</th></tr>
            </thead>
            <tbody>
              {latest.transitions.slice(-6).reverse().map((tr, i) => (
                <tr key={i}>
                  <td>{num(tr.t, 1)} s</td>
                  <td>
                    {tr.from.replace(/_/g, " ")} → <strong>{tr.to.replace(/_/g, " ")}</strong>
                  </td>
                  <td className="muted">{tr.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      <Card title="Tracking">
        <div className="stat-row">
          <Stat
            label="position error"
            value={gt ? num(gt.position_error_m) : "n/a"}
            unit="m"
            tone={
              !gt ? "" : gt.position_error_m < 2 * latest.estimate.pos_sigma_h ? "ok" : "warn"
            }
          />
          <Stat label="reported σ" value={num(latest.estimate.pos_sigma_h)} unit="m" />
          <Stat
            label="heading error"
            value={
              recent.length && recent[recent.length - 1].yawErr !== null
                ? num(recent[recent.length - 1].yawErr, 1)
                : "n/a"
            }
            unit="°"
          />
        </div>
        <div className="spark-row">
          <span className="muted small">error trend</span>
          <Sparkline values={recent.map((r) => r.posError)} color="#f0803c" width={200} height={30} />
        </div>
        <div className="spark-row">
          <span className="muted small">speed trend</span>
          <Sparkline values={recent.map((r) => r.speed)} color="#3fb950" width={200} height={30} />
        </div>
      </Card>

      <Card title="Fault record">
        {latest.fault_history.length === 0 ? (
          <p className="muted">
            No fault has fired yet.{" "}
            {world.fault_windows.length > 0 &&
              `${world.fault_windows.length} declared for this scenario.`}
          </p>
        ) : (
          <table className="table compact">
            <thead>
              <tr><th>fault</th><th>window</th><th>flagged</th><th>latency</th></tr>
            </thead>
            <tbody>
              {latest.fault_history.map((f, i) => (
                <tr key={i}>
                  <td>
                    {f.fault_type.replace(/_/g, " ").toLowerCase()}
                    <br />
                    <span className="muted small">{f.target}</span>
                  </td>
                  <td>
                    {num(f.onset, 0)}–{f.end === null ? "now" : num(f.end, 0)} s
                  </td>
                  <td className={f.detected ? "ok-text" : "warn-text"}>
                    {f.detected ? `${num(f.detection_time, 1)} s` : "not detected"}
                  </td>
                  <td>
                    {f.detection_latency === null ? "–" : `${num(f.detection_latency, 2)} s`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className="caveat">
          The window is the injection truth. The flag is the monitor's own
          claim, and the gap between them is the detection latency — a fault
          with no flag was simply never caught.
        </p>
      </Card>
    </div>
  );
}
