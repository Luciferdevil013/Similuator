"""World: terrain + obstacles + mission definition + ray-casting.

This is the single source of geometric truth. The LiDAR and depth camera get
their measurements by casting real rays against this geometry, so an obstacle
that the planner must avoid is literally the same object the sensor sees --
there is no second, hand-authored "what the sensor reports" description that
could drift out of agreement with the physics.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from .geodesy import LocalFrame
from .terrain import Terrain


@dataclass
class Obstacle:
    """A convex primitive resting on (or embedded in) the terrain.

    `z_base` is absolute ENU altitude; it is resolved from the terrain height
    at spawn time so obstacles sit on the ground rather than floating.
    """
    oid: str
    kind: str                      # "cylinder" | "box"
    x: float
    y: float
    height: float
    radius: float = 1.0            # cylinder
    half_x: float = 1.0            # box
    half_y: float = 1.0            # box
    yaw: float = 0.0               # box orientation [rad]
    z_base: float = 0.0
    reflectivity: float = 0.45
    label: str = "obstacle"
    spawn_time: float = 0.0        # becomes solid at this sim time
    known_a_priori: bool = True    # False => planner must discover it by LiDAR

    def active(self, t: float) -> bool:
        return t + 1e-9 >= self.spawn_time

    @property
    def footprint_radius(self) -> float:
        """Circumscribed radius, used for costmap inflation and broad-phase."""
        return self.radius if self.kind == "cylinder" else float(np.hypot(self.half_x, self.half_y))


@dataclass
class MagneticModel:
    """Local geomagnetic field, IGRF-like but specified as constants.

    Declination/inclination/intensity for the chosen origin. Real deployments
    would query IGRF-13 or WMM; fixing them keeps runs reproducible and the
    values documented, which is what the sensor-model requirement asks for.
    """
    declination_deg: float = 2.9    # positive East of true North (Zurich, 2026)
    inclination_deg: float = 63.1   # positive downward
    intensity_nt: float = 48_500.0

    def field_enu(self) -> np.ndarray:
        """Field vector in local ENU, in Tesla."""
        dec, inc = np.radians(self.declination_deg), np.radians(self.inclination_deg)
        f = self.intensity_nt * 1e-9
        h = f * np.cos(inc)                       # horizontal component
        # North/East split by declination; Up is negative because inclination
        # is measured positive *downward* in geomagnetic convention.
        return np.array([h * np.sin(dec), h * np.cos(dec), -f * np.sin(inc)])


@dataclass
class Mission:
    start: np.ndarray = field(default_factory=lambda: np.array([10.0, 10.0]))
    goal: np.ndarray = field(default_factory=lambda: np.array([180.0, 180.0]))
    goal_tolerance: float = 2.5
    start_yaw: float = 0.0
    timeout_s: float = 600.0


class World:
    def __init__(self, terrain: Terrain, frame: LocalFrame, mission: Mission,
                 magnetic: MagneticModel | None = None):
        self.terrain = terrain
        self.frame = frame
        self.mission = mission
        self.magnetic = magnetic or MagneticModel()
        self.obstacles: list[Obstacle] = []
        self._cache_t: float | None = None
        self._cache: tuple | None = None

    # -- construction ------------------------------------------------------
    def add_obstacle(self, obs: Obstacle, *, snap_to_ground: bool = True) -> Obstacle:
        if snap_to_ground:
            obs.z_base = float(self.terrain.height_at(obs.x, obs.y))
        self.obstacles.append(obs)
        self._cache_t = None
        return obs

    def scatter_obstacles(self, rng: np.random.Generator, n: int, *,
                          margin: float = 8.0, min_sep: float = 4.0,
                          keep_clear: float = 6.0) -> None:
        """Place `n` rocks/trees/walls on traversable ground.

        Rejection sampling keeps obstacles off impassable slopes, apart from
        each other, and clear of the start and goal so the mission is always
        feasible at t=0 -- otherwise a trial would fail for a reason unrelated
        to the fault being tested.
        """
        T = self.terrain
        placed: list[tuple[float, float, float]] = []
        tries = 0
        while len(placed) < n and tries < n * 400:
            tries += 1
            x = rng.uniform(T.x0 + margin, T.x0 + T.size_x - margin)
            y = rng.uniform(T.y0 + margin, T.y0 + T.size_y - margin)
            if T.slope_at(x, y) > T.max_slope * 0.8:
                continue
            if (np.hypot(x - self.mission.start[0], y - self.mission.start[1]) < keep_clear or
                    np.hypot(x - self.mission.goal[0], y - self.mission.goal[1]) < keep_clear):
                continue
            kind = rng.choice(["cylinder", "cylinder", "box"])
            if kind == "cylinder":
                r = float(rng.uniform(0.35, 1.6))
                h = float(rng.uniform(1.2, 5.0))
                label = "tree" if h > 3.0 else "rock"
                obs = Obstacle(f"obs_{len(placed):03d}", "cylinder", x, y, h, radius=r,
                               label=label, reflectivity=float(rng.uniform(0.25, 0.6)))
                rad = r
            else:
                hx, hy = float(rng.uniform(0.5, 3.2)), float(rng.uniform(0.4, 1.0))
                h = float(rng.uniform(0.8, 2.2))
                obs = Obstacle(f"obs_{len(placed):03d}", "box", x, y, h, half_x=hx, half_y=hy,
                               yaw=float(rng.uniform(0, np.pi)), label="wall",
                               reflectivity=float(rng.uniform(0.3, 0.7)))
                rad = float(np.hypot(hx, hy))
            if any(np.hypot(x - px, y - py) < rad + pr + min_sep for px, py, pr in placed):
                continue
            placed.append((x, y, rad))
            self.add_obstacle(obs)

    # -- broad-phase cache -------------------------------------------------
    def _active_arrays(self, t: float):
        """Pack active obstacles into flat arrays for vectorised intersection.

        Rebuilt only when the active set changes (an obstacle spawning), so a
        static world costs one build for the whole run.
        """
        if self._cache_t is not None and self._cache is not None:
            # Cache stays valid until the next spawn time is crossed.
            nxt = self._cache[-1]
            if self._cache_t <= t and (nxt is None or t < nxt):
                return self._cache[:-1]

        act = [o for o in self.obstacles if o.active(t)]
        future = [o.spawn_time for o in self.obstacles if o.spawn_time > t]
        nxt = min(future) if future else None

        cyl = [o for o in act if o.kind == "cylinder"]
        box = [o for o in act if o.kind == "box"]
        cyl_p = np.array([[o.x, o.y, o.z_base, o.height, o.radius, o.reflectivity] for o in cyl],
                         dtype=float).reshape(-1, 6)
        box_p = np.array([[o.x, o.y, o.z_base, o.height, o.half_x, o.half_y, o.yaw, o.reflectivity]
                          for o in box], dtype=float).reshape(-1, 8)
        packed = (cyl_p, box_p, cyl, box)
        self._cache = packed + (nxt,)
        self._cache_t = t
        return packed

    # -- ray casting -------------------------------------------------------
    def raycast(self, origins: np.ndarray, dirs: np.ndarray, max_range: float,
                t: float, *, terrain_steps: int = 256):
        """Cast N rays, returning nearest-hit range, reflectivity and class.

        Returns
        -------
        rng_m : (N,) float, +inf where nothing was hit inside `max_range`
        refl  : (N,) float, surface reflectivity of the hit (for intensities)
        kind  : (N,) int8, 0 = nothing, 1 = terrain, 2 = cylinder, 3 = box

        Obstacles are solved analytically; terrain is found by marching the ray
        and bracketing the first sign change of (ray height - ground height),
        then refining that bracket linearly. Marching is the right method here
        because the heightmap is not a convex primitive, and it is fully
        vectorised across rays so a 720-beam scan is a handful of array ops.
        """
        o = np.atleast_2d(np.asarray(origins, dtype=float))
        d = np.atleast_2d(np.asarray(dirs, dtype=float))
        d = d / np.maximum(np.linalg.norm(d, axis=1, keepdims=True), 1e-12)
        n = o.shape[0]
        best = np.full(n, np.inf)
        refl = np.zeros(n)
        kind = np.zeros(n, dtype=np.int8)

        cyl_p, box_p, _, _ = self._active_arrays(t)

        # --- cylinders: ray vs infinite cylinder, then clamp to the z extent
        if cyl_p.size:
            cx, cy, zb, hh, rr, cref = (cyl_p[:, k] for k in range(6))
            ox = o[:, 0:1] - cx[None, :]
            oy = o[:, 1:2] - cy[None, :]
            dx, dy, dz = d[:, 0:1], d[:, 1:2], d[:, 2:3]
            a = dx ** 2 + dy ** 2
            b = 2.0 * (ox * dx + oy * dy)
            c = ox ** 2 + oy ** 2 - rr[None, :] ** 2
            disc = b ** 2 - 4.0 * a * c
            ok = (disc > 0) & (a > 1e-12)
            sq = np.sqrt(np.where(ok, disc, 0.0))
            with np.errstate(divide="ignore", invalid="ignore"):
                t1 = (-b - sq) / (2.0 * a)
                t2 = (-b + sq) / (2.0 * a)
            z_top = zb[None, :] + hh[None, :]

            def side_hit(tt):
                z = o[:, 2:3] + tt * dz
                good = ok & (tt > 1e-6) & (z >= zb[None, :]) & (z <= z_top)
                return np.where(good, tt, np.inf)

            cand = np.minimum(side_hit(t1), side_hit(t2))

            # Top cap: needed for a downward-looking depth camera, which would
            # otherwise see straight through the top of a rock.
            flat = np.abs(dz) < 1e-9
            with np.errstate(divide="ignore", invalid="ignore"):
                t_cap = np.where(flat, -1.0, (z_top - o[:, 2:3]) / np.where(flat, 1.0, dz))
            hx = o[:, 0:1] + t_cap * dx - cx[None, :]
            hy = o[:, 1:2] + t_cap * dy - cy[None, :]
            cap_ok = (~flat) & (t_cap > 1e-6) & (hx ** 2 + hy ** 2 <= rr[None, :] ** 2)
            cand = np.minimum(cand, np.where(cap_ok, t_cap, np.inf))

            j = np.argmin(cand, axis=1)
            tmin = cand[np.arange(n), j]
            hit = tmin < np.minimum(best, max_range)
            best = np.where(hit, tmin, best)
            refl = np.where(hit, cref[j], refl)
            kind = np.where(hit, np.int8(2), kind)

        # --- boxes: slab test in the box's yawed local frame
        if box_p.size:
            bx, by, zb, hh, hxs, hys, yaw, bref = (box_p[:, k] for k in range(8))
            cz, sz = np.cos(-yaw)[None, :], np.sin(-yaw)[None, :]
            px = o[:, 0:1] - bx[None, :]
            py = o[:, 1:2] - by[None, :]
            lox = px * cz - py * sz
            loy = px * sz + py * cz
            ldx = d[:, 0:1] * cz - d[:, 1:2] * sz
            ldy = d[:, 0:1] * sz + d[:, 1:2] * cz
            loz = o[:, 2:3] - zb[None, :]
            ldz = np.broadcast_to(d[:, 2:3], lox.shape)

            lo = np.full(lox.shape, -np.inf)
            hi = np.full(lox.shape, np.inf)
            for og, dg, half_lo, half_hi in (
                (lox, ldx, -hxs[None, :], hxs[None, :]),
                (loy, ldy, -hys[None, :], hys[None, :]),
                (loz, ldz, np.zeros_like(hh)[None, :], hh[None, :]),
            ):
                par = np.abs(dg) < 1e-12
                with np.errstate(divide="ignore", invalid="ignore"):
                    ta = (half_lo - og) / dg
                    tb = (half_hi - og) / dg
                t_near, t_far = np.minimum(ta, tb), np.maximum(ta, tb)
                # A ray parallel to a slab either misses it entirely or is
                # unconstrained by it.
                inside = (og >= half_lo) & (og <= half_hi)
                t_near = np.where(par, np.where(inside, -np.inf, np.inf), t_near)
                t_far = np.where(par, np.where(inside, np.inf, -np.inf), t_far)
                lo = np.maximum(lo, t_near)
                hi = np.minimum(hi, t_far)

            tb_hit = np.where((hi >= lo) & (hi > 1e-6), np.where(lo > 1e-6, lo, hi), np.inf)
            j = np.argmin(tb_hit, axis=1)
            tmin = tb_hit[np.arange(n), j]
            hit = tmin < np.minimum(best, max_range)
            best = np.where(hit, tmin, best)
            refl = np.where(hit, bref[j], refl)
            kind = np.where(hit, np.int8(3), kind)

        # --- terrain: coarse march, then refine the bracket
        t_terr = self._terrain_hit(o, d, max_range, terrain_steps)
        hit = t_terr < np.minimum(best, max_range)
        best = np.where(hit, t_terr, best)
        safe_t = np.where(np.isfinite(t_terr), t_terr, 0.0)
        hx = o[:, 0] + d[:, 0] * safe_t
        hy = o[:, 1] + d[:, 1] * safe_t
        refl = np.where(hit, self.terrain.reflectivity_at(hx, hy), refl)
        kind = np.where(hit, np.int8(1), kind)

        best = np.where(best <= max_range, best, np.inf)
        return best, refl, kind

    def _terrain_hit(self, o: np.ndarray, d: np.ndarray, max_range: float,
                     budget: int = 256) -> np.ndarray:
        """First ray/heightmap intersection, by coarse march then refinement.

        A uniform march needs `max_range / resolution` samples to avoid
        stepping over a thin ridge, which is the dominant cost of a depth
        image. Instead we march coarsely to find the first interval where the
        ray passes from above the ground to below it, then subdivide that one
        interval twice. For the same work this reaches an effective resolution
        of `coarse * refine^2` steps -- finer than the uniform march it
        replaces, at roughly a third of the height lookups.

        The coarse stride is still chosen fine enough that a terrain feature
        cannot hide between two samples: it is capped at ~2 grid cells.
        """
        tr = self.terrain
        n = o.shape[0]

        # Rays that stay above the global maximum height for their whole
        # length cannot touch the ground; skip them entirely.
        zmax = tr.height.max()
        z_end = o[:, 2] + d[:, 2] * max_range
        maybe = ~((o[:, 2] > zmax) & (z_end > zmax))
        out = np.full(n, np.inf)
        if not maybe.any():
            return out

        oi, di = o[maybe], d[maybe]
        m = oi.shape[0]

        # One grid cell per coarse step: a stride of two cells can step clean
        # over a narrow ridge crest and report the next crossing beyond it,
        # which showed up as metre-scale range errors on a small fraction of
        # rays. One cell is the coarsest stride the heightmap cannot hide a
        # feature behind.
        coarse = int(np.clip(max_range / tr.res, 16, budget))
        s = np.linspace(0.0, max_range, coarse, dtype=np.float32)[None, :]
        px = oi[:, 0:1] + di[:, 0:1] * s
        py = oi[:, 1:2] + di[:, 1:2] * s
        pz = oi[:, 2:3] + di[:, 2:3] * s
        above = pz - tr.height_at(px, py)
        # Samples outside the map count as open air, so a ray leaving the
        # world does not clip on the clamped edge height.
        above = np.where(tr.in_bounds(px, py), above, np.inf)

        crossed = (above[:, :-1] > 0) & (above[:, 1:] <= 0)
        got = crossed.any(axis=1)
        if not got.any():
            return out
        first = np.argmax(crossed, axis=1)

        idx = np.flatnonzero(got)
        oi, di, first = oi[idx], di[idx], first[idx]
        sv = s[0]
        lo = sv[first].astype(float)
        hi = sv[first + 1].astype(float)

        # Two rounds of subdivision inside the bracket.
        refine = 6
        frac = np.linspace(0.0, 1.0, refine)[None, :]
        for _ in range(2):
            ss = lo[:, None] + (hi - lo)[:, None] * frac
            qx = oi[:, 0:1] + di[:, 0:1] * ss
            qy = oi[:, 1:2] + di[:, 1:2] * ss
            qz = oi[:, 2:3] + di[:, 2:3] * ss
            ab = qz - tr.height_at(qx, qy)
            ab = np.where(tr.in_bounds(qx, qy), ab, np.inf)
            cr = (ab[:, :-1] > 0) & (ab[:, 1:] <= 0)
            k = np.argmax(cr, axis=1)
            has = cr.any(axis=1)
            rows = np.arange(ss.shape[0])
            new_lo = ss[rows, k]
            new_hi = ss[rows, k + 1]
            # Keep the previous bracket where this round found no crossing
            # (possible when the surface is tangent to the ray).
            lo = np.where(has, new_lo, lo)
            hi = np.where(has, new_hi, hi)

        # Final linear root inside the narrowed bracket.
        a0 = oi[:, 2] + di[:, 2] * lo - tr.height_at(oi[:, 0] + di[:, 0] * lo,
                                                     oi[:, 1] + di[:, 1] * lo)
        a1 = oi[:, 2] + di[:, 2] * hi - tr.height_at(oi[:, 0] + di[:, 0] * hi,
                                                     oi[:, 1] + di[:, 1] * hi)
        den = np.where(np.abs(a0 - a1) < 1e-12, 1e-12, a0 - a1)
        t_hit = lo + np.clip(a0 / den, 0.0, 1.0) * (hi - lo)

        res = np.full(m, np.inf)
        res[idx] = t_hit
        out[maybe] = res
        return out

    # -- queries -----------------------------------------------------------
    def obstacle_distance_2d(self, x: float, y: float, t: float) -> float:
        """Signed-ish 2D clearance to the nearest active obstacle surface."""
        d = np.inf
        for o in self.obstacles:
            if not o.active(t):
                continue
            if o.kind == "cylinder":
                d = min(d, float(np.hypot(x - o.x, y - o.y) - o.radius))
            else:
                c, s = np.cos(-o.yaw), np.sin(-o.yaw)
                lx = (x - o.x) * c - (y - o.y) * s
                ly = (x - o.x) * s + (y - o.y) * c
                dx = max(abs(lx) - o.half_x, 0.0)
                dy = max(abs(ly) - o.half_y, 0.0)
                d = min(d, float(np.hypot(dx, dy)))
        return d

    def summary(self) -> dict:
        return {
            "terrain": self.terrain.summary(),
            "origin_lla": [self.frame.lat0, self.frame.lon0, self.frame.alt0],
            "gravity": self.frame.gravity,
            "magnetic_field_enu_nT": (self.magnetic.field_enu() * 1e9).tolist(),
            "mission": {
                "start": self.mission.start.tolist(),
                "goal": self.mission.goal.tolist(),
                "goal_tolerance": self.mission.goal_tolerance,
            },
            "n_obstacles": len(self.obstacles),
        }
