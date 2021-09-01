import styled from 'styled-components';
import { Props } from './Slide';

type SlideProps = Pick<Props, 'bgColor' | 'height'>;
export const Container = styled.div<SlideProps>`
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  scroll-snap-align: start;
  position: relative;
`;
