# ResilienceLab experiment summary

Simulated results from the pure-Python SITL stack; not real-world validation.

## Per scenario

| scenario | trials | success | collisions (trials) | RMSE mean [m] | detection rate | mean latency [s] |
|---|---|---|---|---|---|---|
| baseline_normal | 1 | 1/1 | 0 | 0.86 | - | - |
| combined_stress | 1 | 1/1 | 0 | 1.31 | 2/3 | 6.30 |
| comms_loss | 1 | 1/1 | 0 | 23.10 | 2/2 | 0.53 |
| gnss_inconsistency | 1 | 1/1 | 0 | 6.48 | 0/1 | - |
| gnss_outage | 1 | 1/1 | 0 | 2.51 | 1/1 | 0.95 |
| imu_bias | 1 | 1/1 | 0 | 0.96 | 0/1 | - |
| lidar_dropout | 1 | 1/1 | 0 | 0.87 | 1/1 | 0.50 |
| new_obstacle | 1 | 1/1 | 0 | 0.86 | 1/1 | 1.95 |
| stale_sensor_data | 1 | 1/1 | 0 | 18.61 | 1/1 | 0.75 |

## Per trial

| scenario | seed | mission_success | goal_reached | final_state | collision_steps | min_clearance_m | duration_s | rmse_m | error_p95_m | faults_detected | faults_declared | detection_latency_s | recovery_time_s | false_alarms | distance_m | replans | finish_reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| baseline_normal | 12345 | yes | yes | COMPLETE | 0 | 1.07 | 146.96 | 0.86 | 1.39 | 0 | 0 | - | - | 0 | 251.79 | 1 | goal reached (estimated) |
| combined_stress | 12345 | yes | yes | COMPLETE | 0 | 0.89 | 188.52 | 1.31 | 3.51 | 2 | 3 | 6.30 | 59.65 | 0 | 251.91 | 1 | goal reached (estimated) |
| comms_loss | 12345 | yes | yes | COMPLETE | 0 | 1.07 | 234.10 | 23.10 | 63.88 | 2 | 2 | 0.53 | 3.86 | 1 | 254.55 | 13 | goal reached (estimated) |
| gnss_inconsistency | 12345 | yes | yes | COMPLETE | 0 | 1.06 | 155.70 | 6.48 | 12.41 | 0 | 1 | - | 55.70 | 0 | 260.23 | 4 | goal reached (estimated) |
| gnss_outage | 12345 | yes | yes | COMPLETE | 0 | 1.07 | 228.52 | 2.51 | 5.86 | 1 | 1 | 0.95 | 75.98 | 0 | 253.42 | 1 | goal reached (estimated) |
| imu_bias | 12345 | yes | yes | COMPLETE | 0 | 1.07 | 148.58 | 0.96 | 1.42 | 0 | 1 | - | 58.58 | 0 | 253.68 | 1 | goal reached (estimated) |
| lidar_dropout | 12345 | yes | yes | COMPLETE | 0 | 1.07 | 223.12 | 0.87 | 1.36 | 1 | 1 | 0.50 | 0.50 | 0 | 254.07 | 1 | goal reached (estimated) |
| new_obstacle | 12345 | yes | yes | COMPLETE | 0 | 1.07 | 146.96 | 0.86 | 1.39 | 1 | 1 | 1.95 | 86.96 | 0 | 251.79 | 1 | goal reached (estimated) |
| stale_sensor_data | 12345 | yes | yes | COMPLETE | 0 | 1.07 | 230.18 | 18.61 | 41.67 | 1 | 1 | 0.75 | 75.78 | 1 | 253.88 | 2 | goal reached (estimated) |
