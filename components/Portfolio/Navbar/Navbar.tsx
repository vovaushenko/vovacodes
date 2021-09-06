import React from 'react';
import * as Styled from './Navbar.styles';
import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

export interface Props {
  isLogoExpanded: boolean;
}

/**
 *@function Navbar
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Navbar component
 */
const Navbar = ({ isLogoExpanded }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Logo isExpanded={isLogoExpanded} />
      <NavigationMenu />
    </Styled.Container>
  );
};

export default Navbar;
