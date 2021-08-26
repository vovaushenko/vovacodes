import { mount } from 'enzyme';
import React from 'react';
import * as Styled from './CurrentDate.styles';
import CurrentDate from './CurrentDate';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (variant: 'smallFont' | 'middleFont' | 'largeFont') => {
  return mount(withReduxAndStyledProviders(<CurrentDate variant={variant} />));
};

describe('CurrentDate', () => {
  describe('Small font variant', () => {
    const wrap = setup('smallFont');

    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render correct time', () => {
      const time = wrap.find(Styled.Date);
      expect(time.text()).toBe(new Date().toLocaleDateString());
    });
  });
});
