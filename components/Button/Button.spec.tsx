import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';
import { FiChevronRight } from 'react-icons/fi';
import * as Styled from './Button.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (withChevron: boolean) => {
  return shallow(<Button withChevron={withChevron}>ASPARAGUS</Button>);
};

describe('Button', () => {
  describe('With chevron', () => {
    const wrap = setup(true);

    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render chevron', () => {
      const chevron = wrap.find(FiChevronRight);
      expect(chevron.length).toBe(1);
    });
    it('should render correct content', () => {
      const btn = wrap.find(Styled.GenericButton);
      expect(btn.text()).toBe('ASPARAGUS<FiChevronRight />');
    });
  });
  describe('Without chevron', () => {
    const wrap = setup(false);

    it('should render', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should NOT render chevron', () => {
      const chevron = wrap.find(FiChevronRight);
      expect(chevron.length).toBe(0);
    });
    it('should render correct content', () => {
      const btn = wrap.find(Styled.GenericButton);
      expect(btn.text()).toBe('ASPARAGUS');
    });
  });
});
