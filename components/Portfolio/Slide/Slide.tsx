import React, { FC } from 'react';
import * as Styled from './Slide.styles';

export interface Props {
  bgColor: string;
}

/**
 *Renders full-viewport slide wrapper for resume content
 *@function Slide
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Slide: FC<Props> = ({ bgColor, children }): JSX.Element => {
  return <Styled.Container bgColor={bgColor}>{children}</Styled.Container>;
};

export default Slide;
