import {
  UIaction,
  UIactionTypes,
  UIstate,
} from '../../types/redux/ui-reducer-types';

const initialUIstate: UIstate = {
  theme: 'dark',
  screenBrightness: '100',
  isWidgetOpen: false,
  isAppCenterOpen: false,
  areSettingsOpen: false,
  isSearchOpen: false,
  isInNightLightMode: false,
  shouldIntroBeShown: true,
};

/**
 *@function uiReducer
 *@param {UIstate} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

export const uiReducer = (
  state = initialUIstate,
  action: UIaction
): UIstate => {
  switch (action.type) {
    case UIactionTypes.INTRO_WAS_SHOWN:
      return { ...state, shouldIntroBeShown: false };

    case UIactionTypes.CHANGE_THEME:
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { ...state, theme: newTheme };

    case UIactionTypes.OPEN_WIDGETS_MODAL:
      return {
        ...state,
        isWidgetOpen: true,
        isAppCenterOpen: false,
        areSettingsOpen: false,
        isSearchOpen: false,
      };

    case UIactionTypes.CLOSE_WIDGETS_MODAL:
      return { ...state, isWidgetOpen: false };

    case UIactionTypes.OPEN_APP_CENTER_MODAL:
      return {
        ...state,
        isAppCenterOpen: true,
        isWidgetOpen: false,
        areSettingsOpen: false,
        isSearchOpen: false,
      };

    case UIactionTypes.CLOSE_APP_CENTER_MODAL:
      return { ...state, isAppCenterOpen: false };

    case UIactionTypes.OPEN_SETTINGS_MODAL:
      return {
        ...state,
        areSettingsOpen: true,
        isAppCenterOpen: false,
        isWidgetOpen: false,
        isSearchOpen: false,
      };

    case UIactionTypes.CLOSE_SETTINGS_MODAL:
      return { ...state, areSettingsOpen: false };

    case UIactionTypes.OPEN_SEARCH_MODAL:
      return {
        ...state,
        isSearchOpen: true,
        areSettingsOpen: false,
        isAppCenterOpen: false,
        isWidgetOpen: false,
      };

    case UIactionTypes.CLOSE_SEARCH_MODAL:
      return { ...state, isSearchOpen: false };

    case UIactionTypes.TURN_ON_NIGHT_MODE:
      return { ...state, isInNightLightMode: true };

    case UIactionTypes.TURN_OFF_NIGHT_MODE:
      return { ...state, isInNightLightMode: false };

    case UIactionTypes.CHANGE_BRIGHTNESS:
      return { ...state, screenBrightness: action.payload };

    default:
      return state;
  }
};
