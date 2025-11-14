# Martin Hatting Petersen - Portfolio Website

A modern, cyberpunk-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark mode design with neon accents (cyan, purple, pink)
- ⚡ Built with Next.js 14 and React 18
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🚀 GitHub API integration for dynamic project showcase
- 🎯 Optimized for performance and SEO
- 🔒 Security-first development approach

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

This site is configured to deploy automatically to GitHub Pages using GitHub Actions. Every push to the `master` branch triggers a new deployment.

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

## License

© 2025 Martin Hatting Petersen. All rights reserved.

## Contact

- Email: petersen2630@gmail.com
- LinkedIn: [martin-hatting-petersen](https://www.linkedin.com/in/martin-hatting-petersen-7a7047b4/)
- GitHub: [@mhattingpete](https://github.com/mhattingpete)
