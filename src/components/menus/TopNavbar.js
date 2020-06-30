import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FaBell, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogOut, FiX } from "react-icons/fi";

import { Dropdown, Menu, Spin } from 'antd';

import { TopNavbarContainer, TopNavItems, BreadCrumb, IconsList } from './styles/menus';
import dvoraLogo from '../../assets/dvora-logo.png';
import { logoutDashboard } from '../../api/auth'


export default function TopNavbar({ je }) {
  const [iconMenu, setIconMenu] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <Spin spinning={loading} size='small'>
        <FiLogOut viewBox={'0 0 24 20'}/> Sair
        </Spin>
      </Menu.Item>
    </Menu>
  )

  function redirectToLogin() {
    setLoading(true);
    logoutDashboard();
    setTimeout(() => {
      setLoading(false);
      history.push('/login');
    }, 1000)
  }

  function redirectToProfile() {
    history.push(`/dashboard/profile`);
  }
  
  function showOptions() {
    setIconMenu(!iconMenu);
    setDropdown(!dropdown);
  }

  return (
    <TopNavbarContainer background={"#00A7E1"}>
      <img src={dvoraLogo} alt="Dvora"/>
      <TopNavItems>
        <BreadCrumb>{je.name}</BreadCrumb>
        <IconsList>
          <FaUser onClick={redirectToProfile} />
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
