import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://ilerigrupsigorta.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/hakkimizda", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/sigortalar", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/bireysel", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/kurumsal", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/saglik-turizmi", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/online-islemler", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/online-islemler/rehber", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            tr: `${BASE_URL}/tr${route.path}`,
            en: `${BASE_URL}/en${route.path}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
