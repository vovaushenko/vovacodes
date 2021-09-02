import styled from 'styled-components';

interface Props {
  isHovering: boolean;
}

export const LIcontainer = styled.li<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;

  a {
    position: absolute;
    color: purple;
    left: ${({ isHovering }) => (isHovering ? '5px' : '')};
    text-align: center;
    font-weight: 900;

    p {
      padding: 0.125rem 0;
      text-transform: capitalize;
      width: ${({ isHovering }) => (isHovering ? '8rem' : 'auto')};
      transition: color 0.2s, background-color 0.3s;
    }
  }
`;
