// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nimomix.github.io',
  base: '/bond-app',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', he: 'he' },
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
