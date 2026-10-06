"use client";

import { useEffect, useState } from "react";
import PixelText from "./PixelText";
import { profile } from "./data";

export default function StartScreen() {
  const [open, setOpen] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("nelmkt-started")) setOpen(false);
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
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

  function start() {
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
      onClick={start}
    >
      <div className="start-inner">
        <p className="start-kicker">NELMKT PRESENTS</p>
        <h1 className="start-title">
          NELLY
          <br />
          ALMAKTOUM
        </h1>
        <p className="start-ar">
          <PixelText text={profile.nameAr} size={14} scale={3} shadow="#4a1238" />
        </p>
        <div className="start-avatar">
          <img src="/portrait.png" alt="Pixel-art portrait of Nelly" width={180} height={180} />
        </div>
        <button className="start-btn" onClick={start} autoFocus>
          ▶ PRESS START
        </button>
        <p className="start-meta">© 2026 · 1 PLAYER · RESEARCH EDITION</p>
      </div>
    </div>
  );
}
