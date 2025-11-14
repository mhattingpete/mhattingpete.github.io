"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBrain, FaRobot, FaShieldAlt, FaNetworkWired, FaDatabase, FaCogs } from "react-icons/fa";

const researchAreas = [
  {
    icon: FaRobot,
    title: "Agentic Systems & Multi-Step Reasoning",
    description: "Developing autonomous AI agents capable of complex reasoning, planning, and execution using LLMs and orchestration frameworks.",
    color: "neon-cyan",
  },
  {
    icon: FaBrain,
    title: "Prompt Engineering & Fine-Tuning",
    description: "Optimizing LLM performance through advanced prompting techniques, few-shot learning, and model fine-tuning strategies.",
    color: "neon-purple",
  },
  {
    icon: FaShieldAlt,
    title: "AI Safety & Interpretability",
    description: "Ensuring reliable and trustworthy AI systems through safety research, model interpretability, and responsible AI practices.",
    color: "neon-pink",
  },
  {
    icon: FaNetworkWired,
    title: "Large-Scale NLP & Deep Learning",
    description: "Expertise in transformers, vision-language models (VLMs), and state-of-the-art architectures for multimodal AI applications.",
    color: "neon-cyan",
  },
  {
    icon: FaDatabase,
    title: "Data Orchestration & MLOps",
    description: "Building scalable data pipelines and ML infrastructure for production-grade AI systems with robust monitoring.",
    color: "neon-purple",
  },
  {
    icon: FaCogs,
    title: "LLMOps & Production AI",
    description: "Deploying and maintaining LLM applications with focus on observability, evaluation, and continuous improvement.",
    color: "neon-pink",
  },
];

export default function Research() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="research" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Research & Interests</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Exploring the frontiers of AI and machine learning with focus on
            practical applications and responsible development
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="neon-card bg-dark-card rounded-lg p-6 relative overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${area.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`text-5xl text-${area.color} mb-4 inline-block`}
                  >
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {area.title}
                  </h3>
                  <p className="text-gray-400">{area.description}</p>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-${area.color} opacity-10 rounded-bl-full`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
