import numpy as np

from estimation.ekf import ErrorStateEkf, EkfConfig


def make_ekf():
    e = ErrorStateEkf(EkfConfig())
    e.initialise(0.0, np.zeros(3), yaw=0.0)
    return e


def test_zupt_learns_gyro_bias_while_stationary():
    e = make_ekf()
    true_bias = np.array([0.0, 0.0, 0.01])
    g = np.array([0.0, 0.0, 9.80665])
    t = 0.0
    for _ in range(2000):                 # 10 s at 200 Hz, parked
        t += 0.005
        e.propagate(t, true_bias, g)
        if _ % 4 == 0:
            e.update_zero_velocity()
    assert abs(e.b_g[2] - 0.01) < 0.002
    assert abs(np.degrees(e.yaw)) < 5.0   # was ~2 deg/s of drift before the fix


def test_odometry_reacquires_after_velocity_divergence():
    e = make_ekf()
    e.v = np.array([3.0, 0.0, 0.0])       # filter thinks 3 m/s, wheels say 0
    accepted = [e.update_wheel_odometry(0.0)[0] for _ in range(60)]
    assert not accepted[0]                # first sample is gated out...
    assert any(accepted)                  # ...but the lockout escape reopens the gate
    assert np.linalg.norm(e.v) < 0.5


def test_vertical_constraint_observes_body_z_velocity():
    e = make_ekf()
    e.v = np.array([1.0, 0.0, -0.4])
    for _ in range(40):
        e.update_wheel_odometry(1.0)
    assert abs(e.v[2]) < 0.1
