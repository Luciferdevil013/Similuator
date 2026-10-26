"""Wheel encoders and dead-reckoned wheel odometry.

The important property of this model is that its odometry is *honestly wrong*.
Two error sources are structural rather than noise:

  * Wheel slip. The dynamics reports the true wheel angular rates, which
    include slip against the terrain. Odometry has no way to know the slip, so
    integrating encoder counts over-reports distance on loose ground.
  * Skid-steer kinematics. A four-wheel skid-steer vehicle turns by slipping
    its wheels laterally, so its *effective* track width is wider than its
    geometric one -- typically 1.3-1.8x. Dead reckoning that uses the
    geometric track therefore over-estimates yaw rate on every turn.

Both errors are deterministic functions of the motion, so they accumulate.
That is what makes dead reckoning during a GNSS outage degrade the way it
really does, instead of performing suspiciously well.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from ..msgs import JointState, Odometry
from ..rotations import euler_to_quat, wrap_pi
from .base import Sensor, VehicleTruth

WHEEL_NAMES = ("front_left_wheel", "front_right_wheel", "rear_left_wheel", "rear_right_wheel")


@dataclass
class WheelOdomParams:
    wheel_radius: float = 0.165          # m, nominal (as used by odometry)
    track_width: float = 0.52            # m, geometric
    ticks_per_rev: int = 4096            # quadrature encoder resolution
    radius_err_sigma: float = 0.010      # 1-sigma per-wheel radius error (wear/pressure)
    track_err_sigma: float = 0.005       # 1-sigma track-width calibration error
    # Effective/geometric track ratio for skid steering. Odometry assumes 1.0,
    # the vehicle behaves like `skid_track_factor` -- the mismatch is the
    # dominant yaw drift source.
    skid_track_factor: float = 1.55
    encoder_noise_rad: float = 2.0e-4    # rad, bearing runout / jitter
    vel_filter_tau: float = 0.02         # s, driver's velocity low-pass


class WheelOdometrySensor(Sensor):
    frame_id = "odom"

    def __init__(self, sensor_id: str, rng: np.random.Generator, *,
                 rate_hz: float = 50.0, params: WheelOdomParams | None = None,
                 initial_pose: tuple[float, float, float] = (0.0, 0.0, 0.0),
                 latency: float = 0.008, latency_jitter: float = 0.001):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or WheelOdomParams()

        # Per-unit calibration errors, fixed for the run.
        self.radius_true = self.p.wheel_radius * (1.0 + rng.normal(0.0, self.p.radius_err_sigma, 4))
        self.track_true = self.p.track_width * (1.0 + rng.normal(0.0, self.p.track_err_sigma))

        self.tick_angle = 2.0 * np.pi / self.p.ticks_per_rev
        self._wheel_angle = np.zeros(4)      # true accumulated angle
        self._ticks = np.zeros(4, dtype=np.int64)
        self._last_ticks = np.zeros(4, dtype=np.int64)
        self._vel_filt = np.zeros(4)
        self._last_t: float | None = None

        # Dead-reckoned pose, the sensor's own integrated belief.
        self.x, self.y, self.yaw = initial_pose
        self.distance_travelled = 0.0

    def _sample(self, truth: VehicleTruth, stamp: float):
        dt = self.period if self._last_t is None else max(stamp - self._last_t, 1e-6)
        self._last_t = stamp

        w = np.asarray(truth.wheel_omega, dtype=float)
        if w.size != 4:
            w = np.resize(w if w.size else np.zeros(1), 4)

        # --- encoder: integrate true wheel rotation, then quantise to ticks
        self._wheel_angle += w * dt
        noisy_angle = self._wheel_angle + self._noise(self.p.encoder_noise_rad, 4)
        self._ticks = np.floor(noisy_angle / self.tick_angle).astype(np.int64)
        d_ticks = self._ticks - self._last_ticks
        self._last_ticks = self._ticks.copy()

        # Measured wheel rate comes from tick differences -- so it is
        # quantised by construction, exactly like a real encoder reading.
        w_meas = d_ticks * self.tick_angle / dt
        a = np.exp(-dt / max(self.p.vel_filter_tau, 1e-6))
        self._vel_filt = a * self._vel_filt + (1.0 - a) * w_meas

        if self.fault.bias is not None:
            b = np.asarray(self.fault.bias, dtype=float).ravel()
            self._vel_filt = self._vel_filt + (b if b.size == 4 else np.full(4, b[0]))
        if self.fault.scale != 1.0:
            self._vel_filt = self._vel_filt * self.fault.scale

        # --- dead reckoning with the *nominal* calibration (what firmware has)
        r_nom = self.p.wheel_radius
        v_left = r_nom * 0.5 * (self._vel_filt[0] + self._vel_filt[2])
        v_right = r_nom * 0.5 * (self._vel_filt[1] + self._vel_filt[3])
        v_body = 0.5 * (v_left + v_right)
        # Odometry divides by the geometric track; the vehicle really turns
        # about an effectively wider one, so yaw rate is over-reported.
        yaw_rate = (v_right - v_left) / self.p.track_width

        # Exact midpoint (second-order) integration of the unicycle model.
        self.yaw = float(wrap_pi(self.yaw + yaw_rate * dt))
        mid = self.yaw - 0.5 * yaw_rate * dt
        self.x += v_body * np.cos(mid) * dt
        self.y += v_body * np.sin(mid) * dt
        self.distance_travelled += abs(v_body) * dt

        js = JointState(header=self._header(stamp))
        js.header.frame_id = "base_link"
        js.name = list(WHEEL_NAMES)
        js.position = self._ticks * self.tick_angle
        js.velocity = self._vel_filt.copy()
        js.effort = np.zeros(4)

        od = Odometry(header=self._header(stamp), child_frame_id="base_link")
        od.position = np.array([self.x, self.y, 0.0])
        od.orientation = euler_to_quat(0.0, 0.0, self.yaw)
        od.linear = np.array([v_body, 0.0, 0.0])
        od.angular = np.array([0.0, 0.0, yaw_rate])

        # Covariance grows without bound in x/y/yaw: dead reckoning has no
        # absolute reference, and saying so is the honest thing to publish.
        pc = np.zeros(36)
        growth = 0.02 * self.distance_travelled
        pc[0] = pc[7] = max(1e-4, growth ** 2)
        pc[35] = max(1e-6, (0.01 * self.distance_travelled) ** 2)
        od.pose_covariance = pc
        # Twist covariance is bounded -- instantaneous speed from encoders is
        # genuinely good, and this is the part the EKF should actually use.
        tc = np.zeros(36)
        quant_sigma = self.tick_angle / dt * r_nom / np.sqrt(12.0)
        tc[0] = max(1e-6, quant_sigma ** 2 + (0.02 * abs(v_body)) ** 2)
        tc[7] = tc[0]
        tc[35] = max(1e-6, (quant_sigma / self.p.track_width) ** 2 + (0.05 * abs(yaw_rate)) ** 2)
        od.twist_covariance = tc
        return (js, od)

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "wheel_radius_nominal_m": self.p.wheel_radius,
            "wheel_radius_true_m": self.radius_true.tolist(),
            "track_width_nominal_m": self.p.track_width,
            "skid_track_factor": self.p.skid_track_factor,
            "ticks_per_rev": self.p.ticks_per_rev,
            "tick_resolution_mm": self.tick_angle * self.p.wheel_radius * 1e3,
        })
        return d
