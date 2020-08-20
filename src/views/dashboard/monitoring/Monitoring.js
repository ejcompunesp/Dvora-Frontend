import React from 'react';

import { RiMapPin2Line } from 'react-icons/ri';

import { TableStyle } from './styles/monitoring';
import { Content } from '../team/styles/team';

import MemberList from '../../../components/monitorings/MemberList';
import Header from '../../../components/common/Header';

export default function General() {
  return (
    <>
      <Header
        title="Acompanhamento dos membros"
        icon={<RiMapPin2Line />}
      />
      <Content>
        <TableStyle>
          <MemberList />
        </TableStyle>
      </Content>
    </>
  );
}
