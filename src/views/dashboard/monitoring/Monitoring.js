import React from 'react';

import { FiMonitor } from 'react-icons/fi';

import { TableStyle } from './styles/monitoring';
import { Content } from '../team/styles/team';

import MemberList from '../../../components/monitorings/MemberList';
import Header from '../../../components/common/Header';

export default function General() {
  return (
    <>
      <Header
        title="Acompanhamento dos membros"
        icon={<FiMonitor />}
      />
      <Content>
        <TableStyle>
          <MemberList />
        </TableStyle>
      </Content>
    </>
  );
}
