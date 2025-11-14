"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPenNib, FaRocket } from "react-icons/fa";

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
              <span className="gradient-text">Blog & Articles</span>
            </h2>
            <p className="text-xl text-gray-300">
              Technical writing and insights on AI & ML
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-lg p-12 text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink flex items-center justify-center text-5xl">
                <FaPenNib />
              </div>
            </motion.div>

            <h3 className="text-3xl font-bold mb-4 text-white">
              Coming Soon!
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              I'm currently working on creating technical content about:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <div className="neon-card bg-dark-card rounded-lg p-4">
                <div className="text-neon-cyan text-2xl mb-2">
                  <FaRocket />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Agentic AI Systems
                </h4>
                <p className="text-sm text-gray-400">
                  Building production-ready autonomous agents
                </p>
              </div>
              <div className="neon-card bg-dark-card rounded-lg p-4">
                <div className="text-neon-purple text-2xl mb-2">
                  <FaRocket />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  LLMOps Best Practices
                </h4>
                <p className="text-sm text-gray-400">
                  Deploying and monitoring LLM applications
                </p>
              </div>
              <div className="neon-card bg-dark-card rounded-lg p-4">
                <div className="text-neon-pink text-2xl mb-2">
                  <FaRocket />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Multimodal AI
                </h4>
                <p className="text-sm text-gray-400">
                  Working with vision-language models
                </p>
              </div>
              <div className="neon-card bg-dark-card rounded-lg p-4">
                <div className="text-neon-cyan text-2xl mb-2">
                  <FaRocket />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Prompt Engineering
                </h4>
                <p className="text-sm text-gray-400">
                  Advanced techniques for LLM optimization
                </p>
              </div>
            </div>

            <p className="text-gray-400">
              Stay tuned for technical deep-dives and practical guides!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
