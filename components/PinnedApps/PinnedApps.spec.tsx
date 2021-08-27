import { shallow } from 'enzyme';
import React from 'react';

import PinnedApps from './PinnedApps';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<PinnedApps />);
};

describe('PinnedApps', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all specified pinned apps', () => {
    const pinnedApp = wrap.find(DesktopButton);
    expect(pinnedApp.length).toBe(18);
  });
});
