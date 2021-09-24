import styled from 'styled-components';
import { IContextMenuItem } from './ContextMenuItem';

type ContainerProps = Pick<IContextMenuItem, 'withUnderline'>;

export const Container = styled.li<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space.xxs} ${theme.space.md}`};

  cursor: pointer;
  border-bottom: ${({ theme, withUnderline }) =>
    withUnderline ? `1px solid ${theme.colors.gray.invisible}` : ''};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    text-transform: capitalize;
    color: ${({ theme }) => theme.primary.text};
  }

  .icon {
    margin-top: 1px;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.primary.text};
  }
`;

interface Props {
  isContextMenuShown: boolean;
  distanceFromMainContainer: number;
}

export const ContextMenuWrapper = styled.aside<Props>`
  position: absolute;
  top: 0;
  right: ${({ distanceFromMainContainer }) =>
    `${-distanceFromMainContainer}px`};

  visibility: ${({ isContextMenuShown }) =>
    isContextMenuShown ? 'visible' : 'hidden'};
  transition: visibility 300ms;
  backdrop-filter: blur(20.5px);
`;
