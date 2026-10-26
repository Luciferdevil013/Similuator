# ResilienceLab

Software-in-the-loop testbed for autonomous navigation under sensor faults:
a physically-modelled rover, ten simulated sensor streams, an error-state
Kalman filter, a fault injector, a resilience state machine, and an operator
dashboard.

## Run it

Two commands. The first builds the dashboard (once); the second starts
everything, because the bridge serves the built dashboard itself.

```bash
cd dashboard && npm install && npm run build
```

```bash
python3 -m bridge.telemetry_server --start-paused
```

Then open **http://127.0.0.1:8787/** and press **▶ Start simulation**.

Without `--start-paused` the run begins immediately; the header controls work
either way.

### Controls

The transport bar sits in the header on every screen:

| control | what it does |
| --- | --- |
| ▶ Start / ⏸ Pause / ▶ Resume / ↻ Run again | run state; `Space` also toggles it |
| ⏭ 1 s | advance one second of simulated time while paused |
| ↺ Restart | rebuild the scenario and wait at the start |
| scenario picker | load any scenario in `experiments/scenarios/` |
| ×N | wall-clock pacing, 1–40× |

Keys `1`–`6` switch screens: Mission, Map, 3D view, Sensors, Results,
Replay / export.

### Options

```
--scenario PATH     scenario file (default: baseline_normal.yaml)
--seed N            override the scenario seed
--speed N           wall-clock pacing multiplier
--start-paused      wait for Start instead of running immediately
--port N            default 8787
--bind ADDR         default 127.0.0.1
--no-truth          omit ground truth from the stream
--no-auto-token     never hand the page the command token; type it instead
```

## Run experiments headlessly

The dashboard is for watching; the recorder is the authoritative record.

```bash
python3 -c "from experiment.runner import run_scenario; print(run_scenario('experiments/scenarios/baseline_normal.yaml','runs')['metrics']['outcome'])"
```

Each trial writes `result.json`, `metrics.json`, `timeseries.csv` and
`events.csv` under `runs/<scenario>_seed<N>/`. Seeds are fixed per trial, so a
run reproduces exactly.

## How the browser is kept at arm's length

Three separate properties, because the dashboard is the least trusted part of
the system:

* **Telemetry is broadcast-only.** Anything a client sends on
  `/ws/telemetry` is discarded, so the socket used for reading cannot write.
* **Commands are an allowlist, not a passthrough.** `/ws/command` accepts
  only the verbs in `COMMANDS`, each with a bounded signature. The protocol
  cannot express a topic, a node, a file path or a Python attribute, so
  "publish to an arbitrary topic" is not a reachable state. `load_scenario`
  matches a bare filename against the scenarios directory listing rather than
  joining a path onto it, so `../../etc/passwd` simply fails to match.
* **The token is a convenience boundary, not an authentication system.** On
  loopback the bridge hands it to the page that it served, via `/session`,
  which carries no CORS headers — another origin may issue the request but
  the browser will not let its JavaScript read the reply. Bound anywhere
  else, or with `--no-auto-token`, `/session` returns 403 and the token must
  be entered by hand.

## Fault injection is arithmetic, not interference

Every fault in this platform is a modification applied to a simulated sensor
stream inside this one process: a dropout, a bias, an offset, a frozen
payload, added noise. Nothing is transmitted, no radio is touched, and no
operating-system or network state is changed. The platform cannot interfere
with real GNSS or any real device, by construction.

## Ground truth is for scoring only

The true pose is recorded, published to the dashboard and used to compute
every accuracy metric. It is never read by the estimator, the planner or the
controller. It travels under its own key in the telemetry frame so that an
accidental dependency on it would be obvious in review.

## Anomaly reporting is evidence-based

The GNSS monitor reports that the satellite solution is **inconsistent** with
the inertial and odometric evidence. It does not report spoofing. Jamming,
multipath, a receiver fault, an ephemeris error and a fault in the estimator
itself all present the same way to this test, so no cause is claimed —
the dashboard says "inconsistent", lists the tests that fired, and leaves
attribution to the operator.

## Layout

```
sim/          world, terrain, vehicle dynamics, ten sensor models
estimation/   error-state Kalman filter, GNSS integrity monitor, sensor health
nav/          layered costmap, terrain-aware A*, pure-pursuit controller
faults/       fault injector and scenario fault specs
resilience/   mission state machine
experiment/   scenario runner, recorder, metrics
bridge/       WebSocket telemetry bridge and snapshot assembly
dashboard/    React + TypeScript + Three.js operator dashboard
experiments/  scenario definitions
```
