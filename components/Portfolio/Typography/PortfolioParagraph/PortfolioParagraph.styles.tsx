import styled, { css } from 'styled-components';
import { Props } from './PortfolioParagraph';

type ParagraphProps = Pick<Props, 'margin' | 'withDarkColor' | 'variant'>;

const smallVariantStyles = css`
  font-size: 1.25rem;
`;
const mediumVariantStyles = css`
  font-size: 1rem;
`;
const largeVariantStyles = css`
  font-size: 0.75rem;
`;

export const P = styled.p<ParagraphProps>`
  color: ${({ theme, withDarkColor }) =>
    withDarkColor ? theme.portfolio.text.dark : theme.portfolio.text.light};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: ${({ margin }) => margin};

  ${({ variant }) => variant === 'small' && smallVariantStyles};
  ${({ variant }) => variant === 'medium' && mediumVariantStyles};
  ${({ variant }) => variant === 'large' && largeVariantStyles};

  @media ${({ theme }) => theme.media.phone} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
