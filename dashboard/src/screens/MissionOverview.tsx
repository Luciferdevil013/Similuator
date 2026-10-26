import { Card, Stat, StateBadge, num } from "../components/Panels";
import { Chart } from "../components/Chart";
import type { HistoryRow } from "../useTelemetry";
import type { Telemetry, WorldMessage } from "../types";

interface Props {
  latest: Telemetry;
  world: WorldMessage;
  history: HistoryRow[];
}

export function MissionOverview({ latest, world, history }: Props) {
  const r = latest.resilience;
  const g = latest.gnss_integrity;
  const p = latest.mission_progress;
  const gt = latest.ground_truth;
  const total = Math.max(
    1e-6,
    Math.hypot(
      world.mission.goal[0] - world.mission.start[0],
      world.mission.goal[1] - world.mission.start[1]
    )
  );
  const progress = Math.max(
    0,
    Math.min(1, 1 - p.distance_to_goal_m / total)
  );

  return (
    <div className="grid">
      <Card
        title="Mission"
        right={<StateBadge state={r.state} />}
        className="span2"
      >
        <div className="stat-row">
          <Stat label="scenario" value={world.scenario.id} />
          <Stat label="seed" value={world.scenario.seed}
                hint="Fixed per trial so every run is reproducible." />
          <Stat label="time" value={num(latest.t, 1)} unit="s" />
          <Stat label="nav mode" value={r.nav_mode.replace(/_/g, " ")} />
          <Stat
            label="speed limit"
            value={num(r.speed_limit, 2)}
            unit="m/s"
            tone={r.speed_limit < 1.0 ? "warn" : "ok"}
          />
        </div>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
          <span>
            {num(p.distance_travelled_m, 0)} m driven · {num(p.distance_to_goal_m, 0)} m
            to goal
          </span>
        </div>
        <p className="reason">{r.reason}</p>
        {!r.allow_motion && (
          <p className="alert">Motion inhibited — {r.safe_action ?? "safe action"} held.</p>
        )}
      </Card>

      <Card title="Localisation">
        <div className="stat-row">
          <Stat
            label="reported σ"
            value={num(latest.estimate.pos_sigma_h)}
            unit="m"
            hint="The filter's own horizontal uncertainty."
          />
          <Stat
            label="true error"
            value={gt ? num(gt.position_error_m) : "n/a"}
            unit="m"
            tone={
              !gt
                ? ""
                : gt.position_error_m < 2 * latest.estimate.pos_sigma_h
                ? "ok"
                : "warn"
            }
            hint="Scored against ground truth; not available to the navigator."
          />
          <Stat label="yaw σ" value={num(latest.estimate.yaw_sigma_deg, 1)} unit="°" />
        </div>
        <Chart
          rows={history}
          height={132}
          shadeFlagged
          series={[
            { key: "posError", label: "true error (m)", color: "#f0803c" },
            { key: "posSigma", label: "reported σ (m)", color: "#4a9eff", dashed: true },
          ]}
        />
      </Card>

      <Card title="GNSS integrity">
        <div className="stat-row">
          <Stat
            label="status"
            value={g.status}
            tone={g.flagged ? "bad" : "ok"}
            hint="Evidence of disagreement between streams. The monitor cannot identify a cause."
          />
          <Stat label="NIS" value={num(g.nis)} />
          <Stat label="CUSUM" value={num(g.cusum_max, 1)} />
          <Stat
            label="satellites"
            value={latest.sensors.gnss ? latest.sensors.gnss.status : "–"}
          />
        </div>
        {g.reasons.length > 0 && (
          <ul className="reasons">
            {g.reasons.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        )}
        <p className="caveat">
          A flag means the GNSS solution is inconsistent with the inertial and
          odometric evidence. Interference, multipath, a receiver fault and an
          estimator fault all look alike from here, so no cause is claimed.
        </p>
      </Card>

      <Card title="Faults" className="span2">
        {latest.faults_active.length === 0 ? (
          <p className="muted">
            No fault active.{" "}
            {world.faults_declared.length > 0 &&
              `${world.faults_declared.length} declared in this scenario.`}
          </p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>type</th>
                <th>target</th>
                <th>onset</th>
                <th>detected</th>
                <th>latency</th>
                <th>by</th>
              </tr>
            </thead>
            <tbody>
              {latest.faults_active.map((f, i) => (
                <tr key={i}>
                  <td>{f.type.replace(/_/g, " ")}</td>
                  <td>{f.target}</td>
                  <td>{num(f.onset, 1)} s</td>
                  <td className={f.detected ? "ok-text" : "warn-text"}>
                    {f.detected ? num(f.detected_time, 1) + " s" : "not yet"}
                  </td>
                  <td>{f.detection_latency_s === null ? "–" : num(f.detection_latency_s, 2) + " s"}</td>
                  <td>{f.detected_by || "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="stat-row">
          <Stat label="replans" value={p.replans} />
          <Stat label="failed plans" value={p.failed_plans}
                tone={p.failed_plans > 0 ? "warn" : "ok"} />
          <Stat label="collisions" value={p.collisions}
                tone={p.collisions > 0 ? "bad" : "ok"} />
          <Stat label="min clearance" value={num(p.min_clearance_m)} unit="m"
                tone={p.min_clearance_m < 0.5 ? "bad" : "ok"} />
          <Stat label="dead reckoning" value={num(r.dead_reckoning_time_s, 1)} unit="s"
                tone={r.dead_reckoning_time_s > 0 ? "warn" : "ok"} />
        </div>
      </Card>
    </div>
  );
}
