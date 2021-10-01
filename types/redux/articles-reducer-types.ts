/**
 * Interface of dev.to article
 */
export interface IDevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  slug: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  page_views_count: number;
  cover_image: string;
  tag_list: string[];
}

/**
 * Interface of dev.to  API Response
 */
export type DevToApiResponse = Array<IDevToArticle>;

export type ArticleSortingOption = 'date' | 'likes' | 'views';

export interface ArticlesReducerState {
  articles: IDevToArticle[];
  areArticlesLoading: boolean;
  filterOptions: string[];
  sortArticlesBy: ArticleSortingOption;
  error: null | string;
}

export enum ArticlesReducerActionTypes {
  LOAD_DEV_TO_ARTICLES = 'LOAD_DEV_TO_ARTICLES',
  DEV_TO_ARTICLES_DID_LOAD = 'DEV_TO_ARTICLES_DID_LOAD',
  DEV_TO_ARTICLES_LOAD_ERROR = 'DEV_TO_ARTICLES_LOAD_ERROR',
  CLEAR_ARTICLES_STATE = 'CLEAR_ARTICLES_STATE',
  ADD_FILTER_OPTION = 'ADD_FILTER_OPTION',
  REMOVE_FILTER_OPTION = 'REMOVE_FILTER_OPTION',
  APPLY_SORTING_PARAM = 'APPLY_SORTING_PARAM',
}

export type ArticlesReducerAction =
  | { type: ArticlesReducerActionTypes.LOAD_DEV_TO_ARTICLES }
  | {
      type: ArticlesReducerActionTypes.DEV_TO_ARTICLES_DID_LOAD;
      payload: IDevToArticle[];
    }
  | {
      type: ArticlesReducerActionTypes.DEV_TO_ARTICLES_LOAD_ERROR;
      payload: string;
    }
  | { type: ArticlesReducerActionTypes.CLEAR_ARTICLES_STATE }
  | { type: ArticlesReducerActionTypes.ADD_FILTER_OPTION; payload: string }
  | { type: ArticlesReducerActionTypes.REMOVE_FILTER_OPTION; payload: string }
  | {
      type: ArticlesReducerActionTypes.APPLY_SORTING_PARAM;
      payload: ArticleSortingOption;
    };
