import { Card, Stat, num } from "../components/Panels";
import type { ResultsMessage, Telemetry, WorldMessage } from "../types";

interface Props {
  results: ResultsMessage["metrics"] | null;
  latest: Telemetry | null;
  world: WorldMessage | null;
}

function val(x: unknown): string {
  if (x === null || x === undefined) return "–";
  if (typeof x === "boolean") return x ? "yes" : "no";
  if (typeof x === "number")
    return Number.isInteger(x) ? String(x) : x.toFixed(3);
  if (typeof x === "string") return x;
  return JSON.stringify(x);
}

const SECTION_TITLES: Record<string, string> = {
  outcome: "Mission outcome",
  accuracy: "Localisation accuracy",
  consistency: "Estimator consistency",
  detection: "Fault detection",
  recovery: "Recovery",
  path: "Path efficiency",
  availability: "Data availability",
  false_alarms: "False alarms",
};

export function ExperimentResults({ results, latest, world }: Props) {
  if (!results) {
    return (
      <div className="grid">
        <Card title="Experiment results" className="span2">
          <p className="muted">
            The run is still in progress. Metrics are computed when the
            scenario ends — at the goal, at the timeout, or on an abort.
          </p>
          {latest && world && (
            <div className="stat-row">
              <Stat label="scenario" value={world.scenario.id} />
              <Stat label="elapsed" value={num(latest.t, 1)} unit="s" />
              <Stat
                label="of"
                value={num(world.scenario.duration_s, 0)}
                unit="s"
              />
              <Stat label="state" value={latest.resilience.state} />
            </div>
          )}
        </Card>
      </div>
    );
  }

  const outcome = (results.outcome ?? {}) as Record<string, unknown>;
  const success = outcome.mission_success === true;

  return (
    <div className="grid">
      <Card
        title="Verdict"
        className="span2"
        right={
          <span className={`badge ${success ? "ok" : "bad"}`}>
            {success ? "mission success" : "not successful"}
          </span>
        }
      >
        <div className="stat-row">
          <Stat label="goal reached" value={val(outcome.goal_reached)}
                tone={outcome.goal_reached ? "ok" : "warn"} />
          <Stat label="collisions" value={val(outcome.collisions)}
                tone={Number(outcome.collisions) > 0 ? "bad" : "ok"} />
          <Stat label="min clearance" value={val(outcome.min_obstacle_clearance_m)} unit="m" />
          <Stat label="final state" value={val(outcome.final_state)} />
          <Stat label="duration" value={val(outcome.duration_s)} unit="s" />
          <Stat label="real-time factor" value={val(outcome.realtime_factor)} unit="×" />
        </div>
        {outcome.safe_stop_short_of_goal === true && (
          <p className="reason">
            The vehicle stopped safely without reaching the goal. That is
            scored separately from a success and from a failure: declining to
            continue on untrustworthy data is the correct outcome, but it is
            not a completed mission.
          </p>
        )}
      </Card>

      {Object.entries(results)
        .filter(([k]) => k !== "outcome")
        .map(([section, body]) => (
          <Card key={section} title={SECTION_TITLES[section] ?? section}>
            <table className="table compact">
              <tbody>
                {Object.entries(body as Record<string, unknown>)
                  .filter(([k]) => !k.startsWith("per_") && k !== "_note")
                  .map(([k, v]) => (
                    <tr key={k}>
                      <th>{k.replace(/_/g, " ")}</th>
                      <td>{val(v)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Card>
        ))}
    </div>
  );
}
