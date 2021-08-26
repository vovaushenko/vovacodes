import {
  UIaction,
  UIactionTypes,
  UIstate,
} from '../../types/redux/ui-reducer-types';

const initialUIstate: UIstate = {
  theme: 'dark',
  isWidgetOpen: false,
  isSearchOpen: false,
  areSettingsOpen: false,
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
    case UIactionTypes.CHANGE_THEME:
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { ...state, theme: newTheme };

    case UIactionTypes.OPEN_WIDGETS_MODAL:
      return {
        ...state,
        isWidgetOpen: true,
        isSearchOpen: false,
        areSettingsOpen: false,
      };

    case UIactionTypes.CLOSE_WIDGETS_MODAL:
      return { ...state, isWidgetOpen: false };

    case UIactionTypes.OPEN_SEARCH_MODAL:
      return {
        ...state,
        isSearchOpen: true,
        isWidgetOpen: false,
        areSettingsOpen: false,
      };

    case UIactionTypes.CLOSE_SEARCH_MODAL:
      return { ...state, isSearchOpen: false };

    case UIactionTypes.OPEN_SETTINGS_MODAL:
      return {
        ...state,
        areSettingsOpen: true,
        isSearchOpen: false,
        isWidgetOpen: false,
      };

    case UIactionTypes.CLOSE_SETTINGS_MODAL:
      return { ...state, areSettingsOpen: false };

    default:
      return state;
  }
};
