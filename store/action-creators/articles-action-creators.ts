import { Dispatch } from 'redux';
import {
  ArticleSortingOption,
  ArticlesReducerAction,
  ArticlesReducerActionTypes,
} from '../../types/redux/articles-reducer-types';
import { getAllLatestArticles } from '../../frontend-rest-client/rest/articles';

/**
 *@EXPORTS article-reducer action creators and thunks
 */

export {
  loadLatestArticles,
  addFilterOption,
  removeFilterOption,
  applySortingOption,
};

/**
 *@Action creator, will dispatch action to fetch latest articles from DEV_TO https://dev.to/api/articles/me/published, also will dispatch error action if async operation fails
 *@function loadLatestArticles
 *@returns {function} - Redux thunk function
 */
const loadLatestArticles = () => {
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

/**
 *@Action creator, will dispatch action to add new filter option, thereby applying filtering to the list of all articles
 *@function addFilterOption
 *@returns {function} - Redux thunk function
 */

const addFilterOption = (filterOption: string): ArticlesReducerAction => ({
  type: ArticlesReducerActionTypes.ADD_FILTER_OPTION,
  payload: filterOption,
});
/**
 *@Action creator, will dispatch action to remove a filter option from the list of global filter options
 *@function addFilterOption
 *@returns {function} - Redux thunk function
 */

const removeFilterOption = (filterOption: string): ArticlesReducerAction => ({
  type: ArticlesReducerActionTypes.REMOVE_FILTER_OPTION,
  payload: filterOption,
});

/**
 *@Action creator, will dispatch action to add new sorting option, thereby applying sorting to the list of all articles
 *@function addFilterOption
 *@returns {function} - Redux thunk function
 */

const applySortingOption = (
  sortingOption: ArticleSortingOption
): ArticlesReducerAction => ({
  type: ArticlesReducerActionTypes.APPLY_SORTING_PARAM,
  payload: sortingOption,
});
