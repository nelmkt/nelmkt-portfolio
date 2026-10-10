import { cvLabels, cvPage, cvPdfs, cvs, type CvEntry, type CvLang, type CvLine } from "./cv";
import CvLangSwitch from "./CvLangSwitch";
import "../app/cv/cv.css";

function Section({ title, className = "", children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <section className={`cv-section ${className}`.trim()}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Entries({ items }: { items: CvEntry[] }) {
  return (
    <>
      {items.map((e) => (
        <div key={e.title} className="cv-entry">
          <div className="cv-row">
            <h3>{e.title}</h3>
            {e.date && <span className="cv-date">{e.date}</span>}
          </div>
          {(e.role || e.link) && (
            <div className="cv-row cv-sub">
              {e.role && <span>{e.role}</span>}
              {e.link && (
                <a href={e.link.url} className="cv-link" dir="ltr">
                  {e.link.label}
                </a>
              )}
            </div>
          )}
          {e.bullets && (
            <ul>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

function Lines({ items, sep, colon = false }: { items: CvLine[]; sep: string; colon?: boolean }) {
  return (
    <ul className="cv-lines">
      {items.map((l) => (
        <li key={l.lead + l.text}>
          <span>
            <b>{colon ? l.lead + ":" : l.lead}</b>
            {l.text && (colon ? " " : sep)}
            {l.text && (l.url ? <a href={l.url}>{l.text}</a> : l.text)}
          </span>
          {l.date && <span className="cv-date">{l.date}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function CvDocument({ lang }: { lang: CvLang }) {
  const cv = cvs[lang];
  const t = cvLabels[lang];
  const other: CvLang = lang === "ar" ? "en" : "ar";
  return (
    <div className="cv-wrap" dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <nav className="cv-bar" aria-label="CV">
        <a href="/" dir="ltr">
          {t.back}
        </a>
        <span className="cv-bar-actions">
          <CvLangSwitch lang={other} href={cvPage[other]} label={t.other} />
          <a href={cvPdfs[lang]} download className="cv-dl">
            {t.download}
          </a>
        </span>
      </nav>

      <article className="cv-doc">
        <header className="cv-head">
          <h1>{cv.name}</h1>
          <p className="cv-title">{cv.title}</p>
          <p className="cv-contact">
            {cv.contact.map((c, i) => (
              <span key={c.label}>
                {i > 0 && <span className="cv-dot"> | </span>}
                {c.url ? <a href={c.url}>{c.label}</a> : c.label}
              </span>
            ))}
          </p>
        </header>

        <Section title={t.profile}>
          <p className="cv-profile">{cv.profile}</p>
        </Section>
        <Section title={t.education}>
          <Entries items={cv.education} />
        </Section>
        <Section title={t.research}>
          <Entries items={cv.research} />
        </Section>
        <Section title={t.publications} className="cv-pubs">
          <Lines items={cv.publications} sep={t.sep} colon />
        </Section>
        <Section title={t.awards}>
          <Entries items={cv.awards} />
          <Lines items={cv.moreAwards} sep={t.sep} />
        </Section>
        <Section title={t.leadership}>
          <Lines items={cv.leadership} sep={t.sep} />
        </Section>
        <Section title={t.events}>
          <Lines items={cv.events} sep={t.sep} />
        </Section>
        <Section title={t.skills}>
          <Lines items={cv.skills} sep={t.sep} colon />
        </Section>
      </article>
    </div>
  );
}
