"""LiDAR: a 16-ring spinning scanner plus the 2D scan the planner consumes.

Measurements come from casting real rays against the world geometry, so an
obstacle the planner must avoid is literally the object the beam strikes.

Modelled effects, all of which change what the planner sees:

  * range noise, 1-sigma ~3 cm, as specified for a VLP-16 class unit;
  * *incidence-dependent dropout*. A beam striking ground at a grazing angle
    scatters too little energy back to threshold, so distant flat terrain
    returns nothing. This is why a real scanner's ground returns thin out with
    range rather than forming a clean disc;
  * reflectivity-dependent dropout -- dark, dry surfaces drop out more;
  * intensity following the LiDAR equation, I ~ rho cos(theta) / r^2;
  * per-beam azimuth offset from the spin, so a 10 Hz scan is not an
    instantaneous snapshot of a moving vehicle.
"""
from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..msgs import LaserScan, PointCloud2
from ..rotations import quat_to_matrix
from .base import Sensor, VehicleTruth


@dataclass
class LidarParams:
    # --- 2D planning scan --------------------------------------------------
    scan_beams: int = 720                # 0.5 deg azimuth resolution
    scan_fov: float = 2.0 * np.pi        # full revolution
    # --- 3D ring cloud -----------------------------------------------------
    rings: int = 16
    ring_min_deg: float = -15.0
    ring_max_deg: float = 15.0
    cloud_azimuth: int = 240             # 1.5 deg, decimated from the 2D scan
    publish_cloud: bool = True
    # --- ranging -----------------------------------------------------------
    range_min: float = 0.35
    range_max: float = 40.0
    range_sigma: float = 0.03            # m, 1-sigma
    range_sigma_rel: float = 0.001       # extra proportional term
    # --- detection ---------------------------------------------------------
    base_dropout: float = 0.004          # per-beam random loss
    grazing_cutoff_deg: float = 6.0      # below this incidence, returns fail
    min_return_energy: float = 0.012     # threshold on rho*cos(theta)/r^2 (scaled)
    mount_height: float = 0.62           # m above body origin
    mount_pitch_deg: float = 0.0


