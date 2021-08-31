import { shallow } from 'enzyme';
import React from 'react';
import PortfolioLanding from './PortfolioLanding';
import AnimatedRouterLink from '../AnimatedRouterLink/AnimatedRouterLink';
import * as Styled from './PortfolioLanding.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<PortfolioLanding />);
};

describe('PortfolioLanding', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all 3 animated links', () => {
    const link = wrap.find(AnimatedRouterLink);
    expect(link.length).toBe(3);
  });
  it('should render photo', () => {
    const photo = wrap.find(Styled.Photo);
    expect(photo.length).toBe(1);
  });
});
