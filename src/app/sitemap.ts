import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { servicePages } from "@/content/seo";

// Public, indexable pages only. Portal (/login, /account/*), admin (/admin/*),
// and API routes are excluded here and disallowed in robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
