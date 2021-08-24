import React from 'react';
import * as Styled from './DesktopButton.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import Image from 'next/image';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'desktop' | 'systemTray';
  iconSrc: string;
  iconSize: { height: number; width: number };
  text: string;
}

/**
 *Renders desktop button with icon and text
 *@function DesktopButton
 *@param {enum} variant - variant of button
 *@param {string} iconSrc - icon source in assets
 *@param {object} iconSize - object with icon size configuration (height && width)
 *@param {string} text - text to be rendered in button
 *@param {rest} rest - default button params and methods
 *@returns {JSX.Element} - Rendered DesktopButton component
 */
const DesktopButton = ({
  variant,
  text,
  iconSize,
  iconSrc,
  ...rest
}: Props): JSX.Element => {
  return (
    <Styled.ButtonContainer variant={variant} {...rest}>
      <Styled.Figure>
        <Image
          src={iconSrc}
          alt={text}
          height={iconSize.height}
          width={iconSize.width}
          objectFit={'contain'}
          quality={100}
        />
        {variant === 'desktop' && (
          <Styled.Figcaption>
            <Paragraph margin={'0rem'}>{text}</Paragraph>
          </Styled.Figcaption>
        )}
      </Styled.Figure>
    </Styled.ButtonContainer>
  );
};

export default DesktopButton;
