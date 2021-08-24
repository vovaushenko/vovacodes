import styled from 'styled-components';

export const ButtonContainer = styled.button`
  /*  display  */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  /*  styling  */
  background: transparent;
  border: 0;
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s color ease-in-out;
  cursor: context-menu;

  :hover {
    background: rgba(131, 195, 255, 0.24);
  }
`;

export const Figure = styled.figure``;
export const Figcaption = styled.figcaption``;
