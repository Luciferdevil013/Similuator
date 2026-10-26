import type { FaultEdit, FaultSchema, ParamSpec, Schema, Vehicle } from "../api";

/** Fault types that apply to a vehicle. */
export function faultTypesFor(schema: Schema, vehicle: Vehicle): string[] {
  return Object.keys(schema.faults).filter((t) => schema.faults[t].vehicles.includes(vehicle));
}

/** Targets of a fault type that the vehicle actually carries. */
export function targetsFor(schema: Schema, type: string, vehicle: Vehicle): string[] {
  const have = new Set([...(schema.vehicle_sensors[vehicle] ?? []), "world"]);
  return (schema.faults[type]?.targets ?? []).filter((t) => have.has(t));
}

/** A fresh fault of `type` with the schema's defaults filled in. */
export function newFault(schema: Schema, type: string, onset = 60,
                         vehicle: Vehicle = "ugv"): FaultEdit {
  const spec = schema.faults[type];
  const params: Record<string, unknown> = { ...(spec.defaults ?? {}) };
  for (const [k, p] of Object.entries(spec.params)) {
    if (params[k] === undefined && p.default !== undefined && p.default !== null)
      params[k] = p.default;
    if (params[k] === undefined && p.type === "vec3") params[k] = [0, 0, 0];
    if (params[k] === undefined && p.type === "bool") params[k] = false;
  }
  return { type, target: targetsFor(schema, type, vehicle)[0] ?? spec.targets[0],
           onset, duration: 30, ramp: 0, params };
}

function pretty(s: string): string {
  return s.replace(/_/g, " ").toLowerCase();
}

function NumIn({
  value, onChange, step, min, max, width = 74,
}: {
  value: number; onChange: (v: number) => void;
  step?: number; min?: number; max?: number; width?: number;
}) {
  return (
    <input
      className="num"
      type="number"
      style={{ width }}
      value={Number.isFinite(value) ? value : ""}
      step={step ?? "any"}
      min={min}
      max={max}
      onChange={(e) => onChange(e.target.value === "" ? NaN : Number(e.target.value))}
    />
  );
}

function ParamInput({
  name, spec, value, onChange,
}: {
  name: string; spec: ParamSpec; value: unknown; onChange: (v: unknown) => void;
}) {
  const title = `${spec.label}${spec.unit ? ` [${spec.unit}]` : ""}` +
    (spec.min !== undefined ? ` (${spec.min} … ${spec.max})` : "");
  if (spec.type === "bool") {
    return (
      <label className="param" title={title}>
        <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />
        {spec.label}
      </label>
    );
  }
  if (spec.type === "vec3") {
    const v = Array.isArray(value) ? (value as number[]) : [0, 0, 0];
    return (
      <span className="param" title={title}>
        <span className="muted small">{name}</span>
        {[0, 1, 2].map((i) => (
          <NumIn key={i} value={v[i]} width={64}
                 onChange={(x) => onChange(v.map((y, j) => (j === i ? x : y)))} />
        ))}
        {spec.unit && <span className="muted small">{spec.unit}</span>}
      </span>
    );
  }
  return (
    <span className="param" title={title}>
      <span className="muted small">{spec.label}</span>
      <NumIn value={Number(value)} onChange={onChange} min={spec.min} max={spec.max} />
      {spec.unit && <span className="muted small">{spec.unit}</span>}
    </span>
  );
}

/**
 * One fault row. `live` hides the onset (a live injection starts "now").
 */
export function FaultRow({
  schema, fault, onChange, onRemove, live = false, vehicle = "ugv",
}: {
  schema: Schema;
  fault: FaultEdit;
  onChange: (f: FaultEdit) => void;
  onRemove?: () => void;
  live?: boolean;
  vehicle?: Vehicle;
}) {
  const spec: FaultSchema | undefined = schema.faults[fault.type];
  const targets = targetsFor(schema, fault.type, vehicle);
  const set = (patch: Partial<FaultEdit>) => onChange({ ...fault, ...patch });
  return (
    <div className="fault-row">
      <div className="fault-main">
        <select
          value={fault.type}
          onChange={(e) => onChange({ ...newFault(schema, e.target.value, fault.onset, vehicle),
                                      duration: fault.duration })}
        >
          {faultTypesFor(schema, vehicle).map((t) => (
            <option key={t} value={t}>{pretty(t)}</option>
          ))}
        </select>
        {targets.length > 1 ? (
          <select value={fault.target} onChange={(e) => set({ target: e.target.value })}>
            {targets.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        ) : (
          <span className="chip">{fault.target}</span>
        )}
        {!live && (
          <label className="param">
            <span className="muted small">onset</span>
            <NumIn value={fault.onset} min={0} onChange={(v) => set({ onset: v })} />
            <span className="muted small">s</span>
          </label>
        )}
        <label className="param">
          <span className="muted small">duration</span>
          <NumIn value={fault.duration} onChange={(v) => set({ duration: v })} />
          <span className="muted small">s</span>
        </label>
        <label className="param" title="Time to ramp to full magnitude">
          <span className="muted small">ramp</span>
          <NumIn value={fault.ramp} min={0} width={60} onChange={(v) => set({ ramp: v })} />
          <span className="muted small">s</span>
        </label>
        <label className="param" title="-1 = until the run ends">
          <input
            type="checkbox"
            checked={fault.duration < 0}
            onChange={(e) => set({ duration: e.target.checked ? -1 : 30 })}
          />
          <span className="muted small">until end</span>
        </label>
        {onRemove && <button className="icon" onClick={onRemove} title="remove">✕</button>}
      </div>
      {spec && Object.keys(spec.params).length > 0 && (
        <div className="fault-params">
          {Object.entries(spec.params).map(([k, p]) => (
            <ParamInput key={k} name={k} spec={p} value={fault.params[k]}
                        onChange={(v) => set({ params: { ...fault.params, [k]: v } })} />
          ))}
        </div>
      )}
      {spec && <p className="muted small fault-desc">{spec.description}</p>}
    </div>
  );
}
