import type { MetadataRoute } from "next";
import { navItems } from "@/lib/navigation";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return navItems.map((item) => ({
    url: `${site.url}${item.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
