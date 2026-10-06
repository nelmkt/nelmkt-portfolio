"use client";

import { useEffect, useRef } from "react";

type Props = {
  text: string;
  /** glyph height in source pixels; smaller = chunkier */
  size?: number;
  /** on-screen size of one pixel */
  scale?: number;
  /** pixel drop shadow colour(s); each extra colour sits one more pixel out, like stacked text-shadows */
  shadow?: string | string[];
  className?: string;
  lang?: string;
};

// Renders text at a tiny size with anti-aliasing thresholded away, then scales it
// up with nearest-neighbour so any script (here Arabic) gets a true pixel look.
export default function PixelText({ text, size = 13, scale = 3, shadow, className, lang = "ar" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const shadowKey = (Array.isArray(shadow) ? shadow : shadow ? [shadow] : []).join("|");

  useEffect(() => {
    const shadows = shadowKey ? shadowKey.split("|") : [];
    const canvas = ref.current!;
    const family =
      getComputedStyle(document.documentElement).getPropertyValue("--font-ar").trim() || "sans-serif";
    const font = `700 ${size}px ${family}`;

    const draw = () => {
      const color = getComputedStyle(canvas).color;
      const probe = document.createElement("canvas").getContext("2d")!;
      probe.font = font;
      const m = probe.measureText(text);
      const pad = 2;
      const w = Math.ceil(m.width) + pad * 2 + shadows.length;
      const h = Math.ceil(size * 1.9) + shadows.length;

      const src = document.createElement("canvas");
      src.width = w;
      src.height = h;
      const s = src.getContext("2d")!;
      s.font = font;
      s.direction = "rtl";
      s.textAlign = "right";
      s.textBaseline = "middle";
      s.fillStyle = "#000";
      s.fillText(text, w - pad, h / 2);

      const data = s.getImageData(0, 0, w, h);
      const on = new Uint8Array(w * h);
      let minX = w, maxX = -1, minY = h, maxY = -1;
      for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++)
          if (data.data[(y * w + x) * 4 + 3] > 110) {
            on[y * w + x] = 1;
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
      if (maxX < 0) return;

      // Crop to the inked pixels so the canvas edge is the glyph edge; this lets the
      // text line up with neighbouring HTML text instead of floating in padding.
      const cw = maxX - minX + 1 + shadows.length;
      const ch = maxY - minY + 1 + shadows.length;
      canvas.width = cw;
      canvas.height = ch;
      canvas.style.width = `${cw * scale}px`;
      canvas.style.height = `${ch * scale}px`;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, cw, ch);
      const paint = (fill: string, dx: number, dy: number) => {
        ctx.fillStyle = fill;
        for (let y = minY; y <= maxY; y++)
          for (let x = minX; x <= maxX; x++) if (on[y * w + x]) ctx.fillRect(x - minX + dx, y - minY + dy, 1, 1);
      };
      const resolve = (c: string) => {
        const v = c.match(/^var\((--[\w-]+)\)$/);
        return v ? getComputedStyle(canvas).getPropertyValue(v[1]).trim() : c;
      };
      // farthest shadow first, then nearer ones, then the glyphs
      for (let k = shadows.length - 1; k >= 0; k--) paint(resolve(shadows[k]), k + 1, k + 1);
      paint(color, 0, 0);
    };

    draw();
    document.fonts?.load(font, text).then(draw).catch(() => {});
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", draw);
    return () => mq.removeEventListener("change", draw);
  }, [text, size, scale, shadowKey]);

  return <canvas ref={ref} className={`pixel-text ${className ?? ""}`} role="img" aria-label={text} lang={lang} />;
}
