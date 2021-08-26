import { FiBatteryCharging, FiBluetooth, FiMoon, FiWifi } from 'react-icons/fi';
import { MdAccessibility, MdAirplanemodeActive } from 'react-icons/md';
import React, { ReactNode } from 'react';

interface ISettingsIcon {
  id: number;
  text: string;
  variant: 'icon' | 'action';
  icon: ReactNode;
}

export const settingsIcons: ISettingsIcon[] = [
  {
    id: 1,
    text: 'Wifi',
    icon: <FiWifi className={'icon'} />,
    variant: 'action',
  },
  {
    id: 2,
    text: 'Bluetooth',
    icon: <FiBluetooth className={'icon'} />,
    variant: 'action',
  },
  {
    id: 3,
    text: 'Airplane Mode',
    icon: <MdAirplanemodeActive className={'icon'} />,
    variant: 'icon',
  },
  {
    id: 4,
    text: 'Battery Saver',
    icon: <FiBatteryCharging className={'icon'} />,
    variant: 'icon',
  },
  {
    id: 5,
    text: 'Focus Assist',
    icon: <FiMoon className={'icon'} />,
    variant: 'icon',
  },
  {
    id: 6,
    text: 'Accessibility',
    icon: <MdAccessibility className={'icon'} />,
    variant: 'action',
  },
];
