import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';
import compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    purgecss({
      variables: true,
      keyframes: false,
      safelist: {
        greedy: [
          /*astro*/
        ],
      },
      content: [process.cwd() + '/src/**/*.{astro,jsx,tsx,css}'],
    }),
    compress({
      Image: false,
      SVG: false,
    }),
  ],
});
