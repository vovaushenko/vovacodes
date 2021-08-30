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
