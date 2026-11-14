import type { Metadata } from "next";
import ShareButton from "./ShareButton";
import "./card.css";

export const metadata: Metadata = {
  title: "Nelly Almaktoum - Contact",
  description: "Save Nelly Almaktoum's contact details: ML researcher and inventor at King Abdulaziz University.",
  alternates: { canonical: "/card/" },
};

const ICON = {
  mail: "M3 6h18v12H3z M3 6l9 7 9-7",
  phone: "M6.6 3.5l3 3-2 2.2a12 12 0 0 0 7.7 7.7l2.2-2 3 3-2.3 2.6C10.6 20.6 3.4 13.4 4 5.8z",
  link: "M8 10v6 M8 7.5v.01 M12 16v-3.5a2 2 0 0 1 4 0V16 M12 10v6",
  web: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z",
};

const rows = [
  { label: "Email", value: "nelly@nelmkt.com", href: "mailto:nelly@nelmkt.com", icon: ICON.mail },
  { label: "Phone", value: "+966 56 576 7613", href: "tel:+966565767613", icon: ICON.phone },
  { label: "LinkedIn", value: "in/nelmkt", href: "https://www.linkedin.com/in/nelmkt/", icon: ICON.link },
  { label: "Website", value: "nelmkt.com", href: "/", icon: ICON.web },
];

export default function CardPage() {
  return (
    <main className="cp">
      <div className="cp-inner">
        <p className="cp-kicker">PLAYER 1</p>
        <h1 className="cp-name">
          <span>NELLY</span>
          <span>ALMAKTOUM</span>
        </h1>
        <p className="cp-ar" lang="ar" dir="rtl">
          نيللي المكتوم
        </p>

        <p className="cp-org">
          Faculty of Computing &amp; IT
          <br />
          King Abdulaziz University
        </p>

        <div className="cp-actions">
          <a className="cp-save" href="/nelly-almaktoum.vcf" download>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v11 M7 10l5 5 5-5 M5 20h14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
          </svg>
          SAVE CONTACT
          </a>
          <ShareButton />
        </div>

        <ul className="cp-rows">
          {rows.map((r) => (
            <li key={r.label}>
              <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                <span className="cp-ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={r.icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="cp-row-text">
                  <span className="cp-row-label">{r.label}</span>
                  <span className="cp-row-value">{r.value}</span>
                </span>
                <span className="cp-chev" aria-hidden="true">›</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="cp-foot">
          <a href="/">nelmkt.com</a>
        </p>
      </div>
    </main>
  );
}
