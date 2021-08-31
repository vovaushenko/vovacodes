import { mount } from 'enzyme';
import React from 'react';
import * as Styled from './AnimatedRouterLink.styles';

import AnimatedRouterLink from './AnimatedRouterLink';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(
    <AnimatedRouterLink
      variant={'standard'}
      text={'TOMATO'}
      hoverText={'ASPARAGUS'}
      href={'/CUCUMBER'}
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
    const link = wrap.find(Styled.A);
    expect(link.prop('href')).toBe('/CUCUMBER');
  });

  it('should render correct text', () => {
    const link = wrap.find(Styled.A);
    expect(link.text()).toBe('TOMATO');
  });
});
