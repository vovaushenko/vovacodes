import {
  NewsReducerAction,
  NewsReducerActionTypes,
  NewsReducerState,
} from '../../types/redux/news-reducer-types';

const initialNewsState: NewsReducerState = {
  areNewsLoading: false,
  newsArticles: [],
  error: null,
};

/**
 *@function newsReducer
 *@param {initialNewsState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new news state
 */

export const newsReducer = (
  state = initialNewsState,
  action: NewsReducerAction
): NewsReducerState => {
  switch (action.type) {
    case NewsReducerActionTypes.LOAD_NEWS_ARTICLES:
      return { ...state, areNewsLoading: true };

    case NewsReducerActionTypes.NEWS_ARTICLES_DID_LOAD:
      return { ...state, areNewsLoading: false, newsArticles: action.payload };

    case NewsReducerActionTypes.NEWS_ARTICLES_LOAD_ERROR:
      return { ...state, areNewsLoading: false, error: action.payload };

    case NewsReducerActionTypes.CLEAR_NEWS_STATE:
      return initialNewsState;

    default:
      return state;
  }
};
