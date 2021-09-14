import styled from 'styled-components';

export const Container = styled.article`
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.cards.widgetBg};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: ${({ theme }) => theme.space.xxxs};
  background-color: ${({ theme }) => theme.colors.buttons.simpleButtonBg};
  cursor: context-menu;
`;
