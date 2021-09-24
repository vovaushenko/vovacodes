import { IContextMenuItem } from '../ContextMenuItem/ContextMenuItem';
import { useRouter } from 'next/router';

/**
 * Custom hook that is used to get initial configuration for desktop context menu
 *@function useContextMenuConfig
 *@returns {object} desktopContextMenuContent - returns object with configuration for desktop context menu (icons, text, actions)
 */
export const useContextMenuConfig = (): {
  desktopContextMenuContent: IContextMenuItem[];
} => {
  const router = useRouter();

  const reloadPage = () => router.reload();

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
        { id: 1, text: 'Name', action: null },
        { id: 2, text: 'Size', action: null },
        { id: 3, text: 'Date Modified', action: null },
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

  return { desktopContextMenuContent };
};
