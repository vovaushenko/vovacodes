import {
  FiBatteryCharging,
  FiBluetooth,
  FiMoon,
  FiShield,
  FiWifi,
} from 'react-icons/fi';
import {
  MdAccessibility,
  MdAirplanemodeActive,
  MdCast,
  MdMyLocation,
} from 'react-icons/md';
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
      variant: 'icon',
      btnAction: null,
    },
    {
      id: 7,
      text: 'Location',
      icon: <MdMyLocation className={'icon'} />,
      variant: 'icon',
      btnAction: null,
    },
    {
      id: 8,
      text: 'Security',
      icon: <FiShield className={'icon'} />,
      variant: 'icon',
      btnAction: null,
    },
    {
      id: 9,
      text: 'Sharing',
      icon: <MdCast className={'icon'} />,
      variant: 'icon',
      btnAction: null,
    },
  ];

  return { settingsButtons };
};
