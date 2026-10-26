// Small inline icon set (24px grid, stroke-based) so the UI needs no icon font.
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const,
            strokeLinejoin: "round" as const };

const paths: Record<string, JSX.Element> = {
  home: <path d="M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10" />,
  mission: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  cube: <><path d="M12 2l9 5v10l-9 5-9-5V7z" /><path d="M3 7l9 5 9-5M12 12v10" /></>,
  sensors: <><path d="M4 12h3l2-6 4 12 2-6h5" /></>,
  results: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  replay: <><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /><path d="M10 9l5 3-5 3z" /></>,
  lab: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3" /><path d="M7 15h10" /></>,
  fleet: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  drone: <><circle cx="5.5" cy="5.5" r="2.5" /><circle cx="18.5" cy="5.5" r="2.5" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /><path d="M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3" /><rect x="10" y="10" width="4" height="4" rx="1" /></>,
  rover: <><rect x="3" y="8" width="18" height="7" rx="2" /><circle cx="7" cy="17.5" r="2.5" /><circle cx="17" cy="17.5" r="2.5" /><path d="M8 8l2-3h4l2 3" /></>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  check: <><path d="M20 6L9 17l-5-5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></>,
  play: <path d="M7 4l13 8-13 8z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export function Icon({ name, size = 18 }: { name: keyof typeof paths | string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...P} aria-hidden="true">
      {paths[name] ?? null}
    </svg>
  );
}
