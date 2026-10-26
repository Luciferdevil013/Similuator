"""ROS 2-shaped message types.

Field names, units and covariance layouts mirror the real `sensor_msgs`,
`nav_msgs` and `geometry_msgs` definitions so that porting to ROS 2 Jazzy is a
matter of wrapping each publisher, not reworking the data model. Covariances
are row-major 3x3 or 6x6 flattened exactly as ROS specifies.

The custom types at the bottom correspond to the four project interfaces
recommended in the report (SensorHealth, NavigationHealth, FaultEvent,
MissionStatus).
"""
from __future__ import annotations

from dataclasses import dataclass, field
from enum import IntEnum
from typing import Any

import numpy as np


def _v3() -> np.ndarray:
    return np.zeros(3)


def _cov3() -> np.ndarray:
    return np.zeros(9)


def _cov6() -> np.ndarray:
    return np.zeros(36)


@dataclass
class Header:
    stamp: float = 0.0          # seconds, simulation clock
    frame_id: str = ""
    seq: int = 0                # dropped in ROS 2, kept here for gap detection


# --------------------------------------------------------------------------
# sensor_msgs
# --------------------------------------------------------------------------
@dataclass
class Imu:
    """sensor_msgs/msg/Imu -- body-frame rates and specific force."""
    header: Header = field(default_factory=Header)
    orientation: np.ndarray = field(default_factory=lambda: np.array([1.0, 0, 0, 0]))  # w,x,y,z
    orientation_covariance: np.ndarray = field(default_factory=_cov3)
    angular_velocity: np.ndarray = field(default_factory=_v3)            # rad/s
    angular_velocity_covariance: np.ndarray = field(default_factory=_cov3)
    linear_acceleration: np.ndarray = field(default_factory=_v3)         # m/s^2
    linear_acceleration_covariance: np.ndarray = field(default_factory=_cov3)


class NavSatStatus(IntEnum):
    STATUS_NO_FIX = -1
    STATUS_FIX = 0
    STATUS_SBAS_FIX = 1
    STATUS_GBAS_FIX = 2


class NavSatCovType(IntEnum):
    COVARIANCE_TYPE_UNKNOWN = 0
    COVARIANCE_TYPE_APPROXIMATED = 1
    COVARIANCE_TYPE_DIAGONAL_KNOWN = 2
    COVARIANCE_TYPE_KNOWN = 3


@dataclass
class NavSatFix:
    """sensor_msgs/msg/NavSatFix -- geodetic position with ENU covariance."""
    header: Header = field(default_factory=Header)
    status: int = int(NavSatStatus.STATUS_FIX)
    service: int = 1                                   # SERVICE_GPS
    latitude: float = 0.0                              # deg
    longitude: float = 0.0                             # deg
    altitude: float = 0.0                              # m above ellipsoid
    position_covariance: np.ndarray = field(default_factory=_cov3)   # ENU, m^2
    position_covariance_type: int = int(NavSatCovType.COVARIANCE_TYPE_DIAGONAL_KNOWN)
    # Diagnostic extras a real receiver reports via NMEA/UBX; not part of
    # NavSatFix but carried alongside because the monitor needs them.
    num_satellites: int = 0
    hdop: float = 0.0
    vdop: float = 0.0


@dataclass
class TwistWithCovarianceStamped:
    header: Header = field(default_factory=Header)
    linear: np.ndarray = field(default_factory=_v3)
    angular: np.ndarray = field(default_factory=_v3)
    covariance: np.ndarray = field(default_factory=_cov6)


@dataclass
class LaserScan:
    """sensor_msgs/msg/LaserScan. Out-of-range returns are +inf, per spec."""
    header: Header = field(default_factory=Header)
    angle_min: float = 0.0
    angle_max: float = 0.0
    angle_increment: float = 0.0
    time_increment: float = 0.0
    scan_time: float = 0.0
    range_min: float = 0.0
    range_max: float = 0.0
    ranges: np.ndarray = field(default_factory=lambda: np.zeros(0))
    intensities: np.ndarray = field(default_factory=lambda: np.zeros(0))


