import { Dispatch } from 'redux';
import {
  IWindow,
  WindowsAction,
  WindowsActionTypes,
} from '../../types/redux/windows-reducer-types';

/**
 *@Action creator, will dispatch action to add new window to the list of opened windows, thereby rendering it on the screen
 *@function openWindow
 *@param {IWindow} windowParams - window params
 *@returns {function} - Redux thunk function
 */

export const openWindow = (windowParams: IWindow) => {
  return async (dispatch: Dispatch<WindowsAction>): Promise<void> => {
    dispatch({ type: WindowsActionTypes.OPEN_WINDOW, payload: windowParams });
  };
};

/**
 *@Action creator, will sequentially dispatch actions to close a window and to remove a window from the list of opened windows, thereby removing it from the screen
 * We firstly dispatch CLOSE_WINDOW - to set isClosed window param to false and trigger un-mount animation
 * Next CLEAR_CLOSED_WINDOWS will be dispatched after delay to delete unmounted window from the global list of opened windows
 *@function closeOpenedWindow
 *@param {string} windowName - name of window to be closed
 *@returns {function} - Redux thunk function
 */
export const closeOpenedWindow = (windowName: string) => {
  return async (dispatch: Dispatch<WindowsAction>): Promise<void> => {
    dispatch({
      type: WindowsActionTypes.CLOSE_WINDOW,
      payload: windowName,
    });

    setTimeout(
      () =>
        dispatch({
          type: WindowsActionTypes.CLEAR_CLOSED_WINDOWS,
          payload: windowName,
        }),
      1000
    );
  };
};
