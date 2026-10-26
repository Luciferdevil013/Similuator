"""Heightmap terrain with slope, roughness and surface classes.

The terrain is the physical substrate for three separate consumers, and it is
deliberately the *same* data for all of them:

  * vehicle dynamics -- contact height, surface normal, friction, rolling
    resistance and the slip that produces wheel-odometry error;
  * the planner -- slope and roughness costs, and a hard traversability limit;
  * the LiDAR / depth camera -- ray-cast intersection targets.

Height is generated as fractional Brownian motion so that it has terrain-like
power-law roughness at every scale instead of the single smooth hill a sum of
two sinusoids would give.
"""
from __future__ import annotations

from dataclasses import dataclass

import numpy as np
from scipy import ndimage


@dataclass(frozen=True)
class SurfaceClass:
    """Per-surface mechanical properties used by the dynamics model."""
    name: str
    friction: float             # peak tyre/soil friction coefficient
    rolling_resistance: float   # dimensionless, fraction of normal load
    slip_gain: float            # longitudinal slip per unit tractive demand
    lidar_reflectivity: float   # 0..1, drives LaserScan intensity


SURFACES: tuple[SurfaceClass, ...] = (
    SurfaceClass("packed_dirt", friction=0.75, rolling_resistance=0.055, slip_gain=0.035, lidar_reflectivity=0.35),
    SurfaceClass("grass",       friction=0.62, rolling_resistance=0.080, slip_gain=0.060, lidar_reflectivity=0.28),
    SurfaceClass("gravel",      friction=0.55, rolling_resistance=0.110, slip_gain=0.095, lidar_reflectivity=0.42),
    SurfaceClass("sand",        friction=0.38, rolling_resistance=0.185, slip_gain=0.180, lidar_reflectivity=0.52),
    SurfaceClass("rock",        friction=0.85, rolling_resistance=0.070, slip_gain=0.025, lidar_reflectivity=0.48),
)


def _fbm(shape: tuple[int, int], rng: np.random.Generator,
         octaves: int = 6, lacunarity: float = 2.0, persistence: float = 0.5,
         base_cells: int = 4) -> np.ndarray:
    """Fractional Brownian motion via summed, spline-upsampled white noise.

    Each octave is white noise on a coarse lattice resampled with a cubic
    spline, which gives a smooth band-limited layer. Summing layers whose
    frequency rises by `lacunarity` and amplitude falls by `persistence`
    yields a ~1/f^beta spectrum, the statistic natural terrain actually has.
    """
    out = np.zeros(shape, dtype=float)
    amp, norm = 1.0, 0.0
    cells = base_cells
    for _ in range(octaves):
        lattice = rng.standard_normal((max(2, int(cells)) + 1, max(2, int(cells)) + 1))
        zoom = (shape[0] / lattice.shape[0], shape[1] / lattice.shape[1])
        layer = ndimage.zoom(lattice, zoom, order=3, mode="reflect", grid_mode=True)
        # zoom can be off by a pixel; crop/pad to the exact requested shape.
        layer = layer[:shape[0], :shape[1]]
        if layer.shape != shape:
            layer = np.pad(layer, ((0, shape[0] - layer.shape[0]),
                                   (0, shape[1] - layer.shape[1])), mode="edge")
        out += amp * layer
        norm += amp
        amp *= persistence
        cells *= lacunarity
    return out / norm


