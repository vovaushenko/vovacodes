import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { UIstate } from '../../types/redux/ui-reducer-types';
import { uiReducer } from './uiReducer';
import { todosReducer } from './todosReducer';
import { TodosState } from '../../types/redux/todos-reducer-types';
import { windowsReducer } from './windowsReducer';
import { WindowsState } from '../../types/redux/windows-reducer-types';
import { likesReducer } from './likesReducer';
import { LikesState } from '../../types/redux/likes-reducer-types';
import { contactReducer } from './contactReducer';
import { ContactState } from '../../types/redux/contact-reducer-types';
import { newsReducer } from './newsReducer';
import { NewsReducerState } from '../../types/redux/news-reducer-types';
import { commentsReducer } from './commentsReducer';
import { CommentsState } from '../../types/redux/comments-reducer-types';
import { articlesReducer } from './articlesReducer';
import { ArticlesReducerState } from '../../types/redux/articles-reducer-types';

export const rootReducer = combineReducers({
  ui: uiReducer,
  todos: todosReducer,
  windows: windowsReducer,
  likes: likesReducer,
  contact: contactReducer,
  news: newsReducer,
  comments: commentsReducer,
  articles: articlesReducer,
});

export type State = {
  ui: UIstate;
  todos: TodosState;
  windows: WindowsState;
  likes: LikesState;
  contact: ContactState;
  news: NewsReducerState;
  comments: CommentsState;
  articles: ArticlesReducerState;
};

// https://stackoverflow.com/questions/64139344/how-to-use-typescript-next-redux-wrapper-getserversideprops
// https://github.com/vercel/next.js/tree/canary/examples/with-redux-wrapper  example of implementation redux with server-side rendering
export const reducer = (state: State | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof reducer>;
export type LocalRootState = ReturnType<typeof rootReducer>;
