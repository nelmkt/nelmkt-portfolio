"use client";

import { useEffect, useRef } from "react";
import { FRAMES, SPRITE_H, SPRITE_W, drawSprite } from "./sprite";

export default function Avatar({ scale = 10 }: { scale?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSprite(ctx, FRAMES[i % 2], 0, 0, scale);
    };
    draw();
    if (reduce) return;
    const id = setInterval(() => {
      i++;
      draw();
    }, 420);
    return () => clearInterval(id);
  }, [scale]);

  return (
    <canvas
      ref={ref}
      width={SPRITE_W * scale}
      height={SPRITE_H * scale}
      className="avatar"
      role="img"
      aria-label="Pixel-art player character in a pink hood"
    />
  );
}
