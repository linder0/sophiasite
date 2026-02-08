import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-sm opacity-60 hover:opacity-100 transition-opacity mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <article className="max-w-3xl">
        <h1 className="text-4xl font-light mb-4">{post.title}</h1>
        <time className="text-sm opacity-60 block mb-12">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="prose prose-lg max-w-none">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.trim()) {
              return (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph.trim()}
                </p>
              );
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
}
