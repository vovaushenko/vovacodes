import styled from 'styled-components';
import { Props } from './TextHeader';

export const H3 = styled.h3<Props>`
  color: ${({ theme }) => theme.primary.text};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: ${({ margin }) => margin};
  font-weight: ${({ isBold, theme }) =>
    isBold ? theme.fontWeight.semibold : theme.fontWeight.normal};

  @media ${({ theme }) => theme.media.phone} {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
