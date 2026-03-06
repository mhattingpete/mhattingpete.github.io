"use client";

import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BlogPost } from "../posts";

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-neon-cyan hover:underline mb-8"
          >
            <FaArrowLeft className="text-sm" />
            Back to portfolio
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{post.readTime}</span>
              <a
                href={post.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-neon-cyan hover:underline"
              >
                <FaGithub /> View repo
              </a>
            </div>
          </header>

          <article>{renderContent(post.content)}</article>
        </motion.div>
      </div>
    </main>
  );
}

function renderContent(markdown: string) {
  const lines = markdown.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      elements.push(
        <pre
          key={elements.length}
          className="bg-dark-card border border-dark-border rounded-lg p-4 overflow-x-auto my-6 text-sm"
        >
          <code className={lang ? `language-${lang}` : ""}>
            {codeLines.join("\n")}
          </code>
        </pre>
      );
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={elements.length}
          className="text-2xl font-bold text-white mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={elements.length}
          className="text-xl font-semibold text-white mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // List items
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul
          key={elements.length}
          className="list-disc list-inside space-y-2 my-4 text-gray-300"
        >
          {listItems.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={elements.length}
          className="list-decimal list-inside space-y-2 my-4 text-gray-300"
        >
          {listItems.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={elements.length} className="text-gray-300 leading-relaxed my-4">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const codeMatch = remaining.match(/`([^`]+)`/);
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    const matches = [
      codeMatch ? { type: "code" as const, match: codeMatch } : null,
      boldMatch ? { type: "bold" as const, match: boldMatch } : null,
      linkMatch ? { type: "link" as const, match: linkMatch } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => a!.match.index! - b!.match.index!);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    const idx = first.match.index!;

    if (idx > 0) {
      parts.push(remaining.slice(0, idx));
    }

    if (first.type === "code") {
      parts.push(
        <code
          key={key++}
          className="bg-dark-card border border-dark-border rounded px-1.5 py-0.5 text-neon-cyan text-sm"
        >
          {first.match[1]}
        </code>
      );
    } else if (first.type === "bold") {
      parts.push(
        <strong key={key++} className="text-white font-semibold">
          {first.match[1]}
        </strong>
      );
    } else if (first.type === "link") {
      parts.push(
        <a
          key={key++}
          href={first.match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:underline"
        >
          {first.match[1]}
        </a>
      );
    }

    remaining = remaining.slice(idx + first.match[0].length);
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
