import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 0.25rem 0;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #4831d4 inset !important;
  }
`;

export const Label = styled.label`
  position: absolute;
  color: #fff;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  display: block;
  height: 3rem;
  padding: 0.5rem;
  width: 100%;
  font-size: 1.5rem;
  background: transparent;
  border: 0;
  outline: 0;
  color: #fff;
  border-bottom: 3px solid ${({ theme }) => theme.portfolio.primaryColor.light};

  [data-empty='false'] + label,
  :valid + label,
  :focus + label {
    top: -11px;
    left: 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }

  -webkit-text-fill-color: #2bff88 !important;
`;
