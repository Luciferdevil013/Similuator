// Generative terrain silhouettes for the environment cards: layered ridgelines
// whose roughness and height follow each preset's relief and obstacle density.

const PALETTES: Record<string, [string, string, string]> = {
  rolling_hills: ["#1d3b22", "#3f7a3c", "#c8ff4d"],
  flat_open: ["#1e2a1a", "#55703a", "#e6ff8a"],
  mountain_pass: ["#1a1f33", "#4c5a8f", "#9b7bff"],
  dense_forest: ["#0f2a1d", "#1f5c3a", "#4dffa6"],
  rocky_desert: ["#3a2614", "#8a5a2b", "#ffb84d"],
};

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function ridge(r: () => number, base: number, amp: number, rough: number, w: number, h: number) {
  const pts: string[] = [];
  let y = base;
  for (let x = 0; x <= w; x += w / 24) {
    y += (r() - 0.5) * amp * rough;
    y = Math.max(base - amp, Math.min(base + amp * 0.4, y));
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M0,${h} L${pts.join(" L")} L${w},${h} Z`;
}

export function EnvArt({ env, relief = 14, obstacles = 45 }: { env: string; relief?: number; obstacles?: number }) {
  const [deep, mid, glow] = PALETTES[env] ?? PALETTES.rolling_hills;
  const r = rng([...env].reduce((a, c) => a + c.charCodeAt(0), 7));
  const W = 240, H = 80;
  const amp = 8 + relief * 1.1;
  const rough = env === "rocky_desert" ? 1.6 : env === "mountain_pass" ? 1.3 : 0.8;
  const trees = Math.min(40, Math.round(obstacles / 3));
  const id = `g-${env}`;
  return (
    <svg className="art" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" width="100%" height="74">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={glow} stopOpacity=".28" />
          <stop offset="1" stopColor="#06080b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${id})`} />
      <path d={ridge(r, H * 0.52, amp * 0.7, rough, W, H)} fill={mid} opacity=".55" />
      <path d={ridge(r, H * 0.7, amp * 0.5, rough, W, H)} fill={deep} />
      {Array.from({ length: trees }).map((_, i) => {
        const x = r() * W;
        const y = H * 0.72 + r() * H * 0.22;
        return <circle key={i} cx={x} cy={y} r={0.9 + r() * 1.4} fill={glow} opacity={0.35 + r() * 0.4} />;
      })}
    </svg>
  );
}
