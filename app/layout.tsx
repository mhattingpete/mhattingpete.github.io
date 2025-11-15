import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martin Hatting Petersen | AI Engineer & Data Scientist",
  description: "Portfolio website of Martin Hatting Petersen - Senior Data Scientist specializing in agentic AI systems, LLMOps, and multimodal AI. Open-source contributor to LangChain, Langfuse, and MLflow.",
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "LLM",
    "Large Language Models",
    "Agentic AI",
    "Agentic Systems",
    "LLMOps",
    "Multimodal AI",
    "Next.js",
    "TypeScript",
    "Python",
    "LangChain",
    "Langfuse",
    "MLflow",
    "Deep Learning",
    "Natural Language Processing",
    "NLP",
  ],
  authors: [{ name: "Martin Hatting Petersen" }],
  creator: "Martin Hatting Petersen",
  metadataBase: new URL("https://mhattingpete.github.io"),
  alternates: {
    canonical: "https://mhattingpete.github.io",
  },
  openGraph: {
    title: "Martin Hatting Petersen | AI Engineer & Data Scientist",
    description: "Senior Data Scientist specializing in agentic AI systems, LLMOps, and multimodal AI. Open-source contributor to LangChain, Langfuse, and MLflow.",
    url: "https://mhattingpete.github.io",
    siteName: "Martin Hatting Petersen Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Hatting Petersen | AI Engineer & Data Scientist",
    description: "Senior Data Scientist specializing in agentic AI systems, LLMOps, and multimodal AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
