import styled from 'styled-components';
import { rollInRight } from '../../../styles/reusableCss';

export const Container = styled.a`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
  }

  .contact-icon {
    font-size: 2.5rem;
    color: #2bff88;
    animation: ${rollInRight} 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
  }

  .hovicon {
    display: inline-block;
    cursor: pointer;
    border-radius: 50%;
    text-align: center;
    position: relative;
    text-decoration: none;
    z-index: 1;
  }

  .hovicon:after {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: '';
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .hovicon:before {
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    display: block;
    -webkit-font-smoothing: antialiased;
  }

  .hovicon.effect-1 {
    transition: background 0.2s, color 0.2s;
  }

  .hovicon.effect-1:after {
    top: -7px;
    left: -7px;
    padding: 7px;
    box-shadow: 0 0 0 4px #2bff88;
    transition: transform 0.2s, opacity 0.2s;
    transform: scale(0.8);
    opacity: 0;
  }

  .hovicon.effect-1.sub-b:after {
    transform: scale(1.2);
  }

  .hovicon.effect-1.sub-b:hover:after {
    transform: scale(1);
    opacity: 1;
  }
`;
