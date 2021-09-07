import { IHighlightedProject } from '../../../types/portfolio';
import React from 'react';
import {
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
  SiRedux,
  SiStorybook,
  SiTypescript,
} from 'react-icons/si';

export const useHighlightedProjectsData = (): {
  highlightedProjects: IHighlightedProject[];
} => {
  const highlightedProjects: IHighlightedProject[] = [
    {
      slideNumberImg: '/assets/portfolio/1.svg',
      projectTitle: 'Sneaker Maniacs',
      projectDescription:
        'Coffee-shop is a custom eCommerce platform built with React, Redux, Node, Express & MongoDB. Front-end is built with React, React-Bootstrap UI library and Redux.',
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projectOne/SneakerManiacs.png',
      projectMobileImg: '/assets/portfolio/projectOne/sneakerManiacsPhone.png',
      githubLink: 'https://github.com/vovaushenko/next-multibrand-store',
      liveLink: 'https://sneaker-maniacs.vercel.app/',
      projectTechnologies: [
        'Next.js',
        'React',
        'Redux',
        'Mongo DB',
        'Styled Components',
      ],

      slideBgColor: '#010606',
      technologyIcons: [
        <SiTypescript key={1} className={'tech-icon'} />,
        <SiReact key={2} className={'tech-icon'} />,
        <SiNextDotJs key={3} className={'tech-icon'} />,
        <SiRedux key={4} className={'tech-icon'} />,
        <SiMongodb key={5} className={'tech-icon'} />,
        <SiStorybook key={6} className={'tech-icon'} />,
      ],
    },
    {
      slideNumberImg: '/assets/portfolio/2.svg',
      projectTitle: 'Chernivtsi National University',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. laboriosam perferendis! Sint, odit natus? Asperiores aliquid eveniet ratione repellendus.',
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projectTwo/vpsFullHd.png',
      projectMobileImg: '/assets/portfolio/projectTwo/vpsMobile.png',
      githubLink: 'https://github.com/vovaushenko/next-multibrand-store',
      liveLink: 'https://optics-vps.vercel.app/',
      projectTechnologies: ['Next.js', 'React', 'Redux', 'Mongo DB', 'Express'],

      slideBgColor: '#4831d4',
      technologyIcons: [
        <SiTypescript key={1} className={'tech-icon'} />,
        <SiReact key={2} className={'tech-icon'} />,
        <SiNextDotJs key={3} className={'tech-icon'} />,
        <SiRedux key={4} className={'tech-icon'} />,
        <SiNodeDotJs key={5} className={'tech-icon'} />,
        <SiMongodb key={6} className={'tech-icon'} />,
      ],
    },
  ];

  return {
    highlightedProjects,
  };
};
