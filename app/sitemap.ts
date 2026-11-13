import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://nelmkt.com/", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: "https://nelmkt.com/cv/", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://nelmkt.com/cv/ar/", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
