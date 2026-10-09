"use client";

import { useEffect, useRef, useState } from "react";
import { languages } from "./data";
import { useT } from "./lang";
import { HEART } from "./PixelHeart";
import { FRAMES, SPRITE_H, SPRITE_W, drawSprite } from "./sprite";

const W = 640;
const H = 200;
const RES = 2; // internal resolution multiplier for crisper text
const GROUND = 168;
const SCALE = 3;
const PW = SPRITE_W * SCALE;
const PH = SPRITE_H * SCALE;
const PX = 70;
const GRAVITY = 0.62;
const JUMP_V = -11.6;

type Lang = (typeof languages)[number];
type Item =
  | { kind: "gem"; x: number; y: number; lang: Lang }
  | { kind: "bug"; x: number; y: number };

type Mode = "ready" | "playing" | "over";

type State = {
  mode: Mode;
  py: number;
  vy: number;
  tick: number;
  speed: number;
  score: number;
  hearts: number;
  invuln: number;
  spawnIn: number;
  items: Item[];
  scroll: number;
  toast: string;
  toastT: number;
};

function freshState(): State {
  return {
    mode: "ready",
    py: GROUND - PH,
    vy: 0,
    tick: 0,
    speed: 4,
    score: 0,
    hearts: 3,
    invuln: 0,
    spawnIn: 60,
    items: [],
    scroll: 0,
    toast: "",
    toastT: 0,
  };
}

function readBest(): number {
  try {
    return Number(localStorage.getItem("nelmkt-best") || 0);
  } catch {
    return 0;
  }
}

function writeBest(n: number) {
  try {
    localStorage.setItem("nelmkt-best", String(n));
  } catch {}
}

type Props = {
  collected: string[];
  onCollect: (name: string) => void;
};

