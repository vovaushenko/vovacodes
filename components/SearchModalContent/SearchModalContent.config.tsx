import React, { ReactNode } from 'react';
import VsCode from '../Apps/VsCode/VsCode';
import GoogleSearch from '../Apps/GoogleSearch/GoogleSearch';
import Figma from '../Apps/Figma/Figma';
import Terminal from '../Apps/Terminal/Terminal';
import { FiCloud, FiInfo } from 'react-icons/fi';
import { SiNextDotJs, SiReact } from 'react-icons/si';

/**
 * Custom hook to get search modal data, namely top apps and quick searches
 *@function useSearchModalConfig
 *@returns {object} {topApps,quickSearches} - the hook returns object with topApps and quickSearches arrays
 */

export const useSearchModalConfig = (): {
  topApps: ITopApp[];
  quickSearches: IQuickSearch[];
} => {
  const topApps: ITopApp[] = [
    {
      id: 1,
      text: 'Bash',
      icon: '/assets/icons/taskbar/bash.png',
      iconSize: { width: 30, height: 30 },
      action: null,
      willOpenWindowWith: <Terminal />,
    },
    {
      id: 2,
      text: 'GitHub',
      icon: '/assets/icons/startmenu/github.svg',
      action: () => window.open('https://github.com/vovaushenko', '_blank'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 3,
      text: 'VSCode',
      icon: '/assets/icons/startmenu/vscode.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <VsCode />,
    },

    {
      id: 4,
      text: 'Figma',
      icon: '/assets/icons/startmenu/figma.png',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: <Figma />,
    },

    {
      id: 5,
      text: 'Edge',
      icon: '/assets/icons/startmenu/icons8-microsoft-edge.svg',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <GoogleSearch />,
    },
  ];

  const quickSearches: IQuickSearch[] = [
    { id: 1, text: 'Weather', icon: <FiCloud className={'icon'} /> },
    { id: 2, text: 'Today in history', icon: <FiInfo className={'icon'} /> },
    { id: 3, text: 'Latest React reads', icon: <SiReact className={'icon'} /> },
    { id: 4, text: 'Next.js rocks!', icon: <SiNextDotJs className={'icon'} /> },
  ];

  return {
    topApps,
    quickSearches,
  };
};

interface ITopApp {
  id: number;
  text: string;
  icon: string;
  action: (() => void) | null;
  iconSize: { height: number; width: number };
  willOpenWindowWith: ReactNode | null;
}

interface IQuickSearch {
  id: number;
  icon: ReactNode;
  text: string;
}
