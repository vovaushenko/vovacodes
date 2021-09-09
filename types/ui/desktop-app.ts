import { ReactNode } from 'react';

export interface IDesktopApp {
  id: number;
  variant: 'desktop';
  willOpenWindowWith: ReactNode | null;
  iconSrc: string;
  iconSize: { height: number; width: number };
  text: string;
  action: null | (() => void);
}
