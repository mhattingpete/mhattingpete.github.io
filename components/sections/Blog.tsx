"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPenNib, FaExternalLinkAlt } from "react-icons/fa";

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
              Deep dives into AI systems I've built
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Building a Claude Code Plugin Marketplace",
                description:
                  "A curated marketplace of Claude Code plugins for software engineering workflows — engineering, code operations, and document skills.",
                url: "https://github.com/mhattingpete/claude-skills-marketplace",
                iconClass: "text-neon-cyan",
              },
              {
                title: "Designing a Personal AI Operating System",
                description:
                  "Automate your digital life with natural language. Create automations by describing what you want in plain English.",
                url: "https://github.com/mhattingpete/personal-ai-os",
                iconClass: "text-neon-purple",
              },
              {
                title: "Multi-Agent AI System Design",
                description:
                  "A local-first platform for designing and interacting with multi-agent AI systems using the Agno framework and AG-UI protocol.",
                url: "https://github.com/mhattingpete/agent-composer",
                iconClass: "text-neon-pink",
              },
            ].map((post) => (
              <motion.a
                key={post.title}
                variants={itemVariants}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-card bg-dark-card rounded-lg p-6 flex flex-col group hover:scale-[1.02] transition-transform"
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
                <span className="text-neon-cyan text-sm flex items-center gap-2">
                  Read on GitHub <FaExternalLinkAlt className="text-xs" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
