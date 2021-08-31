import React from 'react';
import * as Styled from './PortfolioParagraph.styles';

export interface Props {
  margin: string;
  paragraphText: string;
  withDarkColor: boolean;
  variant: 'large' | 'medium' | 'small';
}

/**
 *@TYPOGRAPHY re-usable text paragraph
 *@function PortfolioParagraph
 *@param {enum} variant - determines font-size of paragraph
 *@param {string} margin - margin to be applied
 *@param {string} paragraphText - text content of paragraph
 *@param {boolean} withDarkColor - specifies whether paragraph will be dark or white
 *@returns {JSX.Element} - Rendered PortfolioParagraph component
 */
const PortfolioParagraph = ({
  margin,
  paragraphText,
  withDarkColor,
  variant,
}: Props): JSX.Element => {
  return (
    <Styled.P margin={margin} withDarkColor={withDarkColor} variant={variant}>
      {paragraphText}
    </Styled.P>
  );
};

export default PortfolioParagraph;
