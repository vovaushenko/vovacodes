import React, { ReactNode } from 'react';
import * as Styled from './SocialMediaContact.styles';

export interface Props {
  icon: ReactNode;
  href: string;
}

/**
 *Renders social medial link with icon
 *@function SocialMediaContact
 *@param {ReactNode} icon - icon to be rendered in contact
 *@param {string} text - link text
 *@param {string} href - social media href
 *@returns {JSX.Element} - Rendered SocialMediaContact component
 */
const SocialMediaContact = ({ icon, href }: Props): JSX.Element => {
  return (
    <Styled.Container href={href} target="_blank" rel="noopener">
      <div className="hovicon effect-1 sub-b">{icon}</div>
    </Styled.Container>
  );
};

export default SocialMediaContact;
