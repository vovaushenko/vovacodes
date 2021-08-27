import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import SliderControl, { Props } from './SliderControl';
import { FiChevronRight, FiSun, FiVolume2 } from 'react-icons/fi';
import * as Styled from './SliderControl.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (props: Props) => {
  return mount(withReduxAndStyledProviders(<SliderControl {...props} />));
};

describe('SliderControl', () => {
  describe('Voice control variant', () => {
    const wrap = setup({ variant: 'voiceControl', withChevron: false });

    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render volume icon', () => {
      const volumeIcon = wrap.find(FiVolume2);
      expect(volumeIcon.length).toBe(1);
    });
    it('should render range input', () => {
      const rangeInput = wrap.find(Styled.Input);
      expect(rangeInput.length).toBe(1);
    });
    it('should NOT render chevron', () => {
      const chevron = wrap.find(FiChevronRight);
      expect(chevron.length).toBe(0);
    });
  });

  describe('Brightness control variant with chevron', () => {
    const wrap = setup({ variant: 'brightnessControl', withChevron: true });
    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });
    it('should render brightness icon', () => {
      const brightnessIcon = wrap.find(FiSun);
      expect(brightnessIcon.length).toBe(1);
    });

    it('should NOT render volume icon', () => {
      const volumeIcon = wrap.find(FiVolume2);
      expect(volumeIcon.length).toBe(0);
    });
    it('should render range input', () => {
      const rangeInput = wrap.find(Styled.Input);
      expect(rangeInput.length).toBe(1);
    });
    it('should  render chevron', () => {
      const chevron = wrap.find(FiChevronRight);
      expect(chevron.length).toBe(1);
    });
  });
});
