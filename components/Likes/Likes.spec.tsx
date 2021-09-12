import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import Likes from './Likes';
import * as Styled from './Likes.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<Likes />));
};

describe('Likes', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render greeting message', () => {
    const msg = wrap.find(Styled.Message);
    expect(msg.text()).toBe(`👋 Hey! Let‘s count us.`);
  });
  it('should render like counter', () => {
    const likeCount = wrap.find(Styled.LikeCounter);
    expect(likeCount.length).toBe(1);
  });
  it('should render action button', () => {
    const actionBtn = wrap.find(Styled.LikeCounter);
    expect(actionBtn.length).toBe(1);
  });
});
