"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPenNib, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="blog" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Write-ups</span>
            </h2>
            <p className="text-xl text-gray-300">
              Deep dives into AI systems I&apos;ve built
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Building a Claude Code Plugin Marketplace",
                description:
                  "How I built a plugin ecosystem for Claude Code with skills, agents, and a 97% token-saving execution runtime.",
                slug: "building-claude-skills-marketplace",
                readTime: "8 min read",
                iconClass: "text-neon-cyan",
              },
              {
                title: "Designing a Personal AI Operating System",
                description:
                  "Natural language automations, MCP-based integrations, and local-first LLM routing for personal productivity.",
                slug: "designing-personal-ai-os",
                readTime: "7 min read",
                iconClass: "text-neon-purple",
              },
              {
                title: "Multi-Agent AI System Design",
                description:
                  "Building a local-first platform for multi-agent collaboration using Agno, AG-UI protocol, and OpenRouter.",
                slug: "multi-agent-ai-system-design",
                readTime: "6 min read",
                iconClass: "text-neon-pink",
              },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} passHref legacyBehavior>
                <motion.a
                  variants={itemVariants}
                  className="neon-card bg-dark-card rounded-lg p-6 flex flex-col group hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <div className={`${post.iconClass} text-2xl mb-4`}>
                    <FaPenNib />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {post.description}
                  </p>
                  <span className="text-sm text-gray-500 mb-3">
                    {post.readTime}
                  </span>
                  <span className="text-neon-cyan text-sm flex items-center gap-2">
                    Read write-up <FaArrowRight className="text-xs" />
                  </span>
                </motion.a>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
