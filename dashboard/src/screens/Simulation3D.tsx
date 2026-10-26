import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Card, Stat, num } from "../components/Panels";
import type { Telemetry, WorldMessage } from "../types";
import type { HistoryRow } from "../useTelemetry";

interface Props {
  latest: Telemetry;
  world: WorldMessage;
  path: number[][];
  history?: HistoryRow[];
}

/**
 * Three.js view of the terrain, obstacles, plan and vehicle.
 *
 * The scene is built once from the `world` message and then only object
 * transforms are updated per frame -- no geometry is rebuilt at 20 Hz. The
 * estimated pose and the true pose are drawn as two distinct bodies so the
 * localisation error is visible as a physical offset rather than a number.
 */
export function Simulation3D({ latest, world, path, history = [] }: Props) {
  // Read once when the scene is built, to pre-fill the trail.
  const historyRef = useRef(history);
  historyRef.current = history;
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    estBody: THREE.Group;
    trueBody: THREE.Group;
    sigmaRing: THREE.Mesh;
    planLine: THREE.Line;
    trailLine: THREE.Line;
    scanPoints: THREE.Points;
    trail: number[];
    sampleMesh: (x: number, y: number) => number;
    isDrone: boolean;
    rotors: THREE.Mesh[];
    shadow: THREE.Mesh;
    stem: THREE.Line;
    dispose: () => void;
  } | null>(null);
  const followRef = useRef(true);

  // ---- build the scene once per world -------------------------------
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isDrone = world.vehicle?.type === "drone";
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070a0e);
    scene.fog = new THREE.Fog(0x070a0e, 140, 460);

    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.5,
      2000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x20160e, 1.1));
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(-90, 140, 110);
    scene.add(sun);

    // --- terrain mesh from the decimated heightmap
    const T = world.terrain;
    const [ny, nx] = T.shape;
    const wx = (nx - 1) * T.resolution;
    const wy = (ny - 1) * T.resolution;
    const geo = new THREE.PlaneGeometry(wx, wy, nx - 1, ny - 1);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        // PlaneGeometry rows run -y to +y after the -90deg X rotation below,
        // so the row index is flipped to keep the map the right way up.
        const h = T.height[ny - 1 - j]?.[i] ?? 0;
        pos.setZ(j * nx + i, h);
      }
    }
    geo.computeVertexNormals();
    const terrain = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0x4f6b45,
        roughness: 0.95,
        metalness: 0.0,
        flatShading: false,
      })
    );
    terrain.rotation.x = -Math.PI / 2;
    terrain.position.set(T.origin[0] + wx / 2, 0, -(T.origin[1] + wy / 2));
    scene.add(terrain);

    const wire = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color: 0xc8ff4d,
        wireframe: true,
        transparent: true,
        opacity: 0.07,
      })
    );
    wire.rotation.copy(terrain.rotation);
    wire.position.copy(terrain.position);
    scene.add(wire);

    // The browser gets a DECIMATED heightmap, so the surface it draws is not
    // the surface the simulator computed with. Obstacles carry their true
    // z_base, and on a ridge the smoothed mesh sits metres below it -- which
    // is why they appear to hover. Everything that must look like it is
    // resting on the ground is therefore placed against the mesh as drawn,
    // sampled bilinearly, rather than against the true terrain.
    const sampleMesh = (x: number, y: number): number => {
      const fx = (x - T.origin[0]) / T.resolution;
      const fy = (y - T.origin[1]) / T.resolution;
      const i0 = Math.max(0, Math.min(nx - 1, Math.floor(fx)));
      const j0 = Math.max(0, Math.min(ny - 1, Math.floor(fy)));
      const i1 = Math.min(nx - 1, i0 + 1);
      const j1 = Math.min(ny - 1, j0 + 1);
      const tx = Math.max(0, Math.min(1, fx - i0));
      const ty = Math.max(0, Math.min(1, fy - j0));
      const h00 = T.height[j0]?.[i0] ?? 0;
      const h10 = T.height[j0]?.[i1] ?? 0;
      const h01 = T.height[j1]?.[i0] ?? 0;
      const h11 = T.height[j1]?.[i1] ?? 0;
      return (
        h00 * (1 - tx) * (1 - ty) + h10 * tx * (1 - ty) +
        h01 * (1 - tx) * ty + h11 * tx * ty
      );
    };

    // --- obstacles. Colour encodes whether the planner knew in advance.
    for (const o of world.obstacles) {
      const mat = new THREE.MeshStandardMaterial({
        color: o.known_a_priori ? 0x8c6239 : 0xc2502f,
        roughness: 0.8,
      });
      const g =
        o.kind === "cylinder"
          ? new THREE.CylinderGeometry(o.radius, o.radius, o.height, 18)
          : new THREE.BoxGeometry(o.half_x * 2, o.height, o.half_y * 2);
      const m = new THREE.Mesh(g, mat);
      // Sunk slightly so the base is never visible above the mesh.
      m.position.set(o.x, sampleMesh(o.x, o.y) + o.height / 2 - 0.15, -o.y);
      if (o.kind === "box") m.rotation.y = -o.yaw;
      scene.add(m);
    }

    // --- mission markers
    const mkMarker = (x: number, y: number, color: number) => {
      const m = new THREE.Mesh(
        new THREE.ConeGeometry(1.1, 3.2, 14),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.4 })
      );
      m.position.set(x, sampleMesh(x, y) + 3.4, -y);
      m.rotation.x = Math.PI;
      scene.add(m);
    };
    mkMarker(world.mission.start[0], world.mission.start[1], 0x4dffa6);
    mkMarker(world.mission.goal[0], world.mission.goal[1], 0x4de2ff);

    // --- vehicle bodies: estimate (solid) and truth (wireframe)
    const makeBody = (color: number, wireframeOnly: boolean) => {
      const grp = new THREE.Group();
      const chassis = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.38, 0.76),
        new THREE.MeshStandardMaterial({
          color,
          wireframe: wireframeOnly,
          transparent: wireframeOnly,
          opacity: wireframeOnly ? 0.85 : 1,
          emissive: color,
          emissiveIntensity: wireframeOnly ? 0.5 : 0.18,
        })
      );
      chassis.position.y = 0.3;
      grp.add(chassis);
      const nose = new THREE.Mesh(
        new THREE.ConeGeometry(0.17, 0.5, 10),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5 })
      );
      nose.rotation.z = -Math.PI / 2;
      nose.position.set(0.68, 0.3, 0);
      grp.add(nose);
      // A 0.9 m chassis is a few pixels from 40 m away. The beacon makes the
      // vehicle findable without inflating the body out of scale.
      const beacon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 3.0, 8),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55 })
      );
      beacon.position.y = 1.8;
      grp.add(beacon);
      return grp;
    };
    // Quadrotor: body, four arms, four rotor discs (spun in the render loop).
    // Drawn 4x scale -- a 0.5 m frame is a few pixels from 50 m away.
    const rotors: THREE.Mesh[] = [];
    const makeQuad = (color: number, wireframeOnly: boolean) => {
      const grp = new THREE.Group();
      const S = 4.0;
      const mat = new THREE.MeshStandardMaterial({
        color, wireframe: wireframeOnly, transparent: wireframeOnly,
        opacity: wireframeOnly ? 0.8 : 1, emissive: color,
        emissiveIntensity: wireframeOnly ? 0.6 : 0.25, roughness: 0.4, metalness: 0.3,
      });
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.34 * S, 0.12 * S, 0.34 * S), mat);
      grp.add(body);
      for (let k = 0; k < 4; k++) {
        const ang = Math.PI / 4 + (k * Math.PI) / 2;
        const ax = Math.cos(ang) * 0.42 * S;
        const az = Math.sin(ang) * 0.42 * S;
        const arm = new THREE.Mesh(
          new THREE.BoxGeometry(0.62 * S, 0.04 * S, 0.05 * S),
          k === 0 || k === 3
            ? new THREE.MeshStandardMaterial({ color: 0xff5c7a, emissive: 0xff5c7a,
                                               emissiveIntensity: 0.4, wireframe: wireframeOnly })
            : mat);
        arm.position.set(ax / 2, 0, az / 2);
        arm.rotation.y = -ang;
        grp.add(arm);
        const rotor = new THREE.Mesh(
          new THREE.CylinderGeometry(0.24 * S, 0.24 * S, 0.01 * S, 24),
          new THREE.MeshBasicMaterial({ color: wireframeOnly ? color : 0xdfe7ef,
                                        transparent: true, opacity: wireframeOnly ? 0.35 : 0.28,
                                        wireframe: wireframeOnly }));
        rotor.position.set(ax, 0.07 * S, az);
        grp.add(rotor);
        if (!wireframeOnly) rotors.push(rotor);
      }
      return grp;
    };
    const estBody = isDrone ? makeQuad(0x4de2ff, false) : makeBody(0x4de2ff, false);
    const trueBody = isDrone ? makeQuad(0xff8a3d, true) : makeBody(0xff8a3d, true);
    scene.add(estBody, trueBody);

    // Ground shadow + altitude stem make height readable at a glance.
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.2, 32),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45 }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.visible = isDrone;
    scene.add(shadow);
    const stemGeo = new THREE.BufferGeometry();
    stemGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
    const stem = new THREE.Line(stemGeo, new THREE.LineDashedMaterial({
      color: 0x4de2ff, dashSize: 0.8, gapSize: 0.6, transparent: true, opacity: 0.7 }));
    stem.visible = isDrone;
    scene.add(stem);

    // --- 1-sigma uncertainty ring around the estimate
    const sigmaRing = new THREE.Mesh(
      new THREE.RingGeometry(0.98, 1.0, 48),
      new THREE.MeshBasicMaterial({
        color: 0x4de2ff,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
      })
    );
    sigmaRing.rotation.x = -Math.PI / 2;
    scene.add(sigmaRing);

    const mkLine = (color: number, width: number, count: number) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(count * 3), 3)
      );
      g.setDrawRange(0, 0);
      return new THREE.Line(
        g,
        new THREE.LineBasicMaterial({ color, linewidth: width })
      );
    };
    const planLine = mkLine(0xc8ff4d, 2, 4096);
    const trailLine = mkLine(0xff8a3d, 2, 12000);
    scene.add(planLine, trailLine);

    const scanGeo = new THREE.BufferGeometry();
    scanGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(360 * 3), 3)
    );
    scanGeo.setDrawRange(0, 0);
    const scanPoints = new THREE.Points(
      scanGeo,
      new THREE.PointsMaterial({ color: 0xffd866, size: 0.42 })
    );
    scene.add(scanPoints);

    // --- orbit-style mouse control, written inline to avoid pulling in
    //     OrbitControls and its event-handling surface.
    const cam = { az: -0.7, el: isDrone ? 0.42 : 0.52, dist: isDrone ? 55 : 36 };
    let drag = false;
    let lx = 0;
    let ly = 0;
    const onDown = (e: PointerEvent) => {
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
    };
    const onUp = () => {
      drag = false;
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      cam.az -= (e.clientX - lx) * 0.006;
      cam.el = Math.max(0.08, Math.min(1.5, cam.el + (e.clientY - ly) * 0.005));
      lx = e.clientX;
      ly = e.clientY;
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cam.dist = Math.max(8, Math.min(320, cam.dist * (1 + e.deltaY * 0.0012)));
    };
    const el = renderer.domElement;
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointermove", onMove);
    el.addEventListener("wheel", onWheel, { passive: false });

    const onResize = () => {
      if (!mount.clientWidth) return;
      camera.aspect = mount.clientWidth / Math.max(mount.clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    let raf = 0;
    const target = new THREE.Vector3();
    let snapped = false;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      for (const r of rotors) r.rotation.y += 0.9;
      // Start on the vehicle rather than easing over from the map centre,
      // which on a slow GPU took long enough to look like an empty scene.
      if (!snapped && followRef.current && estBody.position.lengthSq() > 0) {
        target.copy(estBody.position);
        snapped = true;
      }
      const focus = followRef.current ? estBody.position : terrain.position;
      target.lerp(focus, followRef.current ? 0.12 : 0.05);
      camera.position.set(
        target.x + cam.dist * Math.cos(cam.el) * Math.cos(cam.az),
        target.y + cam.dist * Math.sin(cam.el),
        target.z + cam.dist * Math.cos(cam.el) * Math.sin(cam.az)
      );
      camera.lookAt(target);
      renderer.render(scene, camera);
    };
    animate();

    // Pre-fill the truth trail from the buffered history so opening this tab
    // mid-run shows where the vehicle has been.
    const trail: number[] = [];
    for (const r of historyRef.current) {
      if (r.trueX === null || r.trueY === null) continue;
      const g = sampleMesh(r.trueX, r.trueY);
      const y = isDrone ? g + (r.trueAgl ?? 0) + 0.18 : g + 0.25;
      const n = trail.length;
      if (n === 0 || Math.hypot(r.trueX - trail[n - 3], r.trueY + trail[n - 1]) > 0.45)
        trail.push(r.trueX, y, -r.trueY);
    }
    if (trail.length) {
      const attr = trailLine.geometry.attributes.position as THREE.BufferAttribute;
      (attr.array as Float32Array).set(trail.slice(-12000 * 3));
      attr.needsUpdate = true;
      trailLine.geometry.setDrawRange(0, Math.min(trail.length / 3, 12000));
      trailLine.geometry.computeBoundingSphere();
    }

    sceneRef.current = {
      renderer, scene, camera, estBody, trueBody, sigmaRing,
      planLine, trailLine, scanPoints, trail, sampleMesh, isDrone, rotors, shadow, stem,
      dispose: () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        el.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointermove", onMove);
        el.removeEventListener("wheel", onWheel);
        renderer.dispose();
        scene.traverse((obj) => {
          const any = obj as unknown as {
            geometry?: THREE.BufferGeometry;
            material?: THREE.Material | THREE.Material[];
          };
          any.geometry?.dispose();
          const m = any.material;
          if (Array.isArray(m)) m.forEach((x) => x.dispose());
          else m?.dispose();
        });
        if (el.parentNode === mount) mount.removeChild(el);
      },
    };
    return () => {
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, [world]);

  // ---- per-frame transform updates ----------------------------------
  useEffect(() => {
    const s = sceneRef.current;
    if (!s) return;
    const e = latest.estimate;
    const d2r = Math.PI / 180;

    const groundEst = s.sampleMesh(e.position[0], e.position[1]);
    // ENU -> three: x = East, y = Up, z = -North. A rotation about ENU z by
    // yaw is a rotation about three's +Y by the SAME angle (the old -yaw
    // drew every heading mirrored). For the drone, pitch is about three's
    // -Z and roll about +X, applied yaw-pitch-roll ('YZX').
    if (s.isDrone) {
      s.estBody.position.set(e.position[0], Math.max(e.position[2], groundEst + 0.3), -e.position[1]);
      s.estBody.rotation.set(e.roll_deg * d2r, e.yaw_deg * d2r, -e.pitch_deg * d2r, "YZX");
      s.shadow.position.set(e.position[0], groundEst + 0.08, -e.position[1]);
      const sa = s.stem.geometry.attributes.position as THREE.BufferAttribute;
      sa.setXYZ(0, e.position[0], groundEst + 0.1, -e.position[1]);
      sa.setXYZ(1, e.position[0], s.estBody.position.y, -e.position[1]);
      sa.needsUpdate = true;
      s.stem.computeLineDistances();
      const spin = latest.drone?.armed ? 1 : 0;
      for (const r of s.rotors) r.visible = spin === 1;
    } else {
      s.estBody.position.set(e.position[0], groundEst + 0.1, -e.position[1]);
      s.estBody.rotation.set(0, e.yaw_deg * d2r, 0);
    }

    const sig = Math.max(e.pos_sigma_h, 0.05);
    s.sigmaRing.position.copy(s.estBody.position);
    s.sigmaRing.position.y = groundEst + 0.06;
    s.sigmaRing.scale.set(sig, sig, 1);

    const gt = latest.ground_truth;
    if (gt) {
      s.trueBody.visible = true;
      const groundTrue = s.sampleMesh(gt.position[0], gt.position[1]);
      const ty = s.isDrone ? Math.max(gt.position[2], groundTrue + 0.3) : groundTrue + 0.1;
      s.trueBody.position.set(gt.position[0], ty, -gt.position[1]);
      if (s.isDrone)
        s.trueBody.rotation.set(gt.roll_deg * d2r, gt.yaw_deg * d2r, -gt.pitch_deg * d2r, "YZX");
      else s.trueBody.rotation.set(0, gt.yaw_deg * d2r, 0);
      const trail = s.trail;
      const last = trail.length;
      if (
        last === 0 ||
        Math.hypot(gt.position[0] - trail[last - 3], gt.position[1] + trail[last - 1]) > 0.45
      ) {
        trail.push(gt.position[0], s.isDrone ? ty : groundTrue + 0.25, -gt.position[1]);
        if (trail.length > 12000 * 3) trail.splice(0, 3);
        const attr = s.trailLine.geometry.attributes.position as THREE.BufferAttribute;
        (attr.array as Float32Array).set(trail);
        attr.needsUpdate = true;
        s.trailLine.geometry.setDrawRange(0, trail.length / 3);
        s.trailLine.geometry.computeBoundingSphere();
      }
    } else {
      s.trueBody.visible = false;
    }

    const scan = latest.lidar;
    if (scan && scan.ranges.length) {
      const attr = s.scanPoints.geometry.attributes.position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      let n = 0;
      const yaw = e.yaw_deg * d2r;
      for (let i = 0; i < scan.ranges.length && n < 360; i++) {
        const r = scan.ranges[i];
        if (r === null || !Number.isFinite(r)) continue;
        const a = yaw + scan.angles[i];
        arr[n * 3] = e.position[0] + r * Math.cos(a);
        arr[n * 3 + 1] = groundEst + 0.55;
        arr[n * 3 + 2] = -(e.position[1] + r * Math.sin(a));
        n++;
      }
      attr.needsUpdate = true;
      s.scanPoints.geometry.setDrawRange(0, n);
      s.scanPoints.geometry.computeBoundingSphere();
    }
  }, [latest]);

  // ---- plan path, only when it changes -------------------------------
  useEffect(() => {
    const s = sceneRef.current;
    if (!s || path.length === 0) return;
    const attr = s.planLine.geometry.attributes.position as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const n = Math.min(path.length, arr.length / 3);
    for (let i = 0; i < n; i++) {
      const [x, y] = path[i];
      // Lift the plan slightly above the surface so it is not z-fighting;
      // a drone's route is drawn at its cruise height above the terrain.
      arr[i * 3] = x;
      arr[i * 3 + 1] = s.sampleMesh(x, y) + (s.isDrone ? (world.vehicle?.cruise_agl ?? 20) : 0.35);
      arr[i * 3 + 2] = -y;
    }
    attr.needsUpdate = true;
    s.planLine.geometry.setDrawRange(0, n);
    s.planLine.geometry.computeBoundingSphere();
  }, [path, world]);

  const gt = latest.ground_truth;
  return (
    <div className="grid">
      <Card
        title="3D simulation"
        className="span2"
        right={
          <label className="toggle">
            <input
              type="checkbox"
              defaultChecked
              onChange={(ev) => (followRef.current = ev.target.checked)}
            />
            follow vehicle
          </label>
        }
      >
        <div ref={mountRef} className="three-mount">
          <div className="hud">
            <span className="chip">{latest.resilience.state.replace(/_/g, " ")}</span>
            {latest.drone && <span className="chip">{latest.drone.phase.replace(/_/g, " ").toLowerCase()} · {num(latest.drone.agl_estimate_m, 1)} m AGL</span>}
            <span className="chip">σ {num(latest.estimate.pos_sigma_h, 2)} m{gt ? ` · err ${num(gt.position_error_m, 2)} m` : ""}</span>
          </div>
        </div>
        <div className="legend3d">
          <span><i style={{ background: "#4de2ff" }} />estimated pose + 1σ ring</span>
          <span><i style={{ background: "#ff8a3d" }} />ground truth (display only)</span>
          <span><i style={{ background: "#c8ff4d" }} />planned route</span>
          {!latest.drone && <span><i style={{ background: "#ffd866" }} />LiDAR returns</span>}
          <span><i style={{ background: "#8c6239" }} />known obstacle</span>
          <span><i style={{ background: "#c2502f" }} />discovered obstacle</span>
          {latest.drone && <span><i style={{ background: "#ff5c7a" }} />drone nose arms</span>}
        </div>
      </Card>

      <Card title="Pose">
        <div className="stat-row">
          <Stat label="est x" value={num(latest.estimate.position[0])} unit="m" />
          <Stat label="est y" value={num(latest.estimate.position[1])} unit="m" />
          <Stat label="est yaw" value={num(latest.estimate.yaw_deg, 1)} unit="°" />
        </div>
        <div className="stat-row">
          <Stat label="roll" value={num(latest.estimate.roll_deg, 1)} unit="°" />
          <Stat label="pitch" value={num(latest.estimate.pitch_deg, 1)} unit="°" />
          <Stat
            label="error"
            value={gt ? num(gt.position_error_m) : "n/a"}
            unit="m"
          />
        </div>
      </Card>

      <Card title="Control">
        {latest.control ? (
          <>
            <div className="stat-row">
              <Stat label="speed cmd" value={num(latest.control.speed_cmd)} unit="m/s" />
              <Stat label="yaw rate" value={num(latest.control.yaw_rate_cmd)} unit="rad/s" />
              <Stat label="cross-track" value={num(latest.control.cross_track_m)} unit="m" />
            </div>
            <div className="stat-row">
              <Stat label="limited by" value={latest.control.limiting_constraint} />
              <Stat
                label="obstacle"
                value={
                  latest.control.obstacle_distance_m === null
                    ? "clear"
                    : num(latest.control.obstacle_distance_m) + " m"
                }
                tone={
                  latest.control.obstacle_distance_m !== null &&
                  latest.control.obstacle_distance_m < 1.5
                    ? "warn"
                    : "ok"
                }
              />
              <Stat
                label="e-stop"
                value={latest.control.emergency_stop ? "yes" : "no"}
                tone={latest.control.emergency_stop ? "bad" : "ok"}
              />
            </div>
          </>
        ) : (
          <p className="muted">no control output yet</p>
        )}
      </Card>
    </div>
  );
}
