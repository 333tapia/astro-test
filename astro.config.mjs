import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://eclectic-marigold-1c3f08.netlify.app/',
  integrations: [preact()],
});