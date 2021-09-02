import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  top: 50%;
  z-index: 55;
  transform: translateY(-50%);
  background-color: red;
`;

export const NAV = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
