"use client";

import { useEffect, useRef } from "react";

// A drawn cursor that fades into the colour of the section under it.
// Mouse/trackpad only; touch devices and failed scripts keep the regular
// (section-coloured) CSS cursors.

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

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const wrap = wrapRef.current!;
    const dot = dotRef.current!;
    document.documentElement.classList.add("has-cursor-fx");

    let lastStage: Element | null | undefined;

    let px = -100;
    let py = -100;
    // Colour follows the section under the pointer; the CSS transition makes the change glide.
    const paint = (target: Element | null) => {
      const stage = target?.closest(".stage");
      if (stage !== lastStage) {
        lastStage = stage;
        const c = stage ? getComputedStyle(stage).getPropertyValue("--accent").trim() : "";
        if (c) wrap.style.setProperty("--cfx", c);
        else wrap.style.removeProperty("--cfx");
      }
      wrap.classList.toggle("hover", !!target?.closest(CLICKABLE));
    };
    const move = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
      wrap.classList.add("on");
      dot.style.transform = `translate(${px}px, ${py}px)`;
      paint(e.target instanceof Element ? e.target : null);
    };
    // Scrolling moves the page under a still pointer, so re-check what it is over.
    const scroll = () => {
      if (wrap.classList.contains("on")) paint(document.elementFromPoint(px, py));
    };
    const leave = () => wrap.classList.remove("on");
    const down = () => wrap.classList.add("press");
    const up = () => wrap.classList.remove("press");

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("has-cursor-fx");
    };
  }, []);

  return (
    <div ref={wrapRef} className="cfx" aria-hidden="true">
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
