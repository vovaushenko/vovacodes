import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import SettingsModalContent from './SettingsModalContent';
import SettingsButton from '../SettingsButton/SettingsButton';
import SliderControl from '../SliderControl/SliderControl';
import { FiBattery, FiSettings } from 'react-icons/fi';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<SettingsModalContent />));
};

describe('SettingsModalContent', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all control buttons', () => {
    const settingsButton = wrap.find(SettingsButton);
    expect(settingsButton.length).toBe(6);
  });

  it('should render slider controls', () => {
    const sliders = wrap.find(SliderControl);
    expect(sliders.length).toBe(2);
  });

  it('should render battery state', () => {
    const battery = wrap.find(FiBattery);
    expect(battery.length).toBe(1);
  });
  it('should render settings', () => {
    const setting = wrap.find(FiSettings);
    expect(setting.length).toBe(1);
  });
});
