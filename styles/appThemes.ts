import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  primaryBg: '#000000',
  secondaryBg: '#151515',
  secondaryBgLighter: '#383838',
  borderRadius: '1rem',
  primaryWhite: '#ffffff',
  secondaryBgLightest: '#444444',

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};

export const lightTheme: DefaultTheme = {
  mode: 'dark',
  primaryBg: '#ffffff',
  secondaryBg: '#151515',
  secondaryBgLighter: '#383838',
  borderRadius: '1rem',
  primaryWhite: '#000000',
  secondaryBgLightest: '#444444',

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};
