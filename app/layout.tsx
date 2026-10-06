import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Pixelify_Sans, Press_Start_2P } from "next/font/google";
import "./pixel-icons.css";
import "./globals.css";

const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });
const body = Pixelify_Sans({ subsets: ["latin"], variable: "--font-body" });
const arabic = Noto_Kufi_Arabic({ weight: "700", subsets: ["arabic"], variable: "--font-ar" });

export const metadata: Metadata = {
  title: "Nelly Almaktoum · nelmkt",
  description:
    "Nelly Almaktoum: undergraduate researcher at King Abdulaziz University working on applied ML, remote sensing and green technology.",
  metadataBase: new URL("https://nelmkt.com"),
  openGraph: {
    title: "Nelly Almaktoum · nelmkt",
    description: "Researcher & innovator: ML engineering and green tech. Press start.",
    url: "https://nelmkt.com",
    siteName: "nelmkt",
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
    title: "Nelly Almaktoum · nelmkt",
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
