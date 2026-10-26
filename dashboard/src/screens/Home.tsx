import { useEffect, useMemo, useState } from "react";
import { api } from "../api";
import type { Schema, SessionSummary, SummaryRow, Vehicle } from "../api";
import { EnvArt } from "../components/EnvArt";
import { Icon } from "../components/Icons";
import { SelfTestPanel } from "../components/SelfTestPanel";
import { StateBadge, num } from "../components/Panels";

interface Props {
  schema: Schema | null;
  sessions: SessionSummary[];
  token: string;
  authed: boolean;
  openLab: (preset?: { vehicle?: Vehicle; environment?: string }) => void;
  openSession: (id: string) => void;
  openFleet: () => void;
}

function RoverGlyph() {
  return (
    <svg className="glyph" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c8ff4d" /><stop offset="1" stopColor="#4de2ff" />
        </linearGradient>
      </defs>
      <rect x="30" y="80" width="140" height="48" rx="12" stroke="url(#rg)" strokeWidth="3" />
      <path d="M62 80l14-24h48l14 24" stroke="url(#rg)" strokeWidth="3" />
      {[52, 100, 148].map((x) => <circle key={x} cx={x} cy="140" r="16" stroke="url(#rg)" strokeWidth="3" />)}
      <path d="M150 56c18 0 30 12 30 30" stroke="#c8ff4d" strokeOpacity=".5" strokeWidth="2" strokeDasharray="4 5" />
    </svg>
  );
}

function DroneGlyph() {
  return (
    <svg className="glyph" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="dg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9b7bff" /><stop offset="1" stopColor="#4de2ff" />
        </linearGradient>
      </defs>
      {[[50, 50], [150, 50], [50, 150], [150, 150]].map(([x, y]) => (
        <g key={`${x}${y}`}>
          <line x1="100" y1="100" x2={x} y2={y} stroke="url(#dg)" strokeWidth="4" />
          <ellipse cx={x} cy={y} rx="30" ry="8" stroke="url(#dg)" strokeWidth="2.5" opacity=".8" />
        </g>
      ))}
      <rect x="82" y="82" width="36" height="36" rx="9" stroke="url(#dg)" strokeWidth="3" />
      <circle cx="100" cy="100" r="5" fill="#c8ff4d" />
    </svg>
  );
}

