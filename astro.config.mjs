import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aerisresearch.com',
  integrations: [sitemap()],
  redirects: {
    '/sectors': '/research',
    '/insights/embedded-finance': '/research',
    '/insights/enterprise-ai-hidden-costs': '/research',
    '/insights/finops-ai-cloud': '/research',
    '/insights/lakehouse-2026': '/research',
    '/insights/vertical-saas': '/research',
    '/insights/zero-trust-framework': '/research',
    '/research/ai-hidden-costs-2026': '/research',
    '/research/finops-ai-cloud-cost': '/research',
    '/research/vertical-saas-inflection': '/research',
    '/research/zero-trust-architecture': '/research',
    '/research/enterprise-ai-deployment-2026': '/research',
  },
});
