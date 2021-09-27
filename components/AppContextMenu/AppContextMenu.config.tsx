import { useActions } from '../../hooks/useActions';
import React, { ReactNode } from 'react';
import { IContextMenuItem } from '../ContextMenuItem/ContextMenuItem';
import {
  FiAirplay,
  FiAlignJustify,
  FiCast,
  FiCopy,
  FiFolderPlus,
  FiStar,
  FiTrash2,
  FiTrello,
} from 'react-icons/fi';
import Terminal from '../Apps/Terminal/Terminal';

type AppContextMenuItem = Pick<
  IContextMenuItem,
  'id' | 'text' | 'withUnderline' | 'appName' | 'withIcon'
> & {
  action: null | ((appName: string) => void);
};
/**
 * Custom hook that is used to get initial configuration desktop buttons context menu with different actions (eg open app, delete app, etc)
 *@function useAppContextMenuConfig
 *@param {string} appName - name of app to be opened on click
 *@param {string} iconSrc - specifies icon of window that this button should open
 *@param {ReactNode | null} willOpenWindowWith - specifies content of window   that this button should open
 *@returns {object} desktopContextMenuContent - returns object with configuration for desktop button context menu
 */
export const useAppContextMenuConfig = ({
  appName,
  iconSrc,
  willOpenWindowWith,
}: {
  appName: string;
  willOpenWindowWith: ReactNode | null;
  iconSrc: string;
}): {
  desktopContextMenuContent: AppContextMenuItem[];
} => {
  const { deleteDesktopApp, openWindow, compressDesktopApp } = useActions();

  const handleDeleteApp = (appName: string) => {
    deleteDesktopApp(appName);
  };

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

  const openApp = (appName: string) => {
    openWindow({
      windowName: appName,
      isOpen: true,
      windowIcon: iconSrc,
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: willOpenWindowWith,
    });
  };

  const desktopContextMenuContent: AppContextMenuItem[] = [
    {
      id: 1,
      text: 'Open',
      action: openApp,
      withIcon: <FiAirplay className={'icon'} />,
    },
    {
      id: 2,
      text: 'Delete',
      action: (appName: string) => handleDeleteApp(appName),
      withIcon: <FiTrash2 className={'icon'} />,
    },
    {
      id: 3,
      text: 'Pin to Quick Access',
      action: null,
      withIcon: <FiStar className={'icon'} />,
    },
    {
      id: 4,
      text: 'Compress to ZIP file',
      action: () => compressDesktopApp(appName),
      withIcon: <FiFolderPlus className={'icon'} />,
    },
    {
      id: 5,
      text: 'Copy as path',
      action: null,
      withIcon: <FiCopy className={'icon'} />,
    },
    {
      id: 6,
      text: 'Properties',
      action: null,
      withUnderline: true,
      withIcon: <FiAlignJustify className={'icon'} />,
    },
    {
      id: 7,
      text: 'Open in Terminal',
      action: openTerminal,
      withIcon: <FiTrello className={'icon'} />,
      withUnderline: true,
    },
    {
      id: 8,
      text: 'Show more options',
      action: null,
      withIcon: <FiCast className={'icon'} />,
    },
  ];

  return { desktopContextMenuContent };
};
