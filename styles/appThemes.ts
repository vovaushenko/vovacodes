import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  primary: { backround: '#000000', text: '#ffffff' },
  gray: { dark: '#151515', light: '#383838', lightest: '#444444' },
  borderRadius: '6px',

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  primary: { backround: '#ffffff', text: '#000000' },
  gray: { dark: '#151515', light: '#383838', lightest: '#444444' },
  borderRadius: '6px',

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};
