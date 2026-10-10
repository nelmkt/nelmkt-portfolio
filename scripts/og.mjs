import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const W = 1200, H = 630, HZ = 410;

const grid = (rows, x0, y0, s, colors) =>
  rows
    .flatMap((row, y) =>
      [...row].map((c, x) => (colors[c] ? `<rect x="${x0 + x * s}" y="${y0 + y * s}" width="${s}" height="${s}" fill="${colors[c]}"/>` : "")),
    )
    .join("");

const SPRITE = [
  "....kkkkkk......", "...kHHHHHHkk....", "..kHHhhHHHHHk.k.", ".kHHhHHHHHHHHkHk", ".kHHHHHkHHHkHHHk",
  ".kHHHkSSkHkSSHk.", ".kHkGWEGGGWEGkHk", ".kHkGEEGSGEEGkHk", "..kHsSSSSSSSsHk.", "..kHkSSSTSSSkHk.",
  "..kH.kkSSSSkkHk.", "...k.kSSSSk..k..", "...kBBBkkBBBk...", "..kBBBBBBBBBBk..", ".kBbBBBBBBBBbBk.",
  ".kSkBBBBBBBBkSk.", "...kBBBBBBBBk...", "...kPPPPPPPPk...", "....kPPkkPPk....", "....kFFkkFFk....",
];
const SPRITE_COLORS = {
  k: "#140c12", H: "#2b2b30", h: "#55505e", S: "#fde3c4", s: "#efbfa0", G: "#1d1a22",
  W: "#ffffff", E: "#8e8a99", T: "#f37aa3", B: "#26242b", b: "#4a4652", P: "#4b2f6b", F: "#2f2c34",
};

let stars = "";
for (let i = 0; i < 40; i++) {
  const r = (n) => (Math.sin(i * 97.13 + n * 13.7) + 1) / 2;
  const s = r(3) > 0.8 ? 5 : r(3) > 0.4 ? 4 : 3;
  stars += `<rect x="${(r(1) * W) | 0}" y="${(r(2) * (HZ - 60)) | 0}" width="${s}" height="${s}" fill="${r(5) > 0.75 ? "#ff8cc0" : "#fff"}" opacity="${(0.4 + r(4) * 0.5).toFixed(2)}"/>`;
}
let floor = "";
for (let i = -12; i <= 12; i++) floor += `<line x1="${W / 2}" y1="${HZ}" x2="${W / 2 + i * 150}" y2="${H}"/>`;
[8, 22, 42, 70, 108, 160, 220].forEach((d) => (floor += `<line x1="0" y1="${HZ + d}" x2="${W}" y2="${HZ + d}"/>`));
const slats = [[HZ - 70, 6], [HZ - 48, 9], [HZ - 26, 12]]
  .map(([y, h]) => `<rect x="${W / 2 - 220}" y="${y}" width="440" height="${h}" fill="url(#sky)"/>`)
  .join("");

const shadowed = (txt, x, y, size, family, step) =>
  [["#1a0612", step * 2], ["#b8306f", step], ["#ffffff", 0]]
    .map(([fill, d]) => `<text x="${x + d}" y="${y + d}" font-size="${size}" font-family="${family}" font-weight="700" fill="${fill}" text-anchor="middle">${txt}</text>`)
    .join("");

