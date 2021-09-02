import { shallow } from 'enzyme';
import React from 'react';
import ScrollHint from './ScrollHint';
import Image from 'next/image';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import { FiArrowDown } from 'react-icons/fi';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<ScrollHint />);
};

describe('ScrollHint', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render scroll icon with specified params', () => {
    const scrollIcon = wrap.find(Image);
    expect(scrollIcon.prop('height')).toBe(50);
    expect(scrollIcon.prop('width')).toBe(50);
    expect(scrollIcon.prop('alt')).toBe('Scroll down hint');
  });
  it('should render hint', () => {
    const hint = wrap.find(PortfolioParagraph);
    expect(hint.length).toBe(1);
  });
  it('should render down icon', () => {
    const downArrowIcon = wrap.find(FiArrowDown);
    expect(downArrowIcon.length).toBe(1);
  });
});
