"""Run a set of scenarios over a set of seeds and write a comparison table.

The evaluation plan asks for every scenario to be run repeatedly with fixed,
documented seeds, and for distributions rather than a single best run. This
is the tool that does that:

    python3 -m experiment.batch                         # every scenario, seeds 12345 2 7
    python3 -m experiment.batch gnss_outage lidar_dropout --seeds 1 2 3
    python3 -m experiment.batch --jobs 2 --out runs

Each trial writes runs/<scenario>_seed<seed>/ (result.json, timeseries.csv,
metrics.json, events.csv). The batch then writes runs/summary.csv and
runs/summary.md with one row per trial and a per-scenario roll-up.
"""
from __future__ import annotations

import argparse
import csv
import sys
import time
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent.parent
SCENARIO_DIR = ROOT / "experiments" / "scenarios"
DEFAULT_SEEDS = (12345, 2, 7)

COLUMNS = [
    "scenario", "seed", "mission_success", "goal_reached", "final_state",
    "collision_steps", "min_clearance_m", "duration_s", "rmse_m",
    "error_p95_m", "faults_detected", "faults_declared", "detection_latency_s",
    "recovery_time_s", "false_alarms", "distance_m", "replans", "finish_reason",
]


def available_scenarios() -> list[str]:
    return sorted(p.stem for p in SCENARIO_DIR.glob("*.yaml") if not p.stem.startswith("_"))


def _run_one(scenario: str, seed: int, out_dir: str) -> dict:
    # Imported in the worker so each process builds its own simulator.
    from experiment.runner import run_scenario
    t0 = time.time()
    res = run_scenario(SCENARIO_DIR / ("%s.yaml" % scenario), out_dir, seed=seed)
    return {"row": summary_row(res["metrics"]), "wall_s": time.time() - t0}


def summary_row(m: dict) -> dict:
    o = m.get("outcome", {})
    acc = m.get("accuracy", {})
    det = m.get("detection", {})
    rec = m.get("recovery", {})
    fa = m.get("false_alarms", {})
    path = m.get("path", {})
    return {
        "scenario": m.get("scenario_id"),
        "seed": m.get("seed"),
        "mission_success": o.get("mission_success"),
        "goal_reached": o.get("goal_reached"),
        "final_state": o.get("final_state"),
        "collision_steps": o.get("collisions"),
        "min_clearance_m": o.get("min_obstacle_clearance_m"),
        "duration_s": o.get("duration_s"),
        "rmse_m": acc.get("position_rmse_m"),
        "error_p95_m": acc.get("position_error_p95_m"),
        "faults_detected": det.get("faults_detected"),
        "faults_declared": det.get("faults_declared"),
        "detection_latency_s": det.get("detection_latency_mean_s"),
        "recovery_time_s": rec.get("recovery_time_mean_s"),
        "false_alarms": fa.get("false_alarm_events"),
        "distance_m": path.get("distance_travelled_m"),
        "replans": o.get("replans"),
        "finish_reason": o.get("finish_reason"),
    }


def _fmt(v, nd=2) -> str:
    if v is None:
        return "-"
    if isinstance(v, bool):
        return "yes" if v else "no"
    if isinstance(v, float):
        return ("%." + str(nd) + "f") % v
    return str(v)


def write_summary(rows: list[dict], out: Path) -> tuple[Path, Path]:
    rows = sorted(rows, key=lambda r: (r["scenario"], r["seed"]))
    csv_path = out / "summary.csv"
    with open(csv_path, "w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=COLUMNS)
        w.writeheader()
        w.writerows(rows)

    lines = ["# ResilienceLab experiment summary", "",
             "Simulated results from the pure-Python SITL stack; not real-world validation.",
             "", "## Per scenario", "",
             "| scenario | trials | success | collisions (trials) | RMSE mean [m] | "
             "detection rate | mean latency [s] |",
             "|---|---|---|---|---|---|---|"]
    by: dict[str, list[dict]] = {}
    for r in rows:
        by.setdefault(r["scenario"], []).append(r)
    for sc, rs in by.items():
        n = len(rs)
        succ = sum(1 for r in rs if r["mission_success"])
        coll = sum(1 for r in rs if (r["collision_steps"] or 0) > 0)
        rmse = [r["rmse_m"] for r in rs if r["rmse_m"] is not None]
        decl = sum(r["faults_declared"] or 0 for r in rs)
        detd = sum(r["faults_detected"] or 0 for r in rs)
        lat = [r["detection_latency_s"] for r in rs if r["detection_latency_s"] is not None]
        lines.append("| %s | %d | %d/%d | %d | %s | %s | %s |" % (
            sc, n, succ, n, coll, _fmt(float(np.mean(rmse)) if rmse else None),
            ("%d/%d" % (detd, decl)) if decl else "-",
            _fmt(float(np.mean(lat)) if lat else None)))

    lines += ["", "## Per trial", "",
              "| " + " | ".join(COLUMNS) + " |",
              "|" + "---|" * len(COLUMNS)]
    for r in rows:
        lines.append("| " + " | ".join(_fmt(r[c]) for c in COLUMNS) + " |")
    md_path = out / "summary.md"
    md_path.write_text("\n".join(lines) + "\n")
    return csv_path, md_path


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Run scenarios x seeds and summarise.")
    ap.add_argument("scenarios", nargs="*",
                    help="scenario ids (default: all in experiments/scenarios)")
    ap.add_argument("--seeds", nargs="+", type=int, default=list(DEFAULT_SEEDS))
    ap.add_argument("--out", default=str(ROOT / "runs"))
    ap.add_argument("--jobs", type=int, default=4, help="parallel worker processes")
    args = ap.parse_args(argv)

    known = available_scenarios()
    scenarios = args.scenarios or known
    bad = [s for s in scenarios if s not in known]
    if bad:
        print("unknown scenario(s): %s\navailable: %s" % (", ".join(bad), ", ".join(known)))
        return 2

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    jobs = [(s, sd) for s in scenarios for sd in args.seeds]
    print("running %d trial(s) on %d worker(s) -> %s" % (len(jobs), args.jobs, out))
    rows = []
    with ProcessPoolExecutor(max_workers=max(1, args.jobs)) as ex:
        futs = {ex.submit(_run_one, s, sd, str(out)): (s, sd) for s, sd in jobs}
        for f in as_completed(futs):
            s, sd = futs[f]
            try:
                r = f.result()
            except Exception as exc:          # one bad trial must not lose the rest
                print("  FAILED %s seed %d: %s" % (s, sd, exc))
                continue
            row = r["row"]
            rows.append(row)
            print("  %-20s seed %-6d %-8s %-12s rmse=%s  (%.0f s)" % (
                s, sd, "SUCCESS" if row["mission_success"] else "fail",
                row["final_state"], _fmt(row["rmse_m"]), r["wall_s"]), flush=True)

    if rows:
        csv_path, md_path = write_summary(rows, out)
        print("summary: %s\n         %s" % (csv_path, md_path))
    return 0 if len(rows) == len(jobs) else 1


if __name__ == "__main__":
    sys.exit(main())
