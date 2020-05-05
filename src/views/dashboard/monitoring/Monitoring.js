import React from 'react';

import { TableStyle } from './styles/monitoring';
import { Container, Title } from '../team/styles/team';

import MemberList from '../../../components/dashboardComponents/MemberList';

export default function General() {
  return (
    <Container>
      <Title>
        Acompanhamento dos membros
      </Title>
      <TableStyle>
        <MemberList />
      </TableStyle>
    </Container>
  );
}
