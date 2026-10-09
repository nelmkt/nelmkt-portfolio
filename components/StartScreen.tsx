"use client";

import { useEffect, useRef, useState } from "react";
import PixelText from "./PixelText";
import { profile } from "./data";
import { type Mode, setMode } from "./mode";
import { FRAMES, SPRITE_H, SPRITE_W, drawSprite } from "./sprite";

// Deterministic "random" so server and client render the same star field.
const STARS = Array.from({ length: 28 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 97.13 + n * 13.7) + 1) / 2) % 1;
  return {
    left: `${(r(1) * 100).toFixed(2)}%`,
    top: `${(r(2) * 56).toFixed(2)}%`,
    size: r(3) > 0.8 ? 4 : r(3) > 0.4 ? 3 : 2,
    delay: `${(r(4) * 4.5).toFixed(2)}s`,
    pink: r(5) > 0.8,
  };
});

function StartRunner() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let f = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSprite(ctx, FRAMES[f % 2], 0, 0, 1);
    };
    draw();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      f++;
      draw();
    }, 140);
    return () => clearInterval(id);
  }, []);
  return <canvas ref={ref} className="start-runner" width={SPRITE_W} height={SPRITE_H} aria-hidden="true" />;
}

export default function StartScreen() {
  const [open, setOpen] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [best, setBest] = useState(0);
  // Which menu item is highlighted (0 = PRESS START, 1 = PROFESSIONAL MODE).
  const [sel, setSel] = useState(0);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("nelmkt-started")) setOpen(false);
      setBest(Number(localStorage.getItem("nelmkt-best") || 0));
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      // Up/down moves between the two menu items, like an arcade cabinet.
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const items = [...document.querySelectorAll<HTMLButtonElement>(".start-menu button")];
        const next = (sel + 1) % items.length;
        setSel(next);
        items[next]?.focus();
        return;
      }
      // Enter/Space on a focused button already clicks it; let that button decide.
      if (e.target instanceof HTMLButtonElement && e.key !== "Escape") return;
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        e.preventDefault();
        start();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  });

  function start(mode: Mode = "arcade") {
    setMode(mode);
    try {
      sessionStorage.setItem("nelmkt-started", "1");
    } catch {}
    setLeaving(true);
    setTimeout(() => setOpen(false), 380);
  }

  if (!open) return null;

  return (
    <div
      className={`start-screen${leaving ? " leaving" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Start screen"
    >
      <div className="start-sky" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className={`start-star${s.pink ? " pink" : ""}`}
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
          />
        ))}
        <div className="start-sun" />
      </div>
      <div className="start-floor" aria-hidden="true" />
      <StartRunner />

      <div className="start-arcade" aria-hidden="true">
        <span>
          <b>1UP</b> 000000
        </span>
        <span>
          <b>HI-SCORE</b> {String(best).padStart(6, "0")}
        </span>
        <span>
          <b>CREDIT</b> 01
        </span>
      </div>

      <div className="start-inner">
        <p className="start-kicker">NELMKT PRESENTS</p>
        <h1 className="start-title">
          NELLY
          <br />
          ALMAKTOUM
        </h1>
        <p className="start-ar">
          <PixelText text={profile.nameAr} size={14} scale={3} shadow="#b8306f" />
        </p>
        <div className="start-thermal" aria-hidden="true" />
        <p className="start-sub">
          <span>Researcher &amp; Innovator</span> <span><i>-</i> ML Engineer</span> <span><i>-</i> Green Tech</span>
        </p>
        <div className="start-menu">
          <button
            className={`start-btn${sel === 0 ? " sel" : ""}`}
            onClick={() => start("arcade")}
            onFocus={() => setSel(0)}
            onMouseEnter={() => setSel(0)}
            autoFocus
          >
            PRESS START
          </button>
          <button
            className={`start-pro${sel === 1 ? " sel" : ""}`}
            onClick={() => start("pro")}
            onFocus={() => setSel(1)}
            onMouseEnter={() => setSel(1)}
          >
            PROFESSIONAL MODE
          </button>
        </div>
        <p className="start-meta">King Abdulaziz University - Jeddah, Saudi Arabia</p>
      </div>
    </div>
  );
}
