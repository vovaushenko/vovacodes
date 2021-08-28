import React, { FC } from 'react';
import * as Styled from './WidgetCard.styles';
import Image from 'next/image';
import { FiMoreHorizontal } from 'react-icons/fi';
import Header from '../Typography/Header/TextHeader';

export interface Props {
  cardHeader: string;
  headerIcon: string;
  iconSize: { height: number; width: number };
}

/**
 *Renders widget card wrapper for Widgets Sliding Panel
 *@function WidgetCard
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered WidgetCard component
 */
const WidgetCard: FC<Props> = ({
  cardHeader,
  headerIcon,
  iconSize,
  children,
}): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Wrapper>
          <Header margin={'0'} isBold={false}>
            {cardHeader}
          </Header>
          <Image
            src={headerIcon}
            height={iconSize.height}
            width={iconSize.width}
            alt={cardHeader}
            quality={100}
            objectFit={'contain'}
          />
        </Styled.Wrapper>

        <Styled.More>
          <FiMoreHorizontal className={'icon'} />
        </Styled.More>
      </Styled.Header>

      {children}
    </Styled.Container>
  );
};

export default WidgetCard;
