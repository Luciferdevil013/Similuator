"""Batch sweeps launched from the dashboard.

A batch runs (scenario x seed) trials as fast as the machine allows, in a
process pool, and reports progress while it goes. Each job writes its trials
under runs/<job_id>/ plus a summary.md / summary.csv, so the results outlive
the bridge and can be browsed in the run archive.
"""
from __future__ import annotations

import asyncio
import contextlib
import itertools
import os
import time
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

from experiment.batch import run_config, write_summary

ROOT = Path(__file__).resolve().parent.parent
RUNS_DIR = ROOT / "runs"
MAX_TRIALS = 120
MAX_ACTIVE_JOBS = 2


class BatchJob:
    def __init__(self, jid: str, trials: list[tuple[str, dict, int]], jobs: int, label: str):
        self.id = jid
        self.label = label
        self.trials = trials                  # (scenario id, raw config, seed)
        self.jobs = jobs
        self.out_dir = RUNS_DIR / jid
        self.created = time.time()
        self.finished_at: float | None = None
        self.rows: list[dict] = []
        self.errors: list[str] = []
        self.state = "queued"                 # queued | running | done | cancelled
        self._executor: ProcessPoolExecutor | None = None
        self._futures: list = []
        self.task: asyncio.Task | None = None

    async def run(self) -> None:
        self.state = "running"
        self.out_dir.mkdir(parents=True, exist_ok=True)
        loop = asyncio.get_running_loop()
        self._executor = ProcessPoolExecutor(max_workers=self.jobs)
        try:
            self._futures = [
                loop.run_in_executor(self._executor, run_config, raw, seed, str(self.out_dir))
                for _sid, raw, seed in self.trials]
            for (sid, _raw, seed), fut in zip(self.trials, self._futures):
                try:
                    res = await fut
                    self.rows.append(res["row"])
                except asyncio.CancelledError:
                    raise
                except Exception as exc:      # one bad trial must not lose the rest
                    self.errors.append("%s seed %d: %s" % (sid, seed, exc))
            if self.rows:
                write_summary(self.rows, self.out_dir)
            self.state = "done"
        except asyncio.CancelledError:
            self.state = "cancelled"
        finally:
            self.finished_at = time.time()
            self._executor.shutdown(wait=False, cancel_futures=True)

    def cancel(self) -> None:
        if self.task and not self.task.done():
            self.task.cancel()

    def summary(self, *, rows: bool = False) -> dict:
        out = {
            "id": self.id, "label": self.label, "state": self.state,
            "total": len(self.trials), "done": len(self.rows) + len(self.errors),
            "succeeded": sum(1 for r in self.rows if r.get("mission_success")),
            "errors": self.errors, "created": self.created,
            "finished_at": self.finished_at, "jobs": self.jobs,
            "out_dir": str(self.out_dir.relative_to(ROOT)),
        }
        if rows:
            out["rows"] = sorted(self.rows, key=lambda r: (r["scenario"], r["seed"]))
        return out


class BatchManager:
    def __init__(self):
        self.jobs: dict[str, BatchJob] = {}
        self._ids = itertools.count(1)

    def start(self, trials: list[tuple[str, dict, int]], *, jobs: int, label: str) -> BatchJob:
        if not trials:
            raise ValueError("nothing to run")
        if len(trials) > MAX_TRIALS:
            raise ValueError("at most %d trials per batch" % MAX_TRIALS)
        active = sum(1 for j in self.jobs.values() if j.state in ("queued", "running"))
        if active >= MAX_ACTIVE_JOBS:
            raise ValueError("%d batches already running; wait or cancel one" % active)
        jobs = max(1, min(int(jobs), os.cpu_count() or 2))
        jid = "batch_%s_%d" % (time.strftime("%Y%m%d_%H%M%S"), next(self._ids))
        job = BatchJob(jid, trials, jobs, label)
        self.jobs[jid] = job
        job.task = asyncio.create_task(job.run())
        return job

    def list(self) -> list[dict]:
        return [j.summary() for j in sorted(self.jobs.values(), key=lambda j: -j.created)]

    async def shutdown(self) -> None:
        for j in self.jobs.values():
            j.cancel()
            if j.task:
                with contextlib.suppress(BaseException):
                    await j.task


def list_runs(limit: int = 300) -> list[dict]:
    """Every recorded trial under runs/ (one level of batch folders deep)."""
    from experiment.batch import summary_row
    import json
    out = []
    if not RUNS_DIR.is_dir():
        return out
    paths = list(RUNS_DIR.glob("*/metrics.json")) + list(RUNS_DIR.glob("*/*/metrics.json"))
    paths.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    for p in paths[:limit]:
        try:
            m = json.loads(p.read_text())
        except Exception:
            continue
        row = summary_row(m)
        row["path"] = str(p.parent.relative_to(RUNS_DIR))
        row["mtime"] = p.stat().st_mtime
        out.append(row)
    return out


def load_run(rel: str) -> dict | None:
    """metrics.json + events for one run, by its path relative to runs/."""
    import csv
    import json
    d = (RUNS_DIR / rel).resolve()
    if RUNS_DIR.resolve() not in d.parents or not (d / "metrics.json").is_file():
        return None
    out = {"path": rel, "metrics": json.loads((d / "metrics.json").read_text())}
    ev = d / "events.csv"
    if ev.is_file():
        with open(ev) as fh:
            out["events"] = [r for r in csv.DictReader(fh) if r.get("kind") != "plan"][:400]
    return out
