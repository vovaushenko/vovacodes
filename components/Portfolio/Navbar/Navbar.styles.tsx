import styled from 'styled-components';

export const Container = styled.nav`
  z-index: ${({ theme }) => theme.zIndex.navigation};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  position: absolute;
  top: 0;
  height: 5rem;
  background-color: transparent;
  width: 100%;
`;
