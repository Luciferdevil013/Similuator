import sys
from pathlib import Path

# Run from anywhere: the project uses top-level packages (sim, nav, ...).
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
