import styled, { css } from 'styled-components';
import { Props } from './SectionHeader';

type HeaderProps = Pick<Props, 'margin' | 'color' | 'variant'>;

const smallVariantStyles = css`
  font-size: 7rem;
`;
const mediumVariantStyles = css`
  font-size: 6rem;
`;
const largeVariantStyles = css`
  font-size: 5rem;
`;

export const H1 = styled.h1<HeaderProps>`
  font-size: 4rem;
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  line-height: 1.6;
  ${({ variant }) => variant === 'small' && smallVariantStyles};
  ${({ variant }) => variant === 'medium' && mediumVariantStyles};
  ${({ variant }) => variant === 'large' && largeVariantStyles};
`;
