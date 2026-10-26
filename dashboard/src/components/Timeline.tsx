import { useMemo } from "react";
import type { FaultRecord, FaultWindow, StateTransition } from "../types";

interface Props {
  t: number;
  duration: number;
  transitions: StateTransition[];
  faultWindows: FaultWindow[];
  faults: FaultRecord[];
}

const STATE_COLOR: Record<string, string> = {
  IDLE: "#3d4552",
  NORMAL: "#3fb950",
  DEGRADED: "#e3b341",
  LIMITED_OPERATION: "#e08c3b",
  SAFE_ACTION: "#f05d5d",
  RECOVERY: "#4a9eff",
  COMPLETE: "#2ea043",
  ABORTED: "#8b1a1a",
};

/**
 * Mission timeline: what the system was doing, when each fault really ran,
 * and when the monitor noticed.
 *
 * The fault band is the declared window -- ground truth about the injection.
 * The detection marker is the monitor's own claim. Drawing them on the same
 * axis makes detection latency something you can see as a gap, which is more
 * honest than a single averaged number, because it also shows the faults that
 * were never detected at all: their band simply has no marker.
 */
export function Timeline({
  t, duration, transitions, faultWindows, faults,
}: Props) {
  const span = Math.max(duration, t, 1);
  const pct = (x: number) => `${Math.max(0, Math.min(100, (x / span) * 100))}%`;

  const bands = useMemo(() => {
    // Build contiguous state spans from the transition list plus "now".
    const out: { from: number; to: number; state: string; reason: string }[] = [];
    let cur = transitions.length ? transitions[0].from : "NORMAL";
    let start = 0;
    let reason = "start";
    for (const tr of transitions) {
      out.push({ from: start, to: tr.t, state: cur, reason });
      cur = tr.to;
      start = tr.t;
      reason = tr.reason;
    }
    out.push({ from: start, to: t, state: cur, reason });
    return out.filter((b) => b.to > b.from);
  }, [transitions, t]);

  return (
    <div className="timeline">
      <div className="tl-row">
        <span className="tl-label">state</span>
        <div className="tl-track">
          {bands.map((b, i) => (
            <div
              key={i}
              className="tl-band"
              style={{
                left: pct(b.from),
                width: pct(b.to - b.from),
                background: STATE_COLOR[b.state] ?? "#3d4552",
              }}
              title={`${b.state.replace(/_/g, " ")}  ${b.from.toFixed(1)}–${b.to.toFixed(1)} s\n${b.reason}`}
            />
          ))}
          <div className="tl-now" style={{ left: pct(t) }} />
        </div>
      </div>

      <div className="tl-row">
        <span className="tl-label">faults</span>
        <div className="tl-track">
          {faultWindows.map((f, i) => (
            <div
              key={i}
              className="tl-fault"
              style={{ left: pct(f.onset), width: pct(f.end - f.onset) }}
              title={`${f.type.replace(/_/g, " ")} injected ${f.onset.toFixed(1)}–${f.end.toFixed(1)} s`}
            >
              <span>{f.type.replace(/_/g, " ").toLowerCase()}</span>
            </div>
          ))}
          {faults
            .filter((f) => f.detected && f.detection_time !== null)
            .map((f, i) => (
              <div
                key={`d${i}`}
                className="tl-detect"
                style={{ left: pct(f.detection_time!) }}
                title={`flagged at ${f.detection_time!.toFixed(2)} s by ${f.detected_by || "monitor"} — ${f.detection_latency?.toFixed(2)} s after onset`}
              />
            ))}
          <div className="tl-now" style={{ left: pct(t) }} />
        </div>
      </div>

      <div className="tl-axis">
        <span>0 s</span>
        <span>{(span / 2).toFixed(0)} s</span>
        <span>{span.toFixed(0)} s</span>
      </div>

      <div className="tl-legend">
        {Object.entries(STATE_COLOR)
          .filter(([k]) => bands.some((b) => b.state === k))
          .map(([k, c]) => (
            <span key={k}>
              <i style={{ background: c }} />
              {k.replace(/_/g, " ").toLowerCase()}
            </span>
          ))}
        {faultWindows.length > 0 && (
          <>
            <span><i className="legend-faultband" />fault injected</span>
            <span><i className="legend-detect" />flagged by monitor</span>
          </>
        )}
      </div>
    </div>
  );
}
