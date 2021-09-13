import { shallow } from 'enzyme';
import React from 'react';
import SettingsButton, { Props } from './SettingsButton';
import * as Styled from './SettingsButton.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import { FiChevronRight } from 'react-icons/fi';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (props: Props) => {
  return shallow(<SettingsButton {...props}>TOMATO</SettingsButton>);
};

describe('SettingsButton', () => {
  describe('In-active button state', () => {
    const wrap = setup({
      variant: 'icon',
      text: 'TOMATO',
      isTurnedOn: false,
      btnAction: null,
    });

    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render correct button content', () => {
      const btn = wrap.find(Styled.Button);
      expect(btn.text()).toBe('TOMATO');
    });

    it('should render correct text under button', () => {
      const text = wrap.find(Paragraph);
      expect(text.length).toBe(1);
    });

    it('should NOT render chevron if button is inactive', () => {
      const chevron = wrap.find(FiChevronRight);
      expect(chevron.length).toBe(0);
    });
  });

  describe('ACTIVE button state', () => {
    const wrap = setup({
      variant: 'action',
      text: 'TOMATO',
      isTurnedOn: true,
      btnAction: null,
    });

    it('should render button content', () => {
      const btn = wrap.find(Styled.Button);
      expect(btn.text()).toBe('TOMATO<FiChevronRight />');
    });

    it('should render correct text under button', () => {
      const text = wrap.find(Paragraph);
      expect(text.length).toBe(1);
    });

    it('should render chevron if button is active', () => {
      const chevron = wrap.find(FiChevronRight);
      expect(chevron.length).toBe(1);
    });
  });
});
