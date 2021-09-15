import { mount } from 'enzyme';
import React from 'react';
import WidgetsModalContent from './WidgetsModalContent';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import TodoWidget from '../TodoWidget/TodoWidget';
import NewsWidget from '../NewsWidget/NewsWidget';
import { store } from '../../store/index';
import TechWidget from '../TechWidget/TechWidget';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<WidgetsModalContent />));
};

describe('WidgetsModalContent', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render weather widget card', () => {
    const weatherCard = wrap.find(WeatherWidget);
    expect(weatherCard.length).toBe(1);
  });
  it('should render tech widget card', () => {
    const techCard = wrap.find(TechWidget);
    expect(techCard.length).toBe(1);
  });

  it('should render todo widget', () => {
    const todoWidget = wrap.find(TodoWidget);
    expect(todoWidget.length).toBe(1);
  });

  it('should render all news widgets', () => {
    const newsWidgets = wrap.find(NewsWidget);
    const { newsArticles } = store.getState().news;

    expect(newsWidgets.length).toBe(newsArticles.length);
  });
});
