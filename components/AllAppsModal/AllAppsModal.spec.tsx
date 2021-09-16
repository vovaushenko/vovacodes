import { shallow } from 'enzyme';
import React from 'react';

import AllAppsModal from './AllAppsModal';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<AllAppsModal />);
};

describe('AllAppsModal', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render list of all apps', () => {
    const pinnedApp = wrap.find(DesktopButton);
    expect(pinnedApp.length).toBe(18);
  });
});
