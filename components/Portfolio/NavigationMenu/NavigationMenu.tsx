import React, { useState } from 'react';
import * as Styled from './NavigationMenu.styles';
import Link from 'next/link';
import { useContactConfig } from '../Contact/Contact.config';
import SocialMediaContact from '../SocialMediaContact/SocialMediaContact';
import { navMenuLinks } from './NavigationMenu.config';

/**
 *Renders NavigationMenu component for routing and external navigation in portfolio screens
 *@function NavigationMenu
 *@returns {JSX.Element} - Rendered CardContent component
 */
const NavigationMenu = (): JSX.Element => {
  const { myContacts } = useContactConfig();
  const [isActive, setIsActive] = useState(false);
  const toggleNavMenu = () => setIsActive((prev) => !prev);
  //kind of hack, re-render keys used to toggle re-render of lists, thereby kicking-off animation
  const reRenderKey = `${Math.random() * 500}${isActive}`;
  const reRenderKeyTwo = `${Math.random() * 100}${isActive}`;

  return (
    <Styled.Container onClick={toggleNavMenu}>
      <div className={`icon-one ${isActive && 'active-one'}`}>
        <div className="hamburger hamburger-one" />
      </div>

      <Styled.Menu isOpen={isActive}>
        <Styled.RouterLinksList className={'router-list'} key={reRenderKey}>
          {navMenuLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} passHref>
                <Styled.NavLink>{link.linkText}</Styled.NavLink>
              </Link>
            </li>
          ))}
        </Styled.RouterLinksList>

        <Styled.SocialMediaWrapper
          className={'social-media'}
          key={reRenderKeyTwo}
        >
          <h4>Connect</h4>
          <Styled.SocialMediaContactsList>
            {myContacts.map((contact) => (
              <li key={contact.id}>
                <SocialMediaContact icon={contact.icon} href={contact.href} />
              </li>
            ))}
          </Styled.SocialMediaContactsList>
        </Styled.SocialMediaWrapper>
      </Styled.Menu>
    </Styled.Container>
  );
};

export default NavigationMenu;
