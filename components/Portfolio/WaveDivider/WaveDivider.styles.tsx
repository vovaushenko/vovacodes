import styled from 'styled-components';
import { Props } from './WaveDivider';

export const Container = styled.div``;

export const Wave = styled.div<Props>`
  background-image: ${({ waveImg }) => `url(${waveImg})`};
  height: ${({ dividerHeight }) => dividerHeight || '200px'};
  margin: ${({ margin }) => margin};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media ${({ theme }) => theme.media.phone} {
    height: 120px;
  }
`;
