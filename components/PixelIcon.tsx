
const ICONS = {
  trophy: [
    "XXXXXXXX",
    "X.XXXX.X",
    "X.XXXX.X",
    ".XXXXXX.",
    "..XXXX..",
    "...XX...",
    "..XXXX..",
    ".XXXXXX.",
  ],
  star: [
    "...XX...",
    "...XX...",
    "XXXXXXXX",
    ".XXXXXX.",
    "..XXXX..",
    ".XXXXXX.",
    ".XX..XX.",
    "X......X",
  ],
  check: [
    "........",
    "......XX",
    ".....XX.",
    "X...XX..",
    "XX.XX...",
    ".XXX....",
    "..X.....",
    "........",
  ],
  gem: [
    "...XX...",
    "..XXXX..",
    ".XXXXXX.",
    "XXXXXXXX",
    "XXXXXXXX",
    ".XXXXXX.",
    "..XXXX..",
    "...XX...",
  ],
  mail: [
    "........",
    "XXXXXXXX",
    "XX....XX",
    "X.X..X.X",
    "X..XX..X",
    "X......X",
    "XXXXXXXX",
    "........",
  ],
  play: [
    "X.......",
    "XXX.....",
    "XXXXX...",
    "XXXXXXX.",
    "XXXXXXX.",
    "XXXXX...",
    "XXX.....",
    "X.......",
  ],
  scroll: [
    ".XXXXXX.",
    "X......X",
    ".X.XX.X.",
    ".X....X.",
    ".X.XX.X.",
    ".X....X.",
    "X......X",
    ".XXXXXX.",
  ],
} as const;

export type IconName = keyof typeof ICONS;

export default function PixelIcon({
  name,
  size = 14,
  className,
  title,
}: {
  name: IconName;
  size?: number;
  className?: string;
  title?: string;
}) {
  const grid = ICONS[name];
  return (
    <svg
      className={`pixel-icon ${className ?? ""}`}
      width={size}
      height={size}
      viewBox="0 0 8 8"
      shapeRendering="crispEdges"
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {grid.flatMap((row, y) =>
        [...row].map((c, x) => (c === "X" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null)),
      )}
    </svg>
  );
}
