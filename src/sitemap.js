const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

const sitemap = new SitemapStream({ hostname: 'http://floriansimunek.com' });

const writeStream = createWriteStream('./sitemap.xml');
sitemap.pipe(writeStream);

sitemap.write({ url: '/', changefreq: 'weekly', priority: 1 });
sitemap.end();
