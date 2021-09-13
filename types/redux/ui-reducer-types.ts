export interface UIstate {
  theme: 'dark' | 'light';
  isWidgetOpen: boolean;
  isAppCenterOpen: boolean;
  areSettingsOpen: boolean;
  isSearchOpen: boolean;
  isInNightLightMode: boolean;
  screenBrightness: string;
}

export enum UIactionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
  THEME_WAS_CHANGED = 'THEME_WAS_CHANGED',

  OPEN_WIDGETS_MODAL = 'OPEN_WIDGETS_MODAL',
  CLOSE_WIDGETS_MODAL = 'CLOSE_WIDGETS_MODAL',

  OPEN_APP_CENTER_MODAL = 'OPEN_APP_CENTER_MODAL',
  CLOSE_APP_CENTER_MODAL = 'CLOSE_APP_CENTER_MODAL',

  OPEN_SETTINGS_MODAL = 'OPEN_SETTINGS_MODAL',
  CLOSE_SETTINGS_MODAL = 'CLOSE_SETTINGS_MODAL',

  OPEN_SEARCH_MODAL = 'OPEN_SEARCH_MODAL',
  CLOSE_SEARCH_MODAL = 'CLOSE_SEARCH_MODAL',

  TURN_ON_NIGHT_MODE = 'TURN_ON_NIGHT_MODE',
  TURN_OFF_NIGHT_MODE = 'TURN_OFF_NIGHT_MODE',

  CHANGE_BRIGHTNESS = 'CHANGE_BRIGHTNESS',
}

export type UIaction =
  | { type: UIactionTypes.CHANGE_THEME }
  | { type: UIactionTypes.THEME_WAS_CHANGED }
  | { type: UIactionTypes.OPEN_WIDGETS_MODAL }
  | { type: UIactionTypes.CLOSE_WIDGETS_MODAL }
  | { type: UIactionTypes.OPEN_APP_CENTER_MODAL }
  | { type: UIactionTypes.CLOSE_APP_CENTER_MODAL }
  | { type: UIactionTypes.OPEN_SETTINGS_MODAL }
  | { type: UIactionTypes.CLOSE_SETTINGS_MODAL }
  | { type: UIactionTypes.OPEN_SEARCH_MODAL }
  | { type: UIactionTypes.CLOSE_SEARCH_MODAL }
  | { type: UIactionTypes.TURN_ON_NIGHT_MODE }
  | { type: UIactionTypes.TURN_OFF_NIGHT_MODE }
  | { type: UIactionTypes.CHANGE_BRIGHTNESS; payload: string };
