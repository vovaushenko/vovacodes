import React from 'react';
import * as Styled from './Button.styles';
import { FiChevronLeft, FiChevronRight, FiThumbsUp } from 'react-icons/fi';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'standardBtn' | 'likeBtn';
  withChevron: boolean;
  withLeftChevron?: boolean;
}

/**
 *Renders multipurpose generic button
 *@function Button
 *@param {string} variant - button variant
 *@param {boolean} withChevron - specifies whether chevron is added
 *@param {boolean} withLeftChevron - specifies whether left chevron is added
 *@param {ReactNode} children - button children
 *@param {rest} rest - default button params and methods
 *@returns {JSX.Element} - Rendered Button component
 */
const Button = ({
  withChevron,
  variant,
  children,
  withLeftChevron,
  ...rest
}: Props): JSX.Element => {
  return (
    <Styled.GenericButton variant={variant} {...rest}>
      {variant === 'likeBtn' && <FiThumbsUp className="icon" />}
      {withLeftChevron && <FiChevronLeft className="icon" />}
      {children}
      {withChevron && <FiChevronRight className="icon" />}
    </Styled.GenericButton>
  );
};

export default Button;
