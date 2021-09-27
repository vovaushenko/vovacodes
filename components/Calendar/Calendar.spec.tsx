import { mount } from 'enzyme';
import React from 'react';
import CalendarWidget from './Calendar';
import Calendar from 'react-calendar';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<CalendarWidget />));
};

describe('Calendar', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render React Calendar', () => {
    const calendar = wrap.find(Calendar);
    expect(calendar.length).toBe(1);
  });
});