const pixelArabic = (txt, cx, top, size, scale) => {
  const sw = size * 20, sh = size * 3;
  const tiny = new Resvg(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${sw}" height="${sh}"><text x="${sw / 2}" y="${sh * 0.62}" font-size="${size}" font-family="Noto Kufi Arabic" font-weight="700" fill="#000" text-anchor="middle">${txt}</text></svg>`,
    { font: { fontFiles: [join(here, "fonts/NotoKufiArabic-Bold.ttf")], loadSystemFonts: false } },
  ).render();
  const px = tiny.pixels;
  const on = [];
  let minX = sw, maxX = -1, minY = sh, maxY = -1;
  for (let y = 0; y < sh; y++)
    for (let x = 0; x < sw; x++)
      if (px[(y * sw + x) * 4 + 3] > 110) {
        on.push([x, y]);
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
  const x0 = Math.round(cx - ((maxX - minX + 1) * scale) / 2);
  return [["#1a0612", 2], ["#b8306f", 1], ["#ffffff", 0]]
    .map(([fill, d]) =>
      `<g fill="${fill}">` +
      on.map(([x, y]) => `<rect x="${x0 + (x - minX + d) * scale}" y="${top + (y - minY + d) * scale}" width="${scale}" height="${scale}"/>`).join("") +
      `</g>`,
    )
    .join("");
};

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="${HZ}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#08030a"/><stop offset=".55" stop-color="#2a0920"/><stop offset="1" stop-color="#5c1340"/>
    </linearGradient>
    <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd000"/><stop offset=".5" stop-color="#ff6a00"/><stop offset="1" stop-color="#ff1f7a"/>
    </linearGradient>
    <linearGradient id="rainbow" x1="0" x2="1">
      <stop offset="0" stop-color="#ff1f7a"/><stop offset=".2" stop-color="#ff6a00"/><stop offset=".4" stop-color="#ffd000"/>
      <stop offset=".6" stop-color="#00d25b"/><stop offset=".8" stop-color="#0091ff"/><stop offset="1" stop-color="#8a2be2"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="${HZ}" x2="0" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ff3d8b" stop-opacity="0"/><stop offset=".35" stop-color="#ff3d8b" stop-opacity=".5"/>
    </linearGradient>
    <clipPath id="above"><rect width="${W}" height="${HZ}"/></clipPath>
  </defs>
  <rect width="${W}" height="${HZ}" fill="url(#sky)"/>
  <rect y="${HZ}" width="${W}" height="${H - HZ}" fill="#08030a"/>
  ${stars}
  <g clip-path="url(#above)">
    <circle cx="${W / 2}" cy="${HZ}" r="210" fill="url(#sun)"/>
    ${slats}
  </g>
  <g stroke="url(#fade)" stroke-width="2.5">${floor}</g>
  <rect y="${HZ - 1}" width="${W}" height="3" fill="#ff3d8b" opacity=".7"/>

  <text x="${W / 2}" y="78" font-size="18" font-family="Press Start 2P" fill="#ff8cc0" text-anchor="middle" letter-spacing="4">NELMKT PRESENTS</text>
  ${shadowed("NELLY ALMAKTOUM", W / 2, 178, 62, "Press Start 2P", 4)}
  ${pixelArabic("نيللي المكتوم", W / 2, 222, 17, 4)}

  ${grid(SPRITE, 150, HZ + 40, 7, SPRITE_COLORS)}
  <rect x="${W / 2 - 230}" y="${H - 104}" width="460" height="58" fill="#ffffff" stroke="#1a0612" stroke-width="4"/>
  <rect x="${W / 2 - 222}" y="${H - 96}" width="460" height="58" fill="none" stroke="#1a0612" stroke-width="4" opacity=".6"/>
  <polygon points="${W / 2 - 200},${H - 87} ${W / 2 - 200},${H - 63} ${W / 2 - 184},${H - 75}" fill="#ff1f7a"/>
  <text x="${W / 2 + 14}" y="${H - 64}" font-size="24" font-family="Press Start 2P" fill="#3b0f2e" text-anchor="middle">NELMKT.COM</text>
  <rect y="${H - 10}" width="${W}" height="10" fill="url(#rainbow)"/>
</svg>`;

const png = new Resvg(svg, {
  fitTo: { mode: "width", value: W },
  font: {
    fontFiles: [join(here, "fonts/PressStart2P-Regular.ttf"), join(here, "fonts/NotoKufiArabic-Bold.ttf")],
    loadSystemFonts: false,
    defaultFontFamily: "Press Start 2P",
  },
}).render().asPng();

writeFileSync(join(here, "../public/og.png"), png);
console.log(`wrote public/og.png (${(png.length / 1024).toFixed(0)} KB)`);
