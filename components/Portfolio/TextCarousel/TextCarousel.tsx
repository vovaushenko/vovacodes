import React, { useEffect, useState } from 'react';
import * as Styled from './TextCarousel.styles';
import { ICarouselQuote } from '../../../types/portfolio';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export interface Props {
  quotes: ICarouselQuote[];
}

/**
 *Renders carousel with text quotes
 *@function TextCarousel
 *@param {ICarouselQuote[]} quotes - array of quotes with title and text of quote
 *@returns {JSX.Element} - Rendered TextCarousel component
 */
const TextCarousel = ({ quotes }: Props): JSX.Element => {
  const [quoteID, setQuoteID] = useState(0);
  const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);

  const { title, quote } = quotes[quoteID];

  const proceedToNextQuote = () => {
    let newId = quoteID + 1;
    if (newId >= quotes.length) newId = 0;
    if (intervalID !== null) clearInterval(intervalID);
    setQuoteID(newId);
  };
  const proceedToPrevQuote = () => {
    let newId = quoteID - 1;
    if (newId < 0) newId = quotes.length - 1;
    if (intervalID !== null) clearInterval(intervalID);
    setQuoteID(newId);
  };

  // this useEffect changes index of displayed quote from "quotes", thereby rendering next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteID((prev) => (prev + 1 >= quotes.length ? 0 : prev + 1));
    }, 10000);

    setIntervalID(interval);

    return () => {
      clearInterval(interval);
    };
  }, [quoteID, quotes.length]);

  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <SectionHeader
          key={quoteID}
          variant={'small'}
          headerText={title}
          margin={'0'}
          color={'#01bf71'}
          withGradient
        />
        <PortfolioParagraph
          key={quoteID + 1}
          margin={'1rem 0'}
          paragraphText={quote}
          withDarkColor={false}
          variant={'large'}
          withAnimatedPresence={true}
        />
      </Styled.TextWrapper>
      <Styled.ControlsWrapper>
        <Styled.PrevQuote onClick={proceedToPrevQuote} title="Previous Slide">
          <FiChevronLeft className={'carousel-icon prev'} />
        </Styled.PrevQuote>
        <Styled.NextQuote onClick={proceedToNextQuote}>
          <FiChevronRight className={'carousel-icon next'} title="Next Slide" />
        </Styled.NextQuote>
      </Styled.ControlsWrapper>
    </Styled.Container>
  );
};

export default TextCarousel;
