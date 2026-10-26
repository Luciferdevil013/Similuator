import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { api } from "./api";
import type {
  BridgeMessage,
  ResultsMessage,
  Telemetry,
  WorldMessage,
} from "./types";

/** One row of the ring buffer the charts and the replay screen read. */
export interface HistoryRow {
  t: number;
  posError: number | null;
  posSigma: number;
  nis: number | null;
  cusum: number | null;
  speed: number;
  speedCmd: number;
  state: string;
  flagged: boolean;
  estX: number;
  estY: number;
  trueX: number | null;
  trueY: number | null;
  yawErr: number | null;
  clearance: number | null;
  agl: number | null;
  trueAgl: number | null;
}

const HISTORY_LIMIT = 6000; // 5 minutes at 20 Hz

function wsUrl(path: string): string {
  const base = import.meta.env.VITE_BRIDGE_URL as string | undefined;
  if (base) return base.replace(/\/$/, "") + path;
  const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${window.location.host}${path}`;
}

function wrap180(d: number): number {
  let x = ((d + 180) % 360 + 360) % 360 - 180;
  if (x === -180) x = 180;
  return x;
}

export interface TelemetryState {
  connected: boolean;
  /** The bridge answered but the selected session does not exist. */
  missing: boolean;
  error: string | null;
  world: WorldMessage | null;
  latest: Telemetry | null;
  results: ResultsMessage["metrics"] | null;
  history: HistoryRow[];
  path: number[][];
  /** Send an allow-listed command to this session. */
  sendCommand: (command: string, args?: Record<string, unknown>) => Promise<boolean>;
  commandLog: string[];
}

export function useTelemetry(sessionId: string | null, token: string): TelemetryState {
  const [connected, setConnected] = useState(false);
  const [missing, setMissing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [world, setWorld] = useState<WorldMessage | null>(null);
  const [latest, setLatest] = useState<Telemetry | null>(null);
  const [results, setResults] = useState<ResultsMessage["metrics"] | null>(null);
  const [path, setPath] = useState<number[][]>([]);
  const [commandLog, setCommandLog] = useState<string[]>([]);

  // History lives in a ref: it is appended at 20 Hz and only the screens that
  // draw it need to re-render, so it must not drive React state on every frame.
  const historyRef = useRef<HistoryRow[]>([]);
  const [historyVersion, bumpHistory] = useState(0);

  useEffect(() => {
    // A new session is a different simulation: drop everything from the old one.
    historyRef.current = [];
    bumpHistory((n) => n + 1);
    setWorld(null);
    setLatest(null);
    setResults(null);
    setPath([]);
    setMissing(false);
    if (!sessionId) {
      setConnected(false);
      return;
    }

    let ws: WebSocket | null = null;
    let retry: number | undefined;
    let closed = false;
    let frames = 0;

    const connect = () => {
      ws = new WebSocket(wsUrl("/ws/telemetry?session=" + encodeURIComponent(sessionId)));
      ws.onopen = () => {
        setConnected(true);
        setError(null);
      };
      ws.onclose = (ev) => {
        setConnected(false);
        if (ev.code === 4404 || ev.code === 4410) {
          setMissing(true);
          return;
        }
        if (!closed) retry = window.setTimeout(connect, 1200);
      };
      ws.onerror = () => setError("telemetry socket error");
      ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data) as BridgeMessage;
        if (msg.type === "no_session") {
          setMissing(true);
          return;
        }
        if (msg.type === "world") {
          setWorld(msg);
          historyRef.current = [];
          bumpHistory((n) => n + 1);
          setPath([]);
          setResults(null);
          return;
        }
        if (msg.type === "world_update") {
          // Same run, changed scene (an obstacle was added): keep history.
          setWorld({ ...msg, type: "world" });
          return;
        }
        if (msg.type === "results") {
          setResults(msg.metrics);
          return;
        }
        setLatest(msg);
        if (msg.path) setPath(msg.path);

        const gt = msg.ground_truth;
        const row: HistoryRow = {
          t: msg.t,
          posError: gt ? gt.position_error_m : null,
          posSigma: msg.estimate.pos_sigma_h,
          nis: msg.gnss_integrity.nis,
          cusum: msg.gnss_integrity.cusum_max,
          speed: gt ? gt.speed : 0,
          speedCmd: msg.control ? msg.control.speed_cmd : 0,
          state: msg.resilience.state,
          flagged: msg.gnss_integrity.flagged,
          estX: msg.estimate.position[0],
          estY: msg.estimate.position[1],
          trueX: gt ? gt.position[0] : null,
          trueY: gt ? gt.position[1] : null,
          yawErr: gt ? wrap180(msg.estimate.yaw_deg - gt.yaw_deg) : null,
          clearance: msg.mission_progress.min_clearance_m,
          agl: msg.drone ? msg.drone.agl_estimate_m : null,
          trueAgl: msg.drone && gt && gt.agl_m !== undefined ? gt.agl_m : null,
        };
        const h = historyRef.current;
        // A paused or finished sim keeps re-sending its last frame; only
        // new simulated time belongs in the history and replay buffer.
        if (h.length && h[h.length - 1].t >= row.t) return;
        h.push(row);
        if (h.length > HISTORY_LIMIT) h.splice(0, h.length - HISTORY_LIMIT);
        // Re-render the charts at ~4 Hz rather than 20; the 3D view and the
        // numeric panels already update from `latest` every frame.
        if (++frames % 5 === 0) bumpHistory((n) => n + 1);
      };
    };
    connect();
    return () => {
      closed = true;
      if (retry) window.clearTimeout(retry);
      ws?.close();
    };
  }, [sessionId]);

  const sendCommand = useCallback(
    async (command: string, args: Record<string, unknown> = {}) => {
      if (!sessionId) return false;
      const r = await api.post<{ result?: unknown }>(
        `/api/sessions/${encodeURIComponent(sessionId)}/command`,
        token,
        { command, args }
      );
      setCommandLog((log) =>
        [
          r.ok
            ? `${command}: ${JSON.stringify(r.data.result ?? {})}`
            : `refused (${command}): ${(r.errors ?? ["error"]).join("; ")}`,
          ...log,
        ].slice(0, 40)
      );
      return r.ok;
    },
    [sessionId, token]
  );

  // The ring buffer is mutated in place, so hand the screens a fresh array on
  // each bump; otherwise memoised consumers (the charts) never see new rows.
  const history = useMemo(
    () => historyRef.current.slice(),
    [historyVersion]
  );

  return {
    connected,
    missing,
    error,
    world,
    latest,
    results,
    history,
    path,
    sendCommand,
    commandLog,
  };
}
