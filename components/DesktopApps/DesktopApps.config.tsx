import React from 'react';
import { IDesktopApp } from '../../types/ui/desktop-app';
import Figma from '../Apps/Figma/Figma';
import VsCode from '../Apps/VsCode/VsCode';
import Likes from '../Likes/Likes';
import { useRouter } from 'next/router';
import Resume from '../Portfolio/Resume/Resume';
import TrashBin from '../Folders/TrashBin/TrashBin';
import CommentsForm from '../CommentsForm/CommentsForm';
import PortfolioLanding from '../Portfolio/PortfolioLanding/PortfolioLanding';
import PortfolioLayout from '../Portfolio/PortfolioLayout/PortfolioLayout';

/**
 * Custom hook used to get initial configuration for desktop
 * @function useDesktopApps
 * @returns {object} - object with array of icon variants with already specified type of sorting
 * */
export const useDesktopApps = (): {
  sortedAlphabetically: IDesktopApp[];
  sortedByDate: IDesktopApp[];
  sortedBySize: IDesktopApp[];
} => {
  const router = useRouter();

  const desktopAppsList: IDesktopApp[] = [
    {
      id: 1,
      text: 'Figma',
      willOpenWindowWith: <Figma />,
      variant: 'desktop',
      iconSrc: '/assets/icons/startmenu/figma.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 2,
      text: 'VSCode',
      willOpenWindowWith: <VsCode />,
      variant: 'desktop',
      iconSrc: '/assets/icons/startmenu/vscode.svg',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 3,
      text: 'This PC',
      willOpenWindowWith: (
        <PortfolioLayout title={'Vova Ushenko | Full-Stack Web Developer'}>
          <PortfolioLanding />
        </PortfolioLayout>
      ),
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/this_pc.webp',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 4,
      text: 'Likes',
      willOpenWindowWith: <Likes />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/like.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 5,
      text: 'Portfolio',
      willOpenWindowWith: null,
      variant: 'desktop',
      iconSrc: '/assets/portfolio/skills/react-original.svg',
      iconSize: { width: 40, height: 40 },
      action: () => router.push('/portfolio'),
    },
    {
      id: 6,
      text: 'Resume',
      willOpenWindowWith: <Resume />,
      variant: 'desktop',
      iconSrc: '/assets/icons/recommended/word.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 7,
      text: 'Projects',
      willOpenWindowWith: null,
      variant: 'desktop',
      iconSrc: '/assets/icons/recommended/power-point.png',
      iconSize: { width: 40, height: 40 },
      action: () => router.push('/portfolio/projects'),
    },
    {
      id: 8,
      text: 'Trash',
      willOpenWindowWith: <TrashBin />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/recyclebin.webp',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 9,
      text: 'Comment',
      willOpenWindowWith: <CommentsForm />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/comment.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
  ];

  const sortedAlphabetically = [...desktopAppsList].sort((a, b) =>
    a.text.toLowerCase().localeCompare(b.text.toLowerCase())
  );
  const sortedBySize = [...desktopAppsList];
  const sortedByDate = [...desktopAppsList].sort((a, b) => b.id - a.id);

  return {
    sortedAlphabetically,
    sortedByDate,
    sortedBySize,
  };
};
