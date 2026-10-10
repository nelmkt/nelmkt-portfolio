
const ICONS: Record<string, { bg: string; fg?: string; rows: string[] }> = {
  LinkedIn: {
    bg: "#0A66C2",
    rows: [
      "..........",
      ".XX.......",
      ".XX.......",
      "..........",
      ".XX.XXXX..",
      ".XX.XX.XX.",
      ".XX.XX.XX.",
      ".XX.XX.XX.",
      ".XX.XX.XX.",
      "..........",
    ],
  },
  Email: {
    bg: "#EA4335",
    rows: [
      "..........",
      "..........",
      ".XXXXXXXX.",
      ".XX....XX.",
      ".X.X..X.X.",
      ".X..XX..X.",
      ".X......X.",
      ".XXXXXXXX.",
      "..........",
      "..........",
    ],
  },
  X: {
    bg: "#000000",
    rows: [
      "..........",
      ".XX.....X.",
      "..XX...X..",
      "...XX.X...",
      "....XX....",
      "...X.XX...",
      "..X...XX..",
      ".X.....XX.",
      "..........",
      "..........",
    ],
  },
  GitHub: {
    bg: "#24292F",
    rows: [
      "...XXXX...",
      ".XXXXXXXX.",
      ".X.XXXX.X.",
      "XX......XX",
      "XX......XX",
      "XX......XX",
      ".XX....XX.",
      ".X.XX..XX.",
      "..XXX..X..",
      "...XX..X..",
    ],
  },
  ORCID: {
    bg: "#A6CE39",
    rows: [
      "..........",
      ".X........",
      "..........",
      ".X.XXXX...",
      ".X.X...X..",
      ".X.X...X..",
      ".X.X...X..",
      ".X.XXXX...",
      "..........",
      "..........",
    ],
  },
  "Google Scholar": {
    bg: "#4285F4",
    rows: [
      "..........",
      "....XX....",
      "..XXXXXX..",
      "XXXXXXXXXX",
      "..XXXXXX..",
      "...XXXX..X",
      "...XXXX..X",
      "....XX....",
      "..........",
      "..........",
    ],
  },
  ResearchGate: {
    bg: "#00CCBB",
    rows: [
      "..........",
      "..........",
      "XXX..XXX..",
      "X..X.X....",
      "XXX..X.XX.",
      "X.X..X..X.",
      "X..X.XXXX.",
      "..........",
      "..........",
      "..........",
    ],
  },
};

export default function ContactIcon({ name, size = 30 }: { name: string; size?: number }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg className="contact-icon" width={size} height={size} viewBox="0 0 10 10" shapeRendering="crispEdges" aria-hidden="true">
      <rect width="10" height="10" fill={icon.bg} />
      {icon.rows.flatMap((row, y) =>
        [...row].map((c, x) =>
          c === "X" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={icon.fg ?? "#fff"} /> : null,
        ),
      )}
    </svg>
  );
}
