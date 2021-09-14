import styled, { css } from 'styled-components';

interface Props {
  isTurnedOn: boolean;
}

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const activeStyles = css`
  background-color: ${({ theme }) =>
    theme.colors.buttons.settingsButton.activeBg};

  .icon {
    color: ${({ theme }) => theme.colors.buttons.settingsButton.activeColor};
  }
`;

export const Button = styled.button<Props>`
  width: 100%;
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* styling */
  color: ${({ theme }) => theme.primary.text};
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.buttons.settingsButton.bg};
  cursor: pointer;
  border: 0;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme }) => theme.boxShadow.appBtn};
  /* if is turned on - apply styles */
  ${({ isTurnedOn }) => isTurnedOn && activeStyles};

  .icon {
    font-size: 1.25rem;
  }

  :hover {
    opacity: 0.75;
  }

  :active {
    transform: scale(0.9);
  }
`;
