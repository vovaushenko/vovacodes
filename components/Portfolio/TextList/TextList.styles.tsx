import styled from 'styled-components';

export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 1rem 0;
`;

interface Props {
  iconUrl: string;
}

export const LI = styled.li<Props>`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-size: 1rem;

  &:before {
    content: '';
    display: inline-block;
    height: 1em;
    width: 1em; // Fallback PNG
    background-image: ${({ iconUrl }) => `url(${iconUrl})`};
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 0.25rem;
  }
`;

export const ListHeader = styled.h3`
  color: ${({ theme }) => theme.portfolio.primaryColor.dark};
  margin: 0;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 600;
`;
