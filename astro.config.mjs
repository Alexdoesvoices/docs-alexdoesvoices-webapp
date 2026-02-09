// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      // ADD THIS LINE
      routeMiddleware: './src/routeData.ts', 
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        {
         label: 'Home',
         slug: 'home', // This points to src/content/docs/home.mdx
        },
        {
          label: 'Discord Js Bot',
          autogenerate: { directory: 'discord-js-bot/' },
        },
        {
            label: 'Baldridge Bot',
            autogenerate: {directory: 'baldridge-bot/'}
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
    mdx(),
  ],
});