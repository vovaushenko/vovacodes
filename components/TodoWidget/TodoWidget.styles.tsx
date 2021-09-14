import styled, { css } from 'styled-components';
import { slidInCenter } from '../../design-system/reusableCss';

export const Container = styled.div`
  /* make widget scrollable*/
  max-height: 200px;
  overflow-y: auto;
  /* show scrollbar */

  ::-webkit-scrollbar {
    display: block;
    width: 2px;
    height: 1px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue.icon};
  }
`;

export const AddTodo = styled.div``;
export const MyDay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space.sm};

  .icon {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.primary.text};
    margin-right: ${({ theme }) => theme.space.xxs};
  }

  .header-wrapper {
    display: flex;
    align-items: center;
  }

  .show-form-icon {
    color: ${({ theme }) => theme.colors.blue.icon};
    cursor: pointer;
    font-size: 1.25rem;
  }
`;

export const Form = styled.form``;

const lightThemeStyles = css`
  background: rgb(255, 255, 255);
`;
const darkThemeStyles = css`
  background: rgb(24, 34, 61);
`;
export const TodoInput = styled.input`
  ${({ theme }) =>
    theme.mode === 'dark' ? darkThemeStyles : lightThemeStyles};
  display: block;
  padding: 0.75rem 1rem;
  width: 100%;

  color: ${({ theme }) => theme.primary.text};
  background: ${({ theme }) => theme.colors.appCenter.searchBarBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  border-bottom: ${({ theme }) => `2px ${theme.colors.blue.icon} solid`};
  outline: 0;
  /* animation */
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const TodoList = styled.ul``;
export const Todo = styled.article`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.appCenter.searchBarBg};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  margin-top: ${({ theme }) => theme.space.xs};

  .todo-icon {
    margin-right: ${({ theme }) => theme.space.xs};
    cursor: pointer;
  }

  .star-icon {
    font-size: 1.25rem;
    align-self: flex-end;
    margin-left: auto;
    cursor: pointer;
  }

  /* animation */
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
