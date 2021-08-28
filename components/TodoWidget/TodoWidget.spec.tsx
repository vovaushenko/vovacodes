import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import TodoWidget from './TodoWidget';
import * as Styled from './TodoWidget.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<TodoWidget />));
};

describe('TodoWidget', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render MyDay section', () => {
    const myDay = wrap.find(Styled.MyDay);
    expect(myDay.length).toBe(1);
  });
  it('should NOT should show form', () => {
    const todoForm = wrap.find(Styled.Form);
    expect(todoForm.length).toBe(0);
  });
  it('should render todo list', () => {
    const todoList = wrap.find(Styled.TodoList);
    expect(todoList.length).toBe(1);
  });

  it('should render 0 todos for initial state', () => {
    const todo = wrap.find(Styled.Todo);
    expect(todo.length).toBe(0);
  });
});
