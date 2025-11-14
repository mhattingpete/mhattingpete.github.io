"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "M.Sc.Eng in Mathematical Modelling and Computing",
    school: "Technical University of Denmark",
    period: "2017 - 2019",
    grade: "10/12",
    focus: "Machine learning and signal-processing",
    highlights: [
      "Advanced Deep Learning & Transformers",
      "Generative Models (VAEs, GANs)",
      "Multilingual NLP & Question Answering",
      "Thesis on Advanced Machine Learning Applications",
    ],
    color: "neon-cyan",
  },
  {
    degree: "B.Sc.Eng in Mathematics and Technology",
    school: "Technical University of Denmark",
    period: "2014 - 2017",
    grade: "10/12",
    focus: "Machine learning and data processing",
    highlights: [
      "Foundations of Machine Learning",
      "Statistical Methods & Data Analysis",
      "Algorithm Design & Optimization",
      "Mathematical Modeling",
    ],
    color: "neon-purple",
  },
];

export default function Education() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-gray-300">
              Strong academic foundation in mathematics and machine learning
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="neon-card bg-dark-card rounded-lg p-8 relative overflow-hidden"
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${edu.color} to-transparent`}
                />

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-full bg-dark-border flex items-center justify-center text-${edu.color} text-3xl`}
                    >
                      <FaGraduationCap />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div
                          className={`flex items-center gap-2 text-${edu.color} mb-2`}
                        >
                          <FaUniversity />
                          <span className="text-lg font-semibold">
                            {edu.school}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 mb-1">{edu.period}</div>
                        <div
                          className={`text-${edu.color} font-semibold text-lg`}
                        >
                          Grade: {edu.grade}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-gray-400">Focus area: </span>
                      <span className="text-white font-medium">
                        {edu.focus}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Key Areas:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className={`text-${edu.color} mt-1`}>▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
