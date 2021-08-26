import styled from 'styled-components';

export const Container = styled.footer`
  /* display */
  display: flex;
  /* position */
  position: absolute;
  bottom: 0;
  left: 0;
  /* styling */
  width: 100%;
  min-height: 3rem;
  backdrop-filter: blur(20.5px);
  background: ${({ theme }) => theme.systemTrayBackground};
`;

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  gap: 0.5rem;
`;
