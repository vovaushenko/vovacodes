import { shallow } from 'enzyme';

import React from 'react';
import Avatar, { Props } from './Avatar';
import * as Styled from './Avatar.styles';

const avatarProps: Props = {
  firstName: 'john',
  lastName: 'doe',
  isActive: false,
  hasBadge: false,
  src: '/images/avatar.png',
  width: '50px',
};

describe('Avatar', () => {
  const wrap = shallow(<Avatar {...avatarProps} />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render image with specified attributes', () => {
    const cardImg = wrap.find(Styled.Image);
    expect(cardImg.length).toBe(1);
    expect(cardImg.prop('alt')).toBe(
      `${avatarProps.firstName} ${avatarProps.lastName}`
    );
    expect(cardImg.prop('src')).toBe(avatarProps.src);
  });
  it('should not render span if img is specified>', () => {
    const span = wrap.find(Styled.Span);
    expect(span.length).toBe(0);
  });
  it('should not render badge if it is not specified>', () => {
    const badge = wrap.find(Styled.Badge);
    expect(badge.length).toBe(0);
  });

  it('should render badge if avatar has badge>', () => {
    const withBadge = shallow(<Avatar {...avatarProps} hasBadge={true} />);
    const badge = withBadge.find(Styled.Badge);
    expect(badge.length).toBe(1);
  });
});
