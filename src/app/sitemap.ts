import type { MetadataRoute } from 'next';
import { updates } from './data/updates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taborlin.co';

  const updateEntries = updates.map((post) => ({
    url: `${baseUrl}/updates/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/updates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...updateEntries,
  ];
}
