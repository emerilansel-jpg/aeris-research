import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aerisresearch.com',
  integrations: [sitemap()],
  redirects: {
    '/sectors': '/research',
  },
});
