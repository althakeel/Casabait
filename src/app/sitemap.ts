import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { properties } from "@/data/properties";
import { blogPosts } from "@/data/blog";
import { locales } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/services", "/properties", "/off-plan", "/areas", "/blog", "/contact"];

  const staticPages = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );

  const propertyPages = locales.flatMap((locale) =>
    properties.map((p) => ({
      url: `${SITE_URL}${localePath(locale, `/properties/${p.slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  const blogPages = locales.flatMap((locale) =>
    blogPosts.map((p) => ({
      url: `${SITE_URL}${localePath(locale, `/blog/${p.slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...propertyPages, ...blogPages];
}
