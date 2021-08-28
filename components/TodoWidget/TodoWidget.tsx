import React, { useState } from 'react';
import * as Styled from './TodoWidget.styles';
import TextHeader from '../Typography/Header/TextHeader';
import { FiCheckCircle, FiCircle, FiEdit, FiPlusCircle } from 'react-icons/fi';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { MdStar, MdStarBorder } from 'react-icons/md';

/**
 *Renders Todo widget where user can add and delete todos
 *@function TodoWidget
 *@returns {JSX.Element} - Rendered TodoWidget component
 */
const TodoWidget = (): JSX.Element => {
  const [todoText, setTodoText] = useState('');
  const [isFormShown, setIsFormShown] = useState(false);
  const { todos } = useTypedSelector((state) => state.todos);
  const { addNewTodo, markTodoCompleted, markTodoHighlighted, deleteTodo } =
    useActions();

  const handleAddNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTodo(todoText);
    setTodoText('');
  };
  const handleHighlightTodo = (todoID: string) => markTodoHighlighted(todoID);

  const handleMarkTodoCompleted = (todoID: string) => {
    markTodoCompleted(todoID);
    // then delete after 1500ms
    setTimeout(() => {
      deleteTodo(todoID);
    }, 1500);
  };

  return (
    <Styled.Container>
      <Styled.AddTodo>
        <Styled.MyDay>
          <div className={'header-wrapper'}>
            <FiEdit className={'icon'} />
            <TextHeader margin={'0'} isBold={false}>
              My Day
            </TextHeader>
          </div>

          <FiPlusCircle
            onClick={() => setIsFormShown((prev) => !prev)}
            className={'show-form-icon'}
          />
        </Styled.MyDay>
        {isFormShown && (
          <Styled.Form onSubmit={handleAddNewTodo}>
            <Styled.TodoInput
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder={'Add New Todo'}
              autoFocus
            />
          </Styled.Form>
        )}
      </Styled.AddTodo>
      <Styled.TodoList>
        {todos.map((todo) => (
          <Styled.Todo key={todo.id}>
            {todo.isCompleted ? (
              <FiCheckCircle className={'todo-icon'} />
            ) : (
              <FiCircle
                className={'todo-icon'}
                onClick={() => handleMarkTodoCompleted(todo.id)}
              />
            )}

            <TextHeader margin={'0'} isBold={false}>
              {todo.todoText}
            </TextHeader>
            {todo.isHighlighted ? (
              <MdStar
                className={'star-icon'}
                onClick={() => handleHighlightTodo(todo.id)}
              />
            ) : (
              <MdStarBorder
                className={'star-icon'}
                onClick={() => handleHighlightTodo(todo.id)}
              />
            )}
          </Styled.Todo>
        ))}
      </Styled.TodoList>
    </Styled.Container>
  );
};

export default TodoWidget;
