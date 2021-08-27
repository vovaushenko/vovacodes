import styled, { css } from 'styled-components';

interface Props {
  variant: 'desktop' | 'systemTray' | 'pinnedApp' | 'recommendedApp';
}

const desktopButtonStyles = css`
  padding: 0.5rem 1.5rem;
  cursor: context-menu;

  :hover {
    background: rgba(131, 195, 255, 0.24);
  }
`;
const systemTrayButtonStyles = css`
  padding: 8px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.systemTrayIconHoverBg};
  }
`;
const pinnedAppButtonStyles = css`
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.pinnedAppHoverBg};
  }
`;

const recommendedAppButtonStyles = css`
  justify-content: flex-start;
  flex-direction: row;
  padding: 0.25rem 1.25rem;
  cursor: pointer;

  figure {
    display: flex;
  }

  :hover {
    background: ${({ theme }) => theme.pinnedAppHoverBg};
  }
`;

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

  ${({ variant }) => variant === 'desktop' && desktopButtonStyles};
  ${({ variant }) => variant === 'systemTray' && systemTrayButtonStyles};
  ${({ variant }) => variant === 'pinnedApp' && pinnedAppButtonStyles};
  ${({ variant }) =>
    variant === 'recommendedApp' && recommendedAppButtonStyles};

  border-radius: ${({ theme }) => theme.borderRadius};

  transition: 0.3s all ease;
`;

export const Figure = styled.figure``;
export const Figcaption = styled.figcaption``;

export const RecommendedAppDescription = styled.figcaption`
  text-align: start;
  margin-left: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const FileName = styled.h4`
  color: ${({ theme }) => theme.primary.text};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 400;
`;
