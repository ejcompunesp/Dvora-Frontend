import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FaBell, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogOut, FiX } from "react-icons/fi";

import { Dropdown, Menu } from 'antd';

import { TopNavbarContainer, TopNavItems, BreadCrumb, IconsList } from './styles/menus';
import dvoraLogo from '../../assets/dvora-logo.png';
import { logoutDashboard } from '../../api/auth'


export default function TopNavbar() {
  const [iconMenu, setIconMenu] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item key="1" >
        1st menu item
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" >
        2nd menu item
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={redirectToLogin}>
        <FiLogOut viewBox={'0 0 24 20'} /> Sair
      </Menu.Item>
    </Menu>
  )

  function redirectToLogin() {
    logoutDashboard();
    setTimeout(() => {
      history.push(`/login`);
    }, 1000)
  }
  
  function showOptions() {
    setIconMenu(!iconMenu);
    setDropdown(!dropdown);
  }
  return (
    <TopNavbarContainer background={"#00A7E1"}>
      <img src={dvoraLogo} />
      <TopNavItems>
        <BreadCrumb>EJComp - <span> Perfil do Usuário</span></BreadCrumb>
        <IconsList>
          <FaUser />
          <FaBell />
          <Dropdown overlay={menu}
            trigger={['click']}
            visible={dropdown}
          >
            {iconMenu ?
              <GiHamburgerMenu onClick={showOptions} />
              :
              <FiX onClick={showOptions} />
            }
          </Dropdown>
        </IconsList>
      </TopNavItems>
    </TopNavbarContainer>
  );
}
