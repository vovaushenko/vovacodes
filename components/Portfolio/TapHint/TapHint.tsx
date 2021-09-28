import React from 'react';
import * as Styled from './TapHint.styles';
import Image from 'next/image';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';

/**
 *Renders scroll hit component to indicate user to scroll in down direction
 *@function TapHint
 *@returns {JSX.Element} - Rendered TapHint component
 */
const TapHint = (): JSX.Element => {
  return (
    <Styled.Container>
      <Image
        src={'/assets/portfolio/tap-on-screen.svg'}
        height={40}
        width={40}
        objectFit={'contain'}
        alt={'Tap anywhere hint'}
      />
      <PortfolioParagraph
        margin={'0'}
        paragraphText={'Tap anywhere'}
        withDarkColor={false}
        variant={'large'}
        withAnimatedPresence={true}
      />
    </Styled.Container>
  );
};

export default TapHint;
