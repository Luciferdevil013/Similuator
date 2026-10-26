#!/usr/bin/env bash
# One-command demo: sets up Python deps, builds the dashboard if needed, and
# starts the backend with a rover AND a drone simulation running.
#
#   ./run_demo.sh                                   # rover gnss_outage + drone gnss_glitch
#   ./run_demo.sh lidar_dropout drone_wind_gust     # any scenarios, one session each
#   SPEED=1 ./run_demo.sh comms_loss                # real time
set -euo pipefail
cd "$(dirname "$0")"

SPEED="${SPEED:-3}"
TOKEN="${TOKEN:-demo}"
PORT="${PORT:-8787}"
if [ "$#" -eq 0 ]; then
  set -- gnss_outage drone_gnss_glitch
fi

ARGS=()
for s in "$@"; do
  if [ -f "experiments/scenarios/${s}.yaml" ]; then
    ARGS+=(--scenario "experiments/scenarios/${s}.yaml")
  elif [ -f "experiments/scenarios/custom/${s}.yaml" ]; then
    ARGS+=(--scenario "experiments/scenarios/custom/${s}.yaml")
  else
    echo "Unknown scenario '${s}'. Available:"
    ls experiments/scenarios | grep '\.yaml$' | grep -v '^_' | sed 's/\.yaml$//; s/^/  /'
    exit 2
  fi
done

if [ ! -d .venv ]; then
  echo ">> creating Python virtualenv in .venv"
  python3 -m venv .venv
fi
# shellcheck disable=SC1091
. .venv/bin/activate
python -c "import numpy, scipy, yaml, aiohttp" 2>/dev/null || {
  echo ">> installing Python requirements"
  pip install -q -r requirements.txt
}

if [ ! -f dashboard/dist/index.html ]; then
  echo ">> building dashboard (needs Node.js 18+)"
  (cd dashboard && npm install && npm run build)
fi

echo
echo "  Dashboard:  http://127.0.0.1:${PORT}/?token=${TOKEN}"
echo "  (Ctrl+C to stop)"
echo
exec python -m bridge.telemetry_server "${ARGS[@]}" \
  --speed "${SPEED}" --token "${TOKEN}" --port "${PORT}"
