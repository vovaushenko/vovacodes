import {
  TodosAction,
  TodosActionTypes,
} from '../../types/redux/todos-reducer-types';

/**
 *@Action creator, will dispatch action to add new todo to the list of existing todos
 *@function addNewTodo
 *@param {string} todoText - text content of todo
 *@returns {function} - Redux thunk function
 */
export const addNewTodo = (todoText: string): TodosAction => ({
  type: TodosActionTypes.ADD_TODO,
  payload: {
    id: String(Math.floor(Math.random() * Date.now())),
    todoText,
    isHighlighted: false,
    isCompleted: false,
  },
});
/**
 *@Action creator, will dispatch action to mark todo completed and delete it from list
 *@function markTodoCompleted
 *@param {string} todoID - id of todo
 *@returns {function} - Redux thunk function
 */
export const markTodoCompleted = (todoID: string): TodosAction => ({
  type: TodosActionTypes.MARK_TODO_COMPLETED,
  payload: todoID,
});
/**
 *@Action creator, will dispatch action to mark todo as highlighted
 *@function markTodoHighlighted
 *@param {string} todoID - id of todo
 *@returns {function} - Redux thunk function
 */
export const markTodoHighlighted = (todoID: string): TodosAction => ({
  type: TodosActionTypes.MARK_TODO_HIGHLIGHTED,
  payload: todoID,
});

/**
 *@Action creator, will dispatch action to delete todo
 *@function markTodoHighlighted
 *@param {string} todoID - id of todo
 *@returns {function} - Redux thunk function
 */
export const deleteTodo = (todoID: string): TodosAction => ({
  type: TodosActionTypes.DELETE_TODO,
  payload: todoID,
});
