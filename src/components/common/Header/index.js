import React from 'react';

import { Content } from './styles';

function Header({ title, icon, button }) {
  return(
    <Content>
      <h2>{title} {icon}</h2>
      {button}
    </Content>
  );
}

export default Header;