@dataclass
class Image:
    """sensor_msgs/msg/Image. `data` stays a numpy array rather than bytes."""
    header: Header = field(default_factory=Header)
    height: int = 0
    width: int = 0
    encoding: str = "rgb8"
    step: int = 0
    data: np.ndarray = field(default_factory=lambda: np.zeros((0, 0)))


@dataclass
class CameraInfo:
    header: Header = field(default_factory=Header)
    height: int = 0
    width: int = 0
    distortion_model: str = "plumb_bob"
    d: np.ndarray = field(default_factory=lambda: np.zeros(5))
    k: np.ndarray = field(default_factory=lambda: np.zeros(9))   # 3x3 intrinsics
    r: np.ndarray = field(default_factory=lambda: np.eye(3).ravel())
    p: np.ndarray = field(default_factory=lambda: np.zeros(12))


@dataclass
class PointCloud2:
    """Reduced sensor_msgs/msg/PointCloud2 -- an (N,3) float array of points."""
    header: Header = field(default_factory=Header)
    points: np.ndarray = field(default_factory=lambda: np.zeros((0, 3)))
    intensities: np.ndarray = field(default_factory=lambda: np.zeros(0))


@dataclass
class MagneticField:
    header: Header = field(default_factory=Header)
    magnetic_field: np.ndarray = field(default_factory=_v3)   # Tesla
    magnetic_field_covariance: np.ndarray = field(default_factory=_cov3)


@dataclass
class FluidPressure:
    header: Header = field(default_factory=Header)
    fluid_pressure: float = 0.0    # Pascal
    variance: float = 0.0


@dataclass
class Temperature:
    header: Header = field(default_factory=Header)
    temperature: float = 0.0       # degrees Celsius
    variance: float = 0.0


class PowerSupplyStatus(IntEnum):
    UNKNOWN = 0
    CHARGING = 1
    DISCHARGING = 2
    NOT_CHARGING = 3
    FULL = 4


@dataclass
class BatteryState:
    header: Header = field(default_factory=Header)
    voltage: float = 0.0            # V
    temperature: float = 0.0        # degC
    current: float = 0.0            # A, negative when discharging (ROS sign)
    charge: float = 0.0             # Ah remaining
    capacity: float = 0.0           # Ah full
    design_capacity: float = 0.0    # Ah
    percentage: float = 0.0         # 0..1
    power_supply_status: int = int(PowerSupplyStatus.DISCHARGING)
    cell_voltage: np.ndarray = field(default_factory=lambda: np.zeros(0))


@dataclass
class JointState:
    """sensor_msgs/msg/JointState -- wheel encoder angles and rates."""
    header: Header = field(default_factory=Header)
    name: list[str] = field(default_factory=list)
    position: np.ndarray = field(default_factory=lambda: np.zeros(0))  # rad
    velocity: np.ndarray = field(default_factory=lambda: np.zeros(0))  # rad/s
    effort: np.ndarray = field(default_factory=lambda: np.zeros(0))    # Nm


# --------------------------------------------------------------------------
# nav_msgs / geometry_msgs
# --------------------------------------------------------------------------
@dataclass
class Odometry:
    """nav_msgs/msg/Odometry. Pose in `header.frame_id`, twist in child frame."""
    header: Header = field(default_factory=Header)
    child_frame_id: str = ""
    position: np.ndarray = field(default_factory=_v3)
    orientation: np.ndarray = field(default_factory=lambda: np.array([1.0, 0, 0, 0]))
    pose_covariance: np.ndarray = field(default_factory=_cov6)
    linear: np.ndarray = field(default_factory=_v3)
    angular: np.ndarray = field(default_factory=_v3)
    twist_covariance: np.ndarray = field(default_factory=_cov6)


@dataclass
class Path:
    header: Header = field(default_factory=Header)
    poses: np.ndarray = field(default_factory=lambda: np.zeros((0, 3)))


@dataclass
class Twist:
    linear: np.ndarray = field(default_factory=_v3)
    angular: np.ndarray = field(default_factory=_v3)


