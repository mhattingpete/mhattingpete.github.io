import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martin Hatting Petersen | AI Engineer & Data Scientist",
  description: "Portfolio website of Martin Hatting Petersen - Senior Data Scientist specializing in agentic AI systems, LLMOps, and multimodal AI.",
  keywords: ["AI", "Machine Learning", "LLM", "Data Science", "Agentic Systems", "LLMOps"],
  authors: [{ name: "Martin Hatting Petersen" }],
  openGraph: {
    title: "Martin Hatting Petersen | AI Engineer & Data Scientist",
    description: "Senior Data Scientist specializing in agentic AI systems, LLMOps, and multimodal AI.",
    type: "website",
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