export function Home({ schema, sessions, token, authed, openLab, openSession, openFleet }: Props) {
  const [runs, setRuns] = useState<SummaryRow[]>([]);
  useEffect(() => {
    api.get<{ runs: SummaryRow[] }>("/api/runs").then((r) => r.ok && setRuns(r.data.runs));
  }, []);

  const stats = useMemo(() => {
    const done = runs.length;
    const ok = runs.filter((r) => r.mission_success).length;
    const det = runs.reduce((a, r) => a + (r.faults_detected || 0), 0);
    const decl = runs.reduce((a, r) => a + (r.faults_declared || 0), 0);
    return { done, rate: done ? (100 * ok) / done : 0, det, decl };
  }, [runs]);

  const ticker = [
    "GNSS outage → dead reckoning in 1 s",
    "Spoofed GNSS rejected, error held at 1.4 m",
    "Barometer drift voted out by GNSS + rangefinder",
    "LiDAR loss → stop, recover, resume",
    "Drone failsafe: land level when position is lost",
    "Ground truth reaches the recorder only",
    "Every fault is arithmetic on a simulated stream",
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-orb" />
        <span className="eyebrow">Software-in-the-loop · Mission: Resilience</span>
        <h1>
          Break the sensors.<br />
          <span className="grad">Keep the mission</span> <span className="outline">safe.</span>
        </h1>
        <p className="lede">
          A rover and a quadrotor fly and drive through five procedurally generated
          worlds while we inject GNSS loss, spoofing, LiDAR dropout, sensor drift and
          wind. They have to notice, degrade gracefully and recover — and every
          trial is scored against ground truth.
        </p>
        <div className="cta">
          <button className="primary" onClick={() => openLab()}>
            <Icon name="lab" /> Design a scenario
          </button>
          {sessions[0] && (
            <button onClick={() => openSession(sessions[0].id)}>
              <Icon name="play" /> Watch live: {sessions[0].label}
            </button>
          )}
          <button className="ghost" onClick={openFleet}>
            <Icon name="fleet" /> Fleet & results
          </button>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <div className="kpi-strip">
        <div className="kpi"><div className="v">{sessions.length}<small>/ 6</small></div>
          <div className="l">live simulations</div></div>
        <div className="kpi" style={{ animationDelay: ".05s" }}><div className="v">{stats.done}</div>
          <div className="l">recorded trials</div></div>
        <div className="kpi" style={{ animationDelay: ".1s" }}><div className="v">{num(stats.rate, 0)}<small>%</small></div>
          <div className="l">mission success</div></div>
        <div className="kpi" style={{ animationDelay: ".15s" }}><div className="v">{stats.det}<small>/ {stats.decl}</small></div>
          <div className="l">faults detected</div></div>
      </div>

      {sessions.length > 0 && (
        <>
          <div className="section-title"><h3>Running now</h3><span>click to watch</span></div>
          <div className="grid three">
            {sessions.map((s) => (
              <button key={s.id} className="vehicle-card" style={{ minHeight: 130, padding: 18 }}
                      onClick={() => openSession(s.id)}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <span className="chip"><Icon name={s.vehicle === "drone" ? "drone" : "rover"} size={14} /> {s.vehicle}</span>
                  {s.state && <StateBadge state={s.state} />}
                </div>
                <div>
                  <div style={{ font: "600 18px var(--font-display)", letterSpacing: "-.02em" }}>{s.label}</div>
                  <div className="muted small mono">{s.environment.replace(/_/g, " ")} · seed {s.seed} · t={num(s.t, 0)} s</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      <div className="section-title"><h3>Two vehicles, one safety brain</h3><span>same estimator, monitors and state machine</span></div>
      <div className="vehicle-cards">
        <button className="vehicle-card" onClick={() => openLab({ vehicle: "ugv" })}>
          <RoverGlyph />
          <div>
            <span className="eyebrow">Ground</span>
            <h4>Rover</h4>
            <p>Skid-steer UGV with IMU, GNSS, wheel odometry, LiDAR and compass. Terrain-aware A*, pure pursuit, LiDAR braking.</p>
          </div>
          <div className="tags">
            <span className="chip">9 scenarios</span><span className="chip">dead reckoning 75 s</span>
            <span className="chip">safe action: stop</span>
          </div>
        </button>
        <button className="vehicle-card" onClick={() => openLab({ vehicle: "drone" })}>
          <DroneGlyph />
          <div>
            <span className="eyebrow">Air</span>
            <h4>Quadrotor</h4>
            <p>Multicopter with IMU, GNSS, baro, compass and rangefinder. Terrain-following cruise, wind, PX4-style failsafe landing.</p>
          </div>
          <div className="tags">
            <span className="chip">7 scenarios</span><span className="chip">wind & gusts</span>
            <span className="chip">safe action: land</span>
          </div>
        </button>
      </div>

      {schema && (
        <>
          <div className="section-title"><h3>Five worlds</h3><span>procedural terrain · every seed is a new map</span></div>
          <div className="env-grid">
            {Object.entries(schema.environments).map(([k, e]) => (
              <button key={k} className="env" onClick={() => openLab({ environment: k })}>
                <EnvArt env={k} relief={e.world.relief} obstacles={e.world.n_obstacles} />
                <div className="meta">
                  <b>{e.label}</b>
                  <span className="muted small">{e.description}</span>
                  <span className="muted small mono">relief {e.world.relief} m · {e.world.n_obstacles} obstacles</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      <div className="section-title"><h3>Is everything working?</h3><span>run before the demo</span></div>
      <div className="grid">
        <SelfTestPanel token={token} authed={authed} />
      </div>
    </div>
  );
}