class Terrain:
    """Regular-grid heightmap in the local ENU frame.

    Grid index (i, j) maps to ENU (x = x0 + j*res, y = y0 + i*res), i.e. j is
    East and i is North, so that `height[i, j]` plots the right way up.
    """

    def __init__(self, size_x: float, size_y: float, resolution: float,
                 rng: np.random.Generator, *,
                 relief: float = 14.0, octaves: int = 6,
                 origin: tuple[float, float] = (0.0, 0.0),
                 max_slope_deg: float = 25.0,
                 ridge_mix: float = 0.35):
        self.res = float(resolution)
        self.x0, self.y0 = float(origin[0]), float(origin[1])
        self.nx = int(round(size_x / self.res)) + 1     # columns, East
        self.ny = int(round(size_y / self.res)) + 1     # rows, North
        self.size_x, self.size_y = size_x, size_y
        self.max_slope = np.radians(max_slope_deg)

        base = _fbm((self.ny, self.nx), rng, octaves=octaves)
        # A ridged component (|noise| folded) adds the sharp crests and
        # valleys that pure fBm lacks; mixing the two gives mountain-like
        # relief with traversable basins between ridges.
        ridged = 1.0 - np.abs(_fbm((self.ny, self.nx), rng, octaves=octaves, base_cells=3))
        h = (1.0 - ridge_mix) * base + ridge_mix * (ridged - ridged.mean())
        h -= h.min()
        if h.max() > 0:
            h *= relief / h.max()
        self.height = np.ascontiguousarray(h, dtype=float)

        self._build_derived_fields()
        self._assign_surfaces(rng)

    # -- derived fields ----------------------------------------------------
    def _build_derived_fields(self) -> None:
        # Central-difference gradient in metres per metre.
        dz_dy, dz_dx = np.gradient(self.height, self.res, self.res)
        self.grad_x, self.grad_y = dz_dx, dz_dy
        self.slope = np.arctan(np.hypot(dz_dx, dz_dy))          # rad

        # Surface normal, unit length: n = (-dz/dx, -dz/dy, 1) normalised.
        nz = 1.0 / np.sqrt(1.0 + dz_dx ** 2 + dz_dy ** 2)
        self.normal = np.stack([-dz_dx * nz, -dz_dy * nz, nz], axis=-1)

        # Roughness = RMS deviation of height from a locally-smoothed surface
        # over a ~3 m window. This is the quantity that shakes the IMU and
        # that the planner should avoid, distinct from mean slope.
        win = max(3, int(round(3.0 / self.res)) | 1)
        smooth = ndimage.uniform_filter(self.height, win, mode="nearest")
        resid = self.height - smooth
        self.roughness = np.sqrt(np.maximum(
            ndimage.uniform_filter(resid ** 2, win, mode="nearest"), 0.0))

    def _assign_surfaces(self, rng: np.random.Generator) -> None:
        """Assign a surface class per cell from slope, height and a noise field.

        Steep ground becomes rock, low flat ground sand or dirt, mid slopes
        grass or gravel -- a plausible correlation rather than random patches,
        with a smooth noise field so patches are contiguous.
        """
        blotch = _fbm((self.ny, self.nx), rng, octaves=3, base_cells=5)
        blotch = (blotch - blotch.mean()) / (blotch.std() + 1e-9)
        slope_deg = np.degrees(self.slope)
        hn = (self.height - self.height.min()) / max(1e-9, np.ptp(self.height))

        idx = np.full((self.ny, self.nx), 1, dtype=np.int8)        # grass
        idx[(slope_deg < 6) & (blotch < -0.4)] = 0                 # packed dirt
        idx[(slope_deg >= 6) & (slope_deg < 16) & (blotch > 0.3)] = 2   # gravel
        idx[(hn < 0.28) & (slope_deg < 8) & (blotch > 0.55)] = 3   # sand
        idx[slope_deg >= 17] = 4                                   # rock
        self.surface_idx = idx
        self.friction_map = np.array([s.friction for s in SURFACES])[idx]
        self.rr_map = np.array([s.rolling_resistance for s in SURFACES])[idx]
        self.slip_map = np.array([s.slip_gain for s in SURFACES])[idx]
        self.refl_map = np.array([s.lidar_reflectivity for s in SURFACES])[idx]

    # -- coordinate helpers -----------------------------------------------
    def in_bounds(self, x, y):
        return ((x >= self.x0) & (x <= self.x0 + self.size_x) &
                (y >= self.y0) & (y <= self.y0 + self.size_y))

    def to_grid(self, x, y):
        """World -> fractional grid coordinates (column fx, row fy)."""
        return (np.asarray(x) - self.x0) / self.res, (np.asarray(y) - self.y0) / self.res

    def to_world(self, j, i):
        return self.x0 + np.asarray(j) * self.res, self.y0 + np.asarray(i) * self.res

    # -- sampling ----------------------------------------------------------
    def height_at(self, x, y):
        """Bilinearly interpolated height. Vectorised over array inputs."""
        fx, fy = self.to_grid(x, y)
        j0 = np.clip(np.floor(fx).astype(int), 0, self.nx - 2)
        i0 = np.clip(np.floor(fy).astype(int), 0, self.ny - 2)
        tx = np.clip(fx - j0, 0.0, 1.0)
        ty = np.clip(fy - i0, 0.0, 1.0)
        h = self.height
        h00, h01 = h[i0, j0], h[i0, j0 + 1]
        h10, h11 = h[i0 + 1, j0], h[i0 + 1, j0 + 1]
        return ((h00 * (1 - tx) + h01 * tx) * (1 - ty) +
                (h10 * (1 - tx) + h11 * tx) * ty)

    def _sample_nearest(self, arr, x, y):
        fx, fy = self.to_grid(x, y)
        j = np.clip(np.round(fx).astype(int), 0, self.nx - 1)
        i = np.clip(np.round(fy).astype(int), 0, self.ny - 1)
        return arr[i, j]

    def normal_at(self, x, y):
        """Surface normal from the interpolated gradient (not nearest-cell).

        Using the interpolated gradient keeps the normal continuous, which
        stops the vehicle's attitude from stepping between cells.
        """
        gx = self._bilinear(self.grad_x, x, y)
        gy = self._bilinear(self.grad_y, x, y)
        n = np.stack([-gx, -gy, np.ones_like(np.asarray(gx, dtype=float))], axis=-1)
        return n / np.linalg.norm(n, axis=-1, keepdims=True)

    def _bilinear(self, arr, x, y):
        fx, fy = self.to_grid(x, y)
        j0 = np.clip(np.floor(fx).astype(int), 0, self.nx - 2)
        i0 = np.clip(np.floor(fy).astype(int), 0, self.ny - 2)
        tx = np.clip(fx - j0, 0.0, 1.0)
        ty = np.clip(fy - i0, 0.0, 1.0)
        a00, a01 = arr[i0, j0], arr[i0, j0 + 1]
        a10, a11 = arr[i0 + 1, j0], arr[i0 + 1, j0 + 1]
        return ((a00 * (1 - tx) + a01 * tx) * (1 - ty) +
                (a10 * (1 - tx) + a11 * tx) * ty)

    def slope_at(self, x, y):
        gx = self._bilinear(self.grad_x, x, y)
        gy = self._bilinear(self.grad_y, x, y)
        return np.arctan(np.hypot(gx, gy))

    def roughness_at(self, x, y):
        return self._bilinear(self.roughness, x, y)

    def surface_at(self, x, y) -> SurfaceClass:
        return SURFACES[int(self._sample_nearest(self.surface_idx, x, y))]

    def friction_at(self, x, y):
        return self._bilinear(self.friction_map, x, y)

    def rolling_resistance_at(self, x, y):
        return self._bilinear(self.rr_map, x, y)

    def slip_gain_at(self, x, y):
        return self._bilinear(self.slip_map, x, y)

    def reflectivity_at(self, x, y):
        return self._sample_nearest(self.refl_map, x, y)

    # -- traversability ----------------------------------------------------
    def traversable_mask(self) -> np.ndarray:
        """Cells the UGV may enter at all, before obstacle inflation."""
        return (self.slope <= self.max_slope) & (self.roughness <= 0.45)

    def summary(self) -> dict:
        return {
            "nx": self.nx, "ny": self.ny, "resolution": self.res,
            "origin": [self.x0, self.y0],
            "size": [self.size_x, self.size_y],
            "height_min": float(self.height.min()),
            "height_max": float(self.height.max()),
            "slope_mean_deg": float(np.degrees(self.slope.mean())),
            "slope_p95_deg": float(np.degrees(np.percentile(self.slope, 95))),
            "roughness_mean": float(self.roughness.mean()),
            "traversable_fraction": float(self.traversable_mask().mean()),
            "surface_mix": {SURFACES[k].name: float((self.surface_idx == k).mean())
                            for k in range(len(SURFACES))},
        }
