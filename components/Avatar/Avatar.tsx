import React from 'react';
import * as Styled from './Avatar.styles';

export interface Props extends React.ComponentPropsWithoutRef<'div'> {
  src: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  hasBadge: boolean;
  width: string;
}

/**
 *@function Avatar
 *@param {string} src - avatar src
 *@param {string} width - avatar width
 *@param {string} firstName - user first name
 *@param {string} lastName - user last name
 *@param {boolean} isActive - active avatar state
 *@param {boolean} hasBadge - show/hide badge
 *@param {rest} rest - standard props
 *@returns {JSX.Element} - Rendered Avatar component with Image if image src is specified, or span with user initials if src is not specified
 */
const Avatar = ({
  src,
  firstName,
  lastName,
  isActive,
  hasBadge,
  width,
  ...rest
}: Props): JSX.Element => {
  const fullName = `${firstName} ${lastName}`;
  const initials = `${firstName[0]} ${lastName[0]}`;

  return (
    <Styled.Container>
      <Styled.Wrapper isActive={isActive} width={width}>
        {hasBadge && <Styled.Badge />}
        {src ? (
          <Styled.Image alt={fullName} src={src} {...rest} />
        ) : (
          <Styled.Span {...rest}>{initials}</Styled.Span>
        )}
      </Styled.Wrapper>
      <Styled.Name>{fullName}</Styled.Name>
    </Styled.Container>
  );
};

export default Avatar;
