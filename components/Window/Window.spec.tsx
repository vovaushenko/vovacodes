import { mount } from 'enzyme';
import React from 'react';
import Window, { Props } from './Window';
import * as Styled from './Window.styles';
import { NavButton } from './Window.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import Image from 'next/image';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (props: Props) => {
  return mount(withReduxAndStyledProviders(<Window {...props} />));
};

describe('Window', () => {
  describe('OPEN window', () => {
    const wrap = setup({
      size: { height: 100, width: 100 },
      windowIcon: '/icon.svg',
      windowName: 'Open Window',
      closeWindow: () => console.log('CLOSE'),
      isOpen: true,
    });

    it('should render with no errors', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render specified window name', () => {
      const windowName = wrap.find(Styled.WindowInfo).find(Paragraph);
      expect(windowName.text()).toBe('Open Window');
    });

    it('should render correct window icon', () => {
      const icon = wrap.find(Styled.WindowInfo).find(Image);

      expect(icon.prop('height')).toBe(20);
      expect(icon.prop('width')).toBe(20);
      expect(icon.prop('alt')).toBe('Open Window');
      expect(icon.prop('src')).toBe('/icon.svg');
    });

    it('should render control buttons', () => {
      const ctrlBtn = wrap.find(NavButton);
      expect(ctrlBtn.length).toBe(2);
    });
  });
});
