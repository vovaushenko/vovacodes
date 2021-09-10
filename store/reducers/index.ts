import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { UIstate } from '../../types/redux/ui-reducer-types';
import { testReducer, TestState } from './testReducer';
import { uiReducer } from './uiReducer';
import { todosReducer } from './todosReducer';
import { TodosState } from '../../types/redux/todos-reducer-types';
import { windowsReducer } from './windowsReducer';
import { WindowsState } from '../../types/redux/windows-reducer-types';
import { likesReducer } from './likesReducer';
import { LikesState } from '../../types/redux/likes-reducer-types';
import { contactReducer } from './contactReducer';
import { ContactState } from '../../types/redux/contact-reducer-types';

const rootReducer = combineReducers({
  test: testReducer,
  ui: uiReducer,
  todos: todosReducer,
  windows: windowsReducer,
  likes: likesReducer,
  contact: contactReducer,
});

export type State = {
  test: TestState;
  ui: UIstate;
  todos: TodosState;
  windows: WindowsState;
  likes: LikesState;
  contact: ContactState;
};

// https://stackoverflow.com/questions/64139344/how-to-use-typescript-next-redux-wrapper-getserversideprops

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
