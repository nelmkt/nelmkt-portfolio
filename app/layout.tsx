import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Noto_Kufi_Arabic } from "next/font/google";
import localFont from "next/font/local";
import { modeBootScript } from "../components/mode";
import "./pixel-icons.css";
import "./globals.css";

const pixel = localFont({
  src: "./fonts/PixelifySans-Variable.woff2",
  weight: "400 700",
  variable: "--font-pixel",
  declarations: [{ prop: "size-adjust", value: "145%" }],
});
const banner = localFont({ src: "./fonts/Jersey15-Regular.woff2", variable: "--font-banner" });
const digits = localFont({
  src: "./fonts/Jersey15-Regular.woff2",
  variable: "--font-digits",
  preload: false,
  declarations: [
    { prop: "unicode-range", value: "U+0030-0039, U+002F, U+002B" },
    { prop: "size-adjust", value: "175%" },
  ],
});
const body = Chakra_Petch({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-body" });
const pro = localFont({ src: "./fonts/IBMPlexSans-Variable.woff2", weight: "100 700", variable: "--font-pro", preload: false });
const proHeading = localFont({
  src: "./fonts/IBMPlexSans-Variable.woff2",
  weight: "100 700",
  variable: "--font-pro-heading",
  preload: false,
  declarations: [{ prop: "size-adjust", value: "150%" }],
});
const arabic = Noto_Kufi_Arabic({ weight: ["400", "500", "700"], subsets: ["arabic"], variable: "--font-ar" });
const arabicHeading = localFont({
  src: "./fonts/NotoKufiArabic-Variable.woff2",
  weight: "100 900",
  variable: "--font-ar-head",
  preload: false,
  declarations: [{ prop: "size-adjust", value: "140%" }],
});

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
        alt: "Nelly Almaktoum - نيللي المكتوم, a retro arcade portfolio at nelmkt.com",
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
    <html lang="en" className={`${pixel.variable} ${banner.variable} ${digits.variable} ${body.variable} ${pro.variable} ${proHeading.variable} ${arabic.variable} ${arabicHeading.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
