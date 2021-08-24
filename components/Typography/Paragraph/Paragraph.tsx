import React, { FC } from 'react';
import * as Styled from './Paragraph.styles';

export interface Props {
  margin: string;
}

/**
 *@TYPOGRAPHY re-usable text paragraph
 *@function Paragraph
 *@param {string} margin - margin to be applied
 *@param {ReactNode} children - children of the component
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Paragraph: FC<Props> = ({ margin, children }): JSX.Element => {
  return <Styled.P margin={margin}>{children}</Styled.P>;
};

export default Paragraph;
