import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './AnimatedRouterLink.styles';
import Link from 'next/link';

import AnimatedRouterLink from './AnimatedRouterLink';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <AnimatedRouterLink
      variant={'standard'}
      text={'TOMATO'}
      hoverText={'ASPARAGUS'}
      href={'/CUCUMBER'}
      animationTimeout={0}
    />
  );
};

describe('AnimatedRouterLink', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct href', () => {
    const link = wrap.find(Link);
    expect(link.prop('href')).toBe('/CUCUMBER');
  });

  it('should render correct text', () => {
    const link = wrap.find(Styled.A);
    expect(link.text()).toBe('TOMATO');
  });
});
