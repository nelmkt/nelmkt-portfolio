import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Noto_Kufi_Arabic, Press_Start_2P, Space_Grotesk } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const arabic = Noto_Kufi_Arabic({ weight: "700", subsets: ["arabic"], variable: "--font-ar" });

export const metadata: Metadata = {
  title: "Nelly Almaktoum · nelmkt",
  description:
    "Nelly Almaktoum: undergraduate researcher at King Abdulaziz University working on applied ML, remote sensing and green technology.",
  metadataBase: new URL("https://nelmkt.com"),
  openGraph: {
    title: "Nelly Almaktoum · nelmkt",
    description: "Researcher & innovator: AI/ML and green tech. Press start.",
    url: "https://nelmkt.com",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${pixel.variable} ${display.variable} ${body.variable} ${mono.variable} ${arabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
