"use client";

import { useEffect, useRef } from "react";

type Props = {
  text: string;
  /** glyph height in source pixels; smaller = chunkier */
  size?: number;
  /** on-screen size of one pixel */
  scale?: number;
  /** pixel drop shadow color; omit for none */
  shadow?: string;
  className?: string;
  lang?: string;
};

// Renders text at a tiny size with anti-aliasing thresholded away, then scales it
// up with nearest-neighbour so any script (here Arabic) gets a true pixel look.
export default function PixelText({ text, size = 13, scale = 3, shadow, className, lang = "ar" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
      const w = Math.ceil(m.width) + pad * 2 + 1;
      const h = Math.ceil(size * 1.9) + 1;

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
      for (let i = 0; i < w * h; i++) on[i] = data.data[i * 4 + 3] > 110 ? 1 : 0;

      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w * scale}px`;
      canvas.style.height = `${h * scale}px`;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, w, h);
      const paint = (fill: string, dx: number, dy: number) => {
        ctx.fillStyle = fill;
        for (let y = 0; y < h; y++)
          for (let x = 0; x < w; x++) if (on[y * w + x]) ctx.fillRect(x + dx, y + dy, 1, 1);
      };
      if (shadow) {
        const v = shadow.match(/^var\((--[\w-]+)\)$/);
        paint(v ? getComputedStyle(canvas).getPropertyValue(v[1]).trim() : shadow, 1, 1);
      }
      paint(color, 0, 0);
    };

    draw();
    document.fonts?.load(font, text).then(draw).catch(() => {});
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", draw);
    return () => mq.removeEventListener("change", draw);
  }, [text, size, scale, shadow]);

  return <canvas ref={ref} className={`pixel-text ${className ?? ""}`} role="img" aria-label={text} lang={lang} />;
}
