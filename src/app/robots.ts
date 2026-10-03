import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { privateRoutes } from "@/content/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: privateRoutes },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
