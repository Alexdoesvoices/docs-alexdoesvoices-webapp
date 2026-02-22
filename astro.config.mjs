import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node'; // Required for Docker deployment
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// This ensures paths work correctly on both Windows and Linux Docker
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Use 'server' or 'hybrid' so the app runs as a process in Docker
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),

  integrations: [
    starlight({
      title: 'My Docs',
      // Explicitly resolve the middleware path to avoid the "object" error
      routeMiddleware: path.resolve(__dirname, './src/routeData.ts'),
      
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Alexdoesvoices' }
      ],

      sidebar: [
        {
          label: 'Home',
          slug: 'home',
        },
        {
          label: 'Discord Js Bot',
          autogenerate: { directory: 'discord-js-bot' },
        },
        {
          label: 'Baldridge Bot',
          autogenerate: { directory: 'baldridge-bot' }
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      
      // Optional: If expressive-code still complains, 
      // you can explicitly set standard themes here
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
      },
    }),
    mdx(),
  ],
});