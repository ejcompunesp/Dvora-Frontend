import React from 'react';

import { routes as dashRoutes } from '../../views/dashboard/routes';

import { SidebarContainer } from './styles/menus';

export default function Siderbar() {
  console.log(dashRoutes);
  return (
    <SidebarContainer>
      <ul>
        {dashRoutes.map((route, idx) => (
          <li>{route.icon}</li>

        ))}
      </ul>
    </SidebarContainer>
  );
}
