import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mhattingpete.github.io'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/building-claude-skills-marketplace/`,
      lastModified: new Date('2025-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/designing-personal-ai-os/`,
      lastModified: new Date('2025-11-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/multi-agent-ai-system-design/`,
      lastModified: new Date('2025-12-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
