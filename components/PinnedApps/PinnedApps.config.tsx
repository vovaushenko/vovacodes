import React, { ReactNode } from 'react';
import VsCode from '../Apps/VsCode/VsCode';
import GoogleSearch from '../Apps/GoogleSearch/GoogleSearch';

export const usePinnedAppsConfig = (): { pinnedApps: IPinnedApp[] } => {
  const pinnedApps: IPinnedApp[] = [
    {
      id: 1,
      text: 'GitHub',
      icon: '/assets/icons/startmenu/github.svg',
      action: () => {
        window.location.href = 'https://github.com/vovaushenko';
      },
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 2,
      text: 'VSCode',
      icon: '/assets/icons/startmenu/vscode.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <VsCode />,
    },
    {
      id: 3,
      text: 'WebStorm',
      icon: '/assets/icons/startmenu/webstorm.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <VsCode />,
    },
    {
      id: 4,
      text: 'PyCharm',
      icon: '/assets/icons/startmenu/pycharm.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <VsCode />,
    },
    {
      id: 5,
      text: 'Toolbox',
      icon: '/assets/icons/startmenu/toolbox.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: null,
    },
    {
      id: 6,
      text: 'Sublime',
      icon: '/assets/icons/startmenu/sublime.png',
      action: null,
      iconSize: { height: 42, width: 42 },
      willOpenWindowWith: null,
    },
    {
      id: 7,
      text: 'Postman',
      icon: '/assets/icons/startmenu/postman.svg',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: null,
    },
    {
      id: 8,
      text: 'Docker',
      icon: '/assets/icons/startmenu/docker.png',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: null,
    },
    {
      id: 9,
      text: 'Compass',
      icon: '/assets/icons/startmenu/mongodb.svg',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 10,
      text: 'Figma',
      icon: '/assets/icons/startmenu/figma.png',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: null,
    },
    {
      id: 11,
      text: 'Photoshop',
      icon: '/assets/icons/startmenu/photoshop.svg',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 12,
      text: 'Squoosh',
      icon: '/assets/icons/startmenu/squoosh.svg',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: null,
    },
    {
      id: 13,
      text: 'Firefox',
      icon: '/assets/icons/startmenu/firefox-nightly.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: null,
    },
    {
      id: 14,
      text: 'Chrome',
      icon: '/assets/icons/startmenu/chrome-canary.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <GoogleSearch />,
    },
    {
      id: 15,
      text: 'Chrome',
      icon: '/assets/icons/startmenu/chrome.svg',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <GoogleSearch />,
    },
    {
      id: 16,
      text: 'Edge',
      icon: '/assets/icons/startmenu/icons8-microsoft-edge.svg',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <GoogleSearch />,
    },
    {
      id: 17,
      text: 'Zoom',
      icon: '/assets/icons/startmenu/zoom.png',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 18,
      text: 'Skype',
      icon: '/assets/icons/startmenu/skype.png',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
  ];

  return {
    pinnedApps,
  };
};

interface IPinnedApp {
  id: number;
  text: string;
  icon: string;
  action: (() => void) | null;
  iconSize: { height: number; width: number };
  willOpenWindowWith: ReactNode | null;
}
