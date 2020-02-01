import Home from '../dashboard/home/Home';

import { FaHome } from 'react-icons/fa';

export const routes = [
  {
    path: '/dashboard/home',
    active: false,
    icon: FaHome,
    component: Home
  }
];
