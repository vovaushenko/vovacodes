import {
  Todo,
  TodosAction,
  TodosActionTypes,
  TodosState,
} from '../../../types/redux/todos-reducer-types';
import { todosReducer } from '../todosReducer';

const initialState: TodosState = {
  todos: [],
};

const mockTodo: Todo = {
  id: '1',
  todoText: 'EAT NUTRITIOUS TOMATO 🍅🍅🍅',
  isCompleted: false,
  isHighlighted: false,
};

describe('Todos Reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = todosReducer(undefined, {} as TodosAction);
    expect(newState).toStrictEqual(initialState);
  });

  test('correctly adds todo on ADD_TODO', () => {
    const newState = todosReducer(initialState, {
      type: TodosActionTypes.ADD_TODO,
      payload: mockTodo,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      todos: [mockTodo],
    });
  });
  test('correctly deletes todo on DELETE_TODO', () => {
    const newState = todosReducer(initialState, {
      type: TodosActionTypes.DELETE_TODO,
      payload: '1',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      todos: [],
    });
  });
});
