import styled, { css } from 'styled-components';

const activeStyles = css`
  background-color: ${({ theme }) => theme.portfolio.primaryColor.light};
  color: ${({ theme }) => theme.portfolio.secondaryBg.purple};
  border: 2px solid ${({ theme }) => theme.portfolio.primaryColor.light};
`;
const basicStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.portfolio.text.light};
  border: 2px solid ${({ theme }) => theme.portfolio.text.light};

  :hover {
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
    border-color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }
`;

interface Props {
  isActive: boolean;
}

export const Container = styled.button<Props>`
  ${({ isActive }) => (isActive ? activeStyles : basicStyles)};

  transition: all 0.3s ease;

  padding: 0.5rem 1.25rem;
  border-radius: 0.75rem;
  cursor: pointer;
`;
