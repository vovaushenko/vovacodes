import styled from 'styled-components';
import { Props } from './ArticleFiltersMenu';
import { slideTop } from '../../../design-system/reusableCss';

type ContainerProps = Pick<Props, 'isMenuVisible'> & { menuWidth: number };

export const Container = styled.aside<ContainerProps>`
  z-index: ${({ theme }) => theme.zIndex.modal};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  position: absolute;
  top: 20%;

  width: ${({ menuWidth }) => `${menuWidth}px`};
  min-height: ${({ menuWidth }) => `${menuWidth * 1.25}px`};
  background-color: ${({ theme }) => theme.portfolio.secondaryBg.purple};

  padding: 3rem;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  );
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  transition: transform 0.5s ease;
  transform: ${({ isMenuVisible, menuWidth }) =>
    isMenuVisible ? `translateX(10px)` : `translateX(-${menuWidth + 50}px)`};
`;

interface HeaderProps {
  variant: 'vertical' | 'horizontal';
}

export const Header = styled.h3<HeaderProps>`
  font-size: 1.5rem;
  writing-mode: ${({ variant }) =>
    variant === 'vertical' ? 'vertical-rl' : null};
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;

export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
export const LI = styled.li``;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;

  animation: ${slideTop} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.5s;
`;
export const SortingTagsWrapper = styled.div`
  text-align: center;
  animation: ${slideTop} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.8s;
`;
