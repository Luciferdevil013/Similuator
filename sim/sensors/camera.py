"""RGB and depth cameras from a pinhole model, rendered by ray casting.

Both images come from the same ray cast through the same intrinsics, so the
depth map and the colour image are registered by construction.

Depth noise follows the stereo/structured-light error law, sigma ~ k z^2: the
disparity-to-depth relation means a fixed disparity uncertainty becomes a
depth uncertainty growing with the square of range. A constant depth sigma
would be the wrong model and would make far obstacles look far more trustworthy
than they are.
"""
from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..msgs import CameraInfo, Image
from ..rotations import quat_to_matrix
from .base import Sensor, VehicleTruth


@dataclass
class CameraParams:
    width: int = 96
    height: int = 72
    hfov_deg: float = 69.0               # RealSense D435 colour FOV
    z_min: float = 0.28
    z_max: float = 25.0
    depth_sigma_rel: float = 0.0022      # coefficient k in sigma = k z^2
    depth_sigma_floor: float = 0.004     # m
    invalid_prob: float = 0.010          # speckle/occlusion holes
    mount_xyz: tuple[float, float, float] = (0.22, 0.0, 0.55)
    mount_pitch_deg: float = -8.0        # tilted down to see the ground ahead
    sun_azimuth_deg: float = 135.0
    sun_elevation_deg: float = 42.0
    ambient: float = 0.28                # ambient fraction of the shading model
    exposure_noise: float = 0.012        # sensor read noise, normalised units


