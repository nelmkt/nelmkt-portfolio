
export const PALETTE: Record<string, string> = {
  k: "#140c12", // outline
  H: "#2b2b30", // hair
  h: "#55505e", // hair shine
  S: "#fde3c4", // skin
  s: "#efbfa0", // cheek / shade
  G: "#1d1a22", // glasses frame
  W: "#ffffff", // eye shine
  E: "#8e8a99", // eyes (grey)
  T: "#f37aa3", // tongue
  B: "#26242b", // top
  b: "#4a4652", // top fold
  P: "#4b2f6b", // trousers
  F: "#2f2c34", // shoes (black)
};

const BODY = [
  "....kkkkkk......",
  "...kHHHHHHkk....",
  "..kHHhhHHHHHk.k.",
  ".kHHhHHHHHHHHkHk",
  ".kHHHHHkHHHkHHHk",
  ".kHHHkSSkHkSSHk.",
  ".kHkGWEGGGWEGkHk",
  ".kHkGEEGSGEEGkHk",
  "..kHsSSSSSSSsHk.", // side strands start
  "..kHkSSSTSSSkHk.",
  "..kH.kkSSSSkkHk.",
  "...k.kSSSSk..k..", // strand tips
  "...kBBBkkBBBk...",
  "..kBBBBBBBBBBk..",
  ".kBbBBBBBBBBbBk.",
  ".kSkBBBBBBBBkSk.",
  "...kBBBBBBBBk...",
  "...kPPPPPPPPk...",
];

const LEGS_STRIDE = ["..kPPk....kPPk..", ".kFFFk....kFFFk."];
const LEGS_PASS = ["....kPPkkPPk....", "....kFFkkFFk...."];
const LEGS_TUCK = ["...kPPk..kPPk...", "...kFFk..kFFk..."];

export const FRAMES = [BODY.concat(LEGS_STRIDE), BODY.concat(LEGS_PASS), BODY.concat(LEGS_TUCK)];
export const SPRITE_W = 16;
export const SPRITE_H = 20;

export function drawSprite(
  ctx: CanvasRenderingContext2D,
  frame: string[],
  x: number,
  y: number,
  scale: number,
) {
  for (let row = 0; row < frame.length; row++) {
    const line = frame[row];
    for (let col = 0; col < line.length; col++) {
      const color = PALETTE[line[col]];
      if (!color) continue;
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(x + col * scale), Math.round(y + row * scale), scale, scale);
    }
  }
}
