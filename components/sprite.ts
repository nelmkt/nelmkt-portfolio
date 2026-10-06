// 12x14 pixel player sprite, drawn on canvas by Avatar and the mini-game.

// Styled after the portrait: black hair, glasses, black top.
export const PALETTE: Record<string, string> = {
  k: "#140c12",
  p: "#2b2b2b",
  h: "#4a4a4a",
  s: "#fde3c4",
  g: "#1a1a1a",
  e: "#9a9a9a",
  b: "#f08aa8",
  d: "#383838",
  j: "#5a2a4c",
};

const BODY = [
  "...kkkkkk...",
  "..kpphhppk..",
  ".kppppppppk.",
  ".kpssppsspk.",
  ".kgggsgggpk.",
  ".kgegggegpk.",
  ".kpsssssspk.",
  ".kpsssbsspk.",
  "..kpkssskp..",
  ".kkkksskkkk.",
  "kddddddddddk",
  "ksddddddddsk",
];

const LEGS_A = ["..kjk..kjk..", ".kkk....kkk."];
const LEGS_B = ["...kjkkjk...", "...kkkkkk..."];

export const FRAMES = [BODY.concat(LEGS_A), BODY.concat(LEGS_B)];
export const SPRITE_W = 12;
export const SPRITE_H = 14; // 12 body rows + 2 leg rows

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
