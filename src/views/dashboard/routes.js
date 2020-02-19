import React from 'react';
import Home from '../dashboard/home/Home';
import Settings from '../dashboard/settings/Settings';

import { FaHome } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

function isActive(path) {
  const url = window.location.pathname;
  return path === url;
}

const HomeIcon = <FaHome/>
const SettingsIcon = <MdSettings/>

export const routes = [
  {
    path: '/dashboard/home',
    active: (path) => isActive(path),
    icon: HomeIcon,
    component: Home
  },
  {
    path: '/dashboard/settings',
    active: (path) => isActive(path),
    icon: SettingsIcon,
    component: Settings
  },
];
