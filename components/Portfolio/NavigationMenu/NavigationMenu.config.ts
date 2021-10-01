/**
 * @exports Navigation Menu Configuration
 * @const navMenuLinks - array of objects to be mapped into the list of router links in portfolio screens
 * */
export const navMenuLinks: { id: number; linkText: string; href: string }[] = [
  { id: 1, href: '/portfolio/projects', linkText: 'My Projects' },
  { id: 2, href: '/articles', linkText: 'My Articles' },
  { id: 3, href: '/portfolio/about', linkText: 'About Me' },
  { id: 4, href: '/portfolio/contact', linkText: 'Contact Me' },
  { id: 5, href: '/portfolio/resume', linkText: 'My Résumé' },
  { id: 6, href: '/', linkText: 'Back to OS' },
];
