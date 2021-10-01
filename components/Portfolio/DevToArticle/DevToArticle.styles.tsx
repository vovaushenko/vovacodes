import styled from 'styled-components';

export const Container = styled.article`
  position: relative;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.portfolio.primaryColor.light};
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ImageColumn = styled.div`
  flex: 0.5;
`;
export const TextColumn = styled.div`
  flex: 0.5;
`;

export const Figure = styled.figure`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;
export const Figcaption = styled.figcaption``;

export const TagWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Tag = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    writing-mode: tb-rl;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
  font-size: 1.25rem;
  background-image: linear-gradient(
    45deg,
    #01bf71 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ExternalLink = styled.a`
  :focus-visible {
    outline: none;
    box-shadow: none;
  }

  :focus-visible::before {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.portfolio.primaryColor.light};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  :before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const Description = styled.p``;

export const Footer = styled.footer`
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.25rem;

  .stat__icon {
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
    font-size: 1.25rem;
    margin-bottom: 2px;
  }
`;
