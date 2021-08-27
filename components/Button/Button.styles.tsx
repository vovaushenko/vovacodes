import styled from 'styled-components';

export const GenericButton = styled.button`
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* styling */
  padding: 5px 9px;
  border: 0;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.buttonBg};
  cursor: pointer;
  /* animation */
  transition: 0.3s transform ease, 0.2s background-color ease, 0.2s color;

  :active {
    transform: scale(0.9);
  }
`;