class CameraSensor(Sensor):
    """Publishes (rgb Image, depth Image, CameraInfo) as one registered set."""

    frame_id = "camera_link"

    def __init__(self, sensor_id: str, rng: np.random.Generator, world, *,
                 rate_hz: float = 10.0, params: CameraParams | None = None,
                 latency: float = 0.055, latency_jitter: float = 0.008,
                 publish_rgb: bool = True):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or CameraParams()
        self.world = world
        self.publish_rgb = publish_rgb

        w, h = self.p.width, self.p.height
        # Pinhole intrinsics from the horizontal field of view.
        self.fx = 0.5 * w / np.tan(np.radians(self.p.hfov_deg) / 2.0)
        self.fy = self.fx                       # square pixels
        self.cx, self.cy = (w - 1) / 2.0, (h - 1) / 2.0

        # Unit ray per pixel, in the optical frame (+z forward, +x right,
        # +y down), precomputed once since intrinsics never change.
        u, v = np.meshgrid(np.arange(w), np.arange(h))
        x = (u - self.cx) / self.fx
        y = (v - self.cy) / self.fy
        d_opt = np.stack([x, y, np.ones_like(x)], axis=-1).reshape(-1, 3)
        self._pixel_dir_opt = d_opt / np.linalg.norm(d_opt, axis=1, keepdims=True)
        self._z_over_r = 1.0 / np.linalg.norm(np.stack([x, y, np.ones_like(x)], -1).reshape(-1, 3),
                                              axis=1)

        # Optical frame -> body frame (x fwd, y left, z up), with mount pitch.
        cp, sp = np.cos(np.radians(self.p.mount_pitch_deg)), np.sin(np.radians(self.p.mount_pitch_deg))
        R_pitch = np.array([[cp, 0.0, sp], [0.0, 1.0, 0.0], [-sp, 0.0, cp]])
        R_opt_body = np.array([[0.0, 0.0, 1.0],      # optical z -> body x
                               [-1.0, 0.0, 0.0],     # optical x -> body -y
                               [0.0, -1.0, 0.0]])    # optical y -> body -z
        self._R_opt_body = R_pitch @ R_opt_body

        se, sa = np.radians(self.p.sun_elevation_deg), np.radians(self.p.sun_azimuth_deg)
        self._sun = np.array([np.cos(se) * np.sin(sa), np.cos(se) * np.cos(sa), np.sin(se)])

        self._info = CameraInfo(width=w, height=h)
        self._info.k = np.array([self.fx, 0, self.cx, 0, self.fy, self.cy, 0, 0, 1.0])
        self._info.p = np.array([self.fx, 0, self.cx, 0, 0, self.fy, self.cy, 0, 0, 0, 1.0, 0])

    def _sample(self, truth: VehicleTruth, stamp: float):
        R_bw = quat_to_matrix(truth.q)                       # body -> ENU
        origin = np.asarray(truth.p, dtype=float) + R_bw @ np.array(self.p.mount_xyz)
        dirs = self._pixel_dir_opt @ self._R_opt_body.T @ R_bw.T

        n = dirs.shape[0]
        o = np.tile(origin, (n, 1))
        rng_m, refl, kind = self.world.raycast(o, dirs, self.p.z_max, stamp, terrain_steps=96)

        # Depth images report z along the optical axis, not slant range.
        z = rng_m * self._z_over_r
        sigma = self.p.depth_sigma_floor + self.p.depth_sigma_rel * np.where(np.isfinite(z), z, 0.0) ** 2
        z_noisy = z + self.rng.normal(0.0, 1.0, n) * sigma * self.fault.noise_scale
        if self.fault.bias is not None:
            z_noisy = z_noisy + float(np.asarray(self.fault.bias).ravel()[0])

        invalid = (~np.isfinite(z_noisy)) | (z_noisy < self.p.z_min) | (z_noisy > self.p.z_max)
        invalid |= self.rng.random(n) < self.p.invalid_prob
        # ROS 32FC1 depth convention: unmeasured pixels are NaN.
        depth = np.where(invalid, np.nan, z_noisy).reshape(self.p.height, self.p.width)

        depth_msg = Image(header=self._header(stamp))
        depth_msg.height, depth_msg.width = self.p.height, self.p.width
        depth_msg.encoding = "32FC1"
        depth_msg.step = self.p.width * 4
        depth_msg.data = depth.astype(np.float32)

        rgb_msg = None
        if self.publish_rgb:
            rgb_msg = self._shade(o, dirs, rng_m, refl, kind, stamp)

        info = CameraInfo(header=self._header(stamp), width=self.p.width, height=self.p.height,
                          k=self._info.k.copy(), p=self._info.p.copy())
        return (rgb_msg, depth_msg, info)

    def _shade(self, o, dirs, rng_m, refl, kind, stamp) -> Image:
        """Lambertian shading of the same rays -- registered with the depth map."""
        n = dirs.shape[0]
        hit = o + dirs * np.where(np.isfinite(rng_m), rng_m, 0.0)[:, None]
        normals = np.tile(np.array([0.0, 0.0, 1.0]), (n, 1))
        terr = kind == 1
        if terr.any():
            normals[terr] = self.world.terrain.normal_at(hit[terr, 0], hit[terr, 1])
        obst = (kind == 2) | (kind == 3)
        if obst.any():
            # Vertical surface: normal points back along the beam, horizontally.
            hd = -dirs[obst].copy()
            hd[:, 2] = 0.0
            nrm = np.linalg.norm(hd, axis=1, keepdims=True)
            normals[obst] = np.where(nrm > 1e-9, hd / np.maximum(nrm, 1e-9),
                                     np.array([0.0, 0.0, 1.0]))

        lam = np.clip(np.einsum("ij,j->i", normals, self._sun), 0.0, 1.0)
        shade = np.clip(refl * (self.p.ambient + (1.0 - self.p.ambient) * lam), 0.0, 1.0)
        shade = shade + self.rng.normal(0.0, self.p.exposure_noise, n)

        # Simple per-class tint so terrain, rock and vegetation are
        # distinguishable -- enough for feature tracking or a visual check.
        tint = np.empty((n, 3))
        tint[:] = np.array([0.55, 0.62, 0.72])                   # sky
        tint[terr] = np.array([0.62, 0.55, 0.42])                # ground
        tint[kind == 2] = np.array([0.38, 0.50, 0.30])           # tree/rock
        tint[kind == 3] = np.array([0.62, 0.60, 0.58])           # wall
        sky = kind == 0
        shade[sky] = 0.78 + self.rng.normal(0.0, 0.01, int(sky.sum()))

        rgb = np.clip(shade[:, None] * tint, 0.0, 1.0)
        img = (rgb * 255.0).astype(np.uint8).reshape(self.p.height, self.p.width, 3)
        msg = Image(header=self._header(stamp))
        msg.height, msg.width = self.p.height, self.p.width
        msg.encoding = "rgb8"
        msg.step = self.p.width * 3
        msg.data = img
        return msg

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "resolution": [self.p.width, self.p.height],
            "hfov_deg": self.p.hfov_deg,
            "vfov_deg": float(np.degrees(2 * np.arctan(0.5 * self.p.height / self.fy))),
            "intrinsics_fx_fy_cx_cy": [self.fx, self.fy, self.cx, self.cy],
            "depth_range_m": [self.p.z_min, self.p.z_max],
            "depth_sigma_law": "sigma = %.4f + %.5f * z^2" % (self.p.depth_sigma_floor,
                                                              self.p.depth_sigma_rel),
            "depth_sigma_at_5m": self.p.depth_sigma_floor + self.p.depth_sigma_rel * 25,
            "rays_per_frame": self.p.width * self.p.height,
        })
        return d
