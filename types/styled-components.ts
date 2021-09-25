import 'styled-components';

interface Media {
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
    colors: {
      appCenter: { bg: string; searchBarBg: string };
      systemTray: { bg: string };
      gray: {
        dark: string;
        light: string;
        lightest: string;
        invisible: string;
      };
      red: { danger: string; lightDanger: string };
      blue: {
        icon: string;
        border: string;
        activeBlue: string;
        brandColor: string;
      };
      modals: {
        widgetModalBg: string;
      };
      cards: {
        widgetBg: string;
      };
      windows: {
        bg: string;
        navBg: string;
      };
      buttons: {
        simpleButtonBg: string;
        settingsButton: { bg: string; activeBg: string; activeColor: string };
        desktopButton: {
          hover: string;
          systemTrayHover: string;
          pinnedAppHover: string;
        };
      };
    };

    gradients: { portfolioGreen: string; rainbow: string };

    boxShadow: {
      appBtn: string;
      window: string;
    };

    media: Media;

    zIndex: {
      highestPriority: number;
      modal: number;
      navigation: number;
      lowPriority: number;
    };

    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };

    space: {
      none: string;
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    portfolio: {
      bgColor: string;
      secondaryBg: { purple: string };
      primaryColor: { dark: string; light: string };
      text: { light: string; dark: string };
      resumeColors: {
        accentColor: string;
        darkText: string;
        bgColor: string;
        lightText: string;
      };
    };
  }
}
