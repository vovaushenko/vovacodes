import 'styled-components';

interface media {
  phone: string;
  tablet: string;
  desktop: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
    primaryBg: string;
    secondaryBg: string;
    secondaryBgLighter: string;
    secondaryBgLightest: string;
    primaryWhite: string;
    borderRadius: string;
    media: media;
  }
}
