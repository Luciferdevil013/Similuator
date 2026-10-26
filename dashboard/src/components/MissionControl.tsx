import type { Telemetry } from "../types";

interface Props {
  latest: Telemetry | null;
  ready: boolean;
  scenarios: string[];
  onCommand: (c: string, a?: Record<string, unknown>) => void;
}

/**
 * Transport controls, in the header where they are always reachable.
 *
 * These used to live at the bottom of the last tab, behind a token the
 * operator had to copy out of a terminal, which meant the default experience
 * of opening the dashboard was having no way to start, stop or re-run
 * anything. Run controls belong on every screen.
 */
export function MissionControl({ latest, ready, scenarios, onCommand }: Props) {
  const paused = latest?.paused ?? false;
  const started = latest?.started ?? true;
  const finished = latest?.finished ?? false;
  const speed = latest?.speed ?? 1;
  const current = latest?.scenario_file ?? "";

  const primary = finished
    ? { label: "↻ Run again", cmd: "reset", args: {} as Record<string, unknown> }
    : !started
    ? { label: "▶ Start", cmd: "resume", args: {} }
    : paused
    ? { label: "▶ Resume", cmd: "resume", args: {} }
    : { label: "⏸ Pause", cmd: "pause", args: {} };

  return (
    <div className="mc">
      <button
        className="mc-primary"
        disabled={!ready}
        onClick={() => onCommand(primary.cmd, primary.args)}
        title={ready ? primary.label : "command channel not authorised"}
      >
        {primary.label}
      </button>

      <button
        disabled={!ready || finished}
        onClick={() => onCommand("step", { steps: 400 })}
        title="Advance one second of simulated time"
      >
        ⏭ 1 s
      </button>

      <button
        disabled={!ready}
        onClick={() => onCommand("reset", { paused: true })}
        title="Rebuild this scenario and wait at the start"
      >
        ↺ Restart
      </button>

      {scenarios.length > 0 && (
        <select
          className="mc-select"
          disabled={!ready}
          value={current}
          onChange={(e) => onCommand("load_scenario", { name: e.target.value })}
          title="Load a different scenario"
        >
          {scenarios.map((n) => (
            <option key={n} value={n}>
              {n.replace(/\.yaml$/, "").replace(/_/g, " ")}
            </option>
          ))}
        </select>
      )}

      <label className="mc-speed" title="Wall-clock pacing multiplier">
        <span>×{speed < 1 ? speed.toFixed(2) : speed.toFixed(0)}</span>
        <input
          type="range"
          min={1}
          max={40}
          step={1}
          value={Math.round(speed)}
          disabled={!ready}
          onChange={(e) => onCommand("set_speed", { speed: Number(e.target.value) })}
        />
      </label>
    </div>
  );
}
