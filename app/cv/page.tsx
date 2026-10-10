import type { Metadata } from "next";
import { cv, cvPdf, type CvEntry, type CvLine } from "@/components/cv";
import "./cv.css";

export const metadata: Metadata = {
  title: "CV - Nelly Almaktoum",
  description: "The CV of Nelly Almaktoum: Computer Science student, applied ML and sustainability researcher.",
};

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
                <a href={e.link.url} className="cv-link">
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

function Lines({ items }: { items: CvLine[] }) {
  return (
    <ul className="cv-lines">
      {items.map((l) => (
        <li key={l.lead + l.text}>
          <span>
            <b>{l.lead}</b>
            {l.text && (l.lead.endsWith(":") ? " " : ", ")}
            {l.text && (l.url ? <a href={l.url}>{l.text}</a> : l.text)}
          </span>
          {l.date && <span className="cv-date">{l.date}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function CvPage() {
  return (
    <div className="cv-wrap" dir="ltr" lang="en">
      <nav className="cv-bar" aria-label="CV actions">
        <a href="/">← nelmkt.com</a>
        <a href={cvPdf} download className="cv-dl">
          Download PDF
        </a>
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

        <Section title="Profile">
          <p className="cv-profile">{cv.profile}</p>
        </Section>
        <Section title="Education">
          <Entries items={cv.education} />
        </Section>
        <Section title="Research & Projects">
          <Entries items={cv.research} />
        </Section>
        <Section title="Patent, Publications & Media" className="cv-pubs">
          <Lines items={cv.publications.map((p) => ({ ...p, lead: p.lead + ":" }))} />
        </Section>
        <Section title="Awards & Honors">
          <Entries items={cv.awards} />
          <Lines items={cv.moreAwards} />
        </Section>
        <Section title="Leadership & Extracurricular Activities">
          <Lines items={cv.leadership} />
        </Section>
        <Section title="Conferences, Competitions & Events">
          <Lines items={cv.events} />
        </Section>
        <Section title="Skills">
          <Lines items={cv.skills.map((s) => ({ ...s, lead: s.lead + ":" }))} />
        </Section>
      </article>
    </div>
  );
}
