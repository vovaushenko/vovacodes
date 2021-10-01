import React from 'react';
import * as Styled from './PortfolioParagraph.styles';

export interface Props {
  margin: string;
  paragraphText?: string;
  withDarkColor: boolean;
  variant: 'large' | 'medium' | 'small';
  withAnimatedPresence: boolean;
}

/**
 *@TYPOGRAPHY re-usable text paragraph
 *@function PortfolioParagraph
 *@param {enum} variant - determines font-size of paragraph
 *@param {string} margin - margin to be applied
 *@param {string} paragraphText - text content of paragraph
 *@param {boolean} withDarkColor - specifies whether paragraph will be dark or white
 *@param {boolean} withAnimatedPresence - specifies whether paragraph have default animation
 *@returns {JSX.Element} - Rendered PortfolioParagraph component
 */
const PortfolioParagraph: React.FunctionComponent<Props> = ({
  margin,
  paragraphText,
  withDarkColor,
  variant,
  withAnimatedPresence,
  children,
}): JSX.Element => {
  return (
    <Styled.P
      margin={margin}
      withDarkColor={withDarkColor}
      variant={variant}
      withAnimatedPresence={withAnimatedPresence}
    >
      {paragraphText ?? children}
    </Styled.P>
  );
};

export default PortfolioParagraph;
