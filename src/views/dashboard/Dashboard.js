import React from 'react';
import { DashboardContainer } from './styles/dashboard';
import Menu from '../../components/menus/Nav';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Menu/>
    </DashboardContainer>
  );
}
