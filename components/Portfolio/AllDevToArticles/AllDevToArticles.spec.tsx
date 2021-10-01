import '../../__mocks__/intersectionObserverMock';
import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../../test/testUtils';
import AllDevToArticles from './AllDevToArticles';
import * as Styled from './AllDevToArticles.styles';
import ScrollHint from '../ScrollHint/ScrollHint';
import { store } from '../../../store';
import DevToArticle from '../DevToArticle/DevToArticle';
import '../../__mocks__/matchMedia';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<AllDevToArticles />));
};

describe('AllDevToArticles', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render greeting slide', () => {
    const firstSlide = wrap.find(Styled.FirstSlide);
    expect(firstSlide.length).toBe(1);
  });
  it('should render scroll hint', () => {
    const scrollHint = wrap.find(ScrollHint);
    expect(scrollHint.length).toBe(1);
  });
  it('should render second slide with articles', () => {
    const secondSlide = wrap.find(Styled.SecondSlide);
    expect(secondSlide.length).toBe(1);
  });

  it('should render all articles in global redux store', () => {
    const { articles } = store.getState().articles;

    const devToArticles = wrap.find(DevToArticle);

    expect(articles.length).toBe(devToArticles.length);
  });
});
