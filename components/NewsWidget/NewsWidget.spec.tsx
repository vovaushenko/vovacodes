import { mount } from 'enzyme';
import React from 'react';
import NewsWidget, { Props } from './NewsWidget';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import Paragraph from '../Typography/Paragraph/Paragraph';
import * as Styled from './NewsWidget.styles';
import Button from '../Button/Button';
import { More } from '../WidgetCard/WidgetCard.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const mockProps: Props = {
  newsHeader: '🍌 Bananas are cool 🍌',
  newsSource: 'BBC',
  newsLink: 'https://bbc.com',
  backgroundImg: '/banana/banana.img',
  cardGradientColor: 'rgb(7, 7, 7)',
};

const setup = () => {
  return mount(withReduxAndStyledProviders(<NewsWidget {...mockProps} />));
};

describe('NewsWidget', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct news Source', () => {
    const source = wrap.find(Paragraph);
    expect(source.text()).toBe(mockProps.newsSource);
  });
  it('should render correct news Header', () => {
    const newsHeader = wrap.find(Styled.NewsHeader);
    expect(newsHeader.text()).toBe(mockProps.newsHeader);
  });
  it('should render correct news Header link', () => {
    const newsHeader = wrap.find(Styled.NewsHeader);
    expect(newsHeader.prop('href')).toBe(mockProps.newsLink);
  });
  it('should render like button', () => {
    const hitLike = wrap.find(Button);
    expect(hitLike.length).toBe(1);
  });
  it('should render two MORE action buttons', () => {
    const moreBtn = wrap.find(More);
    expect(moreBtn.length).toBe(2);
  });
});
