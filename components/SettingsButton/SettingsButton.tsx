import React, { FC, useState } from 'react';
import * as Styled from './SettingsButton.styles';
import { FiChevronRight } from 'react-icons/fi';
import Paragraph from '../Typography/Paragraph/Paragraph';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'icon' | 'action';
  isTurnedOn: boolean;
  text: string;
}

/**
 *Renders settings button
 *@function SettingsButton
 *@param {enum} variant - "icon variant" will render button with icon content, "action variant" will add action chevron icon
 *@param {boolean} isTurnedOn - is button clicked and turned on
 *@param {string} text - text description under button
 *@param {children} children - button content
 *@param {rest} rest - standard html button params
 *@returns {JSX.Element} - Rendered SettingsButton component
 */
const SettingsButton: FC<Props> = ({
  variant,
  isTurnedOn,
  text,
  children,
  ...rest
}): JSX.Element => {
  const [isActive, setIsActive] = useState(isTurnedOn);
  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <Styled.ButtonContainer>
      <Styled.Button isTurnedOn={isActive} {...rest} onClick={handleClick}>
        {children}
        {variant === 'action' ? <FiChevronRight className="icon" /> : ''}
      </Styled.Button>
      <Paragraph margin={'0'}>{text}</Paragraph>
    </Styled.ButtonContainer>
  );
};

export default SettingsButton;
