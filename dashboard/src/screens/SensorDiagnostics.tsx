import { Card, Stat, num } from "../components/Panels";
import { Chart } from "../components/Chart";
import type { HistoryRow } from "../useTelemetry";
import type { Telemetry } from "../types";

const STATUS_TONE: Record<string, "" | "ok" | "warn" | "bad"> = {
  OK: "ok",
  DEGRADED: "warn",
  STALE: "bad",
  TIMEOUT: "bad",
  INVALID: "bad",
  FAILED: "bad",
  UNKNOWN: "",
};

/** Decode the SensorHealth flag bitfield into readable causes. */
const FLAG_NAMES: [number, string][] = [
  [1 << 0, "timeout"],
  [1 << 1, "rate low"],
  [1 << 2, "stale payload"],
  [1 << 3, "out of range"],
  [1 << 4, "noisy"],
  [1 << 5, "inconsistent"],
];

function flagText(flags: number): string {
  const on = FLAG_NAMES.filter(([bit]) => (flags & bit) !== 0).map(([, n]) => n);
  return on.length ? on.join(", ") : "—";
}

export function SensorDiagnostics({
  latest,
  history,
}: {
  latest: Telemetry;
  history: HistoryRow[];
}) {
  const e = latest.estimate;
  const rows = Object.entries(latest.sensors);
  const bad = rows.filter(([, s]) => s.status !== "OK");

  return (
    <div className="grid">
      <Card
        title="Sensor health"
        className="span2"
        right={
          <span className={bad.length ? "badge warn" : "badge ok"}>
            {bad.length ? `${bad.length} not OK` : "all nominal"}
          </span>
        }
      >
        <table className="table">
          <thead>
            <tr>
              <th>sensor</th>
              <th>status</th>
              <th>rate</th>
              <th>expected</th>
              <th>availability</th>
              <th>last valid</th>
              <th>flags</th>
              <th>detail</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([id, s]) => (
              <tr key={id} className={s.status === "OK" ? "" : "row-bad"}>
                <td>{id}</td>
                <td>
                  <span className={`badge ${STATUS_TONE[s.status] ?? ""}`}>
                    {s.status}
                  </span>
                </td>
                <td>{num(s.rate_hz, 1)} Hz</td>
                <td>{num(s.expected_hz, 0)} Hz</td>
                <td>{(s.availability * 100).toFixed(2)}%</td>
                <td>{num(s.last_valid, 2)} s</td>
                <td>{flagText(s.flags)}</td>
                <td className="muted">{s.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="caveat">
          A stream that keeps arriving with a fresh timestamp but an unchanged
          payload is reported as <strong>STALE</strong>, not OK. That case is
          the reason the monitor fingerprints the payload instead of watching
          only the timestamp and the rate.
        </p>
      </Card>

      <Card title="Estimator residuals">
        <Chart
          rows={history}
          height={140}
          shadeFlagged
          yMax={40}
          series={[
            { key: "nis", label: "GNSS NIS", color: "#4a9eff" },
            { key: "cusum", label: "CUSUM", color: "#f0803c", dashed: true },
          ]}
        />
        <div className="stat-row">
          <Stat label="updates" value={e.updates} />
          <Stat
            label="rejections"
            value={e.rejections}
            tone={e.rejections > e.updates * 0.3 ? "warn" : "ok"}
            hint="Measurements refused by the chi-square gate."
          />
          <Stat label="NIS" value={num(latest.gnss_integrity.nis)} />
        </div>
      </Card>

      <Card title="Estimated sensor errors">
        <p className="muted small">
          Biases the filter has learned. These are states, not calibration
          constants: they drift, and watching them converge is how you tell a
          healthy filter from one that is absorbing a modelling error.
        </p>
        <div className="stat-row">
          <Stat label="gyro bias x" value={(e.gyro_bias[0] * 1e3).toFixed(2)} unit="mrad/s" />
          <Stat label="y" value={(e.gyro_bias[1] * 1e3).toFixed(2)} unit="mrad/s" />
          <Stat label="z" value={(e.gyro_bias[2] * 1e3).toFixed(2)} unit="mrad/s" />
        </div>
        <div className="stat-row">
          <Stat label="accel bias x" value={num(e.accel_bias[0], 3)} unit="m/s²" />
          <Stat label="y" value={num(e.accel_bias[1], 3)} unit="m/s²" />
          <Stat label="z" value={num(e.accel_bias[2], 3)} unit="m/s²" />
        </div>
        <div className="stat-row">
          <Stat label="baro bias" value={num(e.baro_bias)} unit="m" />
          <Stat
            label="odometry scale"
            value={(e.odom_scale * 100).toFixed(2)}
            unit="%"
            hint="Wheel slip makes the encoders over-report; this is the learned correction."
          />
          <Stat label="vel σ" value={num(e.vel_sigma, 3)} unit="m/s" />
        </div>
      </Card>

      <Card title="Speed tracking">
        <Chart
          rows={history}
          height={140}
          series={[
            { key: "speed", label: "true speed (m/s)", color: "#3fb950" },
            { key: "speedCmd", label: "commanded (m/s)", color: "#4a9eff", dashed: true },
          ]}
        />
      </Card>

      <Card title="Heading error">
        <Chart
          rows={history}
          height={140}
          shadeFlagged
          series={[{ key: "yawErr", label: "yaw error (deg)", color: "#d2a8ff" }]}
        />
        <div className="stat-row">
          <Stat label="yaw σ" value={num(e.yaw_sigma_deg, 2)} unit="°" />
          {latest.battery && (
            <>
              <Stat label="battery" value={num(latest.battery.percentage * 100, 1)} unit="%" />
              <Stat label="pack" value={num(latest.battery.voltage, 1)} unit="V" />
              <Stat label="draw" value={num(latest.battery.current, 1)} unit="A" />
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
