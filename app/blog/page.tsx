"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="text-4xl font-light mb-12">Blog</h1>

      <div className="max-w-3xl space-y-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-12" style={{ borderColor: "var(--border-color)", transition: "border-color 0.4s ease" }}>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-3xl font-light mb-3 group-hover:opacity-60 transition-opacity">
                {post.title}
              </h2>
              <time className="text-sm opacity-60 block mb-4">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="opacity-80 leading-relaxed">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
