"""Quaternion / rotation-matrix utilities.

Convention used everywhere in this project:
  * quaternions are (w, x, y, z), unit norm;
  * a quaternion `q` represents the rotation taking BODY vectors into the
    local ENU frame, i.e. `v_enu = R(q) @ v_body`;
  * body axes are x-forward, y-left, z-up (ROS REP-103);
  * Euler angles are roll-pitch-yaw applied in the Z-Y-X intrinsic order,
    again per REP-103.
"""
from __future__ import annotations

import numpy as np


def quat_normalize(q: np.ndarray) -> np.ndarray:
    q = np.asarray(q, dtype=float)
    n = np.linalg.norm(q)
    if n < 1e-12:
        return np.array([1.0, 0.0, 0.0, 0.0])
    q = q / n
    # Keep the scalar part non-negative so that a given attitude always has
    # one representation; otherwise an estimator can report a 360-degree
    # "error" that is really the q/-q ambiguity.
    return -q if q[0] < 0 else q


def quat_mul(a: np.ndarray, b: np.ndarray) -> np.ndarray:
    aw, ax, ay, az = a
    bw, bx, by, bz = b
    return np.array([
        aw * bw - ax * bx - ay * by - az * bz,
        aw * bx + ax * bw + ay * bz - az * by,
        aw * by - ax * bz + ay * bw + az * bx,
        aw * bz + ax * by - ay * bx + az * bw,
    ])


def quat_conj(q: np.ndarray) -> np.ndarray:
    return np.array([q[0], -q[1], -q[2], -q[3]])


def quat_to_matrix(q: np.ndarray) -> np.ndarray:
    """Rotation matrix R such that v_enu = R @ v_body."""
    w, x, y, z = quat_normalize(q)
    return np.array([
        [1 - 2 * (y * y + z * z), 2 * (x * y - w * z),     2 * (x * z + w * y)],
        [2 * (x * y + w * z),     1 - 2 * (x * x + z * z), 2 * (y * z - w * x)],
        [2 * (x * z - w * y),     2 * (y * z + w * x),     1 - 2 * (x * x + y * y)],
    ])


def matrix_to_quat(R: np.ndarray) -> np.ndarray:
    """Shepperd's method -- picks the largest divisor to stay conditioned."""
    tr = R[0, 0] + R[1, 1] + R[2, 2]
    if tr > 0:
        s = np.sqrt(tr + 1.0) * 2.0
        q = np.array([0.25 * s, (R[2, 1] - R[1, 2]) / s,
                      (R[0, 2] - R[2, 0]) / s, (R[1, 0] - R[0, 1]) / s])
    elif R[0, 0] > R[1, 1] and R[0, 0] > R[2, 2]:
        s = np.sqrt(1.0 + R[0, 0] - R[1, 1] - R[2, 2]) * 2.0
        q = np.array([(R[2, 1] - R[1, 2]) / s, 0.25 * s,
                      (R[0, 1] + R[1, 0]) / s, (R[0, 2] + R[2, 0]) / s])
    elif R[1, 1] > R[2, 2]:
        s = np.sqrt(1.0 + R[1, 1] - R[0, 0] - R[2, 2]) * 2.0
        q = np.array([(R[0, 2] - R[2, 0]) / s, (R[0, 1] + R[1, 0]) / s,
                      0.25 * s, (R[1, 2] + R[2, 1]) / s])
    else:
        s = np.sqrt(1.0 + R[2, 2] - R[0, 0] - R[1, 1]) * 2.0
        q = np.array([(R[1, 0] - R[0, 1]) / s, (R[0, 2] + R[2, 0]) / s,
                      (R[1, 2] + R[2, 1]) / s, 0.25 * s])
    return quat_normalize(q)


def euler_to_quat(roll: float, pitch: float, yaw: float) -> np.ndarray:
    cr, sr = np.cos(roll / 2), np.sin(roll / 2)
    cp, sp = np.cos(pitch / 2), np.sin(pitch / 2)
    cy, sy = np.cos(yaw / 2), np.sin(yaw / 2)
    return quat_normalize(np.array([
        cr * cp * cy + sr * sp * sy,
        sr * cp * cy - cr * sp * sy,
        cr * sp * cy + sr * cp * sy,
        cr * cp * sy - sr * sp * cy,
    ]))


def quat_to_euler(q: np.ndarray) -> np.ndarray:
    """Return (roll, pitch, yaw) in radians, pitch clamped at the singularity."""
    w, x, y, z = quat_normalize(q)
    sinp = 2.0 * (w * y - z * x)
    pitch = np.arcsin(np.clip(sinp, -1.0, 1.0))
    roll = np.arctan2(2.0 * (w * x + y * z), 1.0 - 2.0 * (x * x + y * y))
    yaw = np.arctan2(2.0 * (w * z + x * y), 1.0 - 2.0 * (y * y + z * z))
    return np.array([roll, pitch, yaw])


def rotvec_to_quat(v: np.ndarray) -> np.ndarray:
    """Exponential map. Uses a Taylor series near zero to stay well-conditioned."""
    v = np.asarray(v, dtype=float)
    th = np.linalg.norm(v)
    if th < 1e-8:
        return quat_normalize(np.array([1.0, *(0.5 * v)]))
    axis = v / th
    return np.array([np.cos(th / 2), *(axis * np.sin(th / 2))])


def quat_to_rotvec(q: np.ndarray) -> np.ndarray:
    """Logarithm map -- the minimal 3-vector attitude error used by the EKF."""
    w, x, y, z = quat_normalize(q)
    vn = np.linalg.norm([x, y, z])
    if vn < 1e-12:
        return np.zeros(3)
    return np.array([x, y, z]) / vn * (2.0 * np.arctan2(vn, w))


def skew(v: np.ndarray) -> np.ndarray:
    x, y, z = v
    return np.array([[0.0, -z, y], [z, 0.0, -x], [-y, x, 0.0]])


def quat_from_two_vectors(a: np.ndarray, b: np.ndarray) -> np.ndarray:
    """Shortest rotation taking unit vector `a` onto unit vector `b`."""
    a = a / max(np.linalg.norm(a), 1e-12)
    b = b / max(np.linalg.norm(b), 1e-12)
    d = float(np.dot(a, b))
    if d > 1.0 - 1e-12:
        return np.array([1.0, 0.0, 0.0, 0.0])
    if d < -1.0 + 1e-12:
        # Antiparallel: any perpendicular axis gives a valid 180-degree turn.
        axis = np.cross(a, [1.0, 0.0, 0.0])
        if np.linalg.norm(axis) < 1e-9:
            axis = np.cross(a, [0.0, 1.0, 0.0])
        axis /= np.linalg.norm(axis)
        return np.array([0.0, *axis])
    axis = np.cross(a, b)
    return quat_normalize(np.array([1.0 + d, *axis]))


def wrap_pi(a):
    """Wrap angle(s) to (-pi, pi]."""
    return (np.asarray(a) + np.pi) % (2.0 * np.pi) - np.pi
