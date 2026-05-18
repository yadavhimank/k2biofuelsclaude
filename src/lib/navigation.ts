// Route manifest — verbatim from chrome.jsx K2_ROUTES.
// Moved here from tokens.ts so layout components have a single import for nav data.

export const K2_ROUTES = [
  { path: '/',               label: 'Home' },
  { path: '/about',          label: 'About' },
  { path: '/products',       label: 'Products' },
  { path: '/sustainability',  label: 'Sustainability' },
  { path: '/infrastructure',  label: 'Infrastructure' },
  { path: '/clients',        label: 'Clients' },
  { path: '/careers',        label: 'Careers' },
  { path: '/contact',        label: 'Contact' },
] as const;

export type Route = (typeof K2_ROUTES)[number];
export type RoutePath = Route['path'];
