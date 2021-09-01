import styled from 'styled-components';
import { Props } from './Slide';

type SlideProps = Pick<Props, 'bgColor'>;
export const Container = styled.section<SlideProps>`
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
  scroll-snap-align: start;
  position: relative;
`;
