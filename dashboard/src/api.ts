// REST client for the bridge. State-changing calls carry the token in the
// X-Token header; reads need none.

export interface ApiResult<T = Record<string, unknown>> {
  ok: boolean;
  errors?: string[];
  data: T;
}

function base(): string {
  const b = import.meta.env.VITE_BRIDGE_HTTP as string | undefined;
  return b ? b.replace(/\/$/, "") : "";
}

async function call<T>(
  method: string,
  path: string,
  token: string,
  body?: unknown
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(base() + path, {
      method,
      headers: {
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
        ...(token ? { "X-Token": token } : {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    const json = await res.json().catch(() => ({ ok: false, errors: [res.statusText] }));
    return { ok: !!json.ok, errors: json.errors, data: json as T };
  } catch (e) {
    return { ok: false, errors: [String(e)], data: {} as T };
  }
}

export const api = {
  get: <T>(path: string) => call<T>("GET", path, ""),
  /** GET with the token attached, so the bridge can report whether it is valid. */
  getAuthed: <T>(path: string, token: string) => call<T>("GET", path, token),
  post: <T>(path: string, token: string, body: unknown) => call<T>("POST", path, token, body),
  del: <T>(path: string, token: string) => call<T>("DELETE", path, token),
};

/** `?token=...` in the page URL wins, so a demo link can carry the token. */
export function initialToken(): string {
  const fromUrl = new URLSearchParams(window.location.search).get("token");
  if (fromUrl) return fromUrl;
  try {
    return localStorage.getItem("rl.token") ?? "";
  } catch {
    return "";
  }
}

export function storeToken(t: string) {
  try {
    localStorage.setItem("rl.token", t);
  } catch {
    /* storage unavailable: the token still works for this session */
  }
}

// ---- shapes returned by the bridge -------------------------------------

export interface FieldSpec {
  type: "float" | "int";
  min: number;
  max: number;
  label: string;
  unit: string;
  step: number | null;
  group: string;
  vehicles: Vehicle[];
}

export type Vehicle = "ugv" | "drone";

export interface ParamSpec {
  type: "float" | "vec3" | "bool";
  min?: number;
  max?: number;
  label: string;
  unit?: string;
  default?: number | boolean | null;
}

export interface FaultSchema {
  targets: string[];
  params: Record<string, ParamSpec>;
  defaults?: Record<string, unknown>;
  description: string;
  vehicles: Vehicle[];
}

export interface Schema {
  environments: Record<string, { label: string; description: string; world: Record<string, number> }>;
  fields: Record<string, FieldSpec>;
  faults: Record<string, FaultSchema>;
  sensors: string[];
  vehicle_sensors: Record<Vehicle, string[]>;
  vehicles: Vehicle[];
  max_faults: number;
}

export interface FaultEdit {
  type: string;
  target: string;
  onset: number;
  duration: number;
  ramp: number;
  params: Record<string, unknown>;
  label?: string;
}

export interface ScenarioListing {
  id: string;
  source: "builtin" | "custom";
  description?: string;
  environment?: string;
  vehicle?: Vehicle;
  seed?: number;
  faults?: { type: string; target: string; onset: number; duration: number }[];
  error?: string;
}

export interface SessionSummary {
  id: string;
  label: string;
  scenario: string;
  source: string;
  environment: string;
  vehicle: Vehicle;
  seed: number;
  speed: number;
  paused: boolean;
  finished: boolean;
  building: boolean;
  error: string | null;
  warning?: string | null;
  t: number;
  duration: number;
  state: string | null;
  distance_to_goal_m: number | null;
  collisions: number | null;
  faults: number;
  subscribers: number;
  created: number;
  success: boolean | null | undefined;
}

export interface SummaryRow {
  scenario: string;
  seed: number;
  mission_success: boolean;
  goal_reached: boolean;
  final_state: string;
  collision_steps: number;
  min_clearance_m: number;
  duration_s: number;
  rmse_m: number | null;
  error_p95_m: number | null;
  faults_detected: number;
  faults_declared: number;
  detection_latency_s: number | null;
  recovery_time_s: number | null;
  false_alarms: number | null;
  distance_m: number | null;
  replans: number;
  finish_reason: string;
  path?: string;
  mtime?: number;
}

export interface BatchSummary {
  id: string;
  label: string;
  state: "queued" | "running" | "done" | "cancelled";
  total: number;
  done: number;
  succeeded: number;
  errors: string[];
  created: number;
  finished_at: number | null;
  jobs: number;
  out_dir: string;
  rows?: SummaryRow[];
}

export interface SelfTestResult {
  component: string;
  name: string;
  check: string;
  ok: boolean;
  detail: string;
  ms: number;
}

export interface SelfTestReport {
  ok: boolean;
  passed: number;
  total: number;
  seconds: number;
  results: SelfTestResult[];
}
