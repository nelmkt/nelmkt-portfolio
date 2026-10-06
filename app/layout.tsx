import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Pixelify_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./pixel-icons.css";
import "./globals.css";

// Silkscreen: a readable pixel font for titles and labels (OFL). It draws smaller than
// the Press Start 2P it replaced, so size-adjust scales it up to keep existing sizes.
const pixel = localFont({
  src: [
    { path: "./fonts/Silkscreen-Regular.ttf", weight: "400" },
    { path: "./fonts/Silkscreen-Bold.ttf", weight: "700" },
  ],
  variable: "--font-pixel",
  declarations: [{ prop: "size-adjust", value: "135%" }],
});
const body = Pixelify_Sans({ subsets: ["latin"], variable: "--font-body" });
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
    <html lang="en" className={`${pixel.variable} ${body.variable} ${arabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
