import { posts, getPost } from "../posts";
import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | Martin Hatting Petersen`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-bg">
        <p className="text-gray-400 text-xl">Post not found.</p>
      </div>
    );
  }

  return <BlogPostClient post={post} />;
}
