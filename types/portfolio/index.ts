import { ReactNode } from 'react';

export interface IHighlightedProject {
  slideNumberImg?: string;
  projectTitle: string;
  projectDescription: string;
  projectImg: string;
  projectMobileImg: string;
  projectTechnologies: string[];
  technologyIcons: ReactNode[];
  slideBgColor: string;
  slideHeight: string;
  githubLink?: string;
  liveLink: string;
}

export interface ICarouselQuote {
  id: number;
  title: string;
  quote: string;
}
