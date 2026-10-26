# ResilienceLab experiment summary

Simulated results from the pure-Python SITL stack; not real-world validation.

## Per scenario

| scenario | trials | success | collisions (trials) | RMSE mean [m] | detection rate | mean latency [s] |
|---|---|---|---|---|---|---|
| baseline_normal | 1 | 1/1 | 0 | 0.94 | - | - |
| combined_stress | 1 | 0/1 | 1 | 4.11 | 4/4 | 17.93 |
| comms_loss | 1 | 1/1 | 0 | 119.91 | 2/2 | 0.53 |
| gnss_inconsistency | 1 | 1/1 | 0 | 8.43 | 0/1 | - |
| gnss_outage | 1 | 1/1 | 0 | 1.88 | 1/1 | 0.95 |
| imu_bias | 1 | 0/1 | 0 | 1.05 | 0/1 | - |
| lidar_dropout | 1 | 1/1 | 0 | 1.01 | 1/1 | 0.50 |
| new_obstacle | 1 | 1/1 | 0 | 0.94 | 1/1 | 18.05 |
| stale_sensor_data | 1 | 0/1 | 1 | 2.68 | 1/1 | 0.75 |

## Per trial

| scenario | seed | mission_success | goal_reached | final_state | collision_steps | min_clearance_m | duration_s | rmse_m | error_p95_m | faults_detected | faults_declared | detection_latency_s | recovery_time_s | false_alarms | distance_m | replans | finish_reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| baseline_normal | 12345 | yes | yes | COMPLETE | 0 | 2.89 | 255.68 | 0.94 | 1.48 | 0 | 0 | - | - | 0 | 312.21 | 4 | goal reached (estimated) |
| combined_stress | 12345 | no | yes | COMPLETE | 501 | 0.00 | 338.72 | 4.11 | 9.34 | 4 | 4 | 17.93 | 64.11 | 0 | 325.96 | 6 | goal reached (estimated) |
| comms_loss | 12345 | yes | yes | COMPLETE | 0 | 2.10 | 323.42 | 119.91 | 333.35 | 2 | 2 | 0.53 | 3.86 | 1 | 311.74 | 19 | goal reached (estimated) |
| gnss_inconsistency | 12345 | yes | yes | COMPLETE | 0 | 1.66 | 261.92 | 8.43 | 14.89 | 0 | 1 | - | 114.72 | 1 | 296.68 | 10 | goal reached (estimated) |
| gnss_outage | 12345 | yes | yes | COMPLETE | 0 | 3.28 | 283.52 | 1.88 | 3.70 | 1 | 1 | 0.95 | 75.98 | 0 | 285.41 | 3 | goal reached (estimated) |
| imu_bias | 12345 | no | no | ABORTED | 0 | 0.39 | 420.00 | 1.05 | 1.64 | 0 | 1 | - | 127.92 | 0 | 441.35 | 7 | timeout |
| lidar_dropout | 12345 | yes | yes | COMPLETE | 0 | 2.40 | 269.26 | 1.01 | 1.58 | 1 | 1 | 0.50 | 0.50 | 0 | 269.02 | 1 | goal reached (estimated) |
| new_obstacle | 12345 | yes | yes | COMPLETE | 0 | 2.89 | 255.68 | 0.94 | 1.48 | 1 | 1 | 18.05 | 195.68 | 0 | 312.21 | 4 | goal reached (estimated) |
| stale_sensor_data | 12345 | no | no | ABORTED | 1298 | 0.00 | 420.00 | 2.68 | 5.57 | 1 | 1 | 0.75 | 75.78 | 2 | 423.36 | 7 | timeout |
