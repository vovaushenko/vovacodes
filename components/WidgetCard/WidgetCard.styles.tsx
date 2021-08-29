import styled from 'styled-components';

export const Container = styled.article`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(28, 33, 39, 0.63)'
      : 'rgba(255, 255, 255, 0.26)'};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.25em;
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(28, 33, 39, 0.63)'
      : 'rgba(255, 255, 255, 0.26)'};

  cursor: context-menu;
`;
