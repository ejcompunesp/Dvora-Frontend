import React from "react";

import { Container } from "../team/styles/team";

import MonitoringHeader from "../../../components/monitorings/MonitoringHeader";
import DutyCard from "../../../components/common/monitoring/DutyCard";
import DutyContainer from "../../../components/common/monitoring/DutyContainer";
import { Content } from "./styles/monitoring";

export default function General() {
  return (
    <Container>
      <MonitoringHeader name="Roberto Carlinhos" role="Gerente de Projetos" />
      <Content>
        <DutyContainer />
      </Content>
    </Container>
  );
}
