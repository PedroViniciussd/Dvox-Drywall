export default function sitemap() {
  const baseUrl = 'https://dvoxdrywall.com.br';

  const pages = [
    '',
    '/drywall-em-sao-paulo',
    '/forro-modular-sp',
    '/divisorias-drywall-sp',
    '/forro-de-gesso-sp',
    '/drywall-para-galpoes',
    '/drywall-industrial-sp',
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.9,
  }));
}
