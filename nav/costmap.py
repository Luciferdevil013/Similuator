"""Layered costmap: static terrain cost, discovered obstacles, inflation.

Layering mirrors Nav2's structure, because the point is that this planner is
replaceable by Nav2 later without changing the rest of the system.

  static layer    -- slope and roughness from the terrain. Known in advance,
                     as a prior survey or DEM would be.
  obstacle layer  -- built ONLY from LiDAR returns. Obstacles marked
                     `known_a_priori=False` in the world do not appear here
                     until a beam actually hits them, which is what makes the
                     "obstacle appears" scenario a genuine detection problem.
  inflation layer -- exponential decay out to the inflation radius, so the
                     planner keeps clearance instead of grazing obstacles.

Cost convention follows Nav2: 0 = free, 1..252 = graded cost,
253 = inscribed (robot centre here collides), 254 = lethal.
"""
from __future__ import annotations

import numpy as np
from scipy import ndimage

FREE = 0
INSCRIBED = 253
LETHAL = 254


class Costmap:
    def __init__(self, terrain, resolution: float = 0.75, *,
                 robot_radius: float = 0.45, inflation_radius: float = 1.5,
                 cost_scaling: float = 2.2,
                 slope_weight: float = 110.0, roughness_weight: float = 160.0,
                 max_slope_deg: float = 25.0, max_roughness: float = 0.42):
        self.terrain = terrain
        self.res = float(resolution)
        self.robot_radius = robot_radius
        self.inflation_radius = inflation_radius
        # Extra footprint allowance for localisation uncertainty, set by the
        # navigation layer from the estimator's reported sigma.
        self.localisation_margin = 0.0
        # How much of that allowance may hard-block cells.
        self.max_hard_margin = 0.35
        self.cost_scaling = cost_scaling
        self.slope_weight = slope_weight
        self.roughness_weight = roughness_weight
        self.max_slope = np.radians(max_slope_deg)
        self.max_roughness = max_roughness

        self.x0, self.y0 = terrain.x0, terrain.y0
        self.nx = int(np.floor(terrain.size_x / self.res)) + 1
        self.ny = int(np.floor(terrain.size_y / self.res)) + 1

        # Cell-centre coordinates, sampled once.
        jj, ii = np.meshgrid(np.arange(self.nx), np.arange(self.ny))
        self.cell_x = self.x0 + jj * self.res
        self.cell_y = self.y0 + ii * self.res
        self.slope = terrain.slope_at(self.cell_x, self.cell_y)
        self.roughness = terrain.roughness_at(self.cell_x, self.cell_y)
        self.height = terrain.height_at(self.cell_x, self.cell_y)

        self._static = self._build_static()
        self.obstacle = np.zeros((self.ny, self.nx), dtype=np.uint8)
        self._obstacle_hits = np.zeros((self.ny, self.nx), dtype=np.int32)
        self.cost = self._static.copy()
        self.dirty = True

    # -- layers ------------------------------------------------------------
    def _build_static(self) -> np.ndarray:
        """Terrain-only cost: graded by slope and roughness, lethal past limits."""
        c = (self.slope_weight * np.tan(np.clip(self.slope, 0, self.max_slope)) +
             self.roughness_weight * self.roughness)
        c = np.clip(c, 0, INSCRIBED - 1)
        impassable = (self.slope > self.max_slope) | (self.roughness > self.max_roughness)
        c[impassable] = LETHAL
        return c.astype(np.uint8)

    def integrate_scan(self, origin_xy, yaw: float, ranges: np.ndarray,
                       angles: np.ndarray, range_max: float, *,
                       hit_threshold: int = 2) -> int:
        """Mark cells where LiDAR beams terminated; clear cells they passed through.

        Requiring `hit_threshold` independent returns before a cell is marked
        rejects single-beam noise and spurious returns, which is what stops a
        monitor from replanning around a phantom. Ray-clearing is what lets a
        moved or removed obstacle be forgotten again.
        """
        ox, oy = float(origin_xy[0]), float(origin_xy[1])
        valid = np.isfinite(ranges) & (ranges < range_max * 0.999)
        if not valid.any():
            return 0
        a = angles[valid] + yaw
        r = ranges[valid]

        hx = ox + r * np.cos(a)
        hy = oy + r * np.sin(a)
        hj, hi = self._to_cell(hx, hy)
        inb = (hi >= 0) & (hi < self.ny) & (hj >= 0) & (hj < self.nx)
        hi, hj = hi[inb], hj[inb]

        # Clear along each beam up to just short of its endpoint.
        steps = np.arange(0.0, 1.0, self.res / max(range_max, 1e-6))
        if steps.size > 1:
            rr = r[inb][:, None] * steps[None, :]
            keep = rr < (r[inb][:, None] - self.res)
            cx = ox + rr * np.cos(a[inb])[:, None]
            cy = oy + rr * np.sin(a[inb])[:, None]
            cj, ci = self._to_cell(cx, cy)
            ok = keep & (ci >= 0) & (ci < self.ny) & (cj >= 0) & (cj < self.nx)
            self._obstacle_hits[ci[ok], cj[ok]] = np.maximum(
                self._obstacle_hits[ci[ok], cj[ok]] - 1, 0)

        np.add.at(self._obstacle_hits, (hi, hj), 2)
        np.clip(self._obstacle_hits, 0, 12, out=self._obstacle_hits)
        new = (self._obstacle_hits >= hit_threshold).astype(np.uint8) * LETHAL
        changed = int(np.count_nonzero(new != self.obstacle))
        if changed:
            self.obstacle = new
            self.dirty = True
        return changed

    def seed_known_obstacles(self, obstacles, t: float) -> None:
        """Pre-mark obstacles declared as known in advance (survey data)."""
        for o in obstacles:
            if not o.known_a_priori or not o.active(t):
                continue
            rad = o.footprint_radius
            d = np.hypot(self.cell_x - o.x, self.cell_y - o.y)
            self._obstacle_hits[d <= rad] = 12
        self.obstacle = (self._obstacle_hits >= 2).astype(np.uint8) * LETHAL
        self.dirty = True

    def rebuild(self) -> None:
        """Compose the layers and apply inflation."""
        base = np.maximum(self._static, self.obstacle)
        lethal = base >= LETHAL
        if lethal.any():
            # Euclidean distance to the nearest lethal cell, in metres.
            dist = ndimage.distance_transform_edt(~lethal, sampling=self.res)
        else:
            dist = np.full(base.shape, np.inf)

        inflated = base.astype(np.float32)
        # Inside the robot's footprint radius the centre cannot be placed.
        # The threshold is at least one cell: when the grid is coarser than the
        # robot radius (0.75 m cells vs a 0.45 m radius) no cell would ever
        # fall inside it, leaving the inscribed ring empty and the planner with
        # no hard buffer at all -- only graded cost. One cell guarantees the
        # ring exists at any resolution.
        # The planner works in the ESTIMATED frame; a collision happens in the
        # true one. A path that clears an obstacle by less than the
        # localisation error is therefore not actually clear, so the
        # footprint has to carry the position uncertainty as well as the
        # vehicle's own radius. Growing it as the estimate degrades is also
        # the behaviour the mission wants: give obstacles more room precisely
        # when you are least sure where you are.
        # Only a modest part of the localisation allowance may HARD-block
        # cells. Blocking a radius as large as the position sigma seals narrow
        # corridors and the planner reports "unreachable" with the vehicle
        # boxed in by its own uncertainty. The rest of the allowance goes into
        # the inflation band below, where it raises cost instead: the planner
        # then steers wide when it can and still squeezes through when that is
        # the only way to the goal -- lethal means physically colliding,
        # inflation means preference, which is the whole point of separating
        # the two layers.
        hard = min(self.localisation_margin, self.max_hard_margin)
        inscribed_r = max(self.robot_radius + hard, self.res * 1.01)
        inflated[dist <= inscribed_r] = INSCRIBED
        infl_r = self.inflation_radius + self.localisation_margin
        band = (dist > inscribed_r) & (dist <= infl_r)
        inflated[band] = np.maximum(
            inflated[band],
            (INSCRIBED - 1) * np.exp(-self.cost_scaling *
                                     (dist[band] - inscribed_r)))
        inflated[lethal] = LETHAL
        self.cost = np.clip(inflated, 0, LETHAL).astype(np.uint8)
        self.dirty = False

    def ensure_current(self) -> None:
        if self.dirty:
            self.rebuild()

    # -- coordinates -------------------------------------------------------
    def _to_cell(self, x, y):
        j = np.round((np.asarray(x) - self.x0) / self.res).astype(int)
        i = np.round((np.asarray(y) - self.y0) / self.res).astype(int)
        return j, i

    def to_cell(self, x: float, y: float) -> tuple[int, int]:
        j, i = self._to_cell(x, y)
        return int(i), int(j)

    def to_world(self, i: int, j: int) -> tuple[float, float]:
        return self.x0 + j * self.res, self.y0 + i * self.res

    def in_grid(self, i: int, j: int) -> bool:
        return 0 <= i < self.ny and 0 <= j < self.nx

    def cost_at(self, x: float, y: float) -> int:
        i, j = self.to_cell(x, y)
        if not self.in_grid(i, j):
            return LETHAL
        return int(self.cost[i, j])

    def is_blocked(self, x: float, y: float) -> bool:
        return self.cost_at(x, y) >= INSCRIBED

    def nearest_free(self, x: float, y: float, max_radius: float = 6.0):
        """Closest placeable cell to (x, y) -- used to repair a blocked start."""
        self.ensure_current()
        i0, j0 = self.to_cell(x, y)
        if self.in_grid(i0, j0) and self.cost[i0, j0] < INSCRIBED:
            return x, y
        rad_cells = int(np.ceil(max_radius / self.res))
        for r in range(1, rad_cells + 1):
            best, bestd = None, np.inf
            for di in range(-r, r + 1):
                for dj in range(-r, r + 1):
                    if max(abs(di), abs(dj)) != r:
                        continue
                    i, j = i0 + di, j0 + dj
                    if self.in_grid(i, j) and self.cost[i, j] < INSCRIBED:
                        d = di * di + dj * dj
                        if d < bestd:
                            best, bestd = (i, j), d
            if best is not None:
                return self.to_world(*best)
        return None

    def summary(self) -> dict:
        self.ensure_current()
        return {
            "resolution": self.res, "shape": [int(self.ny), int(self.nx)],
            "lethal_fraction": float((self.cost >= LETHAL).mean()),
            "inscribed_fraction": float((self.cost >= INSCRIBED).mean()),
            "mean_cost": float(self.cost.mean()),
            "obstacle_cells": int((self.obstacle >= LETHAL).sum()),
        }
