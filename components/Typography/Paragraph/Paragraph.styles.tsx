import styled from 'styled-components';
import { Props } from './Paragraph';

export const P = styled.p<Props>`
  color: ${({ theme }) => theme.primary.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: ${({ margin }) => margin};

  @media ${({ theme }) => theme.media.phone} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
