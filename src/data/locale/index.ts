import type { Locale } from "@/i18n/config";
import { services as servicesEn } from "@/data/services";
import { areas as areasEn } from "@/data/areas";
import { blogPosts as blogPostsEn } from "@/data/blog";
import { testimonials as testimonialsEn } from "@/data/testimonials";
import { teamMembers as teamMembersEn } from "@/data/team";
import { servicesAr } from "@/data/locale/ar/services";
import { areasAr } from "@/data/locale/ar/areas";
import { blogPostsAr } from "@/data/locale/ar/blog";
import { testimonialsAr } from "@/data/locale/ar/testimonials";
import { teamMembersAr } from "@/data/locale/ar/team";

export function getServices(locale: Locale) {
  return locale === "ar" ? servicesAr : servicesEn;
}

export function getAreas(locale: Locale) {
  return locale === "ar" ? areasAr : areasEn;
}

export function getBlogPosts(locale: Locale) {
  return locale === "ar" ? blogPostsAr : blogPostsEn;
}

export function getBlogPostBySlug(locale: Locale, slug: string) {
  return getBlogPosts(locale).find((p) => p.slug === slug);
}

export function getTestimonials(locale: Locale) {
  return locale === "ar" ? testimonialsAr : testimonialsEn;
}

export function getTeamMembers(locale: Locale) {
  return locale === "ar" ? teamMembersAr : teamMembersEn;
}
