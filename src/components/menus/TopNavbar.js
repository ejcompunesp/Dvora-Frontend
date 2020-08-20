import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FaBell, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogOut, FiX } from 'react-icons/fi';

import { Dropdown, Menu, Spin } from 'antd';

import { TopNavbarContainer, TopNavItems, BreadCrumb, IconsList, TopNavLogo } from './styles/menus';
import dvoraLogo from '../../assets/dvora-logo.png';
import { logoutDashboard, isLoginMember } from '../../api/auth'


export default function TopNavbar({ je, logout, member }) {
  const apiURL = 'https://backend-dvora.herokuapp.com/files/member';
  const [iconMenu, setIconMenu] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item key="1" >
        Em desenvolvimento
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" >
        Em desenvolvimento
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={redirectToLogin}>
        <Spin spinning={loading} size='small'>
          <FiLogOut viewBox={'0 0 24 20'} /> Log Out
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
    logout();
  }

  function showOptions() {
    setIconMenu(!iconMenu);
    setDropdown(!dropdown);
  }

  return (
    <TopNavbarContainer>
      <TopNavLogo>
        <img src={dvoraLogo} alt="Dvora" />
      </TopNavLogo>
      <TopNavItems>
        <BreadCrumb>{je.name}</BreadCrumb>
        <IconsList>
          {isLoginMember() && member.image ?
            <img src={`${apiURL}/${member.image}`} />
            :
            <FaUser />
          }
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
