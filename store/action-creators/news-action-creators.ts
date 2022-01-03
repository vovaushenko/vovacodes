import { Dispatch } from 'redux';
import {
  NewsReducerAction,
  NewsReducerActionTypes,
} from '../../types/redux/news-reducer-types';
import { getLatestNews } from '../../frontend-rest-client/rest/news';
import { getErrorMessage } from '../../utils/getErrorMessage';

/**
 *@Action creator, will dispatch action to fetch latest news from NEWS_API https://newsapi.org/v2/, also will dispatch error action if async operation fails
 *@function loadLatestNews
 *@returns {function} - Redux thunk function
 */
export const loadLatestNews = () => {
  return async (dispatch: Dispatch<NewsReducerAction>): Promise<void> => {
    dispatch({ type: NewsReducerActionTypes.LOAD_NEWS_ARTICLES });
    try {
      const { data } = await getLatestNews();
      dispatch({
        type: NewsReducerActionTypes.NEWS_ARTICLES_DID_LOAD,
        payload: data.articles,
      });
    } catch (error) {
      dispatch({
        type: NewsReducerActionTypes.NEWS_ARTICLES_LOAD_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};
