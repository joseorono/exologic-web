// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import playformCompress from '@playform/compress';

import mdx from '@astrojs/mdx';

//import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), mdx(), playformCompress()],
  site: 'https://exologic.com/', // this line is required
  output: 'server',
  // output: "static",
  adapter: cloudflare()
});