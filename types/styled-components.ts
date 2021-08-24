import 'styled-components';

interface media {
  phone: string;
  tablet: string;
  desktop: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
    primary: { backround: string; text: string };
    gray: { dark: string; light: string; lightest: string };
    borderRadius: string;
    media: media;
  }
}
