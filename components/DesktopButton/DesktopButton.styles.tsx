import styled from 'styled-components';

interface Props {
  variant: 'desktop' | 'systemTray';
}

export const ButtonContainer = styled.button<Props>`
  /*  display  */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  /*  styling  */
  background: transparent;
  border: 0;

  padding: ${({ variant }) =>
    variant === 'desktop' ? '0.5rem 1.5rem' : '8px'};
  border-radius: ${({ theme }) => theme.borderRadius};

  cursor: ${({ variant }) =>
    variant === 'desktop' ? 'context-menu' : 'pointer'};

  transition: 0.3s all ease;

  :hover {
    background: ${({ theme, variant }) =>
      variant === 'desktop'
        ? 'rgba(131, 195, 255, 0.24)'
        : theme.systemTrayIconHoverBg};
  }
`;

export const Figure = styled.figure``;
export const Figcaption = styled.figcaption``;
