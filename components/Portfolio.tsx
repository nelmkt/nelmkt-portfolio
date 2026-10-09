"use client";

import { useCallback, useEffect, useState } from "react";
import CheatCode from "./CheatCode";
import BrandIcon from "./BrandIcon";
import ContactIcon from "./ContactIcon";
import CursorFx from "./CursorFx";
import EasterEgg from "./EasterEgg";
import PageFx from "./PageFx";
import PixelHeart from "./PixelHeart";
import PixelIcon from "./PixelIcon";
import PixelText from "./PixelText";
import RunnerGame from "./RunnerGame";
import StartScreen from "./StartScreen";
import { type Lang, LangContext, LANG_KEY, applyLang, translate, useT } from "./lang";
import { toggleMode, toggleTheme } from "./mode";
import { academy, languages, links, party, profile, quests, sideQuests, skillTree, stages, trophies } from "./data";

const STORE_KEY = "nelmkt-collected";

// Position in a stack of boxes, 0 (first, deep pink) to 1 (last, pastel pink).
const ramp = (i: number, n: number) => ({ ["--t" as string]: n > 1 ? i / (n - 1) : 0 });

export default function Portfolio() {
  const [collected, setCollected] = useState<string[]>([]);
  const [active, setActive] = useState("player");
  const [lang, setLang] = useState<Lang>("en");
  const tr = (s: string) => translate(lang, s);
  const ar = lang === "ar";

  useEffect(() => {
    try {
      if (localStorage.getItem(LANG_KEY) === "ar") {
        setLang("ar");
        applyLang("ar");
      }
    } catch {}
  }, []);

  // The tab title follows the language (Next sets the English one at load, so this runs after it).
  useEffect(() => {
    const title = ar ? "نيللي المكتوم" : "Nelly Almaktoum";
    document.title = title;
    const id = setTimeout(() => (document.title = title), 50);
    return () => clearTimeout(id);
  }, [ar]);

  function switchLang() {
    const next = ar ? "en" : "ar";
    applyLang(next);
    setLang(next);
  }

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
      if (Array.isArray(saved)) setCollected(saved);
    } catch {}
  }, []);

  const onCollect = useCallback((name: string) => {
    setCollected((prev) => {
      if (prev.includes(name)) return prev;
      const next = [...prev, name];
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  // The highlighted menu item is the last visible section whose top has passed 40%
  // of the screen; at the very bottom of the page the last section wins.
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = "player";
      for (const s of stages) {
        const el = document.getElementById(s.id);
        if (!el || !el.offsetParent) continue;
        if (atBottom || el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const allUnlocked = collected.length === languages.length;

  return (
    <LangContext.Provider value={lang}>
      <CursorFx />
      <StartScreen />
      <CheatCode />
      <PageFx />

      <header className="hud">
        <a className="hud-logo" href="#player" aria-label="Back to top">
          <span className="hud-p1">P1</span> <Dual a="NELMKT" p="Nelly Almaktoum" />
        </a>
        <nav className="hud-nav" aria-label="Stages">
          {stages.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={`${active === s.id ? "on" : ""}${s.pro ? "" : " arcade-only"}`}>
              <span className="code">{s.code}</span> <Dual a={s.label} p={s.pro} />
            </a>
          ))}
        </nav>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Switch light or dark theme">
          <svg className="theme-moon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <svg className="theme-sun" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button type="button" className="lang-toggle" onClick={switchLang} lang={ar ? "en" : "ar"} aria-label={ar ? "Switch to English" : "التبديل إلى العربية"}>
          {ar ? "EN" : "ع"}
        </button>
        <button type="button" className="mode-toggle" onClick={toggleMode}>
          <Dual a="PRO VIEW" p="Arcade view" />
        </button>
        <div className="hud-hearts" aria-hidden="true">
          <PixelHeart />
          <PixelHeart />
          <PixelHeart />
        </div>
      </header>

      <main>
        {/* 1-1 PLAYER */}
        <section id="player" className="stage">
          <StageTag code="1-1" label="PLAYER SELECT" pro="About" />
          <div className="player-grid">
            <div className="box player-portrait">
              <div className="portrait-frame">
                <img className="portrait-img" src="/portrait.jpg" alt="Pixel-art portrait of Nelly" width={433} height={412} />
                <img className="portrait-photo" src="/photo.jpg" alt={tr("Photo of Nelly Almaktoum")} width={640} height={640} loading="lazy" />
              </div>
              <p className="player-handle">@{profile.handle}</p>
              <p className="player-role">{tr("Researcher & Innovator")}</p>
              <div className="xp arcade-only">
                <span>LV</span>
                <div className="xp-bar">
                  <i style={{ width: `${30 + (collected.length / languages.length) * 70}%` }} />
                </div>
                <span>XP</span>
              </div>
            </div>
            <div className="player-info">
              <h1 className="player-name">
                {profile.name}
                <span className="player-ar">
                  <PixelText text={profile.nameAr} size={13} scale={3} shadow="var(--accent-2)" />
                  <span className="ar-plain" lang="ar">{profile.nameAr}</span>
                </span>
              </h1>
              <p className="player-headline">
                {tr(profile.headline)
                  .split(" - ")
                  .map((part, i) => (
                    <span key={part}>
                      {i > 0 && <span className="hl-sep"> - </span>}
                      <bdi>{part}</bdi>
                    </span>
                  ))}
              </p>
              <p className="player-tag">{tr(profile.tagline)}</p>
              <div className="highlight">
                <span className="highlight-icon" aria-hidden="true">
                  <PixelIcon name="star" size={22} />
                </span>
                <div>
                  <p className="highlight-title">{tr(profile.highlight)}</p>
                  <p className="highlight-detail">{tr(profile.highlightDetail)}</p>
                </div>
              </div>
              <dl className="box stats">
                {profile.stats.map((s) => (
                  <div key={s.label}>
                    <dt>
                      <Dual a={s.label} p={s.pro} />
                    </dt>
                    <dd>{tr(s.value)}</dd>
                  </div>
                ))}
              </dl>
              <div className="cta-row">
                <a className="btn arcade-only" href="#bonus">
                  <PixelIcon name="play" size={12} /> {tr("PLAY BONUS STAGE")}
                </a>
                <a className="btn btn-alt" href="#save">
                  <PixelIcon name="mail" size={12} /> <Dual a="SAVE POINT" p="Get in touch" />
                </a>
              </div>
            </div>
          </div>
          <div className="box dialog">
            <span className="dialog-name arcade-only">{tr("NELLY")}</span>
            {profile.about.map((p) => (
              <p key={p} className="arcade-only">
                {tr(p)}
              </p>
            ))}
            {profile.aboutPro.map((p) => (
              <p key={p} className="pro-only">
                {tr(p)}
              </p>
            ))}
            <p className="chips-label">{tr("FOCUS AREAS")}</p>
            <ul className="chips">
              {profile.interests.map((i) => (
                <li key={i}>{tr(i)}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 1-2 BONUS */}
        <section id="bonus" className="stage arcade-only">
          <StageTag code="1-2" label="BONUS STAGE - LANGUAGE RUSH" pro="" />
          <p className="stage-lede">
            {tr("The languages I program in, as collectibles. Jump to collect each one and avoid the bugs.")}
          </p>
          <div className="box game-box">
            <RunnerGame collected={collected} onCollect={onCollect} />
          </div>
          <div className="inventory" aria-label="Collected languages">
            {languages.map((l) => {
              const got = collected.includes(l.name);
              return (
                <div key={l.name} className={`inv-slot${got ? " got" : ""}`} title={got ? l.name : tr("Locked")}>
                  <span className="gem" style={{ ["--gem" as string]: l.color }} />
                  <span className="inv-name">{got ? l.name : "???"}</span>
                </div>
              );
            })}
          </div>
          {allUnlocked && <p className="all-unlocked"><PixelIcon name="star" /> {tr("ALL LANGUAGES UNLOCKED")} <PixelIcon name="star" /></p>}
        </section>

        {/* 1-3 QUESTS */}
        <section id="quests" className="stage">
          <StageTag code="1-3" label="QUEST LOG" pro="Research & projects" />
          <div className="quests">
            {quests.map((q, i) => (
              <article key={q.id} className="box quest ramp" style={ramp(i, quests.length)}>
                <a className="quest-media" href={q.url} target="_blank" rel="noreferrer" aria-label={`${q.title} on GitHub`}>
                  <img src={q.image} alt={q.imageAlt} />
                  <span className="quest-media-tag" aria-hidden="true">
                    <Dual a="OPEN" p="View project" /> <PixelIcon name="play" size={8} />
                  </span>
                </a>
                <div className="quest-body">
                  <p className="quest-status">
                    <Dual a={q.status} p={q.statusPro} />
                  </p>
                  <h3>
                    <a href={q.url} target="_blank" rel="noreferrer">
                      {q.title} <span className="quest-ar">- <PixelText text={q.titleAr} size={16} scale={2} /><span className="ar-plain" lang="ar">{q.titleAr}</span></span>
                    </a>
                  </h3>
                  <p>{tr(q.summary)}</p>
                  <h4><Dual a="OBJECTIVES CLEARED" p="Highlights" /></h4>
                  <ul className="objectives">
                    {q.objectives.map((o) => (
                      <li key={o}>{tr(o)}</li>
                    ))}
                  </ul>
                  <h4><Dual a="LOOT" p="Links" /></h4>
                  <ul className="loot">
                    {q.loot.map((l) => (
                      <li key={l.label}>
                        <a href={l.url} target="_blank" rel="noreferrer">
                          <PixelIcon name="gem" size={10} /> {tr(l.label)}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={q.url} target="_blank" rel="noreferrer">
                        <PixelIcon name="gem" size={10} /> {tr("Source on GitHub")}
                      </a>
                    </li>
                  </ul>
                  <ul className="chips small">
                    {q.tags.map((t) => (
                      <li key={t}>{tr(t)}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 1-4 TROPHIES */}
        <section id="trophies" className="stage">
          <StageTag code="1-4" label="TROPHY ROOM" pro="Recognition" />
          <ol className="trophies">
            {trophies.map((t, i) => (
              <li key={t.title} className={`box trophy ramp ${t.tier}`} style={ramp(i, trophies.length)}>
                <span className="trophy-icon" aria-hidden="true">
                  <PixelIcon name={t.tier === "legendary" ? "star" : t.tier === "patent" ? "scroll" : "trophy"} size={26} />
                </span>
                <div className="trophy-body">
                  <p className="trophy-year">
                    <Dual a={`ACHIEVEMENT UNLOCKED${t.tier === "legendary" ? " - LEGENDARY" : ""}`} p={t.tier === "patent" ? "Patent" : t.tier === "legendary" ? "Distinction" : "Award"} />
                  </p>
                  <h3>{tr(t.title)}</h3>
                  <p className="trophy-detail">{tr(t.detail)}</p>
                </div>
                <div className="trophy-meta">
                  <span className="trophy-date">{tr(t.year)}</span>
                  <span className="trophy-by">{tr(t.by)}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 1-5 ACADEMY */}
        <section id="academy" className="stage">
          <StageTag code="1-5" label="ACADEMY & SIDE QUESTS" pro="Education & activities" />
          <div className="academy">
            {academy.map((a, i) => (
              <div key={a.school} className="box school ramp" style={ramp(i, academy.length)}>
                <p className="school-when">{tr(a.when)}</p>
                <h3>{tr(a.school)}</h3>
                <p className="school-degree">{tr(a.degree)}</p>
                <p className="school-note">{tr(a.note)}</p>
              </div>
            ))}
          </div>
          <h3 className="sub-tag"><Dual a="SIDE QUESTS CLEARED" p="Programs & certificates" /></h3>
          <ul className="side-quests">
            {sideQuests.map((s, i) => (
              <li key={s.title} className="box side ramp" style={ramp(i, sideQuests.length)}>
                <span className="side-check"><PixelIcon name="check" size={14} /></span>
                <div>
                  <h4>{tr(s.title)}</h4>
                  <p>
                    {s.by ? `${tr(s.by)} - ${tr(s.when)}` : tr(s.when)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 1-6 SKILLS */}
        <section id="skills" className="stage">
          <StageTag code="1-6" label="SKILL TREE" pro="Technical skills" />
          <div className="box lang-panel">
            <h3>{tr("LANGUAGES")}</h3>
            <ul className="lang-list">
              {languages.map((l) => (
                <li key={l.name} className={collected.includes(l.name) ? "got" : ""}>
                  <span className="gem" style={{ ["--gem" as string]: l.color }} />
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-meter" aria-label={tr(l.tier === "MAIN" ? "Main language" : "Working knowledge")}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className={i < l.level ? "on" : ""} />
                    ))}
                  </span>
                  <span className="lang-tier">{tr(l.tier === "MAIN" ? "MAIN" : "WORKING")}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="branches">
            {skillTree.map((b, i) => (
              <div key={b.branch} className="box branch ramp" style={ramp(i, skillTree.length)}>
                <h3>{ar ? tr(b.branch) : b.branch.toUpperCase()}</h3>
                <ul className="chips">
                  {b.items.map((i) => (
                    <li key={i}>{tr(i)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 1-7 PARTY */}
        <section id="party" className="stage">
          <StageTag code="1-7" label="PARTY & GUILDS" pro="Leadership & community" />
          <ul className="party">
            {party.map((p, i) => (
              <li key={p.role + p.where} className={`box member ramp${p.lead ? " lead" : ""}`} style={ramp(i, party.length)}>
                <span className="slot">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{tr(p.role)}</h3>
                  <p>{tr(p.where)}</p>
                  <p className="member-when">{tr(p.when)}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 1-8 SAVE */}
        <section id="save" className="stage">
          <StageTag code="1-8" label="SAVE POINT" pro="Contact" />
          <div className="box save">
            <div>
              <h3>{tr("OPEN TO RESEARCH COLLABORATION")}</h3>
              <p>{tr("The quickest way to reach me is LinkedIn or email. I work in Arabic and English.")}</p>
            </div>
          </div>
          <ul className="links">
            {links.map((l, i) => (
              <li key={l.label}>
                <a
                  className="box link ramp"
                  style={ramp(i, links.length)}
                  href={l.url}
                  target={l.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  <ContactIcon name={l.label} />
                  <BrandIcon name={l.label} />
                  <span className="link-label">{tr(l.label)}</span>
                  <span className="link-value">{l.value}</span>
                  <PixelIcon name="play" size={10} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="thanks arcade-only">{tr("THANKS FOR PLAYING!")}</p>
        <EasterEgg />
        <p>{tr("© 2026 Nelly Almaktoum - Built with Next.js, TypeScript, HTML & CSS")}</p>
      </footer>
    </LangContext.Provider>
  );
}

function StageTag({ code, label, pro }: { code: string; label: string; pro: string }) {
  const t = useT();
  return (
    <h2 className="stage-tag">
      <span className="stage-code arcade-only">
        {t("STAGE")} {code}
      </span>
      <span className="stage-label">
        <Dual a={label} p={pro} />
      </span>
    </h2>
  );
}

// The same spot reads as a game label in arcade mode and as plain wording in professional mode.
// Both are passed through the Arabic dictionary when Arabic is on.
function Dual({ a, p }: { a: string; p: string }) {
  const t = useT();
  return (
    <>
      <span className="arcade-only">{t(a)}</span>
      <span className="pro-only">{t(p)}</span>
    </>
  );
}
