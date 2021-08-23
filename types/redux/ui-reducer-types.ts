export interface UIstate {
  theme: 'dark' | 'light';
}

export enum UIactionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
  THEME_WAS_CHANGED = 'THEME_WAS_CHANGED',
}

export type UIaction =
  | { type: UIactionTypes.CHANGE_THEME }
  | { type: UIactionTypes.THEME_WAS_CHANGED };
