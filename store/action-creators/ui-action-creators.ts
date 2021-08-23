import { Dispatch } from 'redux';
import { UIaction, UIactionTypes } from '../../types/redux/ui-reducer-types';
import { State } from '../reducers';

/**
 *@UI async action creator, will dispatch action to change color theme and persist this change to localStorage
 *@function changeTheme
 *@returns {undefined}
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
