import React from 'react';
import * as Styled from './ScrollHint.styles';
import Image from 'next/image';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import { FiArrowDown } from 'react-icons/fi';

/**
 *Renders scroll hit component to indicate user to scroll in down direction
 *@function ScrollHint
 *@returns {JSX.Element} - Rendered ScrollHint component
 */
const ScrollHint = (): JSX.Element => {
  return (
    <Styled.Container>
      <Image
        src={'/assets/icons/scroll-bar.svg'}
        height={50}
        width={50}
        objectFit={'contain'}
        alt={'Scroll down hint'}
      />
      <PortfolioParagraph
        margin={'0'}
        paragraphText={'Scroll down'}
        withDarkColor={false}
        variant={'large'}
        withAnimatedPresence={true}
      />
      <FiArrowDown className={'icon'} />
    </Styled.Container>
  );
};

export default ScrollHint;
