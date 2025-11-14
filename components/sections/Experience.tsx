"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "Kuatro Group",
    period: "May 2024 - Present",
    location: "Copenhagen, Denmark",
    highlights: [
      "Agentic LLM Development: Built AI-driven solutions using LangChain and LangGraph for documentation review and quality checks",
      "Multimodal & VLM Integrations: Deployed visual language models for image-to-structure conversions; implemented object detection & depth estimation for real-time tracking",
      "LLMOps & Infrastructure: Led MLOps initiatives with Langfuse for model tracing and automated evaluations; large-scale data transformations with Polars on GCP & Azure",
      "End-to-End Delivery: Primary developer of two production applications, ensuring robust and scalable AI solutions",
    ],
    color: "neon-cyan",
  },
  {
    title: "Senior Data Specialist",
    company: "Netcompany",
    period: "Sep 2019 - May 2024",
    location: "Copenhagen, Denmark",
    highlights: [
      "Chatbot & NLP Projects: Led development of LangChain/HuggingFace Optimum chatbot for multilingual data extraction",
      "Prompt Engineering & Model Management: Oversaw backend infrastructure and containerized microservices for large-scale text processing (Python, SpaCy, Transformers)",
      "Multilingual Document Processing: Built comprehensive solutions for scanning letters in multiple European languages with text segmentation and semantic search",
      "Technical Leadership: Architected scalable ETL pipelines using SSIS, SQL, C#, PowerShell, and PowerBI",
    ],
    color: "neon-purple",
  },
  {
    title: "Software Developer",
    company: "Novozymes",
    period: "Dec 2017 - Aug 2019",
    location: "Copenhagen, Denmark",
    highlights: [
      "Internal Tooling & Websites: Developed PHP/JavaScript applications for sample tracking and laboratory maintenance workflows",
      "Automation & Integration: Built automated workflows with Python for R&D operations",
      "Full-Stack Development: Created end-to-end solutions for scientific data management and visualization",
    ],
    color: "neon-pink",
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <p className="text-xl text-gray-300">
              Building production AI systems and scalable ML infrastructure
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-50" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="neon-card bg-dark-card rounded-lg p-6 relative overflow-hidden"
                    >
                      {/* Gradient accent */}
                      <div
                        className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-${exp.color} to-transparent`}
                      />

                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4
                          className={`text-xl font-semibold text-${exp.color} mb-2`}
                        >
                          {exp.company}
                        </h4>
                        <div className="flex flex-col md:flex-row md:justify-between text-gray-400 mb-4">
                          <span>{exp.period}</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm leading-relaxed"
                            >
                              <span className={`text-${exp.color} mr-2`}>
                                ▹
                              </span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`w-6 h-6 rounded-full bg-${exp.color} border-4 border-dark-bg shadow-lg relative z-10`}
                      style={{
                        boxShadow: `0 0 20px var(--${exp.color})`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-${exp.color} animate-ping opacity-75`}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
