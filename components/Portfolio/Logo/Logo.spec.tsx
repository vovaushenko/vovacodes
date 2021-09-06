import { shallow } from 'enzyme';
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Logo isExpanded={true} />);
};

describe('Logo', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all spans', () => {
    const span = wrap.find('span');
    expect(span.length).toBe(4);
  });
  it('should render router link', () => {
    const link = wrap.find(Link);
    expect(link.length).toBe(1);
  });
});
