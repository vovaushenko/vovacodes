import {
  TodosAction,
  TodosActionTypes,
  TodosState,
} from '../../types/redux/todos-reducer-types';

const initialTodoState: TodosState = {
  todos: [],
};

/**
 *@function todosReducer
 *@param {TodosState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

export const todosReducer = (
  state = initialTodoState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case TodosActionTypes.MARK_TODO_COMPLETED:
      const withoutCompleted = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isCompleted: true } : todo
      );
      return { ...state, todos: withoutCompleted };

    case TodosActionTypes.MARK_TODO_HIGHLIGHTED:
      const withNewHighlighted = state.todos.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isHighlighted: !todo.isHighlighted,
            }
          : todo
      );
      return { ...state, todos: withNewHighlighted };

    case TodosActionTypes.DELETE_TODO:
      const withoutDeleted = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: withoutDeleted };

    default:
      return state;
  }
};
