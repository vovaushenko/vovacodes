import {
  INewsArticle,
  NewsReducerAction,
  NewsReducerActionTypes,
  NewsReducerState,
} from '../../../types/redux/news-reducer-types';
import { newsReducer } from '../newsReducer';

const initialState: NewsReducerState = {
  areNewsLoading: false,
  newsArticles: [],
  error: null,
};
const mockNewsArticle: INewsArticle = {
  publishedAt: 'today',
  source: {
    name: '🍍 pineapple.com',
    id: '🍍',
  },
  author: 'Joe 🥑',
  urlToImage: 'someImage.png',
  url: 'url.com',
  content: '🍉 Watermelons are nutritious 🍉',
  description: '🍉🍉🍉',
  title: '🍉 Watermelons are nutritious 🍉',
};

describe('News Reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = newsReducer(undefined, {} as NewsReducerAction);
    expect(newState).toStrictEqual(initialState);
  });

  test('should set isLoading flag while fetching on LOAD_NEWS_ARTICLES', () => {
    const newState = newsReducer(initialState, {
      type: NewsReducerActionTypes.LOAD_NEWS_ARTICLES,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      areNewsLoading: true,
    });
  });

  test('should stop loading and get articles on NEWS_ARTICLES_DID_LOAD', () => {
    const newState = newsReducer(initialState, {
      type: NewsReducerActionTypes.NEWS_ARTICLES_DID_LOAD,
      payload: [mockNewsArticle],
    });

    expect(newState).toStrictEqual({
      ...initialState,
      areNewsLoading: false,
      newsArticles: [mockNewsArticle],
    });
  });

  test('should stop loading and set error on  NEWS_ARTICLES_LOAD_ERROR', () => {
    const newState = newsReducer(initialState, {
      type: NewsReducerActionTypes.NEWS_ARTICLES_LOAD_ERROR,
      payload: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      areNewsLoading: false,
      error: '🔥 HORRIBLE ERROR 🔥 YOUR COMPUTER WILL EXPLODE 🔥',
    });
  });
});
