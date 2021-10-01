import {
  ArticlesReducerAction,
  ArticlesReducerActionTypes,
  ArticlesReducerState,
} from '../../types/redux/articles-reducer-types';

const initialNewsState: ArticlesReducerState = {
  articles: [],
  areArticlesLoading: false,
  filterOptions: [],
  sortArticlesBy: 'date',
  error: null,
};

/**
 *@function articlesReducer
 *@param {initialNewsState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new articles state
 */

export const articlesReducer = (
  state = initialNewsState,
  action: ArticlesReducerAction
): ArticlesReducerState => {
  switch (action.type) {
    case ArticlesReducerActionTypes.LOAD_DEV_TO_ARTICLES:
      return { ...state, areArticlesLoading: true };

    case ArticlesReducerActionTypes.DEV_TO_ARTICLES_DID_LOAD:
      return { ...state, areArticlesLoading: false, articles: action.payload };

    case ArticlesReducerActionTypes.DEV_TO_ARTICLES_LOAD_ERROR:
      return { ...state, areArticlesLoading: false, error: action.payload };

    case ArticlesReducerActionTypes.ADD_FILTER_OPTION:
      return {
        ...state,
        filterOptions: [...state.filterOptions, action.payload],
      };

    case ArticlesReducerActionTypes.APPLY_SORTING_PARAM:
      return { ...state, sortArticlesBy: action.payload };

    case ArticlesReducerActionTypes.CLEAR_ARTICLES_STATE:
      return initialNewsState;

    default:
      return state;
  }
};
