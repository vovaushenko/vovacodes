/**
 * Interface for https://newsapi.org/v2/ API Response
 */
export interface INewsApiResponse {
  status: string;
  totalResults: number;
  articles: INewsArticle[];
}

/**
 * Interface for https://newsapi.org/v2/ news article
 */
export interface INewsArticle {
  source: {
    id: null | string;
    name: string;
  };
  author: null | string;
  title: null | string;
  description: null | string;
  url: null | string;
  urlToImage: null | string;
  publishedAt: string;
  content: null | string;
}

export interface NewsReducerState {
  newsArticles: INewsArticle[];
  areNewsLoading: boolean;
  error: null | string;
}

export enum NewsReducerActionTypes {
  LOAD_NEWS_ARTICLES = 'LOAD_NEWS_ARTICLES',
  NEWS_ARTICLES_DID_LOAD = 'NEWS_ARTICLES_DID_LOAD',
  NEWS_ARTICLES_LOAD_ERROR = 'NEWS_ARTICLES_LOAD_ERROR',
  CLEAR_NEWS_STATE = 'CLEAR_NEWS_STATE',
}

export type NewsReducerAction =
  | { type: NewsReducerActionTypes.LOAD_NEWS_ARTICLES }
  | {
      type: NewsReducerActionTypes.NEWS_ARTICLES_DID_LOAD;
      payload: INewsArticle[];
    }
  | { type: NewsReducerActionTypes.NEWS_ARTICLES_LOAD_ERROR; payload: string }
  | { type: NewsReducerActionTypes.CLEAR_NEWS_STATE };
