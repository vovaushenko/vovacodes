import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.space.xs};
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.space.sm}`};

  :hover {
    background: ${({ theme }) => theme.colors.systemTray.bg};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
