import { mount } from 'enzyme';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import * as Styled from './SocialMediaContact.styles';
import SocialMediaContact from './SocialMediaContact';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(<SocialMediaContact href={'TOMATO.COM'} icon={<FiGithub />} />);
};

describe('SocialMediaContact', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render link with specified href', () => {
    const link = wrap.find(Styled.Container);
    expect(link.prop('href')).toBe('TOMATO.COM');
  });
  it('should render specified icon', () => {
    const icon = wrap.find('div');
    expect(icon.length).toBe(1);
  });
});
