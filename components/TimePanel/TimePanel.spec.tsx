import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import TimePanel from './TimePanel';
import Clock from '../Clock/Clock';
import CurrentDate from '../CurrentDate/CurrentDate';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<TimePanel />));
};

describe('Time Panel', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render clock', () => {
    const clock = wrap.find(Clock);
    expect(clock.length).toBe(1);
  });

  it('should render date', () => {
    const date = wrap.find(CurrentDate);
    expect(date.length).toBe(1);
  });
});
