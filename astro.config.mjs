import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sigdaddy.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/dns-check') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
