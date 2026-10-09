import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import localFont from "next/font/local";
import { modeBootScript } from "../components/mode";
import "./pixel-icons.css";
import "./globals.css";

// Jersey 10: a bold, readable pixel font with lowercase, for titles and labels (OFL).
// The stylesheet's sizes were set for wider pixel fonts, so size-adjust scales it up.
const pixel = localFont({
  src: "./fonts/Jersey10-Regular.ttf",
  variable: "--font-pixel",
  declarations: [{ prop: "size-adjust", value: "200%" }],
});
// Departure Mono (OFL): a pixel monospace drawn for legibility, so paragraphs stay easy to read.
const body = localFont({ src: "./fonts/DepartureMono-Regular.woff2", variable: "--font-body" });
// Professional mode swaps every pixel face for IBM Plex Sans (OFL). Headings get a
// size-adjusted copy so the sizes tuned for the pixel font still read the same.
const pro = localFont({ src: "./fonts/IBMPlexSans-Variable.ttf", weight: "100 700", variable: "--font-pro" });
const proHeading = localFont({
  src: "./fonts/IBMPlexSans-Variable.ttf",
  weight: "100 700",
  variable: "--font-pro-heading",
  declarations: [{ prop: "size-adjust", value: "150%" }],
});
const arabic = Noto_Kufi_Arabic({ weight: "700", subsets: ["arabic"], variable: "--font-ar" });

export const metadata: Metadata = {
  title: "Nelly Almaktoum",
  description:
    "Nelly Almaktoum: undergraduate researcher at King Abdulaziz University working on applied ML, remote sensing and green technology.",
  metadataBase: new URL("https://nelmkt.com"),
  openGraph: {
    title: "Nelly Almaktoum",
    description: "Researcher & innovator: ML engineering and green tech. Press start.",
    url: "https://nelmkt.com",
    siteName: "Nelly Almaktoum",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nelly Almaktoum · نيللي المكتوم, a retro arcade portfolio at nelmkt.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelly Almaktoum",
    description: "Researcher & innovator: ML engineering and green tech. Press start.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ff3d8b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixel.variable} ${body.variable} ${pro.variable} ${proHeading.variable} ${arabic.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
