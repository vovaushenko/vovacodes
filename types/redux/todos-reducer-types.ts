export interface Todo {
  id: string;
  todoText: string;
  isCompleted: boolean;
  isHighlighted: boolean;
}

export interface TodosState {
  todos: Todo[];
}

export enum TodosActionTypes {
  ADD_TODO = 'ADD_TODO',
  MARK_TODO_COMPLETED = 'MARK_TODO_COMPLETED',
  MARK_TODO_HIGHLIGHTED = 'MARK_TODO_HIGHLIGHTED',
  DELETE_TODO = 'DELETE_TODO',
}

export type TodosAction =
  | { type: TodosActionTypes.ADD_TODO; payload: Todo }
  | { type: TodosActionTypes.MARK_TODO_COMPLETED; payload: string }
  | { type: TodosActionTypes.MARK_TODO_HIGHLIGHTED; payload: string }
  | { type: TodosActionTypes.DELETE_TODO; payload: string };
