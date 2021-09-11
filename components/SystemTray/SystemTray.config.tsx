import React from 'react';
import { ISystemTrayButton } from '../../types/ui/system-tray';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GoogleSearch from '../Apps/GoogleSearch/GoogleSearch';
import Terminal from '../Apps/Terminal/Terminal';

export const useSystemTrayConfig = (): {
  systemTrayButtons: ISystemTrayButton[];
} => {
  const { toggleWidgetsModal, toggleSearchModal, changeTheme } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);

  const themeToggleIcon =
    theme === 'dark'
      ? '/assets/icons/taskbar/light_mode.png'
      : '/assets/icons/taskbar/dark_mode.png';

  const searchIcon =
    theme === 'dark'
      ? '/assets/icons/taskbar/search-dark.svg'
      : '/assets/icons/taskbar/search-light.svg';

  const systemTrayButtons: ISystemTrayButton[] = [
    {
      id: 1,
      src: '/assets/icons/taskbar/Windows.png',
      size: { width: 30, height: 30 },
      action: () => toggleSearchModal(),
      alt: 'Windows icon',
      willOpenWindowWith: null,
    },
    {
      id: 2,
      src: searchIcon,
      size: { width: 30, height: 30 },
      action: () => toggleSearchModal(),
      alt: 'Search more',
      willOpenWindowWith: null,
    },
    {
      id: 3,
      src: '/assets/icons/taskbar/Widgets.png',
      size: { width: 30, height: 30 },
      action: () => toggleWidgetsModal(),
      alt: 'Open widgets',
      willOpenWindowWith: null,
    },
    {
      id: 4,
      src: '/assets/icons/startmenu/chrome.svg',
      size: { width: 30, height: 30 },
      action: null,
      alt: 'Chrome',
      willOpenWindowWith: <GoogleSearch />,
    },
    {
      id: 5,
      src: '/assets/icons/taskbar/file_explorer.webp',
      size: { width: 30, height: 30 },
      action: null,
      alt: 'Explore files',
      willOpenWindowWith: <Terminal />,
    },
    {
      id: 6,
      src: '/assets/icons/startmenu/icons8-microsoft-store.svg',
      size: { width: 30, height: 30 },
      action: null,
      alt: 'Shop on Microsoft Store',
      willOpenWindowWith: null,
    },
    {
      id: 7,
      src: '/assets/icons/taskbar/bash.png',
      size: { width: 30, height: 30 },
      action: null,
      alt: 'Open Terminal',
      willOpenWindowWith: <Terminal />,
    },
    {
      id: 8,
      src: themeToggleIcon,
      size: { width: 30, height: 30 },
      action: () => changeTheme(),
      alt: 'Toggle theme',
      willOpenWindowWith: null,
    },
  ];

  return {
    systemTrayButtons,
  };
};
