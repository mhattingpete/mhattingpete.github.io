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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Martin Hatting Petersen - AI Engineer & Data Scientist",
      },
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Martin Hatting Petersen",
    url: "https://mhattingpete.github.io",
    jobTitle: "AI Engineer & Data Scientist",
    description:
      "Senior Data Scientist specializing in agentic AI systems, LLMOps, and multimodal AI",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Agentic Systems",
      "LLMOps",
      "Multimodal AI",
      "Deep Learning",
      "Natural Language Processing",
    ],
    sameAs: [
      "https://github.com/mhattingpete",
      "https://www.linkedin.com/in/martin-hatting-petersen-7a7047b4/",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Technical University of Denmark",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
