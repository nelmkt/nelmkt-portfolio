import type { Metadata } from "next";
import { FRAMES, PALETTE, SPRITE_W, SPRITE_H } from "../../components/sprite";
import "./card.css";

export const metadata: Metadata = {
  title: "Nelly Almaktoum - Contact",
  description: "Save Nelly Almaktoum's contact details: ML researcher and inventor at King Abdulaziz University.",
  alternates: { canonical: "/card/" },
};

function Sprite() {
  const rects: React.ReactNode[] = [];
  FRAMES[0].forEach((line, y) =>
    line.split("").forEach((c, x) => {
      const fill = PALETTE[c];
      if (fill) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={1.05} height={1.05} fill={fill} />);
    }),
  );
  return (
    <svg className="card-sprite" viewBox={`0 0 ${SPRITE_W} ${SPRITE_H}`} shapeRendering="crispEdges" aria-hidden="true">
      {rects}
    </svg>
  );
}

const links = [
  { label: "Email", value: "nelly@nelmkt.com", href: "mailto:nelly@nelmkt.com" },
  { label: "Phone", value: "+966 56 576 7613", href: "tel:+966565767613" },
  { label: "LinkedIn", value: "in/nelmkt", href: "https://www.linkedin.com/in/nelmkt/" },
  { label: "Website", value: "nelmkt.com", href: "/" },
];

export default function CardPage() {
  return (
    <main className="card-page">
      <div className="card-panel">
        <div className="card-hud">
          <span>PLAYER 1</span>
          <span className="card-marker">P1 ▼</span>
        </div>
        <Sprite />
        <h1 className="card-name">
          <span>NELLY</span>
          <span>ALMAKTOUM</span>
        </h1>
        <p className="card-ar" lang="ar" dir="rtl">نيللي المكتوم</p>
        <p className="card-role">ML Researcher - Inventor</p>
        <p className="card-org">Faculty of Computing &amp; IT - King Abdulaziz University</p>
        <a className="card-save" href="/nelly-almaktoum.vcf" download>
          ▶ SAVE CONTACT
        </a>
        <ul className="card-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                <b>{l.label}</b>
                <span>{l.value}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className="card-site" href="/">
          Enter nelmkt.com →
        </a>
      </div>
    </main>
  );
}
