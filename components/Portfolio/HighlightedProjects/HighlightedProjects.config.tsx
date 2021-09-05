import { IHighlightedProject } from '../../../types/portfolio';
import React from 'react';
import {
  SiMongodb,
  SiNextDotJs,
  SiReact,
  SiRedux,
  SiStyledComponents,
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
      projectImg: '/assets/portfolio/projectOne/dummyproject1.png',
      projectMobileImg: '/assets/portfolio/projectOne/sneaker-maniacs.png',
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
        <SiRedux key={1} className={'tech-icon'} />,
        <SiNextDotJs key={2} className={'tech-icon'} />,
        <SiReact key={3} className={'tech-icon'} />,
        <SiMongodb key={4} className={'tech-icon'} />,
        <SiStyledComponents key={5} className={'tech-icon'} />,
      ],
    },
  ];

  return {
    highlightedProjects,
  };
};
