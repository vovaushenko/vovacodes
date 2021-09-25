import { IContextMenuItem } from '../ContextMenuItem/ContextMenuItem';
import { useRouter } from 'next/router';
import { useActions } from '../../hooks/useActions';

/**
 * Custom hook that is used to get initial configuration for desktop context menu
 *@function useContextMenuConfig
 *@returns {object} desktopContextMenuContent - returns object with configuration for desktop context menu (icons, text, actions)
 */
export const useContextMenuConfig = (): {
  desktopContextMenuContent: IContextMenuItem[];
  systemTrayContextMenuContent: IContextMenuItem[];
} => {
  const router = useRouter();
  const { sortDesktopIcons } = useActions();

  const reloadPage = () => router.reload();

  const sortIconsByName = () => sortDesktopIcons('name');
  const sortIconsBySize = () => sortDesktopIcons('size');
  const sortIconsByDate = () => sortDesktopIcons('date');

  const desktopContextMenuContent: IContextMenuItem[] = [
    {
      id: 1,
      text: 'View',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Large Icons', action: null },
        { id: 2, text: 'Medium Icons', action: null },
        { id: 3, text: 'Small Icons', action: null, withUnderline: true },
        { id: 4, text: 'Show Desktop Icons', action: null },
      ],
    },
    { id: 2, text: 'Refresh', action: reloadPage },
    {
      id: 3,
      text: 'Sort by',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Name', action: sortIconsByName },
        { id: 2, text: 'Size', action: sortIconsBySize },
        { id: 3, text: 'Date Modified', action: sortIconsByDate },
      ],
      withUnderline: true,
    },
    {
      id: 4,
      text: 'Next Desktop Background',
      action: null,
    },
    {
      id: 5,
      text: 'Undo Delete',
      action: null,
    },
    {
      id: 6,
      text: 'Open in Windows Terminal',
      action: null,
      withUnderline: true,
    },
    {
      id: 7,
      text: 'Personalize',
      action: null,
      withUnderline: true,
    },
    {
      id: 8,
      text: 'About',
      action: null,
    },
  ];

  const systemTrayContextMenuContent: IContextMenuItem[] = [
    {
      id: 1,
      text: 'Align Icons',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Left', action: null },
        { id: 2, text: 'Center', action: null },
        { id: 3, text: 'Right', action: null },
      ],
      withUnderline: true,
    },
    {
      id: 2,
      text: 'Search',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Show', action: null },
        { id: 2, text: 'Hide', action: null },
      ],
    },
    {
      id: 3,
      text: 'Widgets',
      action: null,
      hoverMenuItems: [
        { id: 1, text: 'Show', action: null },
        { id: 2, text: 'Hide', action: null },
      ],
      withUnderline: true,
    },
    {
      id: 4,
      text: 'Show Desktop',
      action: null,
    },
  ];

  return { desktopContextMenuContent, systemTrayContextMenuContent };
};
