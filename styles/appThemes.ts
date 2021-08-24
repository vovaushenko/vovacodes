import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  primary: { background: '#000000', text: '#ffffff' },
  gray: { dark: '#151515', light: '#383838', lightest: '#444444' },
  borderRadius: '6px',
  fontSize: { large: '18px', medium: '16px', small: '14px' },

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
  borderRadius: '6px',
  fontSize: { large: '18px', medium: '16px', small: '14px' },

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};
