import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.appCenter.bg};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

export const SearchForm = styled.form``;

export const TopApps = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.space.md};
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
        ? theme.colors.systemTray.bg
        : 'rgba(247, 250, 252, 0.9)'};
    box-shadow: ${({ theme }) => theme.boxShadow.appBtn};
  }
`;

export const QuickSearches = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
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
    margin-right: ${({ theme }) => theme.space.md};
  }
`;
