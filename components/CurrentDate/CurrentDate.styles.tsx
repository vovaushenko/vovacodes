import styled, { css } from 'styled-components';
import { Props } from './CurrentDate';

const smallVariant = css`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
const middleVariant = css`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
const largeVariant = css`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const Date = styled.time<Props>`
  ${(p) => p.variant === 'smallFont' && smallVariant};
  ${(p) => p.variant === 'middleFont' && middleVariant};
  ${(p) => p.variant === 'largeFont' && largeVariant};
`;
