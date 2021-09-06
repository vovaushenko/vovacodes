import styled, { css } from 'styled-components';
import { Props } from './Logo';

const isExpandedStyles = css`
  @keyframes collapse {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 0.1;
    }
    100% {
      letter-spacing: -5em;
      opacity: 0;
    }
  }

  .letter {
    animation: collapse 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    opacity: 0;
    animation-delay: 500ms;
  }
`;

const isCollapsedStyles = css`
  .letter {
    visibility: visible;
    opacity: 1;
    animation-delay: 1500ms;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    /**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -5em;
        opacity: 0;
      }
      40% {
        opacity: 0.1;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const Container = styled.div<Props>`
  font-size: 2.5rem;
  letter-spacing: -7px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;

  .main-letter {
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
    position: relative;

    :before {
      content: '-';
      position: absolute;
      font-size: 2rem;
      top: -14px;
      left: 6px;
    }
  }

  ${({ isExpanded }) => (isExpanded ? isCollapsedStyles : isExpandedStyles)}
`;

export const A = styled.a`
  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
