import { useCallback, useEffect, useRef, useState } from "react";
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
  error: string | null;
  world: WorldMessage | null;
  latest: Telemetry | null;
  results: ResultsMessage["metrics"] | null;
  history: HistoryRow[];
  path: number[][];
  /** Send an allowlisted command. Resolves with the bridge's reply. */
  sendCommand: (command: string, args?: Record<string, unknown>) => void;
  commandReady: boolean;
  commandLog: string[];
  setToken: (t: string) => void;
  token: string;
}

export function useTelemetry(): TelemetryState {
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [world, setWorld] = useState<WorldMessage | null>(null);
  const [latest, setLatest] = useState<Telemetry | null>(null);
  const [results, setResults] = useState<ResultsMessage["metrics"] | null>(null);
  const [path, setPath] = useState<number[][]>([]);
  const [commandReady, setCommandReady] = useState(false);
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [token, setToken] = useState<string>(
    () => localStorage.getItem("rl.token") ?? ""
  );

  // History lives in a ref: it is appended at 20 Hz and only the screens that
  // draw it need to re-render, so it must not drive React state on every frame.
  const historyRef = useRef<HistoryRow[]>([]);
  const [, bumpHistory] = useState(0);
  const cmdRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let retry: number | undefined;
    let closed = false;
    let frames = 0;

    const connect = () => {
      ws = new WebSocket(wsUrl("/ws/telemetry"));
      ws.onopen = () => {
        setConnected(true);
        setError(null);
      };
      ws.onclose = () => {
        setConnected(false);
        if (!closed) retry = window.setTimeout(connect, 1200);
      };
      ws.onerror = () => setError("telemetry socket error");
      ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data) as BridgeMessage;
        if (msg.type === "world") {
          setWorld(msg);
          historyRef.current = [];
          setPath([]);
          setResults(null);
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
        };
        const h = historyRef.current;
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
  }, []);

  // Command socket: opened only when a token is present.
  useEffect(() => {
    if (!token) {
      setCommandReady(false);
      return;
    }
    const ws = new WebSocket(
      wsUrl("/ws/command") + "?token=" + encodeURIComponent(token)
    );
    cmdRef.current = ws;
    ws.onmessage = (ev) => {
      const r = JSON.parse(ev.data);
      if (r.type === "ready") setCommandReady(true);
      if (r.type === "error") setCommandReady(false);
      setCommandLog((log) =>
        [
          r.type === "error"
            ? `refused: ${r.error}`
            : `${r.command ?? r.type}: ${JSON.stringify(r.result ?? r)}`,
          ...log,
        ].slice(0, 40)
      );
    };
    ws.onclose = () => setCommandReady(false);
    return () => {
      cmdRef.current = null;
      ws.close();
    };
  }, [token]);

  const sendCommand = useCallback(
    (command: string, args: Record<string, unknown> = {}) => {
      const ws = cmdRef.current;
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        setCommandLog((l) => ["not connected: enter the bridge token", ...l]);
        return;
      }
      ws.send(JSON.stringify({ command, args, id: command }));
    },
    []
  );

  const persistToken = useCallback((t: string) => {
    localStorage.setItem("rl.token", t);
    setToken(t);
  }, []);

  return {
    connected,
    error,
    world,
    latest,
    results,
    history: historyRef.current,
    path,
    sendCommand,
    commandReady,
    commandLog,
    setToken: persistToken,
    token,
  };
}
