import styled from 'styled-components';
import { Props } from './Slide';

type SlideProps = Pick<Props, 'bgColor' | 'height'>;
export const Container = styled.div<SlideProps>`
  min-height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  scroll-snap-align: center;
`;
