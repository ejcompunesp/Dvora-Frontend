import React from 'react';

import { TableStyle } from './styles/monitoring';
import { Container, Title, Content } from '../team/styles/team';

import MemberList from '../../../components/monitorings/MemberList';

export default function General() {
  return (
    <Container>
      <Title>
        <h2>Acompanhamento dos membros</h2>
      </Title>
      <Content>
        <TableStyle>
          <MemberList />
        </TableStyle>
      </Content>
    </Container>
  );
}
