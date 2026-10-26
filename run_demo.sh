#!/usr/bin/env bash
# One-command demo: sets up Python deps, builds the dashboard if needed, and
# starts the simulator + telemetry bridge. Then open the printed URL.
#
#   ./run_demo.sh                       # GNSS outage scenario, 3x speed
#   ./run_demo.sh lidar_dropout         # any file in experiments/scenarios/
#   SPEED=1 ./run_demo.sh comms_loss    # real time
set -euo pipefail
cd "$(dirname "$0")"

SCENARIO="${1:-gnss_outage}"
SPEED="${SPEED:-3}"
TOKEN="${TOKEN:-demo}"
PORT="${PORT:-8787}"

if [ ! -f "experiments/scenarios/${SCENARIO}.yaml" ]; then
  echo "Unknown scenario '${SCENARIO}'. Available:"
  ls experiments/scenarios | grep -v '^_' | sed 's/\.yaml$//; s/^/  /'
  exit 2
fi

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
exec python -m bridge.telemetry_server \
  --scenario "experiments/scenarios/${SCENARIO}.yaml" \
  --speed "${SPEED}" --token "${TOKEN}" --port "${PORT}"
