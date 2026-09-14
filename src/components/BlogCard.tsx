/*
 * Replace with licensed/owned property photography before launch.
 */
"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { SafeImage } from "./SafeImage";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SafeImage
          src={post.image}
          alt={`${post.title} — Dubai real estate blog`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium uppercase tracking-wider text-secondary">{post.category}</span>
        <h3 className="mt-2 text-lg font-semibold text-neutral-dark line-clamp-2 group-hover:text-primary">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
