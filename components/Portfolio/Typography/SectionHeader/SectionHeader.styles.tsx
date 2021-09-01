import styled, { css } from 'styled-components';
import { Props } from './SectionHeader';
import { trackingInExpand } from '../../../../styles/reusableCss';

type HeaderProps = Pick<Props, 'margin' | 'color' | 'variant'>;

const smallVariantStyles = css`
  font-size: 4rem;
`;
const mediumVariantStyles = css`
  font-size: 5rem;
`;
const largeVariantStyles = css`
  font-size: 7rem;
  line-height: 9rem;
  letter-spacing: -5px;
  font-weight: 700;
`;

export const H1 = styled.h1<HeaderProps>`
  font-size: 4rem;
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  line-height: 1.6;
  ${({ variant }) => variant === 'small' && smallVariantStyles};
  ${({ variant }) => variant === 'medium' && mediumVariantStyles};
  ${({ variant }) => variant === 'large' && largeVariantStyles};

  animation: ${trackingInExpand} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
