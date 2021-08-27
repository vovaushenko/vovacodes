import { shallow } from 'enzyme';
import React from 'react';
import DesktopButton from '../DesktopButton/DesktopButton';

import Recommended from './Recommended';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Recommended />);
};

describe('Recommended', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all recommended apps', () => {
    const recommendedApp = wrap.find(DesktopButton);
    expect(recommendedApp.length).toBe(6);
  });
});
