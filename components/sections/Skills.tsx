"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiPython,
  SiJavascript,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiGooglecloud,
  SiFastapi,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skillCategories = [
  {
    category: "LLM & AI Frameworks",
    skills: [
      { name: "LangChain", level: 95 },
      { name: "LangGraph", level: 90 },
      { name: "Agno", level: 85 },
      { name: "HuggingFace", level: 90 },
      { name: "OpenAI API", level: 95 },
      { name: "Anthropic Claude", level: 90 },
    ],
    color: "neon-cyan",
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: [
      { name: "PyTorch", level: 90, icon: SiPytorch },
      { name: "TensorFlow", level: 85, icon: SiTensorflow },
      { name: "Scikit-learn", level: 95, icon: SiScikitlearn },
      { name: "SpaCy", level: 90 },
      { name: "NLTK", level: 85 },
      { name: "Transformers", level: 95 },
    ],
    color: "neon-purple",
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 98, icon: SiPython },
      { name: "SQL", level: 90 },
      { name: "R", level: 85 },
      { name: "Go", level: 75 },
      { name: "C++", level: 70 },
      { name: "JavaScript", level: 85, icon: SiJavascript },
    ],
    color: "neon-pink",
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Polars", level: 95 },
      { name: "Pandas", level: 90, icon: SiPandas },
      { name: "NumPy", level: 95, icon: SiNumpy },
      { name: "Plotly", level: 90 },
      { name: "Matplotlib", level: 90 },
      { name: "PowerBI", level: 80 },
    ],
    color: "neon-cyan",
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "Azure", level: 90 },
      { name: "GCP", level: 85, icon: SiGooglecloud },
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90, icon: SiDocker },
      { name: "MLflow", level: 85 },
    ],
    color: "neon-purple",
  },
  {
    category: "Web Development",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "FastAPI", level: 90, icon: SiFastapi },
      { name: "Streamlit", level: 90 },
      { name: "Flask", level: 85 },
    ],
    color: "neon-pink",
  },
];

export default function Skills() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive toolkit for building production-grade AI systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="neon-card bg-dark-card rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <h3
                  className={`text-2xl font-semibold mb-6 text-${category.color} flex items-center gap-2`}
                >
                  <FaCode className="text-xl" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 flex items-center gap-2">
                            {Icon && <Icon className="text-lg" />}
                            {skill.name}
                          </span>
                          <span className={`text-sm text-${category.color}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-dark-border rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r from-${category.color} to-${category.color} rounded-full relative`}
                            style={{
                              boxShadow: `0 0 10px var(--${category.color})`,
                            }}
                          >
                            <div className="absolute inset-0 bg-white opacity-30 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
