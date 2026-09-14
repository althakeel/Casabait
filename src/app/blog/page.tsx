import { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = createMetadata({
  title: "Dubai Real Estate Blog | Market Insights",
  description:
    "Dubai property market trends, off-plan buying guides, area insights & investment tips from Casa Bait Property Consultant. Stay informed on Dubai real estate.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <section className="bg-primary py-16 text-white lg:py-24">
        <div className="container-custom px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Market Insights & Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Expert perspectives on Dubai&apos;s property market, investment strategies, and community guides.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Latest Articles" centered={false} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
