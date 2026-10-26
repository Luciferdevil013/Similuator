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

## Multiple simulations, environments and editing

The bridge hosts **several independent simulations at once** (up to 6), each with its own
scenario, environment, seed and speed. Everything is driven from the dashboard:

| Tab | What it does |
|---|---|
| **Lab** | Scenario editor. Pick a base scenario and one of 5 **environments** (rolling hills, flat open field, mountain pass, dense forest, rocky desert). Edit any parameter (world size, terrain relief, obstacle count, seed, safety speeds, dead-reckoning budget, sensor rates). Click the map to place the start and goal, and add or edit up to 12 faults with their parameters. Then **launch** it as a new live session, **save** it as a custom scenario, or **run a batch** over many seeds. |
| **Fleet** | Every live session (progress, state, result) with open / pause / resume / restart / close. Batch sweeps with live progress and a results table. The **run archive** of every recorded trial, with metrics and event log. |
| **Replay / control** | Controls the selected session: pause, step, restart (optionally with a new seed), speed, and **inject a new fault live**. Faults include GNSS loss or offset, LiDAR dropout, IMU bias, a link loss and a surprise obstacle. |
| Mission / 3D / Sensors / Results | Show whichever session is selected in the top bar. |

Every edit is validated server-side against an allow-list with bounds
(`experiment/scenario_schema.py`): unknown fields, out-of-range numbers and unknown fault
types are refused with a clear message. Saved scenarios go to
`experiments/scenarios/custom/<id>.yaml`. A scenario file can also extend another with
`base: _common.yaml`.

Batch sweeps run in worker processes, so they use every CPU core. Live sessions share the
bridge's one core: the more you run at once, the slower each one goes.

### REST API (used by the dashboard; scriptable too)

Read endpoints are open. Endpoints that change state need the token: `X-Token: <token>` header or `?token=`.

| Method & path | Purpose |
|---|---|
| `GET /api/info` | editor schema: environments, editable fields with bounds, fault types and params |
| `GET /api/scenarios`, `GET /api/scenarios/{id}` | list scenarios / get one resolved config |
| `POST /api/scenarios/validate` | validate an edit without running it |
| `POST /api/scenarios` · `DELETE /api/scenarios/{id}` | save / delete a custom scenario |
| `GET /api/sessions` · `POST /api/sessions` · `DELETE /api/sessions/{id}` | list / launch / close live sessions |
| `POST /api/sessions/{id}/command` | `pause`, `resume`, `step`, `set_speed`, `reset`, `inject_fault`, `inject_declared_fault`, `list_declared_faults` |
| `GET /api/batches` · `POST /api/batches` · `GET/DELETE /api/batches/{id}` | batch sweeps |
| `GET /api/runs`, `GET /api/runs/{path}` | run archive |
| `WS /ws/telemetry?session={id}` | read-only live telemetry |

Example: launch a dense-forest GNSS-outage run with a surprise obstacle:

```bash
curl -X POST http://127.0.0.1:8787/api/sessions -H 'X-Token: demo' -H 'Content-Type: application/json' -d '{
  "base": "gnss_outage", "environment": "dense_forest", "speed": 3,
  "fields": {"seed": 42, "resilience.speed_normal": 1.5},
  "faults": [{"type": "GNSS_OUTAGE", "onset": 60, "duration": 80},
             {"type": "OBSTACLE_APPEARS", "onset": 40, "params": {"x": 70, "y": 70}}]}'
```

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
8. **Replay / control:** scrub back through the run, export CSV/JSON, or **inject a new fault live**
   (for example a LiDAR dropout: the rover stops at once and resumes when it clears).
9. **Lab:** pick *Dense forest*, change the seed, click the map to move the goal, add a fault,
   and **launch**. A second simulation starts next to the first; switch between them in the top bar.
10. **Fleet:** both sessions side by side. Start a batch over 3 seeds from the Lab and watch it fill in.

Other good scenarios: `lidar_dropout` (stops when it goes blind, resumes when the scanner
returns) and `comms_loss` (odometry *and* GNSS lost: no valid fallback, so it stops at once).

---

## Batch experiments and metrics

```bash
python3 -m experiment.batch                               # all scenarios x seeds 12345 2 7
python3 -m experiment.batch gnss_outage --seeds 1 2 3 4 5
python3 -m experiment.batch --environment dense_forest --out runs/env_dense_forest
```

Each trial writes `runs/<scenario>_seed<seed>/` (`metrics.json`, `events.csv`, and the large
`result.json` + `timeseries.csv`, which are git-ignored). The batch also writes
**`runs/summary.md`** and `runs/summary.csv`.

Metrics (see `experiment/metrics.py`): position RMSE / p95 / max, estimator consistency
(error ÷ σ), detection rate and latency, false alarms per hour on fault-free epochs, recovery
time, path efficiency, per-sensor data availability, and mission outcome. *Success* requires
reaching the goal with zero collisions. A safe stop short of the goal is reported separately
and is never counted as a success.

### Current results (simulated)

All 9 scenarios, regenerated with the current code (`runs/summary.md`, `runs/env_*/summary.md`).
*Success* = goal reached with zero collisions.

| Map | Trials | Success |
|---|---|---|
| Rolling hills (default), seeds 12345 / 2 / 7 | 27 | 20 (seed 12345: 9/9) |
| Dense forest, seed 12345 | 9 | 9 |
| Flat open field, seed 12345 | 9 | 8 |
| Rocky desert, seed 12345 | 9 | 8 |
| Mountain pass, seed 12345 | 9 | 6 |

Where it still fails: `combined_stress` (four faults in one run) often runs out of time, the
slowly ramped GNSS offset is rarely confirmed, and IMU bias is not detected (the filter absorbs
it as a bias estimate). With odometry *and* GNSS lost (`comms_loss`) the rover stops correctly,
but the parked IMU-only estimate drifts, which inflates that scenario's RMSE.

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
                metrics, batch runner, scenario_schema (environments + validated editing)
bridge/         aiohttp server: multi-session manager, REST API, batch jobs, read-only
                WebSocket telemetry, token-gated allow-listed commands
tests/          pytest suite (schema, safety FSM, EKF, closed loop, API)
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
- A slowly ramped GNSS offset (`gnss_inconsistency`) is rarely confirmed: the filter partly
  follows the offset before the monitor's drift test trips.
- IMU bias faults are absorbed by the filter's bias states rather than flagged.
- Live sessions share one CPU core; batch sweeps use all cores.
- During long dead-reckoning the reported σ underestimates the true error. The DR budget, not
  σ, is what makes the rover stop.

## Tests

```bash
.venv/bin/python -m pip install -r requirements-dev.txt
.venv/bin/python -m pytest -q tests        # ~30 s
```
