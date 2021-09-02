import React, { ReactNode } from 'react';
import * as Styled from './ActionButton.styles';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  buttonText: string;
  icon: ReactNode;
}

/**
 *Renders call-to-action button for portfolio screens
 *@function ActionButton
 *@param {string} buttonText - text content of button
 *@param {ReactNode} icon - icon react element, should have "action-icon" class to be styled and positioned properly
 *@returns {JSX.Element} - Rendered ActionButton component
 */
const ActionButton = ({ buttonText, icon }: Props): JSX.Element => {
  return (
    <Styled.BTN>
      {buttonText}
      <span>{icon}</span>
    </Styled.BTN>
  );
};

export default ActionButton;
