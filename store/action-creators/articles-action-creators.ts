import { Dispatch } from 'redux';
import {
  ArticlesReducerAction,
  ArticlesReducerActionTypes,
} from '../../types/redux/articles-reducer-types';
import { getAllLatestArticles } from '../../frontend-rest-client/rest/articles';

/**
 *@Action creator, will dispatch action to fetch latest articles from DEV_TO https://dev.to/api/articles/me/published, also will dispatch error action if async operation fails
 *@function loadLatestArticles
 *@returns {function} - Redux thunk function
 */
export const loadLatestArticles = () => {
  return async (dispatch: Dispatch<ArticlesReducerAction>): Promise<void> => {
    dispatch({ type: ArticlesReducerActionTypes.LOAD_DEV_TO_ARTICLES });
    try {
      const { data } = await getAllLatestArticles();
      dispatch({
        type: ArticlesReducerActionTypes.DEV_TO_ARTICLES_DID_LOAD,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ArticlesReducerActionTypes.DEV_TO_ARTICLES_LOAD_ERROR,
        payload: error.response,
      });
    }
  };
};
