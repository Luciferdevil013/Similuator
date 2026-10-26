import { useMemo } from "react";
import type { HistoryRow } from "../useTelemetry";

export interface Series {
  key: keyof HistoryRow;
  label: string;
  color: string;
  /** Draw as a dashed band rather than a solid line (e.g. a 1-sigma bound). */
  dashed?: boolean;
}

interface Props {
  rows: HistoryRow[];
  series: Series[];
  height?: number;
  yLabel?: string;
  /** Clamp the y axis so one outlier cannot flatten the rest of the trace. */
  yMax?: number;
  /** Shade spans where the GNSS monitor flagged an inconsistency. */
  shadeFlagged?: boolean;
  window?: number;
}

/**
 * Small inline SVG time-series plot.
 *
 * Hand-drawn rather than pulled from a charting library: there are four plots
 * in the whole dashboard, all of the same shape, and they have to redraw at
 * several hertz from a ring buffer without allocating a new dataset each time.
 */
export function Chart({
  rows,
  series,
  height = 150,
  yLabel,
  yMax,
  shadeFlagged = false,
  window: win = 1200,
}: Props) {
  const W = 760;
  const H = height;
  const padL = 46;
  const padB = 20;
  const padT = 8;
  const padR = 8;

  const view = useMemo(() => rows.slice(-win), [rows, win]);

  const { paths, flagSpans, t0, t1, lo, hi } = useMemo(() => {
    if (view.length < 2) {
      return { paths: [], flagSpans: [], t0: 0, t1: 1, lo: 0, hi: 1 };
    }
    const t0 = view[0].t;
    const t1 = view[view.length - 1].t;
    const span = Math.max(t1 - t0, 1e-6);

    let lo = Infinity;
    let hi = -Infinity;
    for (const s of series) {
      for (const r of view) {
        const v = r[s.key];
        if (typeof v === "number" && Number.isFinite(v)) {
          if (v < lo) lo = v;
          if (v > hi) hi = v;
        }
      }
    }
    if (!Number.isFinite(lo)) {
      lo = 0;
      hi = 1;
    }
    if (yMax !== undefined) hi = Math.min(hi, yMax);
    lo = Math.min(lo, 0);
    if (hi - lo < 1e-9) hi = lo + 1;
    const pad = (hi - lo) * 0.08;
    hi += pad;

    const sx = (t: number) => padL + ((t - t0) / span) * (W - padL - padR);
    const sy = (v: number) =>
      H - padB - ((v - lo) / (hi - lo)) * (H - padB - padT);

    const paths = series.map((s) => {
      let d = "";
      let open = false;
      for (const r of view) {
        const v = r[s.key];
        if (typeof v !== "number" || !Number.isFinite(v)) {
          open = false;
          continue;
        }
        const y = sy(Math.min(v, hi));
        d += `${open ? "L" : "M"}${sx(r.t).toFixed(1)},${y.toFixed(1)}`;
        open = true;
      }
      return { ...s, d };
    });

    const flagSpans: { x: number; w: number }[] = [];
    if (shadeFlagged) {
      let start: number | null = null;
      for (const r of view) {
        if (r.flagged && start === null) start = r.t;
        if (!r.flagged && start !== null) {
          flagSpans.push({ x: sx(start), w: Math.max(sx(r.t) - sx(start), 1) });
          start = null;
        }
      }
      if (start !== null)
        flagSpans.push({ x: sx(start), w: Math.max(sx(t1) - sx(start), 1) });
    }
    return { paths, flagSpans, t0, t1, lo, hi };
  }, [view, series, yMax, shadeFlagged, H]);

  if (view.length < 2) {
    return (
      <div className="chart-empty" style={{ height: H }}>
        waiting for telemetry…
      </div>
    );
  }

  const ticks = [lo, lo + (hi - lo) / 2, hi];

  return (
    <div className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} role="img"
           aria-label={yLabel ?? "time series"}>
        {flagSpans.map((s, i) => (
          <rect key={i} x={s.x} y={padT} width={s.w} height={H - padB - padT}
                className="chart-flag" />
        ))}
        {ticks.map((v, i) => {
          const y = H - padB - ((v - lo) / (hi - lo)) * (H - padB - padT);
          return (
            <g key={i}>
              <line x1={padL} x2={W - padR} y1={y} y2={y} className="chart-grid" />
              <text x={padL - 6} y={y + 3} className="chart-tick" textAnchor="end">
                {Math.abs(v) >= 100 ? v.toFixed(0) : v.toFixed(2)}
              </text>
            </g>
          );
        })}
        <text x={padL} y={H - 6} className="chart-tick">{t0.toFixed(0)}s</text>
        <text x={W - padR} y={H - 6} className="chart-tick" textAnchor="end">
          {t1.toFixed(0)}s
        </text>
        {paths.map((p) => (
          <path key={String(p.key)} d={p.d} fill="none" stroke={p.color}
                strokeWidth={1.6}
                strokeDasharray={p.dashed ? "4 3" : undefined} />
        ))}
      </svg>
      <div className="chart-legend">
        {series.map((s) => (
          <span key={String(s.key)}>
            <i style={{ background: s.color }} />
            {s.label}
          </span>
        ))}
        {shadeFlagged && (
          <span>
            <i className="legend-flag" />
            GNSS inconsistent
          </span>
        )}
      </div>
    </div>
  );
}
