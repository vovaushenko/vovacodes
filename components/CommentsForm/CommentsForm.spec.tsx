import { mount } from 'enzyme';
import React from 'react';
import CommentsForm from './CommentsForm';
import * as Styled from './CommentsForm.styles';
import ActionButton from '../Portfolio/ActionButton/ActionButton';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<CommentsForm />));
};

describe('CommentsForm', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render greeting', () => {
    const greeting = wrap.find(Styled.TextWrapper);
    expect(greeting.length).toBe(1);
  });
  it('should render comment form', () => {
    const commentForm = wrap.find('form');
    expect(commentForm.length).toBe(1);
  });
  it('should render submit button', () => {
    const btn = wrap.find(ActionButton);
    expect(btn.length).toBe(1);
  });
});
