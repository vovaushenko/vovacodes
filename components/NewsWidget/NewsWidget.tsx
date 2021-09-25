import React from 'react';
import * as Styled from './NewsWidget.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import Button from '../Button/Button';
import { More } from '../WidgetCard/WidgetCard.styles';
import { FiBookmark, FiMoreHorizontal } from 'react-icons/fi';

export interface Props {
  newsHeader: string;
  newsSource: string;
  newsLink: string;
  backgroundImg: string;
  cardGradientColor: string;
  className: string;
}

/**
 *Renders news widget for widget panel
 *@function NewsWidget
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const NewsWidget = ({
  newsSource,
  newsHeader,
  backgroundImg,
  newsLink,
  className,
  cardGradientColor,
}: Props): JSX.Element => {
  return (
    <Styled.Container
      className={className}
      bgImg={backgroundImg}
      cardGradientColor={cardGradientColor}
    >
      <Styled.TextWrapper>
        <Paragraph margin={'0.5rem 0'}>{newsSource}</Paragraph>
        <Styled.NewsHeader href={newsLink} target="_blank" rel="noopener">
          {newsHeader}
        </Styled.NewsHeader>
        <Styled.ActionPanel>
          <Button variant={'likeBtn'} withChevron={false}>
            Like
          </Button>

          <Styled.Wrapper>
            <More>
              <FiMoreHorizontal className={'icon'} />
            </More>
            <More>
              <FiBookmark className={'icon'} />
            </More>
          </Styled.Wrapper>
        </Styled.ActionPanel>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default NewsWidget;
