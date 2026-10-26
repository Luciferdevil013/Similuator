import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/Panels";
import { FaultRow, newFault } from "../components/FaultEditor";
import { api } from "../api";
import type { FaultEdit, ScenarioListing, Schema, SessionSummary } from "../api";

interface Props {
  schema: Schema;
  scenarios: ScenarioListing[];
  token: string;
  authed: boolean;
  onLaunched: (s: SessionSummary) => void;
  onBatchStarted: () => void;
  refreshScenarios: () => void;
}

type Values = Record<string, number | null>;

interface ScenarioDetail {
  config: {
    id: string;
    description?: string;
    environment?: string;
    mission?: { start?: number[]; goal?: number[] };
    faults?: FaultEdit[];
  };
  values: Values;
}

/** Click-to-place map of start, goal and scripted obstacles. */
function MissionMap({
  size, start, goal, faults, onStart, onGoal,
}: {
  size: [number, number];
  start: number[];
  goal: number[];
  faults: FaultEdit[];
  onStart: (p: number[]) => void;
  onGoal: (p: number[]) => void;
}) {
  const [mode, setMode] = useState<"goal" | "start">("goal");
  const W = 260;
  const H = Math.round((W * size[1]) / size[0]);
  const sx = (x: number) => (x / size[0]) * W;
  const sy = (y: number) => H - (y / size[1]) * H;
  const click = (e: React.MouseEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * size[0];
    const y = (1 - (e.clientY - r.top) / r.height) * size[1];
    const p = [Math.round(x), Math.round(y)];
    (mode === "goal" ? onGoal : onStart)(p);
  };
  const obstacles = faults.filter((f) => f.type === "OBSTACLE_APPEARS");
  return (
    <div className="mission-map">
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} onClick={click} role="img"
           aria-label="mission map: click to place the start or goal">
        <rect x={0} y={0} width={W} height={H} className="map-bg" />
        {[0.25, 0.5, 0.75].map((f) => (
          <g key={f}>
            <line x1={W * f} x2={W * f} y1={0} y2={H} className="map-grid" />
            <line y1={H * f} y2={H * f} x1={0} x2={W} className="map-grid" />
          </g>
        ))}
        <line x1={sx(start[0])} y1={sy(start[1])} x2={sx(goal[0])} y2={sy(goal[1])}
              className="map-line" />
        {obstacles.map((o, i) => (
          <circle key={i} cx={sx(Number(o.params.x))} cy={sy(Number(o.params.y))}
                  r={Math.max(3, sx(Number(o.params.radius ?? 1.3)))} className="map-obs" />
        ))}
        <circle cx={sx(start[0])} cy={sy(start[1])} r={6} className="map-start" />
        <circle cx={sx(goal[0])} cy={sy(goal[1])} r={6} className="map-goal" />
      </svg>
      <div className="btn-row">
        <span className="muted small">click map to place:</span>
        <button className={mode === "start" ? "sel" : ""} onClick={() => setMode("start")}>
          start
        </button>
        <button className={mode === "goal" ? "sel" : ""} onClick={() => setMode("goal")}>
          goal
        </button>
      </div>
      <div className="btn-row">
        <span className="legend-dot start" /> start ({start.join(", ")})
        <span className="legend-dot goal" /> goal ({goal.join(", ")})
        {obstacles.length > 0 && (<><span className="legend-dot obs" /> scripted obstacle</>)}
      </div>
    </div>
  );
}

