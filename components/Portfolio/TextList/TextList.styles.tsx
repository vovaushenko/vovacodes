import styled from 'styled-components';

export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const LI = styled.li`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  &:before {
    content: '';
    display: inline-block;
    height: 1em;
    width: 1em;
    background-image: url(http://placehold.it/32?text=fallback); // Fallback PNG
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/93/Tango-bullet.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 0.25rem;
  }
`;

export const ListHeader = styled.h3`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
  margin: 0;
`;
