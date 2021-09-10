import React, { ReactNode } from 'react';
import * as Styled from './ActionButton.styles';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  buttonText: string;
  icon: ReactNode;
  renderAsLink?: boolean;
  href?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

/**
 *Renders call-to-action button for portfolio screens
 *@function ActionButton
 *@param {boolean} renderAsLink - specifies whether the button will be an <a> link
 *@param {string} href - href of the above link
 *@param {string} buttonText - text content of button
 *@param {ReactNode} icon - icon react element, should have "action-icon" class to be styled and positioned properly
 *@param {boolean}  isLoading - indicates loading or progress state
 *@param {rest} rest - standard button props
 *@returns {JSX.Element} - Rendered ActionButton component
 */
const ActionButton = ({
  buttonText,
  icon,
  renderAsLink,
  isLoading,
  href,
  ...rest
}: Props): JSX.Element => {
  if (renderAsLink && href) {
    return (
      <Styled.BTN
        as={'a'}
        href={href}
        isLoading={isLoading}
        target={'_blank'}
        rel="noopener"
      >
        {buttonText}
        <span>{icon}</span>
      </Styled.BTN>
    );
  }

  return (
    <Styled.BTN isLoading={isLoading} {...rest}>
      {buttonText}
      <span>{icon}</span>
    </Styled.BTN>
  );
};

export default ActionButton;
