// src/routeData.ts
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  // Get the first part of the path (e.g., 'discord-js-bot')
  const pathSegments = context.url.pathname.split('/').filter(Boolean);
  const currentProject = pathSegments[0];

  context.locals.starlightRoute.sidebar = context.locals.starlightRoute.sidebar.filter((entry) => {
    // 1. ALWAYS keep the Home link visible everywhere
    if (entry.label === 'Home') return true;

    // 2. If we are on the Home page (no project segment in URL), 
    // hide all other project groups
    if (!currentProject || currentProject === 'home') return false;

    // 3. If we are inside a project folder, only show that project's group
    const entrySlug = entry.label.toLowerCase().replace(/\s+/g, '-');
    return entrySlug.includes(currentProject);
  });
});