import type { ReactNode } from "react";

export function Card({
  title,
  children,
  right,
  className = "",
}: {
  title: string;
  children: ReactNode;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`card ${className}`}>
      <header>
        <h2>{title}</h2>
        {right}
      </header>
      <div className="card-body">{children}</div>
    </section>
  );
}

export function Stat({
  label,
  value,
  unit,
  tone = "",
  hint,
}: {
  label: string;
  value: string | number;
  unit?: string;
  tone?: "" | "ok" | "warn" | "bad";
  hint?: string;
}) {
  return (
    <div className={`stat ${tone}`} title={hint}>
      <span className="stat-label">{label}</span>
      <span className="stat-value">
        {value}
        {unit ? <small>{unit}</small> : null}
      </span>
    </div>
  );
}

/** Mission-state pill. Colour follows severity, text is the FSM state name. */
export function StateBadge({ state }: { state: string }) {
  const tone =
    state === "NORMAL"
      ? "ok"
      : state === "DEGRADED" || state === "RECOVERY"
      ? "warn"
      : state === "IDLE"
      ? ""
      : "bad";
  return <span className={`badge ${tone}`}>{state.replace(/_/g, " ")}</span>;
}

export function num(v: number | null | undefined, digits = 2): string {
  return v === null || v === undefined || !Number.isFinite(v)
    ? "–"
    : v.toFixed(digits);
}
