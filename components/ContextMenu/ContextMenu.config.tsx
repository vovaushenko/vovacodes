import React from 'react';
import { IContextMenuItem } from '../ContextMenuItem/ContextMenuItem';
import { useRouter } from 'next/router';
import { useActions } from '../../hooks/useActions';
import { IconSize, IconSortVariant } from '../../types/redux/ui-reducer-types';
import Terminal from '../Apps/Terminal/Terminal';
import {
  FiFilter,
  FiGrid,
  FiInfo,
  FiMonitor,
  FiPlay,
  FiRefreshCw,
  FiRotateCw,
  FiTrello,
} from 'react-icons/fi';
import About from '../About/About';

/**
 * Custom hook that is used to get initial configuration for desktop context menu
 *@function useContextMenuConfig
 *@returns {object} desktopContextMenuContent - returns object with configuration for desktop context menu (icons, text, actions)
 */
export const useContextMenuConfig = (): {
  desktopContextMenuContent: IContextMenuItem[];
  systemTrayContextMenuContent: IContextMenuItem[];
} => {
  const router = useRouter();
  const {
    sortDesktopIcons,
    changeDesktopIconSize,
    openWindow,
    undoLastDeleteDesktopApp,
  } = useActions();

  const reloadPage = () => router.reload();

  const sortIconsBy = (way: IconSortVariant) => sortDesktopIcons(way);

  const changeSizeTo = (variant: IconSize) => changeDesktopIconSize(variant);

  const openTerminal = () => {
    openWindow({
      windowName: 'Terminal',
      isOpen: true,
      windowIcon: '/assets/icons/taskbar/bash.png',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: <Terminal />,
    });
  };

  const openAbout = () => {
    openWindow({
      windowName: 'About OS',
      isOpen: true,
      windowIcon: '/assets/portfolio/skills/linux-original.svg',
      size: {
        width: 0.4 * window.innerWidth,
        height: 0.6 * window.innerHeight,
      },
      windowContent: <About />,
    });
  };

  const desktopContextMenuContent: IContextMenuItem[] = [
    {
      id: 1,
      text: 'View',
      action: null,
      withIcon: <FiGrid className={'icon'} />,
      hoverMenuItems: [
        { id: 1, text: 'Large Icons', action: () => changeSizeTo('large') },
        { id: 2, text: 'Medium Icons', action: () => changeSizeTo('medium') },
        {
          id: 3,
          text: 'Small Icons',
          action: () => changeSizeTo('small'),
          withUnderline: true,
        },
        { id: 4, text: 'Show Desktop Icons', action: null },
      ],
    },
    {
      id: 2,
      text: 'Refresh',
      action: reloadPage,
      withIcon: <FiRefreshCw className={'icon'} />,
    },
    {
      id: 3,
      text: 'Sort by',
      withIcon: <FiFilter className={'icon'} />,
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Name', action: () => sortIconsBy('name') },
        { id: 2, text: 'Size', action: () => sortIconsBy('size') },
        { id: 3, text: 'Date Modified', action: () => sortIconsBy('date') },
      ],
      withUnderline: true,
    },
    {
      id: 4,
      text: 'Next Desktop Background',
      action: null,
      withIcon: <FiPlay className={'icon'} />,
    },
    {
      id: 5,
      text: 'Undo Delete',
      action: undoLastDeleteDesktopApp,
      withIcon: <FiRotateCw className={'icon'} />,
    },
    {
      id: 6,
      text: 'Open in Windows Terminal',
      action: openTerminal,
      withUnderline: true,
      withIcon: <FiTrello className={'icon'} />,
    },
    {
      id: 7,
      text: 'Personalize',
      action: null,
      withUnderline: true,
      withIcon: <FiMonitor className={'icon'} />,
    },
    {
      id: 8,
      text: 'About',
      action: openAbout,
      withIcon: <FiInfo className={'icon'} />,
    },
  ];

  const systemTrayContextMenuContent: IContextMenuItem[] = [
    {
      id: 1,
      text: 'Align Icons',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Left', action: null },
        { id: 2, text: 'Center', action: null },
        { id: 3, text: 'Right', action: null },
      ],
      withUnderline: true,
    },
    {
      id: 2,
      text: 'Search',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Show', action: null },
        { id: 2, text: 'Hide', action: null },
      ],
    },
    {
      id: 3,
      text: 'Widgets',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Show', action: null },
        { id: 2, text: 'Hide', action: null },
      ],
      withUnderline: true,
    },
    {
      id: 4,
      text: 'Show Desktop',
      action: null,
    },
  ];

  return { desktopContextMenuContent, systemTrayContextMenuContent };
};
