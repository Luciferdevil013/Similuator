import { useMemo } from "react";

/**
 * Tiny inline trend for a stat tile. It answers "is this getting worse?",
 * which a single number cannot, without costing a full chart.
 */
export function Sparkline({
  values,
  color = "#4a9eff",
  width = 72,
  height = 20,
}: {
  values: (number | null)[];
  color?: string;
  width?: number;
  height?: number;
}) {
  const d = useMemo(() => {
    const pts = values.filter(
      (v): v is number => v !== null && Number.isFinite(v)
    );
    if (pts.length < 2) return "";
    const lo = Math.min(...pts);
    const hi = Math.max(...pts);
    const span = hi - lo || 1;
    const step = width / (pts.length - 1);
    return pts
      .map(
        (v, i) =>
          `${i ? "L" : "M"}${(i * step).toFixed(1)},${(
            height - ((v - lo) / span) * (height - 2) - 1
          ).toFixed(1)}`
      )
      .join("");
  }, [values, width, height]);

  if (!d) return null;
  return (
    <svg className="spark" width={width} height={height} aria-hidden="true">
      <path d={d} fill="none" stroke={color} strokeWidth={1.4} />
    </svg>
  );
}
