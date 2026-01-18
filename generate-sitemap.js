import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/products/', changefreq: 'daily', priority: 0.9 },
  { url: '/contributors/', changefreq: 'daily', priority: 0.9 },
  { url: '/blog/', changefreq: 'daily', priority: 0.9 },
  { url: '/help/', changefreq: 'daily', priority: 0.9 },
  { url: '/auth/', changefreq: 'daily', priority: 0.9 },
  { url: '/certificate/', changefreq: 'daily', priority: 0.9 },
  { url: '/contact/', changefreq: 'daily', priority: 0.9 },
  { url: '/faq/', changefreq: 'daily', priority: 0.9 },
  { url: '/terms-and-condition/', changefreq: 'daily', priority: 0.9 },
  { url: '/return-and-cancellation/', changefreq: 'daily', priority: 0.9 },
  { url: '/privacy-policy/', changefreq: 'daily', priority: 0.9 },
  // Add other site routes here as needed
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.vigybag.com' });
  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);

  console.log('Sitemap generated!');
};

generateSitemap();
