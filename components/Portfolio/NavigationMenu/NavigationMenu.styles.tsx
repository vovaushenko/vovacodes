import styled, { css } from 'styled-components';
import { slideTop } from '../../../design-system/reusableCss';

export const Container = styled.button`
  /* styling */
  height: 2rem;
  width: auto;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  position: relative;

  .hamburger {
    z-index: ${({ theme }) => theme.zIndex.navigation + 1};
    position: relative;
    width: 20px;
    height: 4px;
    background: #fff;
    transition: 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .hamburger:before {
    top: -12px;
  }

  .hamburger:after {
    top: 12px;
  }

  .icon-one {
    cursor: pointer;
  }

  .hamburger-one:before,
  .hamburger-one:after {
    position: absolute;
    right: 0;
    content: '';
    width: 30px;
    height: 4px;
    background: ${({ theme }) => theme.portfolio.primaryColor.light};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .icon-one.active-one .hamburger-one {
    background: rgba(0, 0, 0, 0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
  }

  .icon-one.active-one .hamburger-one:before {
    top: 0;
    transform: rotate(45deg);
  }

  .icon-one.active-one .hamburger-one:after {
    top: 0;
    transform: rotate(135deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  isOpen: boolean;
}

const slideOutAnimation = css`
  animation: out 0.3s ease-in both;

  @keyframes out {
    0% {
      transform: scale(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }

    100% {
      transform: scale(0);
      transform-origin: 100% 0%;
      opacity: 0;
    }
  }
`;

const isOpenStyle = css`
  visibility: visible;
  opacity: 1;
`;

const isClosedStyle = css`
  visibility: hidden;
  transition: visibility 0.5s,
    opacity 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  opacity: 0;
`;

export const Menu = styled.nav<Props>`
  z-index: ${({ theme }) => theme.zIndex.navigation};
  position: absolute;
  top: -2rem;
  right: -2rem;
  ${({ isOpen }) => (isOpen ? isOpenStyle : isClosedStyle)};
  display: flex;
  flex-direction: column;
  min-width: 350px;

  padding: 4rem;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  );
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  animation: scale-in-tr 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes scale-in-tr {
    0% {
      transform: scale(0);
      transform-origin: 100% 0%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }

  ${({ isOpen }) => isOpen === false && slideOutAnimation};

  .router-list,
  .social-media {
    animation: ${slideTop} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.3s;
  }

  @media ${({ theme }) => theme.media.phone} {
    width: 100vw;
  }
`;

export const NavLink = styled.a`
  font-size: 1.25rem;
  color: #fff;

  :hover {
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }
`;

export const RouterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  margin-top: 1rem;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  h4 {
    writing-mode: vertical-rl;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }
`;

export const SocialMediaContactsList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;
