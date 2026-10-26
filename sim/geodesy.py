"""WGS-84 geodesy: LLA <-> ECEF <-> local ENU.

Used to turn the simulator's local ENU metric frame into the geodetic
coordinates a real GNSS receiver reports, so that `sensor_msgs/NavSatFix`
carries plausible latitude/longitude/altitude instead of raw metres.

Reference: NIMA TR8350.2, "Department of Defense World Geodetic System 1984".
"""
from __future__ import annotations

import numpy as np

# --- WGS-84 defining parameters -------------------------------------------
A = 6378137.0                 # semi-major axis [m]
F = 1.0 / 298.257223563       # flattening
B = A * (1.0 - F)             # semi-minor axis [m]
E2 = F * (2.0 - F)            # first eccentricity squared
EP2 = E2 / (1.0 - E2)         # second eccentricity squared
GM = 3.986004418e14           # gravitational constant * mass [m^3/s^2]
OMEGA_E = 7.2921151467e-5     # Earth rotation rate [rad/s]


def gravity_wgs84(lat_deg: float, alt_m: float) -> float:
    """Normal gravity from the Somigliana formula with a free-air correction.

    Accurate to well under 1 mGal over the altitudes this simulator uses,
    which matters because the accelerometer model measures specific force and
    the EKF has to subtract exactly the same value it was generated with.
    """
    s = np.sin(np.radians(lat_deg))
    s2 = s * s
    # Somigliana closed form at the ellipsoid surface.
    g0 = 9.7803253359 * (1.0 + 0.00193185265241 * s2) / np.sqrt(1.0 - 0.00669437999014 * s2)
    # Free-air + second-order altitude correction.
    return g0 - (3.0877e-6 - 4.3e-9 * s2) * alt_m + 0.72e-12 * alt_m * alt_m


def lla_to_ecef(lat_deg: float, lon_deg: float, alt_m: float) -> np.ndarray:
    lat, lon = np.radians(lat_deg), np.radians(lon_deg)
    sl, cl = np.sin(lat), np.cos(lat)
    n = A / np.sqrt(1.0 - E2 * sl * sl)          # prime vertical radius
    return np.array([
        (n + alt_m) * cl * np.cos(lon),
        (n + alt_m) * cl * np.sin(lon),
        (n * (1.0 - E2) + alt_m) * sl,
    ])


def ecef_to_lla(x: float, y: float, z: float) -> tuple[float, float, float]:
    """Ferrari / Bowring closed-form inverse -- no iteration, mm-level exact."""
    r = np.hypot(x, y)
    # Bowring's parametric-latitude initial value is already accurate enough
    # that the single Newton step below converges to double precision.
    beta = np.arctan2(z * A, r * B)
    for _ in range(3):
        sb, cb = np.sin(beta), np.cos(beta)
        lat = np.arctan2(z + B * EP2 * sb ** 3, r - A * E2 * cb ** 3)
        beta = np.arctan2(B * np.sin(lat), A * np.cos(lat))
    sl, cl = np.sin(lat), np.cos(lat)
    n = A / np.sqrt(1.0 - E2 * sl * sl)
    alt = r * cl + z * sl - n * (1.0 - E2 * sl * sl)
    return float(np.degrees(lat)), float(np.degrees(np.arctan2(y, x))), float(alt)


def ecef_to_enu_matrix(lat_deg: float, lon_deg: float) -> np.ndarray:
    """Rotation taking an ECEF vector into local East-North-Up."""
    lat, lon = np.radians(lat_deg), np.radians(lon_deg)
    sla, cla = np.sin(lat), np.cos(lat)
    slo, clo = np.sin(lon), np.cos(lon)
    return np.array([
        [-slo,            clo,           0.0],
        [-sla * clo, -sla * slo,         cla],
        [ cla * clo,  cla * slo,         sla],
    ])


class LocalFrame:
    """Fixed ENU tangent plane anchored at a geodetic origin.

    The whole simulator works in this frame; GNSS is the only component that
    converts back out to latitude/longitude, exactly as a real receiver would.
    """

    def __init__(self, lat_deg: float, lon_deg: float, alt_m: float):
        self.lat0, self.lon0, self.alt0 = lat_deg, lon_deg, alt_m
        self._ecef0 = lla_to_ecef(lat_deg, lon_deg, alt_m)
        self._R_ecef_enu = ecef_to_enu_matrix(lat_deg, lon_deg)
        self._R_enu_ecef = self._R_ecef_enu.T
        self.gravity = gravity_wgs84(lat_deg, alt_m)

    def enu_to_lla(self, enu: np.ndarray) -> tuple[float, float, float]:
        ecef = self._ecef0 + self._R_enu_ecef @ np.asarray(enu, dtype=float)
        return ecef_to_lla(*ecef)

    def lla_to_enu(self, lat_deg: float, lon_deg: float, alt_m: float) -> np.ndarray:
        d = lla_to_ecef(lat_deg, lon_deg, alt_m) - self._ecef0
        return self._R_ecef_enu @ d

    def earth_rate_enu(self) -> np.ndarray:
        """Earth's rotation vector expressed in the local ENU frame.

        A tactical-grade MEMS gyro cannot resolve this (15 deg/h is below its
        noise floor), but the model includes it so that the sensor output is
        physically complete rather than silently flat.
        """
        lat = np.radians(self.lat0)
        return OMEGA_E * np.array([0.0, np.cos(lat), np.sin(lat)])
