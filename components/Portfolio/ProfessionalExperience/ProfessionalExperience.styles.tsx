import styled from 'styled-components';

export const Container = styled.article`
  margin: 2rem 0;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  companyImg: string;
}

export const Company = styled.h4<Props>`
  color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  font-size: 1rem;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    background-image: ${({ companyImg }) => `url(${companyImg})`};
    background-size: contain;
    background-repeat: no-repeat;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.portfolio.resumeColors.lightText};
  }
`;

export const Role = styled.span`
  font-size: 1rem;
`;

export const TimeFrame = styled.time`
  font-weight: bold;
  color: ${({ theme }) => theme.portfolio.resumeColors.lightText};
`;
