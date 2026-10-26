// Shapes mirroring bridge/snapshot.py. Kept hand-written rather than
// generated so the field names the dashboard depends on are reviewable in
// one place next to the Python that produces them.

export interface Vec3 extends Array<number> {
  0: number;
  1: number;
  2: number;
}

export interface Estimate {
  position: number[];
  velocity: number[];
  yaw_deg: number;
  roll_deg: number;
  pitch_deg: number;
  pos_sigma_h: number;
  vel_sigma: number;
  yaw_sigma_deg: number;
  gyro_bias: number[];
  accel_bias: number[];
  baro_bias: number;
  odom_scale: number;
  updates: number;
  rejections: number;
}

export interface ResilienceBlock {
  state: string;
  previous_state: string | null;
  nav_mode: string;
  safe_action: string | null;
  speed_limit: number;
  reason: string;
  allow_motion: boolean;
  dead_reckoning_time_s: number;
  dead_reckoning_distance_m: number;
}

export interface GnssIntegrity {
  flagged: boolean;
  confirmed: boolean;
  /** "consistent" | "inconsistent" -- never a claim about the cause. */
  status: string;
  nis: number | null;
  nis_window_mean: number | null;
  cusum_max: number | null;
  innovation_norm: number | null;
  reasons: string[];
  detail: string;
  outage: boolean;
}

export interface SensorHealthRow {
  status: string;
  rate_hz: number;
  expected_hz: number;
  availability: number;
  flags: number;
  last_valid: number;
  detail: string;
}

export interface MissionProgress {
  distance_travelled_m: number;
  distance_to_goal_m: number;
  goal_reached: boolean;
  replans: number;
  failed_plans: number;
  collisions: number;
  min_clearance_m: number;
}

export interface ActiveFault {
  type: string;
  target: string;
  onset: number;
  detected: boolean;
  detected_time: number | null;
  detected_by: string;
  detection_latency_s: number | null;
}

export interface ControlBlock {
  speed_cmd: number;
  yaw_rate_cmd: number;
  cross_track_m: number;
  heading_error_deg: number;
  distance_to_goal_m: number;
  obstacle_distance_m: number | null;
  limiting_constraint: string;
  emergency_stop: boolean;
  stuck: boolean;
}

export interface LidarOutline {
  angles: number[];
  ranges: (number | null)[];
  max_range: number;
}

export interface BatteryBlock {
  voltage: number;
  current: number;
  percentage: number;
  temperature: number;
}

/**
 * Ground truth. Present for display and scoring only. Nothing in this
 * dashboard feeds it back to the simulator, and the simulator's navigation
 * stack never reads it -- see the note the bridge attaches to this block.
 */
export interface GroundTruth {
  position: number[];
  velocity: number[];
  yaw_deg: number;
  roll_deg: number;
  pitch_deg: number;
  speed: number;
  position_error_m: number;
  _note: string;
}

export interface StateTransition {
  t: number;
  from: string;
  to: string;
  reason: string;
  dr_time: number;
  dr_distance: number;
}

export interface FaultRecord {
  scenario_id: string;
  fault_type: string;
  target: string;
  onset: number;
  end: number | null;
  detected: boolean;
  detection_time: number | null;
  detection_latency: number | null;
  detected_by: string;
  params: Record<string, unknown>;
}

export interface FaultWindow {
  onset: number;
  end: number;
  type: string;
}

export interface Telemetry {
  type: "telemetry";
  t: number;
  estimate: Estimate;
  resilience: ResilienceBlock;
  gnss_integrity: GnssIntegrity;
  sensors: Record<string, SensorHealthRow>;
  mission_progress: MissionProgress;
  faults_active: ActiveFault[];
  path_version: number;
  path?: number[][];
  transitions: StateTransition[];
  fault_history: FaultRecord[];
  control?: ControlBlock;
  lidar?: LidarOutline;
  battery?: BatteryBlock;
  ground_truth?: GroundTruth;
  paused?: boolean;
  /** false before the first Start when the bridge was launched paused. */
  started?: boolean;
  finished?: boolean;
  speed?: number;
  scenario_file?: string;
}

export interface ObstacleSpec {
  id: string;
  kind: "cylinder" | "box";
  x: number;
  y: number;
  z_base: number;
  height: number;
  radius: number;
  half_x: number;
  half_y: number;
  yaw: number;
  known_a_priori: boolean;
  spawn_time: number;
}

export interface WorldMessage {
  type: "world";
  terrain: {
    origin: [number, number];
    resolution: number;
    shape: [number, number];
    height: number[][];
    z_range: [number, number];
  };
  obstacles: ObstacleSpec[];
  fault_windows: FaultWindow[];
  mission: {
    start: number[];
    goal: number[];
    start_yaw_deg: number;
    goal_tolerance: number;
    timeout_s: number;
  };
  scenario: { id: string; description: string; seed: number; duration_s: number };
  faults_declared: {
    type: string;
    target: string;
    onset: number;
    duration: number;
    ramp: number;
  }[];
}

export interface ResultsMessage {
  type: "results";
  metrics: Record<string, Record<string, unknown>>;
}

export type BridgeMessage = Telemetry | WorldMessage | ResultsMessage;

export type ScreenId =
  | "overview"
  | "map"
  | "simulation"
  | "sensors"
  | "results"
  | "replay";