class LidarSensor(Sensor):
    frame_id = "lidar_link"

    def __init__(self, sensor_id: str, rng: np.random.Generator, world, *,
                 rate_hz: float = 10.0, params: LidarParams | None = None,
                 latency: float = 0.045, latency_jitter: float = 0.005):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or LidarParams()
        self.world = world
        n = self.p.scan_beams
        self.angles = np.linspace(-self.p.scan_fov / 2.0, self.p.scan_fov / 2.0, n, endpoint=False)
        self.ring_elev = np.radians(np.linspace(self.p.ring_min_deg, self.p.ring_max_deg,
                                                self.p.rings))
        self._mount = np.array([0.0, 0.0, self.p.mount_height])
        self.last_cloud: PointCloud2 | None = None

    def _detect(self, rng_m, refl, kind, incidence_cos):
        """Decide which returns actually make it back, per the LiDAR equation.

        Energy ~ rho * cos(incidence) / r^2. Beams below the detector
        threshold return nothing, which is the physical reason grazing ground
        returns disappear at range.
        """
        finite = np.isfinite(rng_m)
        energy = np.where(finite, refl * np.clip(incidence_cos, 0.0, 1.0) /
                          np.maximum(rng_m, 0.5) ** 2, 0.0)
        # Normalise so the threshold is expressed at a 1 m reference distance.
        keep = finite & (energy * 100.0 > self.p.min_return_energy)
        grazing = np.degrees(np.arcsin(np.clip(incidence_cos, 0.0, 1.0)))
        keep &= ~((kind == 1) & (grazing < self.p.grazing_cutoff_deg))
        keep &= self.rng.random(rng_m.shape) > self.p.base_dropout
        keep &= rng_m >= self.p.range_min
        return keep

    def _incidence_cos(self, hit_xyz, dirs, kind):
        """|cos| of the angle between the beam and the surface normal."""
        c = np.full(dirs.shape[0], 1.0)
        terr = kind == 1
        if terr.any():
            n = self.world.terrain.normal_at(hit_xyz[terr, 0], hit_xyz[terr, 1])
            c[terr] = np.abs(np.einsum("ij,ij->i", n, dirs[terr]))
        # Obstacles are vertical walls/cylinders: a horizontal beam meets them
        # near-normal, so the incidence term is close to 1 and we keep it there
        # rather than inventing a per-face normal for a convex primitive.
        return c

    def _sample(self, truth: VehicleTruth, stamp: float):
        R = quat_to_matrix(truth.q)
        origin = np.asarray(truth.p, dtype=float) + R @ self._mount
        pitch = np.radians(self.p.mount_pitch_deg)

        # --- 2D planning scan (the ring at the sensor's own elevation) -----
        n = self.p.scan_beams
        ca, sa = np.cos(self.angles), np.sin(self.angles)
        d_body = np.stack([ca * np.cos(pitch), sa * np.cos(pitch),
                           np.full(n, -np.sin(pitch))], axis=1)
        dirs = d_body @ R.T
        o = np.tile(origin, (n, 1))
        rng_m, refl, kind = self.world.raycast(o, dirs, self.p.range_max, stamp)

        hit_xyz = o + dirs * np.where(np.isfinite(rng_m), rng_m, 0.0)[:, None]
        inc = self._incidence_cos(hit_xyz, dirs, kind)
        keep = self._detect(rng_m, refl, kind, inc)

        noisy = rng_m + self.rng.normal(0.0, 1.0, n) * (
            self.p.range_sigma + self.p.range_sigma_rel * np.where(np.isfinite(rng_m), rng_m, 0.0)
        ) * self.fault.noise_scale
        if self.fault.bias is not None:
            noisy = noisy + float(np.asarray(self.fault.bias).ravel()[0])
        # LaserScan spec: out-of-range readings are +inf, not zero or max.
        ranges = np.where(keep, np.clip(noisy, self.p.range_min, self.p.range_max), np.inf)
        intens = np.where(keep, np.clip(refl, 0, 1) * np.clip(inc, 0, 1) * 255.0 /
                          np.maximum(1.0, (np.where(np.isfinite(rng_m), rng_m, 1.0) / 10.0) ** 2), 0.0)

        scan = LaserScan(header=self._header(stamp))
        scan.angle_min = float(self.angles[0])
        scan.angle_max = float(self.angles[-1])
        scan.angle_increment = float(self.angles[1] - self.angles[0])
        scan.scan_time = self.period
        scan.time_increment = self.period / n
        scan.range_min = self.p.range_min
        scan.range_max = self.p.range_max
        scan.ranges = ranges
        scan.intensities = intens

        cloud = None
        if self.p.publish_cloud:
            cloud = self._sample_cloud(origin, R, stamp)
            self.last_cloud = cloud
        return (scan, cloud)

    def _sample_cloud(self, origin, R, stamp) -> PointCloud2:
        """16-ring cloud at decimated azimuth, in the sensor frame."""
        naz = self.p.cloud_azimuth
        az = np.linspace(-np.pi, np.pi, naz, endpoint=False)
        el = self.ring_elev
        AZ, EL = np.meshgrid(az, el, indexing="ij")
        AZ, EL = AZ.ravel(), EL.ravel()
        d_body = np.stack([np.cos(EL) * np.cos(AZ), np.cos(EL) * np.sin(AZ), np.sin(EL)], axis=1)
        dirs = d_body @ R.T
        o = np.tile(origin, (dirs.shape[0], 1))
        rng_m, refl, kind = self.world.raycast(o, dirs, self.p.range_max, stamp,
                                               terrain_steps=96)
        hit = o + dirs * np.where(np.isfinite(rng_m), rng_m, 0.0)[:, None]
        inc = self._incidence_cos(hit, dirs, kind)
        keep = self._detect(rng_m, refl, kind, inc)
        noisy = rng_m + self.rng.normal(0.0, self.p.range_sigma, rng_m.shape)
        sel = keep & np.isfinite(noisy)
        # Points are expressed in the sensor frame, as a driver publishes them.
        pts = d_body[sel] * noisy[sel][:, None]
        cloud = PointCloud2(header=self._header(stamp))
        cloud.points = pts
        cloud.intensities = np.clip(refl[sel], 0, 1) * 255.0
        return cloud

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "scan_beams": self.p.scan_beams,
            "angular_resolution_deg": float(np.degrees(self.angles[1] - self.angles[0])),
            "rings": self.p.rings,
            "ring_fov_deg": [self.p.ring_min_deg, self.p.ring_max_deg],
            "cloud_rays_per_scan": self.p.rings * self.p.cloud_azimuth,
            "range_m": [self.p.range_min, self.p.range_max],
            "range_sigma_m": self.p.range_sigma,
            "mount_height_m": self.p.mount_height,
        })
        return d
