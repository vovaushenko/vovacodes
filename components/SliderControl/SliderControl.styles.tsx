import styled, { css } from 'styled-components';

interface Props {
  themeMode: 'dark' | 'light';
  progress: string;
}

const lightStyles = css<Props>`
  --slider-color: #0652f7;
  --slider-thumb: #fff;
`;
const darkStyles = css<Props>`
  --slider-color: #69d3fa;
  --slider-thumb: #4d4d4d;
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
  margin-left: 0.5rem;
  -webkit-appearance: none;
  height: 5px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.9;

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
  }

  ::-moz-range-thumb {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: var(--slider-color);
    cursor: pointer;
  }
`;
