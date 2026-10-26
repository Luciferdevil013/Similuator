from dataclasses import dataclass, field

from resilience.manager import ResilienceConfig, ResilienceManager
from sim.msgs import MissionState, SensorStatus


class Health:
    def __init__(self, down=()):
        self.specs = {s: None for s in ("imu", "gnss", "wheel_odom", "lidar")}
        self.down = set(down)

    def status_of(self, s):
        return SensorStatus.TIMEOUT if s in self.down else SensorStatus.OK


class Ekf:
    def __init__(self, sigma=0.99):
        self.sigma = sigma

    def pos_sigma_horizontal(self):
        return self.sigma


@dataclass
class Gnss:
    outage: bool = False
    confirmed: bool = False
    nis: float = 1.0
    innovation_norm: float = 0.0
    reasons: list = field(default_factory=list)


def run(m, health, ekf, gnss, t0, t1, dt=0.02, dist=0.0):
    t = t0
    while t < t1:
        m.step(t, dt, health_monitor=health, ekf=ekf, gnss_state=gnss,
               distance_travelled=dist)
        t += dt
    return t


def test_silent_gnss_enters_dead_reckoning_quickly():
    # A total outage produces no GNSS messages, so the monitor never flags
    # it; the health timeout alone must drive the state machine.
    m = ResilienceManager(ResilienceConfig())
    run(m, Health(), Ekf(), Gnss(), 0, 5)
    assert m.state is MissionState.NORMAL
    run(m, Health(down={"gnss"}), Ekf(), Gnss(), 5, 6.5)
    assert m.state is MissionState.LIMITED_OPERATION
    assert m.speed_limit == m.cfg.speed_limited


def test_dead_reckoning_budget_forces_safe_action():
    m = ResilienceManager(ResilienceConfig(dr_time_budget=10))
    run(m, Health(down={"gnss"}), Ekf(), Gnss(), 0, 12)
    assert m.state is MissionState.SAFE_ACTION and not m.allow_motion


def test_no_fallback_means_immediate_stop():
    m = ResilienceManager(ResilienceConfig())
    run(m, Health(down={"gnss", "wheel_odom"}), Ekf(), Gnss(), 0, 1.5)
    assert m.state is MissionState.SAFE_ACTION


def test_lidar_loss_stops_and_recovers():
    m = ResilienceManager(ResilienceConfig(recovery_dwell=2.0))
    run(m, Health(down={"lidar"}), Ekf(), Gnss(), 0, 1)
    assert m.state is MissionState.SAFE_ACTION
    # SAFE_ACTION holds >= 3 s, then RECOVERY validates for recovery_dwell.
    run(m, Health(), Ekf(), Gnss(), 1, 4)
    assert m.state is MissionState.RECOVERY
    run(m, Health(), Ekf(), Gnss(), 4, 7)
    assert m.state is MissionState.NORMAL


def test_recovery_survives_a_one_sample_sigma_spike():
    m = ResilienceManager(ResilienceConfig(recovery_dwell=6.0))
    run(m, Health(down={"lidar"}), Ekf(), Gnss(), 0, 1)
    run(m, Health(), Ekf(), Gnss(), 1, 5)
    assert m.state is MissionState.RECOVERY
    m.step(5.0, 0.02, health_monitor=Health(), ekf=Ekf(1.98), gnss_state=Gnss(),
           distance_travelled=0.0)
    assert m.state is MissionState.RECOVERY          # used to flap to SAFE_ACTION
    run(m, Health(), Ekf(1.98), Gnss(), 5.02, 8)     # but a sustained excursion fails
    assert m.state is MissionState.SAFE_ACTION


def test_goal_reached_is_complete():
    m = ResilienceManager(ResilienceConfig())
    m.step(1.0, 0.0, health_monitor=Health(), ekf=Ekf(), gnss_state=Gnss(),
           distance_travelled=0.0, goal_reached=True)
    assert m.state is MissionState.COMPLETE and not m.allow_motion
