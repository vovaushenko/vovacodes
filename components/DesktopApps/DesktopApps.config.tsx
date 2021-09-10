import { IDesktopApp } from '../../types/ui/desktop-app';
import Figma from '../Apps/Figma/Figma';
import React from 'react';
import VsCode from '../Apps/VsCode/VsCode';
import Likes from '../Likes/Likes';

export const desktopAppsList: IDesktopApp[] = [
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
];
