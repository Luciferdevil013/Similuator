# ResilienceLab experiment summary

Simulated results from the pure-Python SITL stack; not real-world validation.

## Per scenario

| scenario | trials | success | collisions (trials) | RMSE mean [m] | detection rate | mean latency [s] |
|---|---|---|---|---|---|---|
| baseline_normal | 1 | 1/1 | 0 | 0.78 | - | - |
| combined_stress | 1 | 0/1 | 1 | 1.15 | 2/3 | 16.12 |
| comms_loss | 1 | 1/1 | 0 | 10.63 | 2/2 | 0.53 |
| gnss_inconsistency | 1 | 1/1 | 0 | 5.22 | 0/1 | - |
| gnss_outage | 1 | 1/1 | 0 | 1.23 | 1/1 | 0.95 |
| imu_bias | 1 | 1/1 | 0 | 0.87 | 0/1 | - |
| lidar_dropout | 1 | 1/1 | 0 | 0.82 | 1/1 | 0.50 |
| new_obstacle | 1 | 1/1 | 0 | 0.85 | 1/1 | 0.05 |
| stale_sensor_data | 1 | 1/1 | 0 | 19.44 | 1/1 | 0.75 |

## Per trial

| scenario | seed | mission_success | goal_reached | final_state | collision_steps | min_clearance_m | duration_s | rmse_m | error_p95_m | faults_detected | faults_declared | detection_latency_s | recovery_time_s | false_alarms | distance_m | replans | finish_reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| baseline_normal | 12345 | yes | yes | COMPLETE | 0 | 7.00 | 137.46 | 0.78 | 1.25 | 0 | 0 | - | - | 0 | 242.28 | 1 | goal reached (estimated) |
| combined_stress | 12345 | no | yes | COMPLETE | 1543 | -0.53 | 185.98 | 1.15 | 1.77 | 2 | 3 | 16.12 | 25.34 | 0 | 242.92 | 1 | goal reached (estimated) |
| comms_loss | 12345 | yes | yes | COMPLETE | 0 | 6.99 | 215.72 | 10.63 | 29.39 | 2 | 2 | 0.53 | 3.86 | 0 | 244.20 | 9 | goal reached (estimated) |
| gnss_inconsistency | 12345 | yes | yes | COMPLETE | 0 | 2.03 | 136.84 | 5.22 | 11.51 | 0 | 1 | - | 36.84 | 0 | 241.91 | 1 | goal reached (estimated) |
| gnss_outage | 12345 | yes | yes | COMPLETE | 0 | 6.76 | 218.10 | 1.23 | 2.00 | 1 | 1 | 0.95 | 75.98 | 0 | 242.49 | 1 | goal reached (estimated) |
| imu_bias | 12345 | yes | yes | COMPLETE | 0 | 5.56 | 137.48 | 0.87 | 1.30 | 0 | 1 | - | 47.48 | 0 | 242.70 | 1 | goal reached (estimated) |
| lidar_dropout | 12345 | yes | yes | COMPLETE | 0 | 7.01 | 212.34 | 0.82 | 1.25 | 1 | 1 | 0.50 | 0.50 | 0 | 243.53 | 1 | goal reached (estimated) |
| new_obstacle | 12345 | yes | yes | COMPLETE | 0 | 0.70 | 146.82 | 0.85 | 1.30 | 1 | 1 | 0.05 | 86.82 | 0 | 248.49 | 6 | goal reached (estimated) |
| stale_sensor_data | 12345 | yes | yes | COMPLETE | 0 | 6.10 | 219.12 | 19.44 | 42.42 | 1 | 1 | 0.75 | 75.78 | 1 | 242.28 | 1 | goal reached (estimated) |
