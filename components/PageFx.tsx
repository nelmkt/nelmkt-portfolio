"use client";

import { useEffect, useState } from "react";
import { useT } from "./lang";

// Page-level polish: rainbow scroll-progress bar, sections that step in as they
// scroll into view, and a pixel back-to-top button.
export default function PageFx() {
  const t = useT();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setShowTop(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Reveal-on-scroll. Sections are only hidden once JS is running (the class on <html>),
    // so the page still reads fine without it, and reduced-motion users skip the effect.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | undefined;
    if (!reduce) {
      document.documentElement.classList.add("reveal-ready");
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          }),
        { rootMargin: "0px 0px -12% 0px" },
      );
      document.querySelectorAll("main .stage").forEach((s) => io!.observe(s));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <i style={{ transform: `scaleX(${progress})` }} />
      </div>
      <a href="#player" className={`to-top${showTop ? " show" : ""}`} aria-label="Back to top">
        <svg width="12" height="10" viewBox="0 0 6 5" shapeRendering="crispEdges" aria-hidden="true">
          <path d="M2 0h2v1h1v1h1v1H4v2H2V3H0V2h1V1h1z" fill="currentColor" />
        </svg>
        {t("TOP")}
      </a>
    </>
  );
}
