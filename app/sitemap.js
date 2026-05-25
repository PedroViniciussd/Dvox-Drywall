export default function sitemap() {
  const baseUrl = 'https://dvoxdrywall.com.br';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}