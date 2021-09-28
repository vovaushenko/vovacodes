import { shallow } from 'enzyme';
import React from 'react';
import TapHint from './TapHint';
import Image from 'next/image';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<TapHint />);
};

describe('TapHint', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render tap icon with specified params', () => {
    const scrollIcon = wrap.find(Image);
    expect(scrollIcon.prop('height')).toBe(40);
    expect(scrollIcon.prop('width')).toBe(40);
    expect(scrollIcon.prop('alt')).toBe('Tap anywhere hint');
  });
  it('should render hint', () => {
    const hint = wrap.find(PortfolioParagraph);
    expect(hint.length).toBe(1);
  });
});
