import React from 'react';

import { FaBell, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { BlueNavbar, BlueNavItems, BreadCrumb, IconsList } from './styles/menus';
import dvoraLogo from '../../assets/dvora-logo.png';

export default function TopNavbar() {
  return (
    <BlueNavbar background={"#00A7E1"}>
      <img src={dvoraLogo}/>
      <BlueNavItems>
        <BreadCrumb>EJComp - <span> Perfil do Usuário</span></BreadCrumb>
        <IconsList>
          <FaUser/>
          <FaBell/>
          <GiHamburgerMenu/>
        </IconsList>
      </BlueNavItems>
    </BlueNavbar>
  );
}
