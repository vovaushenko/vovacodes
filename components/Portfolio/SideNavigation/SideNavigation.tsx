import React from 'react';
import * as Styled from './SideNavigation.styles';
import { IScrollNavLink } from '../About/About.config';
import ScrollLink from '../ScrollLink/ScrollLink';

export interface Props {
  navData: IScrollNavLink[];
}

/**
 *@function SideNavigation
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SideNavigation = ({ navData }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.NAV>
        {navData.map((scrollLink) => (
          <ScrollLink
            key={scrollLink.id}
            icon={scrollLink.icon}
            hiddenText={scrollLink.hiddenText}
            anchorID={scrollLink.anchorID}
          />
        ))}
      </Styled.NAV>
    </Styled.Container>
  );
};

export default SideNavigation;
