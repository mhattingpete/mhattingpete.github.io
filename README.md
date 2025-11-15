# Martin Hatting Petersen - Portfolio Website 🚀

[![Live Site](https://img.shields.io/badge/Live-mhattingpete.github.io-00f5ff?style=for-the-badge)](https://mhattingpete.github.io/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

A modern, cyberpunk-themed portfolio website showcasing AI engineering, LLM development, and agentic systems projects. Built with Next.js, TypeScript, and Tailwind CSS.

**🌐 Live Site:** [https://mhattingpete.github.io/](https://mhattingpete.github.io/)

## ✨ Features

- 🎨 **Cyberpunk Design**: Dark mode with neon accents (cyan, purple, pink) and animated particles
- ⚡ **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- 🎭 **Smooth Animations**: Framer Motion for elegant transitions and interactions
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🚀 **Dynamic Projects**: GitHub API integration for real-time project showcase
- 🎯 **SEO Optimized**: Meta tags and structured data for search engines
- 🔒 **Security-First**: Following best practices and secure coding standards
- 🌐 **Zero Config Deployment**: Automated GitHub Actions workflow
- ♿ **Accessible**: WCAG compliant design

## 🎯 About

This portfolio website serves as a comprehensive showcase of my work in:
- **AI Engineering**: Agentic systems, LLMOps, and multimodal AI
- **Data Science**: Machine learning, deep learning, and data analysis
- **Research**: Publications, talks, and academic contributions
- **Open Source**: Contributions to major projects like LangChain, Langfuse, and MLflow

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

Visit [http://localhost:3000](http://localhost:3000) to see the site in development mode.

## Deployment

This site is configured to deploy automatically to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

```bash
# Build and export
npm run build

# The static files will be in the `out` directory
```

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── Research.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       ├── Blog.tsx
│       └── Contact.tsx
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
└── tailwind.config.ts     # Tailwind configuration
```

## Customization

### Colors

The neon color scheme is defined in `tailwind.config.ts`:

```typescript
colors: {
  neon: {
    cyan: "#00f5ff",
    purple: "#bd00ff",
    pink: "#ff006e",
  },
  dark: {
    bg: "#0a0a0f",
    card: "#141420",
    border: "#1f1f2e",
  },
}
```

### GitHub Integration

Update the GitHub username in `components/sections/Projects.tsx`:

```typescript
const GITHUB_USERNAME = "mhattingpete";
```

## 🌟 Key Highlights

- **Professional Portfolio**: Showcasing expertise in AI engineering, machine learning, and data science
- **Open Source Contributions**: Active contributor to LangChain, Langfuse, MLflow, and other ML/AI projects
- **Modern Web Technologies**: Leveraging the latest React, Next.js, and TypeScript features
- **Performance Optimized**: Fast loading times with static site generation and optimized assets
- **Mobile-First Design**: Responsive layouts that work seamlessly across all devices

## 📈 Performance & SEO

- ✅ Lighthouse Score: 100/100 for Performance, Accessibility, Best Practices, and SEO
- ✅ Structured Data (Schema.org JSON-LD) for rich search results
- ✅ Open Graph and Twitter Card meta tags for social media sharing
- ✅ Sitemap and robots.txt for search engine crawlers
- ✅ Semantic HTML and ARIA labels for accessibility

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:
- Open an issue for bug reports or feature suggestions
- Submit a pull request for improvements
- Star the repository if you find it useful

## 📄 License

© 2025 Martin Hatting Petersen. All rights reserved.

## 📬 Contact

- **Email**: petersen2630@gmail.com
- **LinkedIn**: [martin-hatting-petersen](https://www.linkedin.com/in/martin-hatting-petersen-7a7047b4/)
- **GitHub**: [@mhattingpete](https://github.com/mhattingpete)
- **Portfolio**: [https://mhattingpete.github.io/](https://mhattingpete.github.io/)

---

**Keywords**: AI Engineer, Data Scientist, Machine Learning, Deep Learning, LLM, Large Language Models, Agentic AI, LLMOps, Multimodal AI, Next.js Portfolio, React Portfolio, TypeScript, Portfolio Website, GitHub Pages, Cyberpunk Theme, Open Source Contributor
