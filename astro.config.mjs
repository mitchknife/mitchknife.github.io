import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mitch.rosenburg.us',
  integrations: [mdx(), sitemap(), tailwind()],
});
