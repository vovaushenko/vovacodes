import styled, { css } from 'styled-components';
import { slidInCenter } from '../../styles/reusableCss';

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
    background: ${({ theme }) => theme.activeColor};
  }
`;

export const AddTodo = styled.div``;
export const MyDay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  .icon {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.primary.text};
    margin-right: 0.25rem;
  }

  .header-wrapper {
    display: flex;
    align-items: center;
  }

  .show-form-icon {
    color: ${({ theme }) => theme.activeColor};
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
  background: rgb(24, 34, 61);
  border: 0;
  border-bottom: 2px #4489aa solid;
  color: ${({ theme }) => theme.primary.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  /* animation */
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const TodoList = styled.ul``;
export const Todo = styled.article`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.pinnedAppHoverBg};
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;

  .todo-icon {
    margin-right: 0.5rem;
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
