import { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/home/SectionHeader";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPosts } from "@/data/locale";
import { getDictionary } from "@/messages";
import { isLocale } from "@/i18n/config";
import { getLocaleParam } from "@/i18n/params";
import { localePath } from "@/i18n/navigation";

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.blogPage.hero.title,
    description: dict.blogPage.hero.subtitle,
    path: "/blog",
    locale: params.locale,
    siteName: dict.meta.siteName,
  });
}

export default function BlogPage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  const dict = getDictionary(locale);
  const blogPosts = getBlogPosts(locale);
  const t = dict.blogPage;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.home, url: localePath(locale, "/") },
          { name: dict.nav.blog, url: localePath(locale, "/blog") },
        ])}
      />

      <section className="relative overflow-hidden bg-primary pb-10 pt-24 lg:pb-14 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30"
          aria-hidden="true"
        />
        <div className="container-custom relative px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <span className="gold-rule" aria-hidden="true" />
          </div>
          <h1 className="section-title-light mx-auto max-w-3xl">{t.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding-sm bg-ivory">
        <div className="container-custom">
          <SectionHeader align="left" compact title={t.latest} />
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
