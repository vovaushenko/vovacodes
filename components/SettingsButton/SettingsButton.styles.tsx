import styled, { css } from 'styled-components';

interface Props {
  isTurnedOn: boolean;
}

export const ButtonContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary.text};
  text-align: center;
`;

const activeStyles = css`
  background-color: ${({ theme }) => theme.settingButtonIsActive.bg};
  color: ${({ theme }) => theme.settingButtonIsActive.color};
`;

export const Button = styled.button<Props>`
  width: 100%;
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* styling */
  color: ${({ theme }) => theme.primary.text};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.settingsButtonBg};
  cursor: pointer;
  border: 0;
  transition: all 0.2s ease-in-out;
  /* if is turned on - apply styles */
  ${({ isTurnedOn }) => isTurnedOn && activeStyles};

  .icon {
    font-size: 1.25rem;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.35);
  }
`;
