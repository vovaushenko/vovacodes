import 'styled-components';

interface media {
  phone: string;
  tablet: string;
  desktop: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
    primary: { background: string; text: string };
    fontSize: { large: string; medium: string; small: string };
    gray: { dark: string; light: string; lightest: string };
    borderRadius: string;
    systemTrayBackground: string;
    media: media;
    systemTrayIconHoverBg: string;
    settingsButtonBg: string;
    settingButtonIsActive: { bg: string; color: string };
    buttonBg: string;
    pinnedAppHoverBg: string;
    activeColor: string;
  }
}
