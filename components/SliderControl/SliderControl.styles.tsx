import styled, { css } from 'styled-components';

interface Props {
  themeMode: 'dark' | 'light';
  progress: string;
}

const lightStyles = css<Props>`
  --slider-color: ${({ theme }) =>
    theme.colors.buttons.settingsButton.activeBg};
  --slider-thumb: #fff;
`;
const darkStyles = css<Props>`
  --slider-color: ${({ theme }) =>
    theme.colors.buttons.settingsButton.activeBg};
  --slider-thumb: ${({ theme }) => theme.colors.gray.dark};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.25rem;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Input = styled.input<Props>`
  ${({ themeMode }) => themeMode === 'dark' && darkStyles};
  ${({ themeMode }) => themeMode === 'light' && lightStyles};

  width: 100%;
  margin-left: ${({ theme }) => theme.space.xxs};
  -webkit-appearance: none;
  height: 5px;
  border-radius: 5px;
  outline: none;
  opacity: 0.95;
  transition: opacity 0.2s ease-in;

  background: ${({ progress }) => `linear-gradient(
    to right,
    var(--slider-color) 0%,
    var(--slider-color) ${progress}%,
    #fff 50%,
    #fff 100%
  )`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 4px solid var(--slider-thumb);
    background: var(--slider-color);
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.appBtn};
  }

  ::-moz-range-thumb {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: var(--slider-color);
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.appBtn};
  }
`;
