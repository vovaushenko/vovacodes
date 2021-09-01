import { keyframes } from 'styled-components';

/**
 * @keyframes slidInCenter
 * @returns {keyframes} - slide in animations for card appearance
 * @example animation: ${slidInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slidInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
/**
 * @keyframes tiltIn
 * @returns {keyframes} - tilt in animations for window appearance
 * @example animation: ${tiltIn} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const tiltIn = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 0.6;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

/**
 * @keyframes trackingInExpand
 * @returns {keyframes} - track animation for headers appearance
 * @example animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
 */
export const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

/**
 * @keyframes slideTop
 * @returns {keyframes} - track animation for headers appearance
 * @example animation: ${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slideTop = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
