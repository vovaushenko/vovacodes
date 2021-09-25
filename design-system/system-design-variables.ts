/*=============================================
    CSS Values and variables used in App
=============================================*/

/**
 * TABLE OF CONTENTS
 *
 * COLORS
 * Primary colors...................These are the main primary colors. They will be used for backgrounds and text colors
 * Gray colors.................These are gray palette used in the app
 * Utility Colors.................Other colors used in particular components of the app
 *
 * GRADIENTS
 * ..................These are main gradients used in the app
 *
 * TYPOGRAPHY
 * Font weights...................Font weights
 * Sizes..........................Font sizing for body text, paragraphs, inputs
 * Heading sizes..................Font sizing for page headings

 * BREAKPOINTS
 * Media....................Global responsive media breakpoint definitions.
 *
 * SPACING
 * Spacing........................Global fixed set of spacing variables
 *
 * OTHER STYLES
 *
 * Border radius.......................Global fixed set of border radii
 * Box Shadows..........................Global fixed set of box shadows
 * Z-Indexes..........................Global fixed Z-Indexes used in app
 *
 * PORTFOLIO STYLES
 * Portfolio Styles.......................Global design-system used in portfolio slides
 *
 */

/*=============================================
=                  Colors                     =
=============================================*/

export const darkPrimaryColors = {
  background: '#000000',
  text: 'rgba(255, 255, 255, 0.835)',
};

export const lightPrimaryColors = {
  background: '#ffffff',
  text: '#000000',
};

export const darkGrayColors = {
  dark: 'rgba(48,49,51,.774)',
  light: '#383838',
  lightest: '#444444',
};

export const lightGrayColors = {
  dark: 'rgba(255,255,255,.658)',
  light: '#383838',
  lightest: '#444444',
};

export const darkUtilityColors = {
  appCenter: {
    bg: 'rgba(28, 33, 39, 0.8)',
    searchBarBg: 'rgb(24, 34, 61)',
  },
  systemTray: { bg: 'rgba(3, 21, 41, 0.35)' },
  gray: {
    dark: 'rgba(48,49,51,.774)',
    light: '#383838',
    lightest: 'rgb(133, 133, 133)',
    invisible: 'rgba(143, 143, 143, 0.1)',
  },
  red: { danger: 'rgba(255,0,0,.562)', lightDanger: 'rgb(232, 53, 53)' },
  blue: {
    icon: 'rgb(3, 132, 192)',
    border: '#4489aa',
    activeBlue: '#4489aa',
    brandColor: 'rgb(65,105,225)',
  },
  modals: { widgetModalBg: 'rgba(47, 70, 95, 0.6)' },
  cards: {
    widgetBg: 'rgba(28, 33, 39, 0.8)',
  },
  windows: {
    bg: 'rgba(30,144,255,0.15)',
    navBg: 'rgba(3, 21, 41, 0.95)',
  },

  buttons: {
    simpleButtonBg: 'rgba(46,61,83,.692)',
    settingsButton: {
      bg: 'rgba(255, 255, 255, 0.055)',
      activeBg: '#69d3fa',
      activeColor: '#000000',
    },
    desktopButton: {
      hover: 'rgba(131, 195, 255, 0.24)',
      systemTrayHover: 'rgba(3, 21, 41, 0.562)',
      pinnedAppHover: 'rgba(3, 21, 41, 0.562)',
    },
  },
};

export const lightUtilityColors = {
  appCenter: {
    bg: 'rgba(255, 255, 255, 0.6)',
    searchBarBg: 'rgba(255, 255, 255, 0.9)',
  },
  systemTray: { bg: 'rgba(255,255,255,.658)' },
  gray: {
    dark: 'rgba(48,49,51,.774)',
    light: '#383838',
    lightest: 'rgb(133, 133, 133)',
    invisible: 'rgba(143, 143, 143, 0.1)',
  },
  red: { danger: 'rgba(255,0,0,.562)', lightDanger: 'rgb(232, 53, 53)' },
  blue: {
    icon: 'rgb(3, 132, 192)',
    border: '#4489aa',
    activeBlue: '#0652f7',
    brandColor: 'rgb(65,105,225)',
  },
  modals: { widgetModalBg: 'rgba(255, 255, 255, 0.25)' },
  cards: {
    widgetBg: 'rgba(244, 233, 244, 0.4)',
  },
  windows: {
    bg: 'rgba(255,255,255,.658)',
    navBg: 'rgba(255,255,255,.88)',
  },
  buttons: {
    simpleButtonBg: 'rgba(255, 255, 255, 0.815)',
    settingsButton: {
      bg: 'rgba(255, 255, 255, 0.23)',
      activeBg: 'rgba(6, 82, 247, 0.85)',
      activeColor: 'rgba(255, 255, 255, 1)',
    },
    desktopButton: {
      hover: 'rgba(131, 195, 255, 0.24)',
      systemTrayHover: 'rgba(243, 243, 243, 0.75)',
      pinnedAppHover: 'rgba(255, 255, 255, 0.6)',
    },
  },
};

/*=====  End of Colors  ======*/

/*=============================================
=                  Gradients                  =
=============================================*/
export const allGradients = {
  portfolioGreen: `linear-gradient(
      45deg,
      #01bf71 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );`,
  rainbow: `linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );`,
};

/*=============================================
=                Typography                   =
=============================================*/

/* Font sizes */

export const fontSizes = { large: '16px', medium: '14px', small: '12px' };

/* Font weights */

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

/*=====  End of Typography  ======*/

/*=============================================
=            Breakpoints                      =
=============================================*/

export const responsiveBreakPoints = {
  phone: '(max-width: 500px)',
  tablet: '(max-width: 768px)',
  desktop: '(min-width: 800px)',
};

/*=====  End of Breakpoints  ======*/

/*=============================================
=            Spacing                          =
=============================================*/

export const spacing = {
  none: '0rem',
  xxxs: '0.25rem',
  xxs: '0.5rem',
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '5rem',
};
/*=====  End of Spacing  ======*/

/*=============================================
=            Other Styles                     =
=============================================*/

/* Border radius */
export const borderRadii = { main: '4px' };

/* Box Shadows */
export const boxShadows = {
  appBtn: '0 1px 1px rgb(0 0 0 / 25%)',
  window:
    '0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n    0 100px 80px rgba(0, 0, 0, 0.07)',
};

/* Z-indexes */
export const zIndexes = {
  highestPriority: 777,
  navigation: 78,
  modal: 77,
  lowPriority: 7,
};

/*=====  End of Other Styles  ======*/

/*=============================================
=            Portfolio Styles                 =
=============================================*/

export const portfolioStyles = {
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
};
