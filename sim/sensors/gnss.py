"""GNSS receiver model with a real GPS constellation.

Most toy simulators add white noise to the true position. That is wrong in the
two ways which matter most for this project:

  * real GNSS error is dominated by *slowly varying* biases (ionosphere, clock,
    ephemeris, multipath), so it cannot be averaged away and it causes an EKF
    to track a wandering offset rather than jitter about the truth;
  * accuracy depends on satellite *geometry*. In a valley or beside a ridge,
    satellites are occluded, DOP rises, and accuracy degrades on its own --
    which is precisely the "difficult terrain plus degraded navigation" case
    the platform exists to study.

So this model propagates a 24-satellite Walker constellation on circular
orbits, computes azimuth/elevation in the local frame, tests each line of
sight against the terrain, and forms the dilution of precision from the actual
geometry matrix:

    G_i = [-e_i^T, 1]        (unit line-of-sight, plus clock column)
    Q   = (G^T G)^-1
    HDOP = sqrt(Q_00 + Q_11),  VDOP = sqrt(Q_22),  PDOP = sqrt(Q_00+Q_11+Q_22)

Position error is then UERE * DOP, split into a Gauss-Markov correlated part
and a white part.

A note on covariance, which is what makes fault detection possible: the
covariance the receiver *reports* is derived from DOP and the nominal UERE --
its own belief about its accuracy. Under a spoofing or inconsistency fault the
reported covariance stays small while the true error grows. That disagreement
is the observable signal the GNSS monitor exploits; it is not told that a
fault occurred.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from ..geodesy import LocalFrame, lla_to_ecef
from ..msgs import (Header, NavSatCovType, NavSatFix, NavSatStatus,
                    TwistWithCovarianceStamped)
from .base import GaussMarkov, Sensor, VehicleTruth

# GPS orbit: semi-major axis and nodal period of the nominal constellation.
GPS_SMA = 26_559_800.0      # m
GPS_PERIOD = 43_082.0       # s (11 h 58 min)
GPS_INCL = np.radians(55.0)


@dataclass
class GnssParams:
    # --- user-equivalent range error budget (1-sigma, metres) -------------
    uere_clock_ephem: float = 1.1    # satellite clock + ephemeris residual
    uere_iono: float = 0.7           # ionosphere after SBAS correction
    uere_tropo: float = 0.2          # troposphere model residual
    uere_multipath: float = 0.5      # open-sky multipath
    uere_receiver: float = 0.3       # receiver thermal noise

    # --- error-process structure ------------------------------------------
    correlated_fraction: float = 0.85   # share of error *variance* that is slow
    correlation_time: float = 150.0     # s, Gauss-Markov tau
    vertical_factor: float = 1.0        # extra on top of VDOP (1 = DOP only)

    # --- constellation / visibility ---------------------------------------
    n_satellites: int = 24
    elevation_mask_deg: float = 10.0    # receiver's own cutoff
    terrain_occlusion: bool = True
    occlusion_probe_m: float = 400.0    # how far to test a line of sight

    # --- velocity (carrier Doppler) ---------------------------------------
    vel_sigma_horiz: float = 0.035      # m/s
    vel_sigma_vert: float = 0.055       # m/s

    # --- reporting --------------------------------------------------------
    lla_quantum_deg: float = 1e-7       # NMEA/UBX output resolution
    alt_quantum_m: float = 1e-3
    antenna_offset: np.ndarray = field(default_factory=lambda: np.array([-0.15, 0.0, 0.35]))

    @property
    def uere(self) -> float:
        """Root-sum-square of the independent range-error contributors."""
        return float(np.sqrt(self.uere_clock_ephem ** 2 + self.uere_iono ** 2 +
                             self.uere_tropo ** 2 + self.uere_multipath ** 2 +
                             self.uere_receiver ** 2))


class Constellation:
    """24-satellite Walker constellation on circular orbits.

    Positions are computed in an Earth-fixed frame. Over a run of a few
    minutes the geometry changes only slightly, which is itself realistic --
    DOP is near-constant on that timescale.
    """

    def __init__(self, n_sat: int, rng: np.random.Generator):
        self.n = n_sat
        planes = 6
        per_plane = max(1, n_sat // planes)
        raan, anom, incl = [], [], []
        for p in range(planes):
            for s in range(per_plane):
                raan.append(2 * np.pi * p / planes)
                # Stagger phase between planes so satellites do not line up,
                # as the real constellation does, to keep DOP well conditioned.
                anom.append(2 * np.pi * (s / per_plane + 0.5 * p / planes))
                incl.append(GPS_INCL)
        while len(raan) < n_sat:
            raan.append(rng.uniform(0, 2 * np.pi))
            anom.append(rng.uniform(0, 2 * np.pi))
            incl.append(GPS_INCL)
        self.raan = np.array(raan[:n_sat])
        self.anom0 = np.array(anom[:n_sat])
        self.incl = np.array(incl[:n_sat])
        self.prn = np.arange(1, n_sat + 1)

    def positions_ecef(self, t: float) -> np.ndarray:
        """(N,3) satellite positions at sim time `t`."""
        u = self.anom0 + 2 * np.pi * t / GPS_PERIOD
        # In-plane position, then rotate by inclination and RAAN.
        x_p = GPS_SMA * np.cos(u)
        y_p = GPS_SMA * np.sin(u)
        ci, si = np.cos(self.incl), np.sin(self.incl)
        cr, sr = np.cos(self.raan), np.sin(self.raan)
        x = x_p * cr - y_p * ci * sr
        y = x_p * sr + y_p * ci * cr
        z = y_p * si
        return np.stack([x, y, z], axis=1)


class GnssSensor(Sensor):
    frame_id = "gnss_link"

    def __init__(self, sensor_id: str, rng: np.random.Generator, frame: LocalFrame, *,
                 rate_hz: float = 5.0, params: GnssParams | None = None,
                 world=None, latency: float = 0.095, latency_jitter: float = 0.012):
        super().__init__(sensor_id, rate_hz, rng, latency=latency, latency_jitter=latency_jitter)
        self.p = params or GnssParams()
        self.frame = frame
        self.world = world
        self.const = Constellation(self.p.n_satellites, rng)

        # Correlated error lives in metres of *range*; it is projected onto
        # position through DOP each epoch, so geometry and error stay coupled.
        cf = np.sqrt(self.p.correlated_fraction)
        self._gm = GaussMarkov(np.array([cf, cf, cf]) * self.p.uere,
                               self.p.correlation_time, rng, size=3)
        self._white_frac = np.sqrt(max(0.0, 1.0 - self.p.correlated_fraction))

        self._R_ecef_enu = None
        self._last_t: float | None = None
        self.last_diag: dict = {}

    # -- geometry ----------------------------------------------------------
    def _visibility(self, truth: VehicleTruth, t: float):
        """Return (az, el, los_enu, visible mask) for all satellites."""
        rec_lla = self.frame.enu_to_lla(truth.p)
        rec_ecef = lla_to_ecef(*rec_lla)
        sat_ecef = self.const.positions_ecef(t)
        d = sat_ecef - rec_ecef[None, :]
        d /= np.linalg.norm(d, axis=1, keepdims=True)

        # Reuse the origin's ECEF->ENU rotation: over a 200 m test site the
        # difference from the exact receiver-centred rotation is ~3e-5 rad.
        if self._R_ecef_enu is None:
            from ..geodesy import ecef_to_enu_matrix
            self._R_ecef_enu = ecef_to_enu_matrix(self.frame.lat0, self.frame.lon0)
        los = d @ self._R_ecef_enu.T                 # unit LOS in ENU
        el = np.arcsin(np.clip(los[:, 2], -1, 1))
        az = np.arctan2(los[:, 0], los[:, 1])
        vis = el > np.radians(self.p.elevation_mask_deg)

        if self.p.terrain_occlusion and self.world is not None and vis.any():
            idx = np.flatnonzero(vis)
            origin = truth.p + np.array([0.0, 0.0, 0.5])
            o = np.tile(origin, (idx.size, 1))
            rng_hit, _, kind = self.world.raycast(o, los[idx], self.p.occlusion_probe_m, t,
                                                  terrain_steps=48)
            vis[idx] = ~np.isfinite(rng_hit)
        return az, el, los, vis

    @staticmethod
    def _dop(los_vis: np.ndarray):
        """DOP values from the visible-satellite geometry matrix."""
        if los_vis.shape[0] < 4:
            return None
        # Rows are [-e_E, -e_N, -e_U, 1]: the linearised pseudorange model.
        G = np.hstack([-los_vis, np.ones((los_vis.shape[0], 1))])
        try:
            Q = np.linalg.inv(G.T @ G)
        except np.linalg.LinAlgError:
            return None
        q = np.clip(np.diag(Q), 0.0, None)
        return {
            "hdop": float(np.sqrt(q[0] + q[1])),
            "vdop": float(np.sqrt(q[2])),
            "pdop": float(np.sqrt(q[0] + q[1] + q[2])),
            "tdop": float(np.sqrt(q[3])),
        }

    # -- sampling ----------------------------------------------------------
    def _sample(self, truth: VehicleTruth, stamp: float):
        dt = self.period if self._last_t is None else max(stamp - self._last_t, 1e-6)
        self._last_t = stamp

        az, el, los, vis = self._visibility(truth, stamp)
        n_vis = int(vis.sum())
        dop = self._dop(los[vis])

        header = self._header(stamp)
        if dop is None or n_vis < 4:
            # Genuinely no solution: report NO_FIX rather than a stale guess.
            # A receiver that keeps emitting its last position during an
            # outage is a common and dangerous real-world behaviour, but it is
            # not what a correct receiver does, so we report the honest state.
            self.last_diag = {"n_visible": n_vis, "dop": None, "no_fix": True}
            fix = NavSatFix(header=header, status=int(NavSatStatus.STATUS_NO_FIX))
            fix.num_satellites = n_vis
            fix.hdop = fix.vdop = 99.9
            fix.position_covariance = np.diag([1e6, 1e6, 1e6]).ravel()
            fix.position_covariance_type = int(NavSatCovType.COVARIANCE_TYPE_DIAGONAL_KNOWN)
            return (fix, None)

        uere = self.p.uere
        sig_h = dop["hdop"] * uere
        sig_v = dop["vdop"] * uere * self.p.vertical_factor

        # --- error realisation: correlated (per-axis, scaled by DOP) + white
        corr = self._gm.step(dt)
        err = np.array([
            corr[0] * dop["hdop"] / np.sqrt(2.0),
            corr[1] * dop["hdop"] / np.sqrt(2.0),
            corr[2] * dop["vdop"] * self.p.vertical_factor,
        ])
        wn = self._white_frac * uere * self.rng.normal(0.0, 1.0, 3)
        err = err + np.array([wn[0] * dop["hdop"] / np.sqrt(2.0),
                              wn[1] * dop["hdop"] / np.sqrt(2.0),
                              wn[2] * dop["vdop"] * self.p.vertical_factor])
        err *= self.fault.noise_scale

        # Antenna phase centre is not at the body origin.
        from ..rotations import quat_to_matrix
        R = quat_to_matrix(truth.q)
        p_ant = np.asarray(truth.p, dtype=float) + R @ self.p.antenna_offset
        p_meas = p_ant + err

        # --- injected faults: a position offset is the "inconsistency"/spoof
        if self.fault.offset is not None:
            p_meas = p_meas + np.asarray(self.fault.offset, dtype=float)

        lat, lon, alt = self.frame.enu_to_lla(p_meas)
        # Output quantisation, as reported over NMEA/UBX.
        lat = round(lat / self.p.lla_quantum_deg) * self.p.lla_quantum_deg
        lon = round(lon / self.p.lla_quantum_deg) * self.p.lla_quantum_deg
        alt = round(alt / self.p.alt_quantum_m) * self.p.alt_quantum_m

        status = (int(NavSatStatus.STATUS_SBAS_FIX) if n_vis >= 9
                  else int(NavSatStatus.STATUS_FIX))
        fix = NavSatFix(header=header, status=status, service=1,
                        latitude=lat, longitude=lon, altitude=alt)
        # Reported covariance: the receiver's *claim*, from DOP and nominal
        # UERE. Deliberately unaware of any injected offset.
        fix.position_covariance = np.diag([sig_h ** 2 / 2.0, sig_h ** 2 / 2.0, sig_v ** 2]).ravel()
        fix.position_covariance_type = int(NavSatCovType.COVARIANCE_TYPE_DIAGONAL_KNOWN)
        fix.num_satellites = n_vis
        fix.hdop = dop["hdop"]
        fix.vdop = dop["vdop"]

        # --- velocity from carrier Doppler, a separate and much better obs.
        v_ant = np.asarray(truth.v, dtype=float) + R @ np.cross(truth.omega, self.p.antenna_offset)
        vs = np.array([self.p.vel_sigma_horiz, self.p.vel_sigma_horiz, self.p.vel_sigma_vert])
        vs = vs * max(1.0, dop["pdop"] / 2.0)
        v_meas = v_ant + self.rng.normal(0.0, 1.0, 3) * vs * self.fault.noise_scale
        tw = TwistWithCovarianceStamped(header=Header(stamp=stamp, frame_id=self.frame_id,
                                                      seq=header.seq))
        tw.linear = v_meas
        cov = np.zeros(36)
        cov[0], cov[7], cov[14] = vs[0] ** 2, vs[1] ** 2, vs[2] ** 2
        tw.covariance = cov

        self.last_diag = {
            "n_visible": n_vis, "dop": dop, "no_fix": False,
            "sigma_h": sig_h, "sigma_v": sig_v,
            "true_error": float(np.linalg.norm(p_meas - p_ant)),
            "mean_elevation_deg": float(np.degrees(el[vis].mean())),
        }
        return (fix, tw)

    def _clone_stale(self, msg, stamp: float):
        import copy
        clone = copy.deepcopy(msg)
        for part in (clone if isinstance(clone, tuple) else (clone,)):
            if part is not None and hasattr(part, "header"):
                part.header.stamp = self._last_stamp if self.fault.freeze_stamp else stamp
        return clone

    def update(self, truth: VehicleTruth, t: float) -> None:
        # The parent pushes whatever `_sample` returns; here that is a
        # (fix, twist) pair, kept together so they share one epoch and stamp.
        super().update(truth, t)

    def describe(self) -> dict:
        d = super().describe()
        d.update({
            "uere_total_m": self.p.uere,
            "uere_budget_m": {
                "clock_ephemeris": self.p.uere_clock_ephem, "ionosphere": self.p.uere_iono,
                "troposphere": self.p.uere_tropo, "multipath": self.p.uere_multipath,
                "receiver": self.p.uere_receiver,
            },
            "correlated_fraction": self.p.correlated_fraction,
            "correlation_time_s": self.p.correlation_time,
            "n_satellites": self.p.n_satellites,
            "elevation_mask_deg": self.p.elevation_mask_deg,
            "terrain_occlusion": self.p.terrain_occlusion,
            "vel_sigma_horiz_m_s": self.p.vel_sigma_horiz,
        })
        return d
