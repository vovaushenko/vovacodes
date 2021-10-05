import { css, keyframes } from 'styled-components';

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
/**
 * @keyframes slideBottom
 * @returns {keyframes} - track animation for skill card appearance
 * @example animation: ${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slideBottom = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

/**
 * @keyframes Main animation dis-appearance for modals, popups and hidden components
 * @returns {keyframes} - keyframes for element's dis-appearance animations
 * @example animation: ${slideOutKeyframes} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
 */
export const slideOutKeyframes = keyframes`
  0% {
    transform: translateZ(0) rotateX(0);
    opacity: 1;
  }
  54% {
    transform: translateZ(-160px) rotateX(87deg);
    opacity: 1;
  }
  100% {
    transform: translateZ(-800px) rotateX(90deg);
    opacity: 0;
  }
`;

/**
 * @keyframes rollInLeft
 * @returns {keyframes} - keyframes for element's roll in appearance
 * @example animation: ${rollInLeft} 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
 */
export const rollInLeft = keyframes`
  0% {
    transform: translateX(-400px) rotate(-360deg);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
`;
/**
 * @keyframes rollInRight
 * @returns {keyframes} - keyframes for element's roll in appearance
 * @example animation: ${rollInRight} 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
 */
export const rollInRight = keyframes`
  0% {
    transform: translateX(400px) rotate(360deg);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
`;
/**
 * @keyframes floatKeyframes
 * @returns {keyframes} - keyframes for element's floating effect
 * @example  animation: ${float} 6s ease-in-out infinite;
 */
export const floatKeyframes = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
`;
/**
 * @keyframes floatKeyframes
 * @returns {keyframes} - keyframes for element's floating effect
 * @example  animation: ${float} 6s ease-in-out infinite;
 */
export const floatingMobileKeyframes = keyframes`
  0% {
    transform: translatey(0px) translateX(0px);

  }
  50% {
    transform: translatey(-34px) translateX(10px);
  }
  100% {
    transform: translatey(0px) translateX(0px);
  }
`;
/**
 * @keyframes floatKeyframes
 * @returns {keyframes} - keyframes for element's floating effect
 * @example  animation: ${float} 6s ease-in-out infinite;
 */
export const floatingWatchKeyframes = keyframes`
  0% {
    transform: translatey(0px) translateX(0px);

  }
  50% {
    transform: translatey(-40px) translateX(-5px);
  }
  100% {
    transform: translatey(0px) translateX(0px);
  }
`;

/**
 * @keyframes likeKeyframe
 * @returns {keyframes} - keyframes for element's floating effect
 * @example  animation: ${likeKeyframe} 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
 */
export const likeKeyframe = keyframes`
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
`;

/**
 * @keyframes windowsSlitOutKeyframes
 * @returns {keyframes} - keyframes for windows unmounting
 * @example  animation: ${windowsSlitOutKeyframes} 0.4s ease-in both;
 */
export const windowsSlitOutKeyframes = keyframes`
  0% {
    transform: translateZ(0) rotateX(0);
    opacity: 1;
  }
  54% {
    transform: translateZ(-150px) rotateX(87deg);
    opacity: 0.6;
  }
  100% {
    transform: translateZ(-800px) rotateX(90deg);
    opacity: 0;
  }
`;

/**
 * portion of styles to make scrollbar visible with unified app style
 * @css showScrollbarStyles
 * @returns {keyframes} - keyframes for windows unmounting
 */

export const showScrollbarStyles = css`
  ::-webkit-scrollbar {
    display: block;
    width: 2px;
    height: 1px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue.icon};
  }
`;

/**
 * @keyframes slideInRightKeyframes
 * @returns {keyframes} - keyframes for windows unmounting
 * @example  animation: ${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slideInRight = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
/**
 * @keyframes slideInLeftKeyframes
 * @returns {keyframes} - keyframes for windows unmounting
 * @example  animation: ${slideInLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slideInLeft = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
