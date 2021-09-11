import React, { ReactNode } from 'react';
import Resume from '../Portfolio/Resume/Resume';
import { useRouter } from 'next/router';
import Terminal from '../Apps/Terminal/Terminal';

/**
 * Custom hook that returns prepared recommended apps config
 *@function useRecommendedConfig
 *@returns {IRecommendedFile[]} recommendedFiles - objects to be mapped into list of recommended files and apps
 */
export const useRecommendedConfig = (): {
  recommendedFiles: IRecommendedFile[];
} => {
  const router = useRouter();
  const recommendedFiles: IRecommendedFile[] = [
    {
      id: 1,
      fileName: 'LinkedIn',
      details: 'Connect on Linkedin',
      icon: '/assets/icons/recommended/linkedin.svg',
      action: () => {
        window.location.href = 'https://www.linkedin.com/in/vovau/';
      },
      iconSize: { height: 44, width: 44 },
      willOpenWindowWith: null,
    },
    {
      id: 2,
      fileName: 'CurrentResume',
      details: 'Sunday at 10:14 AM',
      icon: '/assets/icons/recommended/word.png',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <Resume />,
    },
    {
      id: 3,
      fileName: 'My Portfolio',
      details: 'August 26',
      icon: '/assets/portfolio/skills/react-original.svg',
      action: () => router.push('/portfolio'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 4,
      fileName: 'Recent Projects',
      details: 'August 25',
      icon: '/assets/icons/recommended/power-point.png',
      action: () => router.push('/portfolio/projects'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 5,
      fileName: 'Twitter',
      details: 'Connect on Twitter',
      icon: '/assets/icons/recommended/twitter.svg',
      action: () => {
        window.location.href = 'https://twitter.com/vova_ush';
      },
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 6,
      fileName: 'Terminal',
      details: 'Recently added',
      icon: '/assets/icons/recommended/terminal.png',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: <Terminal />,
    },
  ];

  return {
    recommendedFiles,
  };
};

interface IRecommendedFile {
  id: number;
  fileName: string;
  details: string;
  icon: string;
  action: (() => void) | null;
  iconSize: { height: number; width: number };
  willOpenWindowWith: null | ReactNode;
}
