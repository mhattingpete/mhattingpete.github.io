"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
  isPinned?: boolean;
}

const GITHUB_USERNAME = "mhattingpete";

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function fetchRepos() {
      try {
        // Fetch pinned repos using GitHub GraphQL API
        const graphqlQuery = {
          query: `
            query {
              user(login: "${GITHUB_USERNAME}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      id
                      name
                      description
                      url
                      homepageUrl
                      stargazerCount
                      forkCount
                      primaryLanguage {
                        name
                      }
                      repositoryTopics(first: 10) {
                        nodes {
                          topic {
                            name
                          }
                        }
                      }
                      updatedAt
                      isFork
                    }
                  }
                }
              }
            }
          `,
        };

        const [pinnedResponse, allReposResponse] = await Promise.all([
          fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(graphqlQuery),
          }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
        ]);

        let pinnedRepos: GitHubRepo[] = [];

        // Try to get pinned repos from GraphQL
        if (pinnedResponse.ok) {
          const pinnedData = await pinnedResponse.json();
          if (pinnedData.data?.user?.pinnedItems?.nodes) {
            pinnedRepos = pinnedData.data.user.pinnedItems.nodes.map((node: any) => ({
              id: parseInt(node.id, 10) || Math.random(),
              name: node.name,
              description: node.description,
              html_url: node.url,
              homepage: node.homepageUrl,
              stargazers_count: node.stargazerCount,
              forks_count: node.forkCount,
              language: node.primaryLanguage?.name || null,
              topics: node.repositoryTopics?.nodes?.map((t: any) => t.topic.name) || [],
              updated_at: node.updatedAt,
              fork: node.isFork,
              isPinned: true,
            }));
          }
        }

        // Get all repos
        if (!allReposResponse.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const allRepos: GitHubRepo[] = await allReposResponse.json();

        // Combine pinned repos with other repos, removing duplicates
        const pinnedNames = new Set(pinnedRepos.map(r => r.name));
        const otherRepos = allRepos
          .filter(repo => !repo.fork && !pinnedNames.has(repo.name))
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });

        // Combine: pinned first, then top other repos (up to 12 total)
        const combined = [...pinnedRepos, ...otherRepos].slice(0, 12);
        setRepos(combined);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError("Unable to load projects. Please visit my GitHub profile.");
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      Python: "#3572A5",
      TypeScript: "#3178c6",
      JavaScript: "#f1e05a",
      Go: "#00ADD8",
      Jupyter: "#DA5B0B",
      HTML: "#e34c26",
      CSS: "#563d7c",
    };
    return colors[language || ""] || "#8b949e";
  };

  return (
    <section id="projects" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Projects & Contributions</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Open-source projects and research implementations
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors"
            >
              <FaGithub className="text-2xl" />
              View All on GitHub
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-cyan"></div>
              <p className="text-gray-300 mt-4">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p className="text-red-400 mb-4">{error}</p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-neon-cyan text-dark-bg rounded-lg hover:bg-neon-purple transition-colors"
              >
                Visit GitHub Profile
              </a>
            </div>
          )}

          {!loading && !error && (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {repos.map((repo) => {
                const isPinned = repo.isPinned || false;
                return (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`neon-card bg-dark-card rounded-lg p-6 flex flex-col relative overflow-hidden ${
                      isPinned ? "ring-2 ring-neon-cyan" : ""
                    }`}
                  >
                    {isPinned && (
                      <div className="absolute top-0 right-0 bg-neon-cyan text-dark-bg text-xs px-3 py-1 rounded-bl-lg font-semibold">
                        PINNED
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white flex-1">
                        {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                      </h3>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-cyan hover:text-neon-purple transition-colors"
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {repo.description || "No description available"}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 bg-dark-border text-neon-cyan rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(repo.language),
                              }}
                            />
                            <span>{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCodeBranch className="text-neon-cyan" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-neon-purple hover:text-neon-pink transition-colors text-sm"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Open Source Contributions */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-lg p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Open Source Contributions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-neon-cyan mb-2">
                  Langfuse
                </h4>
                <p className="text-gray-400">
                  LLM observability and tracing improvements
                </p>
                <p className="text-sm text-gray-500 mt-2">PR #786</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-neon-purple mb-2">
                  LangChain
                </h4>
                <p className="text-gray-400">
                  Bug fixes and performance optimizations
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  PRs #24254, #8754
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-neon-pink mb-2">
                  MLflow
                </h4>
                <p className="text-gray-400">
                  Documentation updates and bug fixes
                </p>
                <p className="text-sm text-gray-500 mt-2">PR #8791</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