export function ScenarioLab({
  schema, scenarios, token, authed, onLaunched, onBatchStarted, refreshScenarios,
}: Props) {
  const [base, setBase] = useState("gnss_outage");
  const [env, setEnv] = useState("rolling_hills");
  const [values, setValues] = useState<Values>({});
  const [start, setStart] = useState<number[]>([12, 12]);
  const [goal, setGoal] = useState<number[]>([185, 185]);
  const [faults, setFaults] = useState<FaultEdit[]>([]);
  const [description, setDescription] = useState("");
  const [saveId, setSaveId] = useState("");
  const [label, setLabel] = useState("");
  const [speed, setSpeed] = useState(3);
  const [seedsText, setSeedsText] = useState("12345 2 7");
  const [msg, setMsg] = useState<{ ok: boolean; text: string[] } | null>(null);
  const [busy, setBusy] = useState(false);

  // Load the chosen base scenario into the form.
  useEffect(() => {
    let live = true;
    api.get<ScenarioDetail>(`/api/scenarios/${encodeURIComponent(base)}`).then((r) => {
      if (!live || !r.ok) return;
      const c = r.data.config;
      setValues(r.data.values);
      setEnv(c.environment ?? "rolling_hills");
      setStart((c.mission?.start ?? [12, 12]).map(Number));
      setGoal((c.mission?.goal ?? [185, 185]).map(Number));
      setFaults((c.faults ?? []).map((f) => ({
        type: String(f.type).toUpperCase(), target: f.target,
        onset: Number(f.onset ?? 0), duration: Number(f.duration ?? -1),
        ramp: Number(f.ramp ?? 0), params: { ...(f.params ?? {}) }, label: f.label ?? "",
      })));
      setDescription((c.description ?? "").trim());
      setMsg(null);
    });
    return () => { live = false; };
  }, [base]);

  const chooseEnv = (k: string) => {
    setEnv(k);
    const w = schema.environments[k].world;
    setValues((v) => {
      const out = { ...v };
      for (const [key, val] of Object.entries(w)) out[`world.${key}`] = val;
      return out;
    });
  };

  const groups = useMemo(() => {
    const g: Record<string, string[]> = {};
    for (const [k, f] of Object.entries(schema.fields)) (g[f.group] ??= []).push(k);
    return g;
  }, [schema]);

  const edit = (extra: Record<string, unknown> = {}) => {
    const fields: Record<string, number> = {};
    for (const [k, v] of Object.entries(values))
      if (v !== null && v !== undefined && schema.fields[k]) fields[k] = Number(v);
    return {
      base, environment: env, fields, description,
      mission: { start, goal }, faults, ...extra,
    };
  };

  const report = (ok: boolean, text: string[]) => setMsg({ ok, text });

  const validate = async () => {
    const r = await api.post("/api/scenarios/validate", token, edit());
    report(r.ok, r.ok ? ["Scenario is valid."] : r.errors ?? ["invalid"]);
    return r.ok;
  };

  const launch = async () => {
    setBusy(true);
    const r = await api.post<{ session: SessionSummary }>("/api/sessions", token, {
      ...edit(), speed, label: label || `${base} · ${env} · seed ${values.seed}`,
    });
    setBusy(false);
    if (r.ok) onLaunched(r.data.session);
    else report(false, r.errors ?? ["launch failed"]);
  };

  const save = async () => {
    const r = await api.post<{ id: string; path: string }>("/api/scenarios", token,
                                                            edit({ id: saveId }));
    report(r.ok, r.ok ? [`Saved as ${r.data.id} (${r.data.path}).`] : r.errors ?? ["save failed"]);
    if (r.ok) refreshScenarios();
  };

  const batch = async () => {
    const seeds = seedsText.split(/[\s,]+/).filter(Boolean).map(Number);
    if (seeds.some((s) => !Number.isInteger(s))) {
      report(false, ["seeds must be whole numbers separated by spaces"]);
      return;
    }
    const r = await api.post("/api/batches", token, {
      edit: edit({ id: saveId || undefined }), seeds, jobs: 4,
      label: label || `${base} on ${env}`,
    });
    if (r.ok) onBatchStarted();
    else report(false, r.errors ?? ["batch failed"]);
  };

  const size: [number, number] = [
    Number(values["world.size_x"] ?? 200), Number(values["world.size_y"] ?? 200),
  ];

  return (
    <div className="grid lab">
      <Card title="1 · Start from" className="span2">
        <div className="btn-row">
          <select value={base} onChange={(e) => setBase(e.target.value)}>
            {scenarios.filter((s) => !s.error).map((s) => (
              <option key={s.id} value={s.id}>
                {s.id}{s.source === "custom" ? " (custom)" : ""}
              </option>
            ))}
          </select>
          <input className="token" value={description} placeholder="description"
                 onChange={(e) => setDescription(e.target.value)} />
        </div>
      </Card>

      <Card title="2 · Environment" className="span2">
        <div className="env-grid">
          {Object.entries(schema.environments).map(([k, e]) => (
            <button key={k} className={env === k ? "env sel" : "env"} onClick={() => chooseEnv(k)}>
              <b>{e.label}</b>
              <span className="muted small">{e.description}</span>
              <span className="muted small">
                relief {e.world.relief} m · {e.world.n_obstacles} obstacles
              </span>
            </button>
          ))}
        </div>
      </Card>

      <Card title="3 · Parameters">
        {Object.entries(groups).map(([g, keys]) => (
          <fieldset key={g} className="fields">
            <legend>{g}</legend>
            {keys.map((k) => {
              const f = schema.fields[k];
              const v = values[k];
              return (
                <label key={k} className="field" title={`${f.min} … ${f.max} ${f.unit}`}>
                  <span>{f.label}</span>
                  <span>
                    <input
                      className="num" type="number" value={v ?? ""}
                      min={f.min} max={f.max} step={f.step ?? "any"}
                      onChange={(e) => {
                        const nv = e.target.value === "" ? null : Number(e.target.value);
                        // The mission timeout follows the run length.
                        setValues({ ...values, [k]: nv,
                                    ...(k === "duration" ? { "mission.timeout_s": nv } : {}) });
                      }}
                    />
                    <small className="muted">{f.unit}</small>
                    {k === "seed" && (
                      <button className="icon" title="random seed"
                              onClick={() => setValues({ ...values,
                                seed: Math.floor(Math.random() * 1e6) })}>
                        🎲
                      </button>
                    )}
                  </span>
                </label>
              );
            })}
          </fieldset>
        ))}
      </Card>

      <div className="stack">
        <Card title="4 · Mission">
          <MissionMap size={size} start={start} goal={goal} faults={faults}
                      onStart={setStart} onGoal={setGoal} />
        </Card>

        <Card
          title={`5 · Faults (${faults.length}/${schema.max_faults})`}
          right={
            <button
              disabled={faults.length >= schema.max_faults}
              onClick={() => setFaults([...faults, newFault(schema, "GNSS_OUTAGE")])}
            >
              + add fault
            </button>
          }
        >
          {faults.length === 0 && <p className="muted">No faults: a baseline run.</p>}
          {faults.map((f, i) => (
            <FaultRow key={i} schema={schema} fault={f}
                      onChange={(nf) => setFaults(faults.map((x, j) => (j === i ? nf : x)))}
                      onRemove={() => setFaults(faults.filter((_, j) => j !== i))} />
          ))}
        </Card>
      </div>

      <Card title="6 · Run it" className="span2">
        {!authed && (
          <p className="alert">
            Read-only: open the dashboard with <code>?token=…</code> (printed by the
            bridge) to launch, save or batch.
          </p>
        )}
        <div className="btn-row">
          <input className="token" value={label} placeholder="session label (optional)"
                 onChange={(e) => setLabel(e.target.value)} />
          <label className="muted small">
            speed ×
            <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
              {[0.5, 1, 2, 3, 5, 10, 20].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <button onClick={validate}>validate</button>
          <button className="primary" disabled={!authed || busy} onClick={launch}>
            ▶ launch simulation
          </button>
        </div>
        <div className="btn-row">
          <input className="token" value={saveId} placeholder="scenario id to save, e.g. forest_gnss_test"
                 onChange={(e) => setSaveId(e.target.value.toLowerCase())} />
          <button disabled={!authed || !saveId} onClick={save}>save scenario</button>
        </div>
        <div className="btn-row">
          <input className="token" value={seedsText} placeholder="seeds, e.g. 1 2 3"
                 onChange={(e) => setSeedsText(e.target.value)} />
          <button disabled={!authed} onClick={batch}>run batch over these seeds</button>
        </div>
        {msg && (
          <div className={msg.ok ? "reason" : "alert"}>
            {msg.text.map((t, i) => <div key={i}>{t}</div>)}
          </div>
        )}
      </Card>
    </div>
  );
}
