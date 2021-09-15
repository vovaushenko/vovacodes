import {
  WindowsAction,
  WindowsActionTypes,
  WindowsState,
} from '../../types/redux/windows-reducer-types';

const initialWindowsState: WindowsState = {
  openedWindows: [],
};

/**
 *@function windowsReducer
 *@param {WindowsState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

export const windowsReducer = (
  state = initialWindowsState,
  action: WindowsAction
): WindowsState => {
  switch (action.type) {
    case WindowsActionTypes.OPEN_WINDOW:
      const windowIsAlreadyOpened = state.openedWindows.some(
        (window) => window.windowName === action.payload.windowName
      );
      if (windowIsAlreadyOpened) return state;
      return {
        ...state,
        openedWindows: [...state.openedWindows, action.payload],
      };

    case WindowsActionTypes.CLOSE_WINDOW:
      const withoutClosedWindow = state.openedWindows.map((window) =>
        window.windowName === action.payload
          ? {
              ...window,
              isOpen: false,
            }
          : window
      );
      return { ...state, openedWindows: withoutClosedWindow };

    case WindowsActionTypes.CLEAR_CLOSED_WINDOWS:
      const withoutRemovedWindows = state.openedWindows.filter(
        (window) => window.windowName !== action.payload
      );

      return { ...state, openedWindows: withoutRemovedWindows };

    default:
      return state;
  }
};
