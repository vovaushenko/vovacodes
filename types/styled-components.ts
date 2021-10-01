import 'styled-components';
import {
  IBoxShadows,
  IFontSizes,
  IFontWeights,
  IGradients,
  IGrayColors,
  IMediaBreakpoints,
  IPortfolioStyle,
  IPrimaryColors,
  ISpacing,
  IUtilityColors,
  IZindexes,
} from '../design-system/system-design-variables';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
    primary: IPrimaryColors;
    gray: IGrayColors;
    colors: IUtilityColors;
    gradients: IGradients;
    fontSize: IFontSizes;
    fontWeight: IFontWeights;
    borderRadius: string;
    boxShadow: IBoxShadows;
    media: IMediaBreakpoints;
    zIndex: IZindexes;
    space: ISpacing;
    portfolio: IPortfolioStyle;
  }
}