export default function RunnerGame({ collected, onCollect }: Props) {
  const t = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>(freshState());
  const collectedRef = useRef<string[]>(collected);
  const onCollectRef = useRef(onCollect);
  const bestRef = useRef(0);
  const [mode, setMode] = useState<Mode>("ready");

  collectedRef.current = collected;
  onCollectRef.current = onCollect;

  useEffect(() => {
    bestRef.current = readBest();
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = W * RES;
    canvas.height = H * RES;
    ctx.setTransform(RES, 0, 0, RES, 0, 0);
    ctx.imageSmoothingEnabled = false;

    const font =
      getComputedStyle(document.documentElement).getPropertyValue("--font-pixel").trim() ||
      "monospace";

    let raf = 0;
    let last = performance.now();
    let acc = 0;
    let visible = true;

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(canvas);

    const pickLang = (): Lang => {
      const missing = languages.filter((l) => !collectedRef.current.includes(l.name));
      const pool = missing.length ? missing : languages;
      return pool[Math.floor(Math.random() * pool.length)];
    };

    const update = () => {
      const s = stateRef.current;
      if (s.mode !== "playing") return;
      s.tick++;
      s.speed = Math.min(9, 4 + s.tick * 0.0016);
      s.scroll += s.speed;

      s.vy += GRAVITY;
      s.py += s.vy;
      if (s.py >= GROUND - PH) {
        s.py = GROUND - PH;
        s.vy = 0;
      }

      if (--s.spawnIn <= 0) {
        if (Math.random() < 0.62) {
          const high = Math.random() < 0.5;
          s.items.push({ kind: "gem", x: W + 20, y: high ? GROUND - 112 : GROUND - 34, lang: pickLang() });
        } else {
          s.items.push({ kind: "bug", x: W + 20, y: GROUND - 18 });
        }
        s.spawnIn = 55 + Math.floor(Math.random() * 55) - Math.floor(s.speed * 2);
      }

      const px0 = PX + 6;
      const px1 = PX + PW - 6;
      const py0 = s.py + 4;
      const py1 = s.py + PH;

      s.items = s.items.filter((it) => {
        it.x -= s.speed;
        if (it.x < -30) return false;
        const size = it.kind === "gem" ? 16 : 22;
        const hit = it.x < px1 && it.x + size > px0 && it.y < py1 && it.y + size > py0;
        if (!hit) return true;
        if (it.kind === "gem") {
          s.score += 50;
          const isNew = !collectedRef.current.includes(it.lang.name);
          s.toast = isNew ? `${it.lang.name.toUpperCase()} UNLOCKED!` : `+50 ${it.lang.name.toUpperCase()}`;
          s.toastT = 70;
          if (isNew) onCollectRef.current(it.lang.name);
          return false;
        }
        if (s.invuln > 0) return true;
        s.hearts--;
        s.invuln = 70;
        s.toast = "OUCH! A BUG!";
        s.toastT = 50;
        if (s.hearts <= 0) {
          s.mode = "over";
          if (s.score > bestRef.current) {
            bestRef.current = s.score;
            writeBest(s.score);
          }
          setMode("over");
        }
        return false;
      });

      if (s.invuln > 0) s.invuln--;
      if (s.toastT > 0) s.toastT--;
      if (s.tick % 6 === 0) s.score++;
    };

    const text = (str: string, x: number, y: number, size: number, color: string, align: CanvasTextAlign = "left") => {
      ctx.font = `${size}px ${font}`;
      ctx.textAlign = align;
      ctx.fillStyle = color;
      ctx.fillText(str, x, y);
    };

    const drawGem = (x: number, y: number, color: string, label: string, t: number) => {
      const bob = Math.round(Math.sin((t + x) * 0.08) * 2);
      const yy = y + bob;
      ctx.fillStyle = "#3b0f2e";
      ctx.fillRect(x + 4, yy, 8, 2);
      ctx.fillRect(x + 2, yy + 2, 12, 2);
      ctx.fillRect(x, yy + 4, 16, 6);
      ctx.fillRect(x + 2, yy + 10, 12, 2);
      ctx.fillRect(x + 4, yy + 12, 8, 2);
      ctx.fillRect(x + 6, yy + 14, 4, 2);
      ctx.fillStyle = color;
      ctx.fillRect(x + 4, yy + 2, 8, 2);
      ctx.fillRect(x + 2, yy + 4, 12, 6);
      ctx.fillRect(x + 4, yy + 10, 8, 2);
      ctx.fillRect(x + 6, yy + 12, 4, 2);
      ctx.fillStyle = "rgba(255,255,255,.75)";
      ctx.fillRect(x + 4, yy + 4, 2, 2);
      text(label, x + 8, yy - 4, 7, "#3b0f2e", "center");
    };

    const drawBug = (x: number, y: number, t: number) => {
      const leg = Math.floor(t / 6) % 2;
      ctx.fillStyle = "#3b0f2e";
      ctx.fillRect(x + 4, y + 2, 14, 12);
      ctx.fillRect(x + 2, y + 6, 18, 6);
      ctx.fillRect(x + 6, y - 2, 2, 4);
      ctx.fillRect(x + 14, y - 2, 2, 4);
      ctx.fillRect(x + (leg ? 2 : 4), y + 14, 2, 4);
      ctx.fillRect(x + 10, y + 14, 2, 4);
      ctx.fillRect(x + (leg ? 18 : 16), y + 14, 2, 4);
      ctx.fillStyle = "#7a3cc2";
      ctx.fillRect(x + 6, y + 4, 10, 8);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(x + 6, y + 6, 2, 2);
      ctx.fillRect(x + 14, y + 6, 2, 2);
    };

    const render = () => {
      const s = stateRef.current;
      const sky = ctx.createLinearGradient(0, 0, 0, GROUND);
      sky.addColorStop(0, "#ffe3ef");
      sky.addColorStop(1, "#fff7fb");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // clouds
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 4; i++) {
        const cx = ((i * 190 - s.scroll * 0.2) % (W + 120) + W + 120) % (W + 120) - 60;
        const cy = 26 + (i % 2) * 28;
        ctx.fillRect(cx, cy, 44, 8);
        ctx.fillRect(cx + 8, cy - 8, 24, 8);
      }

      // pixel hills
      ctx.fillStyle = "#ffc9de";
      for (let i = 0; i < 6; i++) {
        const hx = ((i * 140 - s.scroll * 0.45) % (W + 140) + W + 140) % (W + 140) - 70;
        for (let step = 0; step < 4; step++) {
          ctx.fillRect(hx + step * 8, GROUND - 12 - step * 8, 80 - step * 16, 12 + step * 8);
        }
      }

      // ground
      ctx.fillStyle = "#3b0f2e";
      ctx.fillRect(0, GROUND, W, 4);
      ctx.fillStyle = "#ffc2da";
      ctx.fillRect(0, GROUND + 4, W, H - GROUND - 4);
      ctx.fillStyle = "#ffa8cb";
      const off = Math.floor(s.scroll) % 24;
      for (let gx = -off; gx < W; gx += 24) {
        ctx.fillRect(gx, GROUND + 10, 12, 4);
        ctx.fillRect(gx + 12, GROUND + 20, 12, 4);
      }

      for (const it of s.items) {
        if (it.kind === "gem") drawGem(it.x, it.y, it.lang.color, it.lang.short, s.tick);
        else drawBug(it.x, it.y, s.tick);
      }

      const airborne = s.py < GROUND - PH;
      const frame = airborne ? FRAMES[2] : FRAMES[Math.floor(s.tick / 7) % 2];

      // pixel ground shadow that shrinks as the runner rises
      const lift = Math.min(1, (GROUND - PH - s.py) / 110);
      const shadowW = Math.round((PW - 12) * (1 - lift * 0.6) / 3) * 3;
      ctx.fillStyle = "rgba(59, 15, 46, 0.22)";
      ctx.fillRect(PX + (PW - shadowW) / 2, GROUND - 3, shadowW, 3);
      if (!(s.invuln > 0 && Math.floor(s.invuln / 5) % 2 === 0)) {
        drawSprite(ctx, frame, PX, s.py, SCALE);
      }

      // HUD
      text(`SCORE ${String(s.score).padStart(5, "0")}`, 12, 18, 9, "#3b0f2e");
      text(`BEST ${String(Math.max(bestRef.current, s.score)).padStart(5, "0")}`, 12, 32, 7, "#8a4f74");
      text(`LANGS ${collectedRef.current.length}/${languages.length}`, W / 2, 18, 9, "#3b0f2e", "center");
      for (let i = 0; i < 3; i++) {
        const full = i < s.hearts;
        const hx = W - 12 - (3 - i) * 20;
        HEART.forEach((row, y) =>
          [...row].forEach((c, x) => {
            if (c !== "X") return;
            ctx.fillStyle = full ? "#ff2f6d" : "#e9b8cd";
            ctx.fillRect(hx + x * 2, 8 + y * 2, 2, 2);
          }),
        );
        if (full) {
          ctx.fillStyle = "rgba(255,255,255,.7)";
          ctx.fillRect(hx + 2, 10, 2, 2);
        }
      }

      if (s.toastT > 0) {
        text(s.toast, W / 2, 62, 12, "#ff3d8b", "center");
      }

      if (s.mode !== "playing") {
        ctx.fillStyle = "rgba(255, 247, 251, 0.88)";
        ctx.fillRect(0, 0, W, H);
        if (s.mode === "ready") {
          text("LANGUAGE RUSH", W / 2, 74, 18, "#ff3d8b", "center");
          text("COLLECT THE LANGUAGE GEMS · DODGE THE BUGS", W / 2, 100, 8, "#3b0f2e", "center");
          if (Math.floor(performance.now() / 500) % 2 === 0) {
            text("TAP OR PRESS SPACE TO START", W / 2, 130, 10, "#3b0f2e", "center");
          }
        } else {
          text("GAME OVER", W / 2, 74, 20, "#ff3d8b", "center");
          text(`SCORE ${s.score}`, W / 2, 100, 10, "#3b0f2e", "center");
          if (Math.floor(performance.now() / 500) % 2 === 0) {
            text("TAP OR PRESS SPACE TO RETRY", W / 2, 130, 10, "#3b0f2e", "center");
          }
        }
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) {
        last = now;
        return;
      }
      acc += Math.min(100, now - last);
      last = now;
      while (acc >= 1000 / 60) {
        update();
        acc -= 1000 / 60;
      }
      render();
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const press = () => {
    const s = stateRef.current;
    if (s.mode === "playing") {
      if (s.py >= GROUND - PH) s.vy = JUMP_V;
      return;
    }
    const next = freshState();
    next.mode = "playing";
    stateRef.current = next;
    setMode("playing");
  };

  return (
    <div className="game-wrap">
      <canvas
        ref={canvasRef}
        className="game-canvas"
        tabIndex={0}
        role="application"
        aria-label="Language Rush mini-game. Press space or tap to jump and collect programming language gems."
        onPointerDown={(e) => {
          e.preventDefault();
          (e.currentTarget as HTMLCanvasElement).focus();
          press();
        }}
        onKeyDown={(e) => {
          if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW" || e.code === "Enter") {
            e.preventDefault();
            press();
          }
        }}
      />
      <p className="game-hint">
        {t(mode === "playing" ? "SPACE / ↑ / TAP = JUMP" : "Click the screen, then press SPACE or tap to play")}
      </p>
    </div>
  );
}
