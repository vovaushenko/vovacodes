import React, { FC } from 'react';
import * as Styled from './TextHeader.styles';

export interface Props {
  margin: string;
  isBold: boolean;
}

/**
 *@TYPOGRAPHY re-usable text header
 *@function TextHeader
 *@param {string} margin - margin to be applied
 *@param {boolean} isBold - specifies whether text header should be bold
 *@param {ReactNode} children - children of the component
 *@returns {JSX.Element} - Rendered TextHeader component
 */
const TextHeader: FC<Props> = ({ margin, isBold, children }): JSX.Element => {
  return (
    <Styled.H3 margin={margin} isBold={isBold}>
      {children}
    </Styled.H3>
  );
};

export default TextHeader;
