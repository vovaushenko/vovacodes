import styled, { css } from 'styled-components';
import { slideTop } from '../../../styles/reusableCss';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 1rem 5rem;
`;

export const TextWrapper = styled.div`
  height: 40%;

  p {
    line-height: 1.6;
  }
`;

const buttonStyles = css`
  background: transparent;
  border: 0;
  cursor: pointer;

  .carousel-icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
    transition: all 0.3s ease;
  }

  :hover .next {
    transform: translateX(5px);
  }

  :hover .prev {
    transform: translateX(-5px);
  }
`;

export const NextQuote = styled.button`
  ${buttonStyles}
`;

export const PrevQuote = styled.button`
  ${buttonStyles}
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
  animation: ${slideTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
