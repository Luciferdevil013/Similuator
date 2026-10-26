import type { Telemetry } from "../types";

interface Props {
  latest: Telemetry | null;
  /** The command channel is authorised; without it these are read-only. */
  authed: boolean;
  /** Pacing multiplier from the session summary, which owns it. */
  speed: number;
  onCommand: (c: string, a?: Record<string, unknown>) => void;
}

/**
 * Transport controls, in the header where they are always reachable.
 *
 * These used to live at the bottom of the last screen, so the default
 * experience of opening the dashboard on a running session was having no
 * visible way to pause, step or re-run it. Run controls belong on every
 * screen. Launching a *new* run is the Lab's job, not this bar's.
 */
export function MissionControl({ latest, authed, speed, onCommand }: Props) {
  const paused = latest?.paused ?? false;
  const finished = latest?.finished ?? false;

  const primary = finished
    ? { label: "↻ Run again", cmd: "reset", args: {} as Record<string, unknown> }
    : paused
    ? { label: "▶ Resume", cmd: "resume", args: {} }
    : { label: "⏸ Pause", cmd: "pause", args: {} };

  return (
    <div className="mc">
      <button
        className="mc-primary"
        disabled={!authed}
        onClick={() => onCommand(primary.cmd, primary.args)}
        title={authed ? primary.label : "command channel not authorised"}
      >
        {primary.label}
      </button>

      <button
        disabled={!authed || finished}
        onClick={() => onCommand("step", { steps: 400 })}
        title="Advance one second of simulated time"
      >
        ⏭ 1 s
      </button>

      <button
        disabled={!authed}
        onClick={() => onCommand("reset", { paused: true })}
        title="Rebuild this scenario and wait at the start"
      >
        ↺ Restart
      </button>

      <label className="mc-speed" title="Wall-clock pacing multiplier">
        <span>×{speed < 1 ? speed.toFixed(2) : speed.toFixed(0)}</span>
        <input
          type="range"
          min={1}
          max={40}
          step={1}
          value={Math.round(speed)}
          disabled={!authed}
          onChange={(e) => onCommand("set_speed", { speed: Number(e.target.value) })}
        />
      </label>
    </div>
  );
}
