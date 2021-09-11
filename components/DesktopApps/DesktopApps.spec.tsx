import { shallow } from 'enzyme';
import React from 'react';
import DesktopApps from './DesktopApps';
import * as Styled from './DesktopApps.styles';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<DesktopApps />);
};

describe('DesktopApps', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render list with apps', () => {
    const list = wrap.find(Styled.UL);
    expect(list.length).toBe(1);
  });
  it('should render correct number of desktop apps', () => {
    const desktopApps = wrap.find(DesktopButton);
    expect(desktopApps.length).toBe(8);
  });
});
