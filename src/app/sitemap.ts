import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/',               priority: 1.0,  changeFrequency: 'weekly' },
    { path: '/products',       priority: 0.9,  changeFrequency: 'weekly' },
    { path: '/about',          priority: 0.8,  changeFrequency: 'monthly' },
    { path: '/sustainability',  priority: 0.8,  changeFrequency: 'monthly' },
    { path: '/infrastructure',  priority: 0.7,  changeFrequency: 'monthly' },
    { path: '/clients',        priority: 0.7,  changeFrequency: 'monthly' },
    { path: '/contact',        priority: 0.8,  changeFrequency: 'monthly' },
    { path: '/careers',        priority: 0.6,  changeFrequency: 'weekly' },
    { path: '/privacy',        priority: 0.3,  changeFrequency: 'yearly' },
    { path: '/terms',          priority: 0.3,  changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
