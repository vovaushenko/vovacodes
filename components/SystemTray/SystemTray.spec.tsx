import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import SystemTray from './SystemTray';
import DesktopButton from '../DesktopButton/DesktopButton';
import Taskbar from '../Taskbar/Taskbar';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<SystemTray />));
};

describe('SystemTray', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all specified tray buttons', () => {
    const trayBtn = wrap.find(DesktopButton);
    expect(trayBtn.length).toBe(31);
  });

  it('should render Taskbar', () => {
    const taskbar = wrap.find(Taskbar);
    expect(taskbar.length).toBe(1);
  });
});
