/*
 * Replace with licensed/owned property photography before launch.
 */
import { Metadata } from "next";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { notFound } from "next/navigation";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { BlogCard } from "@/components/BlogCard";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { ContentBadge } from "@/components/ContentBadge";
import { SectionHeader } from "@/components/home/SectionHeader";
import { getBlogPosts, getBlogPostBySlug } from "@/data/locale";
import { getDictionary } from "@/messages";
import { isLocale } from "@/i18n/config";
import { getLocaleParam } from "@/i18n/params";
import { localePath } from "@/i18n/navigation";

interface Props {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) =>
    getBlogPosts(locale as "en" | "ar").map((p) => ({ locale, slug: p.slug }))
  );
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const post = getBlogPostBySlug(params.locale, params.slug);
  if (!post) return { title: "Article Not Found" };
  const dict = getDictionary(params.locale);

  return createMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 160),
    path: `/blog/${post.slug}`,
    image: post.image,
    locale: params.locale,
    siteName: dict.meta.siteName,
  });
}

export default function BlogDetailPage({ params }: Props) {
  const locale = getLocaleParam(params.locale);
  const dict = getDictionary(locale);
  const post = getBlogPostBySlug(locale, params.slug);
  if (!post) notFound();

  const blogPosts = getBlogPosts(locale);
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.home, url: localePath(locale, "/") },
          { name: dict.nav.blog, url: localePath(locale, "/blog") },
          { name: post.title, url: localePath(locale, `/blog/${post.slug}`) },
        ])}
      />

      <article>
        <section className="border-b border-primary/10 bg-ivory py-6">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <BlogBreadcrumb category={post.category} locale={locale} dict={dict} />
          </div>
        </section>

        <section className="section-padding-sm bg-surface">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl">
              <ContentBadge label={post.category} />
              <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-charcoal lg:text-4xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-bold uppercase tracking-[0.14em] text-neutral-dark/50">
                <span>{post.author}</span>
                <span className="hidden text-secondary/40 sm:inline" aria-hidden="true">
                  |
                </span>
                <span>{post.date}</span>
                <span className="hidden text-secondary/40 sm:inline" aria-hidden="true">
                  |
                </span>
                <span>{post.readTime}</span>
              </div>

              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-primary/10 shadow-card">
                <SafeImage
                  src={post.image}
                  alt={`${post.title} — Dubai real estate blog article`}
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              <div className="article-body mt-10">
                <p className="article-lead">{post.excerpt}</p>
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 rounded-lg border border-secondary/40 bg-secondary/5 p-8 text-center shadow-gold lg:p-10">
                <p className="font-serif text-xl font-semibold text-charcoal">{dict.blogArticle.cta.title}</p>
                <Link href={localePath(locale, "/contact")} className="btn-primary mt-6 inline-flex">
                  {dict.common.speakToConsultant}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-padding-sm bg-ivory bg-grid-pattern bg-grid">
            <div className="container-custom">
              <SectionHeader compact title={dict.common.relatedArticles} />
              <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
