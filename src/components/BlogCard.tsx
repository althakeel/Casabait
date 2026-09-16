/*
 * Replace with licensed/owned property photography before launch.
 */
"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { ContentBadge } from "@/components/ContentBadge";
import { SafeImage } from "./SafeImage";
import { useLocale } from "@/i18n/LocaleProvider";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { localizeHref } = useLocale();

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-primary/10 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-primary/10">
        <SafeImage
          src={post.image}
          alt={`${post.title} — Dubai real estate blog`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <ContentBadge label={post.category} />
        <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-charcoal transition-colors group-hover:text-primary">
          <Link href={localizeHref(`/blog/${post.slug}`)}>{post.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-dark/65 line-clamp-3">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-primary/10 pt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-dark/50">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
