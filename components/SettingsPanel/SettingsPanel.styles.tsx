import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .icon {
    font-size: 1.2rem;
  }
`;

export const Tray = styled.div`
  display: flex;
  align-items: center;
`;

export const Settings = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
  padding: ${({ theme }) => theme.space.xxs};
  border-radius: ${({ theme }) => theme.borderRadius};

  :hover {
    background: ${({ theme }) => theme.colors.systemTray.bg};
  }
`;
