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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* styling */
  padding: 5px 9px;
  border: 0;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primary.text};
  background-color: ${({ theme }) => theme.buttonBg};
  text-transform: capitalize;
  cursor: pointer;
  /* animation */
  transition: 0.3s transform ease, 0.2s background-color ease, 0.2s color;
  /*variant specific styles that will override the above styles*/

  ${({ variant }) => variant === 'likeBtn' && likeButtonStyles};

  :active {
    transform: scale(0.9);
  }
`;
