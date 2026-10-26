# ResilienceLab

Software-in-the-loop testbed for **autonomous ground-vehicle navigation under sensor faults**.
A simulated rover drives across rough terrain to a goal while faults are injected into its
sensors (GNSS outage, GNSS spoof-like offset, LiDAR dropout, IMU bias, stale data, lost
odometry link, surprise obstacle). The rover has to detect each fault, switch to a safe
operating mode, and recover. Every run is scored against simulator ground truth.

> **Scope note.** This prototype is pure Python, with no Gazebo, ROS 2 or PX4 install. The
> simulator, sensor models and navigation stack are written from scratch so they run anywhere.
> The structure follows the project report (sensor messages modelled on the ROS types, a
> recorder that is the only component allowed to see ground truth). The PX4 drone is **not**
> implemented yet. All results are simulated, not real-world validation.

---

## Quick start (demo)

**Needs:** Python 3.10+ (and Node.js 18+ only if you change the dashboard; a built copy is included).

### macOS / Linux (one command)

```bash
./run_demo.sh                 # GNSS-outage scenario at 3x speed
```

Then open **http://127.0.0.1:8787/?token=demo** in a browser.

Other scenarios and speeds:

```bash
./run_demo.sh lidar_dropout
./run_demo.sh comms_loss
SPEED=1 ./run_demo.sh baseline_normal     # real time
```

### Manual / Windows

```bash
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt

python3 -m bridge.telemetry_server --scenario experiments/scenarios/gnss_outage.yaml --speed 3 --token demo
```

Open **http://127.0.0.1:8787/?token=demo**.

`?token=demo` unlocks the command console (pause / resume / reset / inject fault). Without
it, the dashboard is read-only. The bridge listens on localhost only.

### Rebuilding the dashboard (only after editing `dashboard/src`)

```bash
cd dashboard
npm install          # installs packages for YOUR platform
npm run build        # writes dashboard/dist, which the bridge serves
```

For live-reload development, run `npm run dev` and open http://localhost:5173 (it proxies to
the bridge on port 8787, so keep the bridge running).

---

## What to show (suggested 3-minute demo)

1. **Start** `./run_demo.sh` (GNSS outage). On the **Mission** tab the rover is `NORMAL`, true
   error is under 1 m and the reported σ follows it.
2. **3D view.** Terrain, obstacles, planned path, estimated pose (blue) and ground truth (orange,
   shown for display only; the navigation stack never reads it).
3. **t = 90 s: GNSS lost.** Within about 1 s the state goes `DEGRADED` → `LIMITED_OPERATION`:
   the rover slows to 0.55 m/s and dead-reckons on IMU + wheel odometry.
4. **About 75 s later** the dead-reckoning budget runs out → `SAFE_ACTION` (stop and hold), because
   inertial navigation drifts and can't be trusted indefinitely.
5. **t = 190 s: GNSS back** → `RECOVERY` (validated for 6 s) → `NORMAL` → the rover reaches the goal.
6. **Sensors tab:** sensor health table, estimator residuals, learned sensor biases.
7. **Results tab:** when the run ends it shows RMSE, detection latency, recovery time and false alarms.
8. **Replay / export:** scrub back through the run, export CSV/JSON, or use the console to `reset`
   or trigger the declared fault again.

Other good scenarios: `lidar_dropout` (stops when it goes blind, resumes when the scanner
returns) and `comms_loss` (odometry *and* GNSS lost: no valid fallback, so it stops at once).

---

## Batch experiments and metrics

```bash
python3 -m experiment.batch                               # all scenarios x seeds 12345 2 7
python3 -m experiment.batch gnss_outage --seeds 1 2 3 4 5
```

Each trial writes `runs/<scenario>_seed<seed>/` (`metrics.json`, `events.csv`, and the large
`result.json` + `timeseries.csv`, which are git-ignored). The batch also writes
**`runs/summary.md`** and `runs/summary.csv`.

Metrics (see `experiment/metrics.py`): position RMSE / p95 / max, estimator consistency
(error ÷ σ), detection rate and latency, false alarms per hour on fault-free epochs, recovery
time, path efficiency, per-sensor data availability, and mission outcome. *Success* requires
reaching the goal with zero collisions. A safe stop short of the goal is reported separately
and is never counted as a success.

---

## Architecture

```
sim/            world, terrain, UGV dynamics, sensor models (IMU, GNSS, LiDAR, wheel odom,
                magnetometer, barometer, battery, camera), simulation clock
faults/         fault injector: dropout, delay/stale, bias, offset, comms loss, new obstacle
estimation/     error-state EKF (IMU + GNSS + odometry + mag + baro), GNSS integrity monitor
                (NIS + CUSUM), sensor-health monitor (rate, timeout, stale payload, range)
nav/            costmap with LiDAR ground segmentation, terrain-aware A*, pure-pursuit controller
resilience/     explicit safety state machine:
                NORMAL → DEGRADED → LIMITED_OPERATION → SAFE_ACTION → RECOVERY
experiment/     scenario runner (closes the loop), recorder (only consumer of ground truth),
                metrics, batch runner
bridge/         aiohttp WebSocket bridge: read-only telemetry + token-gated allow-listed commands
dashboard/      React + TypeScript + Three.js operator UI (served by the bridge from dashboard/dist)
experiments/    scenario definitions (YAML)
runs/           experiment outputs
```

Data flow: `simulator → sensor messages → EKF / monitors → resilience FSM → planner/controller
→ vehicle commands → simulator`, with `recorder ← ground truth` for scoring only, and
`bridge → WebSocket → dashboard` for display.

### Safety state machine

| State | Meaning | Leaves when |
|---|---|---|
| NORMAL | sensors and estimate OK | confirmed fault or σ > 1.8 m → DEGRADED; IMU or LiDAR lost → SAFE_ACTION |
| DEGRADED | fault present, assessing fallback | fallback (IMU + odometry) healthy → LIMITED_OPERATION; no fallback / σ > 7 m → SAFE_ACTION |
| LIMITED_OPERATION | slow (0.55 m/s), dead-reckoning budget of 75 s / 60 m | budget spent or inputs lost → SAFE_ACTION; fault clears → RECOVERY |
| SAFE_ACTION | stop and hold | inputs restored and validated → RECOVERY |
| RECOVERY | restored inputs on probation | 6 s clean → NORMAL; regression → SAFE_ACTION |

---

## Known limitations / next steps

- No real Gazebo / ROS 2 / PX4 integration yet; the drone pipeline is not started.
- A slowly ramped GNSS offset (`gnss_inconsistency`) is detected late: the filter partly
  follows the offset before the monitor confirms it.
- During long dead-reckoning the reported σ underestimates the true error. The DR budget, not
  σ, is what makes the rover stop.
- No automated test suite yet.
