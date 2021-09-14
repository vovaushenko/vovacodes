import styled, { css } from 'styled-components';

export const Container = styled.fieldset`
  position: relative;
  padding: 0.25rem 0;
  border: 0;
  width: 100%;
  /* custom background and color  on form autofill */

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #4831d4 inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #fff !important;
  }

  @media ${({ theme }) => theme.media.tablet} {
    label {
      font-size: 1rem;
    }

    input {
      font-size: 1rem;
    }
  }
`;

const labelWithValueStyles = css`
  top: -11px;
  left: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;

interface LabelProps {
  hasValue: boolean;
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  font-size: 1.5rem;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
  text-transform: capitalize;

  // if label is not empty the below styles will override some default styles, thereby positioning label above input
  ${({ hasValue }) => hasValue && labelWithValueStyles};
`;

interface InputProps {
  hasError: boolean;
}

export const Input = styled.input<InputProps>`
  display: block;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  color: ${({ theme }) => theme.primary.text};
  background: transparent;
  outline: 0;
  border: 0;
  border-bottom: 3px solid ${({ theme }) => theme.portfolio.primaryColor.light};
  border-color: ${({ theme, hasError }) =>
    hasError
      ? theme.colors.red.lightDanger
      : theme.portfolio.primaryColor.light};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.portfolio.primaryColor.light};
    border-color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }
`;

interface ErrorProps {
  hasError: boolean;
}

export const Error = styled.div<ErrorProps>`
  visibility: ${({ hasError }) => (hasError ? 'visible' : 'hidden')};
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.red.lightDanger};
  font-size: 1rem;

  .icon {
    font-size: 1rem;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.red.lightDanger};
  }
`;
