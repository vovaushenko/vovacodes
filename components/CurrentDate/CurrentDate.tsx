import React from 'react';
import * as Styled from './CurrentDate.styles';

export interface Props {
  variant: 'smallFont' | 'middleFont' | 'largeFont';
}

/**
 *Renders current date in several variants with varying fonts
 *@function CurrentDate
 *@param {enum} variant - clock variant with varying font-size
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CurrentDate = ({ variant }: Props): JSX.Element => {
  return (
    <Styled.Date variant={variant}>
      {new Date().toLocaleDateString()}
    </Styled.Date>
  );
};

export default CurrentDate;
