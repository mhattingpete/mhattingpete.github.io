"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "petersen2630@gmail.com",
    link: "mailto:petersen2630@gmail.com",
    color: "neon-cyan",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Copenhagen, Denmark",
    link: null,
    color: "neon-purple",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    username: "mhattingpete",
    link: "https://github.com/mhattingpete",
    color: "neon-cyan",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    username: "martin-hatting-petersen",
    link: "https://www.linkedin.com/in/martin-hatting-petersen-7a7047b4/",
    color: "neon-purple",
  },
];

export default function Contact() {
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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interested in collaborating on AI projects, discussing research
              ideas, or exploring opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Contact Information Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="neon-card bg-dark-card rounded-lg p-6 text-center relative overflow-hidden group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${info.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`text-5xl text-${info.color} mb-4 inline-block`}
                      >
                        <Icon />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-2">
                        {info.label}
                      </h3>
                      <p className={`text-white font-medium text-${info.color}`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-white">
                Connect With Me
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-4 neon-card bg-dark-card rounded-lg p-4 w-full md:w-auto group"
                    >
                      <div
                        className={`text-4xl text-${social.color} group-hover:text-white transition-colors`}
                      >
                        <Icon />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">
                          {social.label}
                        </div>
                        <div
                          className={`text-${social.color} font-semibold group-hover:text-white transition-colors`}
                        >
                          @{social.username}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                Looking for a passionate AI engineer to join your team or
                collaborate on cutting-edge projects?
              </p>
              <a
                href="mailto:petersen2630@gmail.com?subject=Let's Connect!"
                className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Me an Email
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-20 pt-8 border-t border-dark-border"
      >
        <p className="text-gray-400">
          © {new Date().getFullYear()} Martin Hatting Petersen. Built with Next.js
          & Tailwind CSS.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Designed with ❤️ for the AI community
        </p>
      </motion.div>
    </section>
  );
}
