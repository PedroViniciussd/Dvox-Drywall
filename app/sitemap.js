export default function sitemap() {
  const baseUrl = 'https://dvoxdrywallsp.com.br';
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/#servicos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#contato`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
