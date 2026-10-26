# ResilienceLab experiment summary

Simulated results from the pure-Python SITL stack; not real-world validation.

## Per scenario

| scenario | trials | success | collisions (trials) | RMSE mean [m] | detection rate | mean latency [s] |
|---|---|---|---|---|---|---|
| baseline_normal | 1 | 1/1 | 0 | 0.89 | - | - |
| combined_stress | 1 | 1/1 | 0 | 1.91 | 2/3 | 8.10 |
| comms_loss | 1 | 1/1 | 0 | 35.57 | 2/2 | 0.53 |
| gnss_inconsistency | 1 | 1/1 | 0 | 8.16 | 1/1 | 31.30 |
| gnss_outage | 1 | 0/1 | 1 | 2.01 | 1/1 | 0.95 |
| imu_bias | 1 | 1/1 | 0 | 1.03 | 0/1 | - |
| lidar_dropout | 1 | 1/1 | 0 | 0.91 | 1/1 | 0.50 |
| new_obstacle | 1 | 1/1 | 0 | 0.89 | 1/1 | 8.26 |
| stale_sensor_data | 1 | 1/1 | 0 | 12.66 | 1/1 | 0.75 |

## Per trial

| scenario | seed | mission_success | goal_reached | final_state | collision_steps | min_clearance_m | duration_s | rmse_m | error_p95_m | faults_detected | faults_declared | detection_latency_s | recovery_time_s | false_alarms | distance_m | replans | finish_reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| baseline_normal | 12345 | yes | yes | COMPLETE | 0 | 0.86 | 172.66 | 0.89 | 1.42 | 0 | 0 | - | - | 0 | 262.16 | 12 | goal reached (estimated) |
| combined_stress | 12345 | yes | yes | COMPLETE | 0 | 1.46 | 197.44 | 1.91 | 3.71 | 2 | 3 | 8.10 | 62.63 | 0 | 249.47 | 5 | goal reached (estimated) |
| comms_loss | 12345 | yes | yes | COMPLETE | 0 | 1.09 | 241.72 | 35.57 | 84.34 | 2 | 2 | 0.53 | 3.86 | 0 | 257.08 | 23 | goal reached (estimated) |
| gnss_inconsistency | 12345 | yes | yes | COMPLETE | 0 | 0.88 | 187.12 | 8.16 | 13.96 | 1 | 1 | 31.30 | 39.94 | 0 | 282.89 | 12 | goal reached (estimated) |
| gnss_outage | 12345 | no | yes | COMPLETE | 1805 | -0.24 | 246.94 | 2.01 | 4.51 | 1 | 1 | 0.95 | 75.98 | 0 | 264.33 | 9 | goal reached (estimated) |
| imu_bias | 12345 | yes | yes | COMPLETE | 0 | 1.60 | 172.98 | 1.03 | 1.64 | 0 | 1 | - | 82.98 | 0 | 268.66 | 9 | goal reached (estimated) |
| lidar_dropout | 12345 | yes | yes | COMPLETE | 0 | 1.80 | 232.42 | 0.91 | 1.42 | 1 | 1 | 0.50 | 0.50 | 0 | 255.09 | 1 | goal reached (estimated) |
| new_obstacle | 12345 | yes | yes | COMPLETE | 0 | 0.86 | 172.66 | 0.89 | 1.42 | 1 | 1 | 8.26 | 112.66 | 0 | 262.16 | 12 | goal reached (estimated) |
| stale_sensor_data | 12345 | yes | yes | COMPLETE | 0 | 2.23 | 313.32 | 12.66 | 34.50 | 1 | 1 | 0.75 | 75.78 | 1 | 341.07 | 5 | goal reached (estimated) |
