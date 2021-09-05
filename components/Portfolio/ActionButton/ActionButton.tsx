import React, { ReactNode } from 'react';
import * as Styled from './ActionButton.styles';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  buttonText: string;
  icon: ReactNode;
  renderAsLink?: boolean;
  href?: string;
}

/**
 *Renders call-to-action button for portfolio screens
 *@function ActionButton
 *@param {boolean} renderAsLink - specifies whether the button will be an <a> link
 *@param {string} href - href of the above link
 *@param {string} buttonText - text content of button
 *@param {ReactNode} icon - icon react element, should have "action-icon" class to be styled and positioned properly
 *@returns {JSX.Element} - Rendered ActionButton component
 */
const ActionButton = ({
  buttonText,
  icon,
  renderAsLink,
  href,
}: Props): JSX.Element => {
  if (renderAsLink && href) {
    return (
      <Styled.BTN as={'a'} href={href} target={'_blank'} rel="noopener">
        {buttonText}
        <span>{icon}</span>
      </Styled.BTN>
    );
  }

  return (
    <Styled.BTN>
      {buttonText}
      <span>{icon}</span>
    </Styled.BTN>
  );
};

export default ActionButton;
