import { DefaultTheme } from 'styled-components';
import {
  allGradients,
  borderRadii,
  boxShadows,
  darkGrayColors,
  darkPrimaryColors,
  darkUtilityColors,
  fontSizes,
  fontWeights,
  lightGrayColors,
  lightPrimaryColors,
  lightUtilityColors,
  portfolioStyles,
  responsiveBreakPoints,
  spacing,
  zIndexes,
} from './system-design-variables';

/**
 * Custom hook used to get app's themes used by styled component's theme provider to locally style all app's components
 * All particular values and styles are stored and exported from file "system-design-variables.ts"
 * @function useSystemDesign
 * @returns {{darkTheme,lightTheme}} appThemes - the hook returns objects with specific css params, colors, spacings and all necessary info for styling the app using global Styled Components theme provider
 */

export const useSystemDesign = (): {
  darkTheme: DefaultTheme;
  lightTheme: DefaultTheme;
} => {
  const darkTheme: DefaultTheme = {
    mode: 'dark',
    primary: darkPrimaryColors,
    gray: darkGrayColors,
    colors: darkUtilityColors,
    gradients: allGradients,
    boxShadow: boxShadows,
    borderRadius: borderRadii.main,
    zIndex: zIndexes,
    fontSize: fontSizes,
    fontWeight: fontWeights,
    space: spacing,
    media: responsiveBreakPoints,

    portfolio: portfolioStyles,
  };

  const lightTheme: DefaultTheme = {
    mode: 'light',
    primary: lightPrimaryColors,
    gray: lightGrayColors,
    colors: lightUtilityColors,
    gradients: allGradients,
    boxShadow: boxShadows,
    borderRadius: borderRadii.main,
    zIndex: zIndexes,
    fontSize: fontSizes,
    fontWeight: fontWeights,
    space: spacing,
    media: responsiveBreakPoints,

    portfolio: portfolioStyles,
  };
  return { darkTheme, lightTheme };
};
