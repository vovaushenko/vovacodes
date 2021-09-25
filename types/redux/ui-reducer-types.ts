export type IconSortVariant = 'date' | 'name' | 'size';
export type IconSize = 'small' | 'medium' | 'large';

export interface UIstate {
  theme: 'dark' | 'light';
  isWidgetOpen: boolean;
  isAppCenterOpen: boolean;
  areSettingsOpen: boolean;
  isSearchOpen: boolean;
  isInNightLightMode: boolean;
  isCalendarOpen: boolean;
  screenBrightness: string;
  shouldIntroBeShown: boolean;
  isContextMenuOpen: boolean;
  contextMenuCoords: { x: number; y: number };
  iconsSize: IconSize;
  sortDesktopIconsBy: IconSortVariant;
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

  OPEN_CALENDAR_MODAL = 'OPEN_CALENDAR_MODAL',
  CLOSE_CALENDAR_MODAL = 'CLOSE_CALENDAR_MODAL',

  TURN_ON_NIGHT_MODE = 'TURN_ON_NIGHT_MODE',
  TURN_OFF_NIGHT_MODE = 'TURN_OFF_NIGHT_MODE',

  OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU',
  CLOSE_CONTEXT_MENU = 'CLOSE_CONTEXT_MENU',

  INTRO_WAS_SHOWN = 'INTRO_WAS_SHOWN',

  SORT_DESKTOP_ICONS = 'SORT_DESKTOP_ICONS',

  CHANGE_ICON_SIZE = 'CHANGE_ICON_SIZE',

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
  | { type: UIactionTypes.CHANGE_BRIGHTNESS; payload: string }
  | { type: UIactionTypes.INTRO_WAS_SHOWN }
  | { type: UIactionTypes.OPEN_CALENDAR_MODAL }
  | { type: UIactionTypes.CLOSE_CALENDAR_MODAL }
  | { type: UIactionTypes.OPEN_CONTEXT_MENU; payload: { x: number; y: number } }
  | { type: UIactionTypes.CLOSE_CONTEXT_MENU }
  | {
      type: UIactionTypes.SORT_DESKTOP_ICONS;
      payload: IconSortVariant;
    }
  | { type: UIactionTypes.CHANGE_ICON_SIZE; payload: IconSize };
