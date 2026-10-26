import { useEffect, useRef, useState } from "react";
import type { HistoryRow } from "../useTelemetry";
import type { Telemetry, WorldMessage } from "../types";

interface Props {
  world: WorldMessage;
  latest: Telemetry;
  path: number[][];
  history: HistoryRow[];
  height?: number;
}

const COL = {
  bg: "#0d1117",
  grid: "#1d2531",
  terrainLo: [58, 70, 52],
  terrainHi: [150, 160, 120],
  known: "#8c6239",
  discovered: "#c2502f",
  plan: "#4a9eff",
  trail: "#f0803c",
  est: "#4a9eff",
  truth: "#f0803c",
  scan: "#ffd866",
  goal: "#3fb950",
};

/**
 * Top-down tactical map on a 2D canvas.
 *
 * The 3D view is for inspecting the scene; this is for reading the mission at
 * a glance -- where the vehicle thinks it is, where it actually is, how far
 * apart those are, what it has driven and what it still plans to drive. A
 * canvas rather than SVG because the terrain shading is a per-pixel image and
 * the trail grows to thousands of points.
 */
export function MapView({ world, latest, path, history, height = 560 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const terrainRef = useRef<ImageBitmap | HTMLCanvasElement | null>(null);
  const [follow, setFollow] = useState(false);
  const [zoom, setZoom] = useState(1);

  const T = world.terrain;
  const wx = (T.shape[1] - 1) * T.resolution;
  const wy = (T.shape[0] - 1) * T.resolution;

  // --- shade the terrain once into an offscreen canvas ----------------
  useEffect(() => {
    const [ny, nx] = T.shape;
    const off = document.createElement("canvas");
    off.width = nx;
    off.height = ny;
    const octx = off.getContext("2d");
    if (!octx) return;
    const img = octx.createImageData(nx, ny);
    const [zlo, zhi] = T.z_range;
    const span = Math.max(zhi - zlo, 1e-6);
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        const h = T.height[j]?.[i] ?? 0;
        const u = Math.max(0, Math.min(1, (h - zlo) / span));
        // Cheap hillshade: compare with the neighbour uphill-left so slopes
        // read as relief rather than as a flat colour ramp.
        // Hillshade from a gradient measured over several cells, not over
        // the neighbouring one. This terrain carries real centimetre-scale
        // roughness, and a one-cell difference is mostly that roughness: it
        // renders as diagonal hatching across the whole map instead of as
        // relief. A wider stencil with a gentle gain shows the landforms the
        // operator actually needs to read.
        const D = 3;
        const hxm = T.height[j]?.[Math.max(0, i - D)] ?? h;
        const hxp = T.height[j]?.[Math.min(nx - 1, i + D)] ?? h;
        const hym = T.height[Math.max(0, j - D)]?.[i] ?? h;
        const hyp = T.height[Math.min(ny - 1, j + D)]?.[i] ?? h;
        const gx = (hxp - hxm) / (2 * D * T.resolution);
        const gy = (hyp - hym) / (2 * D * T.resolution);
        // Light from the north-west, the cartographic convention.
        const shade = Math.max(0.62, Math.min(1.3, 1 + (gx - gy) * 0.9));
        // Canvas rows run top-down; ENU y runs up, so flip.
        const o = ((ny - 1 - j) * nx + i) * 4;
        for (let c = 0; c < 3; c++) {
          const v =
            (COL.terrainLo[c] + (COL.terrainHi[c] - COL.terrainLo[c]) * u) *
            shade;
          img.data[o + c] = Math.max(0, Math.min(255, v));
        }
        img.data[o + 3] = 255;
      }
    }
    octx.putImageData(img, 0, 0);
    terrainRef.current = off;
  }, [T]);

  // --- draw ------------------------------------------------------------
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = cv.clientWidth;
    const cssH = height;
    if (cv.width !== cssW * dpr || cv.height !== cssH * dpr) {
      cv.width = cssW * dpr;
      cv.height = cssH * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.fillStyle = COL.bg;
    ctx.fillRect(0, 0, cssW, cssH);

    const est = latest.estimate.position;
    const base = Math.min(cssW / wx, cssH / wy);
    const scale = base * zoom;
    // World -> screen. y is flipped because ENU y points up the page.
    const cx = follow ? est[0] : T.origin[0] + wx / 2;
    const cy = follow ? est[1] : T.origin[1] + wy / 2;
    const sx = (x: number) => cssW / 2 + (x - cx) * scale;
    const sy = (y: number) => cssH / 2 - (y - cy) * scale;

    // terrain
    const terr = terrainRef.current;
    if (terr) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(
        terr,
        sx(T.origin[0]),
        sy(T.origin[1] + wy),
        wx * scale,
        wy * scale
      );
    }

    // grid every 25 m
    ctx.strokeStyle = COL.grid;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    for (let g = 0; g <= wx; g += 25) {
      ctx.moveTo(sx(T.origin[0] + g), sy(T.origin[1]));
      ctx.lineTo(sx(T.origin[0] + g), sy(T.origin[1] + wy));
    }
    for (let g = 0; g <= wy; g += 25) {
      ctx.moveTo(sx(T.origin[0]), sy(T.origin[1] + g));
      ctx.lineTo(sx(T.origin[0] + wx), sy(T.origin[1] + g));
    }
    ctx.stroke();
    ctx.globalAlpha = 1;

    // obstacles, only those that have spawned
    for (const o of world.obstacles) {
      if (o.spawn_time > latest.t) continue;
      ctx.fillStyle = o.known_a_priori ? COL.known : COL.discovered;
      ctx.strokeStyle = "rgba(0,0,0,0.75)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      if (o.kind === "cylinder") {
        // Floor the drawn radius: zoomed out, a true-scale 0.5 m obstacle is
        // a single pixel and the operator cannot see what the planner is
        // avoiding. Keep the footprint readable rather than literal.
        ctx.arc(sx(o.x), sy(o.y), Math.max(3, o.radius * scale), 0, Math.PI * 2);
      } else {
        ctx.save();
        ctx.translate(sx(o.x), sy(o.y));
        ctx.rotate(-o.yaw);
        ctx.rect(
          -o.half_x * scale, -o.half_y * scale,
          o.half_x * 2 * scale, o.half_y * 2 * scale
        );
        ctx.restore();
      }
      ctx.fill();
      ctx.stroke();
    }

    // start and goal
    const marker = (x: number, y: number, color: string, label: string) => {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(sx(x), sy(y), 7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.font = "10px ui-sans-serif, sans-serif";
      ctx.fillText(label, sx(x) + 10, sy(y) + 3);
    };
    marker(world.mission.start[0], world.mission.start[1], COL.goal, "start");
    marker(world.mission.goal[0], world.mission.goal[1], COL.plan, "goal");

    // planned path
    if (path.length > 1) {
      ctx.strokeStyle = COL.plan;
      ctx.lineWidth = 1.8;
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      path.forEach(([x, y], i) =>
        i ? ctx.lineTo(sx(x), sy(y)) : ctx.moveTo(sx(x), sy(y))
      );
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // driven trail, coloured by whether GNSS was flagged at the time
    if (history.length > 1) {
      ctx.lineWidth = 2.2;
      let prev: HistoryRow | null = null;
      for (const r of history) {
        if (r.trueX === null || r.trueY === null) {
          prev = null;
          continue;
        }
        if (prev && prev.trueX !== null && prev.trueY !== null) {
          ctx.strokeStyle = r.flagged ? "#f05d5d" : COL.trail;
          ctx.beginPath();
          ctx.moveTo(sx(prev.trueX), sy(prev.trueY!));
          ctx.lineTo(sx(r.trueX), sy(r.trueY));
          ctx.stroke();
        }
        prev = r;
      }
    }

    // LiDAR returns
    const scan = latest.lidar;
    if (scan) {
      ctx.fillStyle = COL.scan;
      const yaw = (latest.estimate.yaw_deg * Math.PI) / 180;
      for (let i = 0; i < scan.ranges.length; i++) {
        const r = scan.ranges[i];
        if (r === null || !Number.isFinite(r)) continue;
        const a = yaw + scan.angles[i];
        ctx.fillRect(
          sx(est[0] + r * Math.cos(a)) - 1,
          sy(est[1] + r * Math.sin(a)) - 1,
          2, 2
        );
      }
    }

    // uncertainty disc around the estimate (2 sigma)
    const sig = latest.estimate.pos_sigma_h;
    ctx.fillStyle = "rgba(74,158,255,0.14)";
    ctx.strokeStyle = "rgba(74,158,255,0.55)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(sx(est[0]), sy(est[1]), Math.max(2, sig * 2 * scale), 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // vehicle arrows
    const arrow = (x: number, y: number, yawDeg: number, color: string,
                   filled: boolean) => {
      const a = (-yawDeg * Math.PI) / 180;
      const L = 9;
      ctx.save();
      ctx.translate(sx(x), sy(y));
      ctx.rotate(a);
      ctx.beginPath();
      ctx.moveTo(L, 0);
      ctx.lineTo(-L * 0.6, L * 0.6);
      ctx.lineTo(-L * 0.6, -L * 0.6);
      ctx.closePath();
      ctx.lineWidth = 2;
      if (filled) {
        ctx.fillStyle = color;
        ctx.fill();
      } else {
        ctx.strokeStyle = color;
        ctx.stroke();
      }
      ctx.restore();
    };

    const gt = latest.ground_truth;
    if (gt) {
      // error line first, so both markers sit on top of it
      ctx.strokeStyle = "rgba(240,128,60,0.8)";
      ctx.setLineDash([3, 3]);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(sx(est[0]), sy(est[1]));
      ctx.lineTo(sx(gt.position[0]), sy(gt.position[1]));
      ctx.stroke();
      ctx.setLineDash([]);
      arrow(gt.position[0], gt.position[1], gt.yaw_deg, COL.truth, false);
    }
    arrow(est[0], est[1], latest.estimate.yaw_deg, COL.est, true);

    // scale bar
    const barM = zoom > 2.5 ? 10 : zoom > 1.2 ? 25 : 50;
    const barPx = barM * scale;
    ctx.strokeStyle = "#8b98a8";
    ctx.fillStyle = "#8b98a8";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(14, cssH - 16);
    ctx.lineTo(14 + barPx, cssH - 16);
    ctx.moveTo(14, cssH - 20);
    ctx.lineTo(14, cssH - 12);
    ctx.moveTo(14 + barPx, cssH - 20);
    ctx.lineTo(14 + barPx, cssH - 12);
    ctx.stroke();
    ctx.font = "10px ui-sans-serif, sans-serif";
    ctx.fillText(`${barM} m`, 16 + barPx, cssH - 19);
  }, [world, latest, path, history, follow, zoom, height, T, wx, wy]);

  return (
    <div className="mapwrap">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height }}
        onWheel={(e) => {
          e.preventDefault();
          setZoom((z) => Math.max(0.6, Math.min(14, z * (1 - e.deltaY * 0.0015))));
        }}
      />
      <div className="map-controls">
        <label className="toggle">
          <input
            type="checkbox"
            checked={follow}
            onChange={(e) => setFollow(e.target.checked)}
          />
          follow
        </label>
        <button onClick={() => setZoom((z) => Math.min(14, z * 1.4))}>+</button>
        <button onClick={() => setZoom((z) => Math.max(0.6, z / 1.4))}>−</button>
        <button onClick={() => { setZoom(1); setFollow(false); }}>fit</button>
        <span className="muted small">×{zoom.toFixed(1)}</span>
      </div>
    </div>
  );
}
