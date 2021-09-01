import { shallow } from 'enzyme';
import React from 'react';
import Image from 'next/image';
import * as Styled from './SkillIcon.styles';
import SkillIcon from './SkillIcon';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <SkillIcon
      iconSrc={'/icon.svg'}
      iconSize={{ height: 50, width: 50 }}
      text={'TOMATO'}
    />
  );
};

describe('SkillIcon', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render image with specified params', () => {
    const img = wrap.find(Image);
    expect(img.prop('src')).toBe('/icon.svg');
    expect(img.prop('height')).toBe(50);
    expect(img.prop('width')).toBe(50);
  });
  it('should render correct text under icon', () => {
    const iconText = wrap.find(Styled.IconText);
    expect(iconText.text()).toBe('TOMATO');
  });
});
