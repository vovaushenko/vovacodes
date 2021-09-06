import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  background-color: #ffffff;
  color: ${({ theme }) => theme.portfolio.resumeColors.darkText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: initial;
  padding: 5rem 1rem;
`;

export const ResumeWrapper = styled.div`
  background-color: ${({ theme }) => theme.portfolio.resumeColors.bgColor};
  padding: 2rem;
  max-width: 90%;
  display: flex;
  gap: 1rem;
`;

/**
 * LEFT COLUMN
 */

export const LeftColumn = styled.aside`
  width: 25%;
  padding: 3rem 0;

  h3 {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  }
`;

export const ContactInfo = styled.address`
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
`;

/**
 * RIGHT COLUMN
 */

export const RightColumn = styled.section`
  width: 75%;
`;
export const SummaryHeader = styled.header``;

export const Name = styled.h1`
  font-size: 3.5rem;
  letter-spacing: -3px;

  span {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  }
`;
export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: -1px;
  line-height: 1;
`;

export const Summary = styled.summary`
  margin: 1rem 0;
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;
export const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000;

  .social-media-icon {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
    margin-right: 0.25rem;
    font-size: 1.25rem;
  }
`;

export const ResumeHeader = styled.h3`
  font-size: 1.25rem;
  text-transform: uppercase;
  margin: 1rem 0;
  color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
`;

export const EducationDetails = styled.div`
  h4 {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  }

  span {
    color: ${({ theme }) => theme.portfolio.resumeColors.lightText};
    font-weight: bold;
  }
`;

export const Projects = styled.div`
  a {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
    font-weight: bold;
  }
`;

export const University = styled.p`
  color: ${({ theme }) => theme.gray.dark};
  margin-bottom: 1rem;
`;

export const HR = styled.hr`
  border-top: 3px solid
    ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  border-bottom: 0;
  margin: 1rem 0;
`;
