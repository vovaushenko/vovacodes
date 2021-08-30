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
 *@Action creator, will dispatch action to remove window from the list of opened windows, thereby removing it from the screen
 *@function closeOpenedWindow
 *@param {string} windowName - name of window to be closed
 *@returns {function} - Redux thunk function
 */
export const closeOpenedWindow = (windowName: string) => {
  return async (dispatch: Dispatch<WindowsAction>): Promise<void> => {
    dispatch({ type: WindowsActionTypes.CLOSE_WINDOW, payload: windowName });
  };
};
