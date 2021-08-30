import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import OpenedWindows from './OpenedWindows';
import Window from '../Window/Window';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<OpenedWindows />));
};

describe('OpenedWindows', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render no windows for initial state', () => {
    const window = wrap.find(Window);
    expect(window.length).toBe(0);
  });
});
