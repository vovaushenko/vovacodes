import { ReactNode } from 'react';

export interface IWindow {
  windowName: string;
  windowIcon: string;
  size: { height: number; width: number };
  isOpen: boolean;
  windowContent: ReactNode | null;
}

export interface WindowsState {
  openedWindows: IWindow[];
}

export enum WindowsActionTypes {
  OPEN_WINDOW = 'OPEN_WINDOW',
  CLOSE_WINDOW = 'CLOSE_WINDOW',
}

export type WindowsAction =
  | {
      type: WindowsActionTypes.OPEN_WINDOW;
      payload: IWindow;
    }
  | {
      type: WindowsActionTypes.CLOSE_WINDOW;
      payload: string;
    };
