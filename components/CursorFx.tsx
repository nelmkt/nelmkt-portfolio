"use client";

import { useEffect, useRef } from "react";

// A drawn cursor that fades into the colour of the section under it, with a soft
// ring that trails behind and grows over anything clickable. Mouse/trackpad only;
// touch devices and failed scripts keep the regular (section-coloured) CSS cursors.

// Pixel arrow for the arcade side: X = dark outline, O = section colour.
const PIXEL_ARROW = [
  "X.........",
  "XX........",
  "XOX.......",
  "XOOX......",
  "XOOOX.....",
  "XOOOOX....",
  "XOOOOOX...",
  "XOOOOOOX..",
  "XOOOOOOOX.",
  "XOOOOOXXXX",
  "XOXOOX....",
  "XX.XOOX...",
  "X..XOOX...",
  "....XOOX..",
  "....XOOX..",
  ".....XX...",
];

const CLICKABLE = "a, button, .quest-media, .game-canvas, summary, label";

export default function CursorFx() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const wrap = wrapRef.current!;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("has-cursor-fx");

    let x = -100;
    let y = -100;
    let rx = x;
    let ry = y;
    let raf = 0;
    let lastStage: Element | null | undefined;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!wrap.classList.contains("on")) {
        rx = x;
        ry = y;
        wrap.classList.add("on");
      }
      dot.style.transform = `translate(${x}px, ${y}px)`;
      const target = e.target instanceof Element ? e.target : null;
      // Colour follows the section; the CSS transition makes the change glide.
      const stage = target?.closest(".stage");
      if (stage !== lastStage) {
        lastStage = stage;
        const c = stage ? getComputedStyle(stage).getPropertyValue("--accent").trim() : "";
        if (c) wrap.style.setProperty("--cfx", c);
        else wrap.style.removeProperty("--cfx");
      }
      wrap.classList.toggle("hover", !!target?.closest(CLICKABLE));
    };
    const leave = () => wrap.classList.remove("on");
    const down = () => wrap.classList.add("press");
    const up = () => wrap.classList.remove("press");

    const tick = () => {
      const k = reduce ? 1 : 0.2;
      rx += (x - rx) * k;
      ry += (y - ry) * k;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("has-cursor-fx");
    };
  }, []);

  return (
    <div ref={wrapRef} className="cfx" aria-hidden="true">
      <div ref={ringRef} className="cfx-ring">
        <span />
      </div>
      <div ref={dotRef} className="cfx-dot">
        <svg className="cfx-pixel" width="20" height="32" viewBox="0 0 10 16" shapeRendering="crispEdges">
          {PIXEL_ARROW.flatMap((row, py) =>
            [...row].map((c, px) =>
              c === "." ? null : (
                <rect key={`${px}-${py}`} x={px} y={py} width="1" height="1" fill={c === "X" ? "#1a0612" : "currentColor"} />
              ),
            ),
          )}
        </svg>
        <svg className="cfx-smooth" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M2 0.8 L2 17.3 L6.6 13.2 L9.6 19.6 L12.4 18.3 L9.4 12 L15.6 11.7 Z"
            fill="currentColor"
            stroke="var(--cfx-stroke)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
