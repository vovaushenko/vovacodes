import { FiBatteryCharging, FiBluetooth, FiMoon, FiWifi } from 'react-icons/fi';
import { MdAccessibility, MdAirplanemodeActive } from 'react-icons/md';
import React, { ReactNode } from 'react';
import { useActions } from '../../hooks/useActions';

interface ISettingsButton {
  id: number;
  text: string;
  variant: 'icon' | 'action';
  icon: ReactNode;
  btnAction: (() => void) | null;
}

export const useSettingsModalConfig = (): {
  settingsButtons: ISettingsButton[];
} => {
  const { toggleNightLightMode } = useActions();

  const settingsButtons: ISettingsButton[] = [
    {
      id: 1,
      text: 'Wifi',
      icon: <FiWifi className={'icon'} />,
      variant: 'action',
      btnAction: null,
    },
    {
      id: 2,
      text: 'Bluetooth',
      icon: <FiBluetooth className={'icon'} />,
      variant: 'action',
      btnAction: null,
    },
    {
      id: 3,
      text: 'Airplane Mode',
      icon: <MdAirplanemodeActive className={'icon'} />,
      variant: 'icon',
      btnAction: null,
    },
    {
      id: 4,
      text: 'Battery Saver',
      icon: <FiBatteryCharging className={'icon'} />,
      variant: 'icon',
      btnAction: null,
    },
    {
      id: 5,
      text: 'Night Light',
      icon: <FiMoon className={'icon'} />,
      variant: 'icon',
      btnAction: toggleNightLightMode,
    },
    {
      id: 6,
      text: 'Accessibility',
      icon: <MdAccessibility className={'icon'} />,
      variant: 'action',
      btnAction: null,
    },
  ];

  return { settingsButtons };
};