# --------------------------------------------------------------------------
# resiliencelab_interfaces -- the four project-specific types
# --------------------------------------------------------------------------
class SensorStatus(IntEnum):
    OK = 0
    DEGRADED = 1       # readings arriving but failing a quality check
    STALE = 2          # timestamp not advancing
    TIMEOUT = 3        # heartbeat missed
    INVALID = 4        # out of range / NaN / bad status field
    OFFLINE = 5        # no data at all


class FaultFlag(IntEnum):
    NONE = 0
    DROPOUT = 1 << 0
    STALE = 1 << 1
    DELAY = 1 << 2
    BIAS = 1 << 3
    NOISE = 1 << 4
    INCONSISTENT = 1 << 5
    OUT_OF_RANGE = 1 << 6
    RATE_LOW = 1 << 7


@dataclass
class SensorHealth:
    """resiliencelab_interfaces/msg/SensorHealth."""
    header: Header = field(default_factory=Header)
    sensor_id: str = ""
    status: int = int(SensorStatus.OK)
    last_valid_stamp: float = 0.0
    fault_flags: int = 0
    message_rate_hz: float = 0.0
    expected_rate_hz: float = 0.0
    availability: float = 1.0      # valid msgs / expected msgs over the window
    detail: str = ""


class NavMode(IntEnum):
    GNSS_INS = 0        # full GNSS + inertial fusion
    DEAD_RECKONING = 1  # inertial + wheel odometry, no global fix
    ODOM_ONLY = 2       # wheel odometry + heading only
    HELD = 3            # not moving, estimate not trusted for motion
    LOST = 4            # estimate unusable


@dataclass
class NavigationHealth:
    """resiliencelab_interfaces/msg/NavigationHealth."""
    header: Header = field(default_factory=Header)
    estimate_valid: bool = True
    position_sigma: float = 0.0       # sqrt of horizontal position variance [m]
    velocity_sigma: float = 0.0
    yaw_sigma: float = 0.0            # rad
    nav_mode: int = int(NavMode.GNSS_INS)
    gnss_nis: float = 0.0             # normalised innovation squared
    gnss_rejected: bool = False
    innovation_norm: float = 0.0      # |GNSS innovation| [m]
    dead_reckoning_time: float = 0.0  # seconds since last accepted global fix


class FaultType(IntEnum):
    NONE = 0
    GNSS_OUTAGE = 1
    GNSS_INCONSISTENCY = 2
    IMU_BIAS = 3
    LIDAR_DROPOUT = 4
    STALE_MESSAGES = 5
    OBSTACLE_APPEARS = 6
    COMMUNICATION_LOSS = 7
    WHEEL_SLIP = 8
    BARO_DRIFT = 9
    MAG_INTERFERENCE = 10


@dataclass
class FaultEvent:
    """resiliencelab_interfaces/msg/FaultEvent."""
    header: Header = field(default_factory=Header)
    scenario_id: str = ""
    fault_type: int = int(FaultType.NONE)
    target: str = ""              # sensor id the fault acts on
    onset_time: float = 0.0
    end_time: float = -1.0        # -1 while active
    detected: bool = False
    detection_time: float = -1.0
    detected_by: str = ""
    params: dict[str, Any] = field(default_factory=dict)


class MissionState(IntEnum):
    IDLE = 0
    NORMAL = 1
    DEGRADED = 2
    LIMITED_OPERATION = 3
    SAFE_ACTION = 4
    RECOVERY = 5
    COMPLETE = 6
    ABORTED = 7


class SafeAction(IntEnum):
    NONE = 0
    SLOW = 1
    STOP_AND_HOLD = 2
    RETURN_TO_LAST_GOOD = 3
    LAND = 4
    ABORT = 5


@dataclass
class MissionStatus:
    """resiliencelab_interfaces/msg/MissionStatus."""
    header: Header = field(default_factory=Header)
    scenario_id: str = ""
    state: int = int(MissionState.IDLE)
    previous_state: int = int(MissionState.IDLE)
    state_entry_time: float = 0.0
    progress: float = 0.0           # 0..1 along the planned route
    distance_to_goal: float = 0.0
    safe_action: int = int(SafeAction.NONE)
    reason: str = ""
    replan_count: int = 0
