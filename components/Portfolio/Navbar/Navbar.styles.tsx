import styled from 'styled-components';

export const Container = styled.nav`
  z-index: ${({ theme }) => theme.zIndex.navigation};
  /* positioning */
  position: fixed;
  top: 0;
  right: 0;
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;

  background-color: transparent;
  width: 100%;
  backdrop-filter: blur(1.5px);

  @media ${({ theme }) => theme.media.phone} {
    padding: 1rem 2rem;
  }
`;
