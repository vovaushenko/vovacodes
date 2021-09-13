import { Dispatch } from 'redux';
import { UIaction, UIactionTypes } from '../../types/redux/ui-reducer-types';
import { State } from '../reducers';

/**
 *@UI async action creator, will dispatch action to change color theme and persist this change to localStorage
 *@function changeTheme
 *@returns {function} - Redux thunk function
 */
export const changeTheme = () => {
  return async (
    dispatch: Dispatch<UIaction>,
    getState: () => State
  ): Promise<void> => {
    dispatch({ type: UIactionTypes.CHANGE_THEME });

    localStorage.setItem('theme', getState().ui.theme);

    dispatch({ type: UIactionTypes.THEME_WAS_CHANGED });
  };
};
/**
 *@UI async action creator, will dispatch action to open/close sliding modal
 *@function toggleWidgetsModal
 *@returns {function} - Redux thunk function
 */
export const toggleWidgetsModal = () => {
  return async (
    dispatch: Dispatch<UIaction>,
    getState: () => State
  ): Promise<void> => {
    const { isWidgetOpen } = getState().ui;

    if (isWidgetOpen === false) {
      dispatch({ type: UIactionTypes.OPEN_WIDGETS_MODAL });
    } else {
      dispatch({ type: UIactionTypes.CLOSE_WIDGETS_MODAL });
    }
  };
};

/**
 *@UI async action creator, will dispatch action to open/close sliding modal
 *@function toggleAppCenterModal
 *@returns {function} - Redux thunk function
 */
export const toggleAppCenterModal = () => {
  return async (
    dispatch: Dispatch<UIaction>,
    getState: () => State
  ): Promise<void> => {
    const { isAppCenterOpen } = getState().ui;

    if (isAppCenterOpen === false) {
      dispatch({ type: UIactionTypes.OPEN_APP_CENTER_MODAL });
    } else {
      dispatch({ type: UIactionTypes.CLOSE_APP_CENTER_MODAL });
    }
  };
};

/**
 *@UI async action creator, will dispatch action to open/close sliding modal
 *@function toggleSettingsModal
 *@returns {function} - Redux thunk function
 */
export const toggleSettingsModal = () => {
  return async (
    dispatch: Dispatch<UIaction>,
    getState: () => State
  ): Promise<void> => {
    const { areSettingsOpen } = getState().ui;

    if (areSettingsOpen === false) {
      dispatch({ type: UIactionTypes.OPEN_SETTINGS_MODAL });
    } else {
      dispatch({ type: UIactionTypes.CLOSE_SETTINGS_MODAL });
    }
  };
};

/**
 *@UI async action creator, will dispatch action to open/close sliding modal
 *@function toggleSearchModal
 *@returns {function} - Redux thunk function
 */
export const toggleSearchModal = () => {
  return async (
    dispatch: Dispatch<UIaction>,
    getState: () => State
  ): Promise<void> => {
    const { isSearchOpen } = getState().ui;

    if (isSearchOpen === false) {
      dispatch({ type: UIactionTypes.OPEN_SEARCH_MODAL });
    } else {
      dispatch({ type: UIactionTypes.CLOSE_SEARCH_MODAL });
    }
  };
};

/**
 *@UI async action creator, will dispatch action to toggle night light mode
 *@function toggleNightLightMode
 *@returns {function} - Redux thunk function
 */
export const toggleNightLightMode = () => {
  return async (
    dispatch: Dispatch<UIaction>,
    getState: () => State
  ): Promise<void> => {
    const { isInNightLightMode } = getState().ui;

    if (isInNightLightMode === false) {
      dispatch({ type: UIactionTypes.TURN_ON_NIGHT_MODE });
    } else {
      dispatch({ type: UIactionTypes.TURN_OFF_NIGHT_MODE });
    }
  };
};
/**
 *@UI async action creator, will dispatch action to change screen brightness
 *@function changeScreenBrightness
 *@returns {function} - Redux thunk function
 */
export const changeScreenBrightness = (brightness: string) => {
  return async (dispatch: Dispatch<UIaction>): Promise<void> => {
    dispatch({ type: UIactionTypes.CHANGE_BRIGHTNESS, payload: brightness });
  };
};
