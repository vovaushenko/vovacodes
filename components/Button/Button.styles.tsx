import styled, { css } from 'styled-components';
import { Props } from './Button';

type ButtonStyledProps = Pick<Props, 'variant'>;

const likeButtonStyles = css`
  border-radius: 1.5rem;
  padding: 0.5rem 1.25rem;
  gap: 0.5rem;
`;

export const GenericButton = styled.button<ButtonStyledProps>`
  /* display */
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
  /* styling */
  padding: 5px 10px;
  border: 0;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primary.text};
  background-color: ${({ theme }) => theme.colors.buttons.simpleButtonBg};
  text-transform: capitalize;
  cursor: pointer;
  /* animation */
  transition: 0.3s transform ease, 0.2s background-color ease, 0.2s color;
  /*variant specific styles that will override the above styles*/

  ${({ variant }) => variant === 'likeBtn' && likeButtonStyles};

  :active {
    transform: scale(0.9);
  }

  .icon {
    margin-top: 2px;
    font-size: 0.75rem;
  }
`;
