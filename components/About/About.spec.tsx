import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './About.styles';

import About from './About';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<About />);
};

describe('About', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render header', () => {
    const header = wrap.find(Styled.Header);
    expect(header.length).toBe(1);
  });
  it('should render info wrapper', () => {
    const info = wrap.find(Styled.InfoWrapper);
    expect(info.length).toBe(1);
  });
});
