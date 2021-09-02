import React, { ReactNode } from 'react';
import { FiGithub } from 'react-icons/fi';

export const useAboutConfig = (): {
  frontendSkills: ISkill[];
  backendSkills: ISkill[];
  frontendTechSkills: ITechSkill[];
  backendTechSkills: ITechSkill[];
  sideNavigationData: IScrollNavLink[];
} => {
  const frontendSkills: ISkill[] = [
    {
      id: 1,
      text: 'JavaScript',
      iconSrc: '/assets/portfolio/skills/javascript-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 2,
      text: 'TypeScript',
      iconSrc: '/assets/portfolio/skills/typescript-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 3,
      text: 'React',
      iconSrc: '/assets/portfolio/skills/react-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 4,
      text: 'HTML',
      iconSrc: '/assets/portfolio/skills/html5-original.svg',
      iconSize: { height: 55, width: 55 },
    },
    {
      id: 5,
      text: 'CSS',
      iconSrc: '/assets/portfolio/skills/css3-original.svg',
      iconSize: { height: 55, width: 55 },
    },
    {
      id: 6,
      text: 'Next.js',
      iconSrc: '/assets/portfolio/skills/jest-plain.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 7,
      text: 'Jest',
      iconSrc: '/assets/portfolio/skills/nextjs-original.svg',
      iconSize: { height: 50, width: 50 },
    },
  ];

  const backendSkills: ISkill[] = [
    {
      id: 1,
      text: 'NodeJS',
      iconSrc: '/assets/portfolio/skills/nodejs-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 2,
      text: 'Python',
      iconSrc: '/assets/portfolio/skills/python-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 3,
      text: 'Express',
      iconSrc: '/assets/portfolio/skills/express-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 4,
      text: 'GraphQL',
      iconSrc: '/assets/portfolio/skills/graphql-plain.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 5,
      text: 'Mongo',
      iconSrc: '/assets/portfolio/skills/mongodb-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 6,
      text: 'MySQL',
      iconSrc: '/assets/portfolio/skills/mysql-original.svg',
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 7,
      text: 'Postgresql',
      iconSrc: '/assets/portfolio/skills/postgresql-original.svg',
      iconSize: { height: 50, width: 50 },
    },
  ];

  const frontendTechSkills: ITechSkill[] = [
    {
      id: 1,
      skillSection: 'Languages',
      skillValue: 'Javascript, Typescript',
    },
    {
      id: 2,
      skillSection: 'Frameworks',
      skillValue: 'Next.js, React',
    },
    {
      id: 3,
      skillSection: 'Testing',
      skillValue: 'TDD with Mocha, Jest and Enzyme',
    },
    {
      id: 4,
      skillSection: 'Tools & Libraries',
      skillValue: 'Redux, Webpack, Babel, Sass, Styled Components...',
    },
    {
      id: 5,
      skillSection: 'Core',
      skillValue: 'HTML & CSS',
    },
  ];

  const backendTechSkills: ITechSkill[] = [
    {
      id: 1,
      skillSection: 'Languages',
      skillValue: 'Node.js(Javascript/Typescript), Python',
    },
    {
      id: 2,
      skillSection: 'Frameworks',
      skillValue: 'Express, Next.js',
    },
    {
      id: 3,
      skillSection: 'Databases',
      skillValue: 'MongoDB, MySQL',
    },
    {
      id: 4,
      skillSection: 'API',
      skillValue: 'REST, GraphQL',
    },
    {
      id: 5,
      skillSection: 'Deployment',
      skillValue: 'Netlify, Heroku, AWS',
    },
  ];

  const sideNavigationData: IScrollNavLink[] = [
    {
      id: 1,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'first-slide',
    },
    {
      id: 2,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'second-slide',
    },
    {
      id: 3,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'third-slide',
    },
    {
      id: 4,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'fourth-slide',
    },
    {
      id: 5,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'fifth-slide',
    },
  ];
  return {
    frontendSkills,
    backendSkills,
    frontendTechSkills,
    backendTechSkills,
    sideNavigationData,
  };
};

export interface ISkill {
  id: number;
  iconSrc: string;
  text: string;
  iconSize: { width: number; height: number };
}

export interface ITechSkill {
  id: number;
  skillSection: string;
  skillValue: string;
}

export interface IScrollNavLink {
  id: number;
  icon: ReactNode;
  hiddenText: string;
  anchorID: string;
}
