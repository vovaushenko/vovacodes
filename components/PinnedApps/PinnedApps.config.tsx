export const usePinnedAppsConfig = (): { pinnedApps: IPinnedApp[] } => {
  const pinnedApps: IPinnedApp[] = [
    {
      id: 1,
      text: 'GitHub',
      icon: '/assets/icons/startmenu/github.svg',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 2,
      text: 'VSCode',
      icon: '/assets/icons/startmenu/vscode.svg',
      action: () => console.log('click'),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 3,
      text: 'WebStorm',
      icon: '/assets/icons/startmenu/webstorm.svg',
      action: () => console.log('click'),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 4,
      text: 'PyCharm',
      icon: '/assets/icons/startmenu/pycharm.svg',
      action: () => console.log('click'),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 5,
      text: 'Toolbox',
      icon: '/assets/icons/startmenu/toolbox.svg',
      action: () => console.log('click'),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 6,
      text: 'Sublime',
      icon: '/assets/icons/startmenu/sublime.png',
      action: () => console.log('click'),
      iconSize: { height: 42, width: 42 },
    },
    {
      id: 7,
      text: 'Postman',
      icon: '/assets/icons/startmenu/postman.svg',
      action: () => console.log('click'),
      iconSize: { height: 38, width: 38 },
    },
    {
      id: 8,
      text: 'Docker',
      icon: '/assets/icons/startmenu/docker.png',
      action: () => console.log('click'),
      iconSize: { height: 38, width: 38 },
    },
    {
      id: 9,
      text: 'Compass',
      icon: '/assets/icons/startmenu/mongodb.svg',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 10,
      text: 'Figma',
      icon: '/assets/icons/startmenu/figma.png',
      action: () => console.log('click'),
      iconSize: { height: 38, width: 38 },
    },
    {
      id: 11,
      text: 'Photoshop',
      icon: '/assets/icons/startmenu/photoshop.svg',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 12,
      text: 'Squoosh',
      icon: '/assets/icons/startmenu/squoosh.svg',
      action: () => console.log('click'),
      iconSize: { height: 38, width: 38 },
    },
    {
      id: 13,
      text: 'Firefox',
      icon: '/assets/icons/startmenu/firefox-nightly.svg',
      action: () => console.log('click'),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 14,
      text: 'Chrome',
      icon: '/assets/icons/startmenu/chrome-canary.svg',
      action: () => console.log('click'),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 15,
      text: 'Chrome',
      icon: '/assets/icons/startmenu/chrome.svg',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 16,
      text: 'Edge',
      icon: '/assets/icons/startmenu/icons8-microsoft-edge.svg',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 17,
      text: 'Zoom',
      icon: '/assets/icons/startmenu/zoom.png',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 18,
      text: 'Skype',
      icon: '/assets/icons/startmenu/skype.png',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
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
  action: () => void;
  iconSize: { height: number; width: number };
}
