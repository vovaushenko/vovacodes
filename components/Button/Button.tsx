import React from 'react';
import * as Styled from './Button.styles';
import { FiChevronRight } from 'react-icons/fi';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  withChevron: boolean;
}

/**
 *Renders multipurpose generic button
 *@function Button
 *@param {boolean} withChevron - specifies whether chevron is added
 *@param {ReactNode} children - button children
 *@param {rest} rest - default button params and methods
 *@returns {JSX.Element} - Rendered Button component
 */
const Button = ({ withChevron, children, ...rest }: Props): JSX.Element => {
  return (
    <Styled.GenericButton {...rest}>
      {children}
      {withChevron && <FiChevronRight className="icon" />}
    </Styled.GenericButton>
  );
};

export default Button;
