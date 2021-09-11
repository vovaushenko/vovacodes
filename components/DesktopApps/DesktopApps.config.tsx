import React from 'react';
import { IDesktopApp } from '../../types/ui/desktop-app';
import Figma from '../Apps/Figma/Figma';
import VsCode from '../Apps/VsCode/VsCode';
import Likes from '../Likes/Likes';
import { useRouter } from 'next/router';
import Resume from '../Portfolio/Resume/Resume';

export const useDesktopApps = (): { desktopAppsList: IDesktopApp[] } => {
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
      willOpenWindowWith: null,
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
  ];

  return {
    desktopAppsList,
  };
};
