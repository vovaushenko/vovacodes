import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 400;
  }
`;

export const SearchForm = styled.form``;

export const TopApps = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;
export const TopApp = styled.li`
  display: grid;
  grid-template-columns: 1fr;

  button {
    width: 100%;
    height: auto;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? theme.systemTrayBackground
        : 'rgba(247, 250, 252, 0.9)'};
    box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  }
`;

export const QuickSearches = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QuickSearch = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;

  .icon {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.primary.text};
    margin-right: 1rem;
  }
`;
