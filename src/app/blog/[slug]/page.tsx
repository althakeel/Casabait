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
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return createMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 160),
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <section className="bg-neutral-light py-8">
          <div className="container-custom max-w-3xl px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">Home</Link>
              {" / "}
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              {" / "}
              <span className="text-neutral-dark">{post.category}</span>
            </nav>
          </div>
        </section>

        <section className="section-padding !pt-8">
          <div className="container-custom max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">{post.category}</span>
            <h1 className="mt-2 text-3xl font-bold text-neutral-dark lg:text-4xl">{post.title}</h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
              <SafeImage
                src={post.image}
                alt={`${post.title} — Dubai real estate blog article`}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <div className="prose prose-lg mt-8 max-w-none text-gray-600">
              <p className="text-lg font-medium text-neutral-dark">{post.excerpt}</p>
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mt-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-primary/5 p-6 text-center">
              <p className="font-medium text-neutral-dark">Ready to explore Dubai property opportunities?</p>
              <Link href="/contact" className="btn-primary mt-4 inline-flex">
                Speak to a Consultant
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-padding bg-neutral-light">
            <div className="container-custom">
              <h2 className="text-xl font-semibold text-neutral-dark">Related Articles</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
