"use client";

import { useCallback, useEffect, useState } from "react";
import CheatCode from "./CheatCode";
import ContactIcon from "./ContactIcon";
import EasterEgg from "./EasterEgg";
import PixelHeart from "./PixelHeart";
import PixelIcon from "./PixelIcon";
import PixelText from "./PixelText";
import RunnerGame from "./RunnerGame";
import StartScreen from "./StartScreen";
import { academy, languages, links, party, profile, quests, sideQuests, skillTree, stages, trophies } from "./data";

const STORE_KEY = "nelmkt-collected";

// Position in a stack of boxes, 0 (first, deep pink) to 1 (last, pastel pink).
const ramp = (i: number, n: number) => ({ ["--t" as string]: n > 1 ? i / (n - 1) : 0 });

// Section number shown in the heading and nav, e.g. "02".
const num = (id: string) => stages.find((s) => s.id === id)?.code ?? "";

export default function Portfolio() {
  const [collected, setCollected] = useState<string[]>([]);
  const [active, setActive] = useState("player");

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

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    stages.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const allUnlocked = collected.length === languages.length;

  return (
    <>
      <StartScreen />
      <CheatCode />

      <header className="hud">
        <a className="hud-logo" href="#player" aria-label="Back to top">
          NELMKT
        </a>
        <nav className="hud-nav" aria-label="Sections">
          {stages.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>
              <span className="code">{s.code}</span> {s.label}
            </a>
          ))}
        </nav>
        <div className="hud-hearts" aria-hidden="true">
          <PixelHeart />
          <PixelHeart />
          <PixelHeart />
        </div>
      </header>

      <main>
        {/* About */}
        <section id="player" className="stage">
          <StageTag code={num("player")} label="ABOUT" />
          <div className="player-grid">
            <div className="box player-portrait">
              <div className="portrait-frame">
                <img className="portrait-img" src="/portrait.jpg" alt="Pixel-art portrait of Nelly" width={433} height={412} />
              </div>
              <p className="player-handle">@{profile.handle}</p>
            </div>
            <div className="player-info">
              <h1 className="player-name">
                {profile.name}
                <span className="player-ar">
                  <PixelText text={profile.nameAr} size={13} scale={3} shadow="var(--accent-2)" />
                </span>
              </h1>
              <p className="player-headline">{profile.headline}</p>
              <p className="player-tag">{profile.tagline}</p>
              <dl className="box stats">
                {profile.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="cta-row">
                <a className="btn" href="#quests">
                  <PixelIcon name="play" size={12} /> VIEW PROJECTS
                </a>
                <a className="btn btn-alt" href="#save">
                  <PixelIcon name="mail" size={12} /> GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
          <div className="box dialog">
            <span className="dialog-name">BIO</span>
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="chips">
              {profile.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="quests" className="stage">
          <StageTag code={num("quests")} label="RESEARCH & PROJECTS" />
          <div className="quests">
            {quests.map((q, i) => (
              <article key={q.id} className="box quest ramp" style={ramp(i, quests.length)}>
                <div className="quest-media">
                  <img src={q.image} alt={q.imageAlt} loading="lazy" />
                </div>
                <div className="quest-body">
                  <p className="quest-status">{q.status}</p>
                  <h3>
                    <a href={q.url} target="_blank" rel="noreferrer">
                      {q.title} <span className="quest-ar">· <PixelText text={q.titleAr} size={13} scale={2} /></span>
                    </a>
                  </h3>
                  <p>{q.summary}</p>
                  <h4>HIGHLIGHTS</h4>
                  <ul className="objectives">
                    {q.objectives.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                  <h4>LINKS</h4>
                  <ul className="loot">
                    {q.loot.map((l) => (
                      <li key={l.label}>
                        <a href={l.url} target="_blank" rel="noreferrer">
                          <PixelIcon name="gem" size={10} /> {l.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={q.url} target="_blank" rel="noreferrer">
                        <PixelIcon name="gem" size={10} /> Source on GitHub
                      </a>
                    </li>
                  </ul>
                  <ul className="chips small">
                    {q.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section id="trophies" className="stage">
          <StageTag code={num("trophies")} label="AWARDS & RECOGNITION" />
          <ol className="trophies">
            {trophies.map((t, i) => (
              <li key={t.title} className={`box trophy ramp ${t.tier}`} style={ramp(i, trophies.length)}>
                <span className="trophy-icon" aria-hidden="true">
                  <PixelIcon name={t.tier === "legendary" ? "star" : t.tier === "patent" ? "scroll" : "trophy"} size={26} />
                </span>
                <div className="trophy-body">
                  <h3>{t.title}</h3>
                  <p className="trophy-detail">{t.detail}</p>
                </div>
                <div className="trophy-meta">
                  <span className="trophy-date">{t.year}</span>
                  <span className="trophy-by">{t.by}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section id="academy" className="stage">
          <StageTag code={num("academy")} label="EDUCATION" />
          <div className="academy">
            {academy.map((a, i) => (
              <div key={a.school} className="box school ramp" style={ramp(i, academy.length)}>
                <p className="school-when">{a.when}</p>
                <h3>{a.school}</h3>
                <p className="school-degree">{a.degree}</p>
                <p className="school-note">{a.note}</p>
              </div>
            ))}
          </div>
          <h3 className="sub-tag">COMPETITIONS & EVENTS</h3>
          <ul className="side-quests">
            {sideQuests.map((s, i) => (
              <li key={s.title} className="box side ramp" style={ramp(i, sideQuests.length)}>
                <span className="side-check"><PixelIcon name="check" size={14} /></span>
                <div>
                  <h4>{s.title}</h4>
                  <p>
                    {s.by} · {s.when}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="stage">
          <StageTag code={num("skills")} label="SKILLS" />
          <div className="box lang-panel">
            <h3>PROGRAMMING LANGUAGES</h3>
            <ul className="lang-list">
              {languages.map((l) => (
                <li key={l.name} className={collected.includes(l.name) ? "got" : ""}>
                  <span className="gem" style={{ ["--gem" as string]: l.color }} />
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-meter" aria-label={l.tier === "MAIN" ? "Proficient" : "Working knowledge"}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className={i < (l.tier === "MAIN" ? 5 : 3) ? "on" : ""} />
                    ))}
                  </span>
                  <span className="lang-tier">{l.tier === "MAIN" ? "PROFICIENT" : "WORKING"}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="branches">
            {skillTree.map((b, i) => (
              <div key={b.branch} className="box branch ramp" style={ramp(i, skillTree.length)}>
                <h3>{b.branch.toUpperCase()}</h3>
                <ul className="chips">
                  {b.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Mini-game */}
        <section id="bonus" className="stage">
          <StageTag code={num("bonus")} label="MINI-GAME · LANGUAGE RUSH" />
          <p className="stage-lede">
            A short break: collect the languages I program in and avoid the bugs. Press space or tap to jump.
          </p>
          <div className="box game-box">
            <RunnerGame collected={collected} onCollect={onCollect} />
          </div>
          <div className="inventory" aria-label="Collected languages">
            {languages.map((l) => {
              const got = collected.includes(l.name);
              return (
                <div key={l.name} className={`inv-slot${got ? " got" : ""}`} title={got ? l.name : "Not collected yet"}>
                  <span className="gem" style={{ ["--gem" as string]: l.color }} />
                  <span className="inv-name">{got ? l.name : "???"}</span>
                </div>
              );
            })}
          </div>
          {allUnlocked && <p className="all-unlocked"><PixelIcon name="star" /> ALL LANGUAGES COLLECTED <PixelIcon name="star" /></p>}
        </section>

        {/* Leadership */}
        <section id="party" className="stage">
          <StageTag code={num("party")} label="LEADERSHIP & COMMUNITY" />
          <ul className="party">
            {party.map((p, i) => (
              <li key={p.role + p.where} className={`box member ramp${p.lead ? " lead" : ""}`} style={ramp(i, party.length)}>
                <span className="slot">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.role}</h3>
                  <p>{p.where}</p>
                  <p className="member-when">{p.when}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="save" className="stage">
          <StageTag code={num("save")} label="CONTACT" />
          <div className="box save">
            <div className="save-crystal" aria-hidden="true" />
            <div>
              <h3>OPEN TO RESEARCH COLLABORATION</h3>
              <p>The quickest way to reach me is LinkedIn or email. I work in Arabic and English.</p>
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
                  <span className="link-label">{l.label}</span>
                  <span className="link-value">{l.value}</span>
                  <PixelIcon name="play" size={10} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="thanks">THANKS FOR VISITING</p>
        <EasterEgg />
        <p>© 2026 Nelly Almaktoum · Built with Next.js, TypeScript, HTML &amp; CSS</p>
      </footer>
    </>
  );
}

function StageTag({ code, label }: { code: string; label: string }) {
  return (
    <h2 className="stage-tag">
      <span className="stage-code">{code}</span>
      <span className="stage-label">{label}</span>
    </h2>
  );
}
