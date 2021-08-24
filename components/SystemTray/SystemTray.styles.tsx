import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.25rem;

  min-height: 3rem;
  backdrop-filter: blur(20.5px);
  background: ${({ theme }) => theme.systemTrayBackground};
`;
