import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import ContextMenuItem, { IContextMenuItem } from './ContextMenuItem';
import * as Styled from './ContextMenuItem.styles';
import { FiChevronRight } from 'react-icons/fi';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (props: IContextMenuItem) => {
  return mount(withReduxAndStyledProviders(<ContextMenuItem {...props} />));
};

describe('ContextMenuItem', () => {
  describe('link WITHOUT additional context menu on hover', () => {
    const wrap = setup({ id: 1, text: 'TOMATO', action: null });
    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render correct text content', () => {
      const contextItemText = wrap.find('p');
      expect(contextItemText.text()).toBe('TOMATO');
    });
    it('should not render chevron icon with no hoverMenuItems', () => {
      const chevronIcon = wrap.find(FiChevronRight);
      expect(chevronIcon.length).toBe(0);
    });
    it('should not render additional context menu with no hoverMenuItems', () => {
      const hoverContextMenuItems = wrap.find(Styled.ContextMenuWrapper);
      expect(hoverContextMenuItems.length).toBe(0);
    });
  });

  describe('link WITH additional context menu on hover', () => {
    const wrap = setup({
      id: 1,
      text: 'ASPARAGUS',
      action: null,
      hoverMenuItems: [{ id: 2, text: 'BANANA', action: null }],
    });

    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render correct text content', () => {
      const contextItemText = wrap.find('p');
      expect(contextItemText.text()).toBe('ASPARAGUS');
    });
    it('should not render chevron icon with no hoverMenuItems', () => {
      const chevronIcon = wrap.find(FiChevronRight);
      expect(chevronIcon.length).toBe(1);
    });
  });
});
