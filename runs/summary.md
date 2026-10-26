# ResilienceLab experiment summary

Simulated results from the pure-Python SITL stack; not real-world validation.

## Per scenario

| scenario | trials | success | collisions (trials) | RMSE mean [m] | detection rate | mean latency [s] |
|---|---|---|---|---|---|---|
| baseline_normal | 3 | 3/3 | 0 | 1.29 | - | - |
| combined_stress | 3 | 1/3 | 1 | 3.21 | 9/11 | 37.17 |
| comms_loss | 3 | 3/3 | 0 | 66.16 | 6/6 | 0.53 |
| gnss_inconsistency | 3 | 2/3 | 0 | 7.39 | 0/3 | - |
| gnss_outage | 3 | 2/3 | 0 | 5.61 | 3/3 | 0.93 |
| imu_bias | 3 | 2/3 | 1 | 1.62 | 0/3 | - |
| lidar_dropout | 3 | 2/3 | 0 | 1.29 | 3/3 | 0.48 |
| new_obstacle | 3 | 3/3 | 0 | 1.29 | 3/3 | 102.75 |
| stale_sensor_data | 3 | 2/3 | 0 | 11.46 | 3/3 | 0.75 |

## Per trial

| scenario | seed | mission_success | goal_reached | final_state | collision_steps | min_clearance_m | duration_s | rmse_m | error_p95_m | faults_detected | faults_declared | detection_latency_s | recovery_time_s | false_alarms | distance_m | replans | finish_reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| baseline_normal | 2 | yes | yes | COMPLETE | 0 | 1.55 | 415.70 | 1.48 | 2.59 | 0 | 0 | - | - | 1 | 487.52 | 28 | goal reached (estimated) |
| baseline_normal | 7 | yes | yes | COMPLETE | 0 | 1.51 | 286.90 | 1.52 | 2.43 | 0 | 0 | - | - | 0 | 397.14 | 30 | goal reached (estimated) |
| baseline_normal | 12345 | yes | yes | COMPLETE | 0 | 2.21 | 187.24 | 0.86 | 1.36 | 0 | 0 | - | - | 0 | 287.23 | 7 | goal reached (estimated) |
| combined_stress | 2 | no | no | ABORTED | 94315 | -0.57 | 420.00 | 3.04 | 5.03 | 4 | 4 | 12.71 | 66.89 | 0 | 130.12 | 330 | timeout |
| combined_stress | 7 | no | no | ABORTED | 0 | 0.58 | 420.00 | 3.27 | 7.64 | 3 | 4 | 98.30 | 64.11 | 0 | 371.28 | 23 | timeout |
| combined_stress | 12345 | yes | yes | COMPLETE | 0 | 2.41 | 204.02 | 3.31 | 8.73 | 2 | 3 | 0.50 | 68.43 | 0 | 253.34 | 5 | goal reached (estimated) |
| comms_loss | 2 | yes | yes | COMPLETE | 0 | 0.88 | 380.72 | 93.09 | 267.61 | 2 | 2 | 0.53 | 3.86 | 1 | 358.26 | 44 | goal reached (estimated) |
| comms_loss | 7 | yes | yes | COMPLETE | 0 | 3.23 | 316.52 | 68.01 | 194.30 | 2 | 2 | 0.53 | 3.86 | 1 | 332.76 | 62 | goal reached (estimated) |
| comms_loss | 12345 | yes | yes | COMPLETE | 0 | 2.13 | 244.72 | 37.37 | 101.93 | 2 | 2 | 0.53 | 3.86 | 0 | 255.66 | 11 | goal reached (estimated) |
| gnss_inconsistency | 2 | no | no | ABORTED | 0 | 0.41 | 420.00 | 6.58 | 14.07 | 0 | 1 | - | 114.72 | 1 | 478.47 | 57 | timeout |
| gnss_inconsistency | 7 | yes | yes | COMPLETE | 0 | 2.56 | 296.70 | 8.12 | 15.39 | 0 | 1 | - | 114.72 | 1 | 384.59 | 22 | goal reached (estimated) |
| gnss_inconsistency | 12345 | yes | yes | COMPLETE | 0 | 1.25 | 337.52 | 7.45 | 14.66 | 0 | 1 | - | 114.72 | 1 | 458.67 | 17 | goal reached (estimated) |
| gnss_outage | 2 | yes | yes | COMPLETE | 0 | 0.92 | 335.06 | 6.62 | 14.59 | 1 | 1 | 0.90 | 75.92 | 1 | 306.67 | 11 | goal reached (estimated) |
| gnss_outage | 7 | no | no | ABORTED | 0 | 2.26 | 420.00 | 2.19 | 4.56 | 1 | 1 | 0.95 | 75.98 | 1 | 435.13 | 28 | timeout |
| gnss_outage | 12345 | yes | yes | COMPLETE | 0 | 2.41 | 257.86 | 8.02 | 18.51 | 1 | 1 | 0.95 | 75.98 | 1 | 263.81 | 3 | goal reached (estimated) |
| imu_bias | 2 | yes | yes | COMPLETE | 0 | 0.86 | 344.80 | 1.71 | 2.78 | 0 | 1 | - | 119.32 | 0 | 413.60 | 35 | goal reached (estimated) |
| imu_bias | 7 | no | no | ABORTED | 5059 | -0.11 | 420.00 | 2.07 | 3.04 | 0 | 1 | - | 207.52 | 1 | 470.51 | 54 | timeout |
| imu_bias | 12345 | yes | yes | COMPLETE | 0 | 2.41 | 180.52 | 1.08 | 1.75 | 0 | 1 | - | 90.52 | 0 | 272.64 | 6 | goal reached (estimated) |
| lidar_dropout | 2 | no | no | ABORTED | 0 | 0.99 | 420.00 | 1.45 | 2.41 | 1 | 1 | 0.45 | 0.46 | 0 | 385.00 | 26 | timeout |
| lidar_dropout | 7 | yes | yes | COMPLETE | 0 | 5.07 | 325.32 | 1.52 | 2.45 | 1 | 1 | 0.50 | 0.50 | 0 | 330.67 | 14 | goal reached (estimated) |
| lidar_dropout | 12345 | yes | yes | COMPLETE | 0 | 2.41 | 235.94 | 0.90 | 1.41 | 1 | 1 | 0.50 | 0.50 | 0 | 257.34 | 1 | goal reached (estimated) |
| new_obstacle | 2 | yes | yes | COMPLETE | 0 | 1.55 | 415.70 | 1.48 | 2.59 | 1 | 1 | 218.55 | 190.14 | 0 | 487.52 | 28 | goal reached (estimated) |
| new_obstacle | 7 | yes | yes | COMPLETE | 0 | 1.51 | 286.90 | 1.52 | 2.43 | 1 | 1 | 83.25 | 226.90 | 0 | 397.14 | 30 | goal reached (estimated) |
| new_obstacle | 12345 | yes | yes | COMPLETE | 0 | 2.21 | 187.24 | 0.86 | 1.36 | 1 | 1 | 6.45 | 127.24 | 0 | 287.23 | 7 | goal reached (estimated) |
| stale_sensor_data | 2 | no | no | ABORTED | 0 | 1.18 | 420.00 | 13.82 | 41.16 | 1 | 1 | 0.75 | 75.78 | 1 | 270.47 | 20 | timeout |
| stale_sensor_data | 7 | yes | yes | COMPLETE | 0 | 3.89 | 370.10 | 6.41 | 14.68 | 1 | 1 | 0.75 | 75.78 | 1 | 368.88 | 15 | goal reached (estimated) |
| stale_sensor_data | 12345 | yes | yes | COMPLETE | 0 | 2.41 | 281.60 | 14.14 | 31.20 | 1 | 1 | 0.75 | 75.78 | 1 | 303.45 | 5 | goal reached (estimated) |
