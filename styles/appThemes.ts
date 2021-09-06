import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  primary: { background: '#000000', text: 'rgba(255, 255, 255, 0.835)' },
  gray: { dark: 'rgba(48,49,51,.774)', light: '#383838', lightest: '#444444' },
  red: { danger: 'rgba(255,0,0,.562)', lightDanger: '#e83535' },
  borderRadius: '4px',
  fontSize: { large: '16px', medium: '14px', small: '12px' },
  systemTrayBackground: 'rgba(3, 21, 41, 0.35)',
  systemTrayIconHoverBg: 'rgba(3,21,41,.562)',
  settingsButtonBg: 'rgba(255, 255, 255, 0.055)',
  settingButtonIsActive: { bg: '#69d3fa', color: '#000000' },
  buttonBg: 'rgba(46,61,83,.692)',
  pinnedAppHoverBg: 'rgba(3,21,41,.562)',
  activeColor: '#4489aa',
  windowBackground: 'rgba(28, 33, 39, 0.63)',
  zIndex: {
    highestPriority: 777,
    navigation: 78,
    modal: 77,
    lowPriority: 7,
  },

  portfolio: {
    bgColor: '#010606',
    secondaryBg: { purple: '#4831d4' },
    primaryColor: { dark: '#01bf71', light: '#2bff88' },
    text: { light: 'rgba(255, 255, 255, 0.95)', dark: '#000000' },
    resumeColors: {
      accentColor: 'rgb(40,103,178)',
      darkText: '#010606',
      bgColor: 'rgb(245, 244, 252)',
      lightText: 'rgba(48,49,51,.774)',
    },
  },

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  primary: { background: '#ffffff', text: '#000000' },
  gray: {
    dark: 'rgba(255,255,255,.658)',
    light: '#383838',
    lightest: '#444444',
  },
  red: { danger: 'rgba(255,0,0,.562)', lightDanger: '#e83535' },
  borderRadius: '4px',
  fontSize: { large: '16px', medium: '14px', small: '12px' },
  systemTrayBackground: 'rgba(255,255,255,.658)',
  systemTrayIconHoverBg: 'rgba(243,243,243,.747)',
  settingsButtonBg: 'rgba(255, 255, 255, 0.23)',
  settingButtonIsActive: { bg: '#0652f7', color: '#ffffff' },
  buttonBg: 'rgba(255, 255, 255, 0.815)',
  pinnedAppHoverBg: 'rgba(255,255,255,.596)',
  activeColor: '#0652f7',
  windowBackground: 'rgba(255,255,255,.658)',
  zIndex: {
    highestPriority: 777,
    navigation: 78,
    modal: 77,
    lowPriority: 7,
  },
  portfolio: {
    bgColor: '#010606',
    secondaryBg: { purple: '#4831d4' },
    primaryColor: { dark: '#01bf71', light: '#2bff88' },
    text: { light: 'rgba(255, 255, 255, 0.95)', dark: '#000000' },
    resumeColors: {
      accentColor: 'rgb(40,103,178)',
      darkText: '#010606',
      bgColor: 'rgb(245, 244, 252)',
      lightText: 'rgba(48,49,51,.774)',
    },
  },

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};

//actionButtonBG - light rgba(255, 255, 255, 0.23)
//actionButtonBG - dark rgba(255, 255, 255, 0.055)
