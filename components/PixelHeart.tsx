export const HEART = [".XX.XX.", "XXXXXXX", "XXXXXXX", ".XXXXX.", "..XXX..", "...X..."];

export default function PixelHeart({ size = 16, empty = false }: { size?: number; empty?: boolean }) {
  return (
    <svg
      className={`pixel-heart${empty ? " empty" : ""}`}
      width={size}
      height={(size * 6) / 7}
      viewBox="0 0 7 6"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {HEART.flatMap((row, y) =>
        [...row].map((c, x) => (c === "X" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null)),
      )}
      {!empty && <rect x="1" y="1" width="1" height="1" fill="#fff" opacity="0.7" />}
    </svg>
  );
}
