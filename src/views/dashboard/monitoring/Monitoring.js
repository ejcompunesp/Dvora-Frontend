import React from 'react';

import { RiMapPin2Line } from 'react-icons/ri';

import { TableStyle } from './styles/monitoring';
import { Container, Title, Content } from '../team/styles/team';

import MemberList from '../../../components/monitorings/MemberList';

export default function General() {
  return (
    <Container>
      <Title>
        <h2>Acompanhamento dos membros <RiMapPin2Line/></h2>
      </Title>
      <Content>
        <TableStyle>
          <MemberList />
        </TableStyle>
      </Content>
    </Container>
  );
}
