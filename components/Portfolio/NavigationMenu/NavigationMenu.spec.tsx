import { shallow } from 'enzyme';
import React from 'react';
import NavigationMenu from './NavigationMenu';
import * as Styled from './NavigationMenu.styles';
import SocialMediaContact from '../SocialMediaContact/SocialMediaContact';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<NavigationMenu />);
};

describe('NavigationMenu', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all router links(currently 6)', () => {
    const routerLink = wrap.find(Styled.NavLink);
    expect(routerLink.length).toBe(6);
  });
  it('should render all social media links', () => {
    const socialMediaLink = wrap.find(SocialMediaContact);
    expect(socialMediaLink.length).toBe(4);
  });
});
