import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  primary: { background: '#000000', text: 'rgba(255, 255, 255, 0.835)' },
  gray: { dark: '#151515', light: '#383838', lightest: '#444444' },
  borderRadius: '4px',
  fontSize: { large: '16px', medium: '14px', small: '12px' },
  systemTrayBackground: 'rgba(3, 21, 41, 0.35)',
  systemTrayIconHoverBg: 'rgba(3,21,41,.562)',
  settingsButtonBg: 'rgba(255, 255, 255, 0.055)',
  settingButtonIsActive: { bg: '#69d3fa', color: '#000000' },

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  primary: { background: '#ffffff', text: '#000000' },
  gray: { dark: '#151515', light: '#383838', lightest: '#444444' },
  borderRadius: '4px',
  fontSize: { large: '16px', medium: '14px', small: '12px' },
  systemTrayBackground: 'rgba(255,255,255,.658)',
  systemTrayIconHoverBg: 'rgba(243,243,243,.747)',
  settingsButtonBg: 'rgba(255, 255, 255, 0.23)',
  settingButtonIsActive: { bg: '#0652f7', color: '#ffffff' },

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};

//actionButtonBG - light rgba(255, 255, 255, 0.23)
//actionButtonBG - dark rgba(255, 255, 255, 0.055)
