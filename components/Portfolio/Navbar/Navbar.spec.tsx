import { shallow } from 'enzyme';
import React from 'react';
import Navbar from './Navbar';
import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Navbar isLogoExpanded={true} />);
};

describe('Navbar', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render logo', () => {
    const logo = wrap.find(Logo);
    expect(logo.length).toBe(1);
  });
  it('should render navigation menu', () => {
    const navMenu = wrap.find(NavigationMenu);
    expect(navMenu.length).toBe(1);
  });
});
