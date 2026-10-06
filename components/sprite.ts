// 12x14 pixel player sprite, drawn on canvas by Avatar and the mini-game.

export const PALETTE: Record<string, string> = {
  k: "#4a1238",
  p: "#ff4f9a",
  h: "#ffa3cf",
  s: "#ffe2d1",
  b: "#ff7fb0",
  w: "#ffffff",
  d: "#7a2a5c",
};

const BODY = [
  "...kkkkkk...",
  "..kppppppk..",
  ".kpphhhhppk.",
  ".kphsssshpk.",
  ".kpsksskspk.",
  ".kpbssssbpk.",
  ".kpphsshppk.",
  "..kkhhhhkk..",
  ".khhwwwwhhk.",
  "khhhwhhwhhhk",
  "kshhhwwhhhsk",
  ".khhhhhhhhk.",
];

const LEGS_A = ["..kdk..kdk..", ".kkk....kkk."];
const LEGS_B = ["...kdkkdk...", "...kkkkkk..."];

export const FRAMES = [BODY.concat(LEGS_A), BODY.concat(LEGS_B)];
export const SPRITE_W = 12;
export const SPRITE_H = 14;

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
