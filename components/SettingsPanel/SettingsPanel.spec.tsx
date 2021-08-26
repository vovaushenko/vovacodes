import { mount } from 'enzyme';
import React from 'react';
import SettingsPanel from './SettingsPanel';
import * as Styled from './SettingsPanel.styles';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<SettingsPanel />));
};

describe('SettingsPanel', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render system tray', () => {
    const tray = wrap.find(Styled.Tray);
    expect(tray.length).toBe(1);
  });

  it('should render settings section', () => {
    const settings = wrap.find(Styled.Settings);
    expect(settings.length).toBe(1);
  });
});
