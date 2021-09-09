import { ReactNode } from 'react';

export interface ISystemTrayButton {
  id: number;
  src: string;
  size: { width: number; height: number };
  action: null | (() => void);
  alt: string;
  willOpenWindowWith: ReactNode | null;
}
