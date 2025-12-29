import { MetadataRoute } from "next";

const BASE_URL = "https://www.ilerisigorta.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
