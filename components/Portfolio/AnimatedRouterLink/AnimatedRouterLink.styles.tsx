import styled, { css } from 'styled-components';
import { Props } from './AnimatedRouterLink';
import { trackingInExpand } from '../../../styles/reusableCss';

type LinkProps = Pick<Props, 'variant'>;

const standardStyles = css`
  color: rgb(255, 255, 255, 1);
`;
const highlightStyles = css`
  color: #2bff88;

  :hover {
    background-image: linear-gradient(
      45deg,
      #4594ee 0%,
      #f1f5f7 52%,
      #5dd0f0 92%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const A = styled.a<LinkProps>`
  display: flex;
  font-size: 8rem;
  line-height: 9rem;
  letter-spacing: -5px;
  font-weight: 700;

  transition: all 0.7s cubic-bezier(0.2, 0.6, 0.2, 1);

  :hover {
    transform: translateX(50px);
    letter-spacing: -2px;
    background-image: linear-gradient(
      45deg,
      #01bf71 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${({ variant }) =>
    variant === 'highlight' ? highlightStyles : standardStyles};

  animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @media ${({ theme }) => theme.media.phone} {
    font-size: 5rem;
    line-height: 6.5rem;
  }
`;
