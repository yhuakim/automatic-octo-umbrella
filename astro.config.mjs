import { defineConfig } from 'astro/config';
import adapter from './adapter/index.mjs';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: adapter(),
  integrations: [react(), tailwind()]
});