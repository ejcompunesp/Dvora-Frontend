import React from "react";

import MonitoringHeader from "../../../components/monitorings/MonitoringHeader";
import DutyContainer from "../../../components/common/monitoring/DutyContainer";
import FeedbackMonitoring from "../../../components/common/monitoring/FeedbackMonitoring";
import MonitoringComments from "../../../components/common/monitoring/MonitoringComments";

import { Container } from "../team/styles/team";
import { Content, MonitoringInfoContainer } from "./styles/monitoring";

export default function General() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet elit sed neque vulputate iaculis in id orci. Aliquam ac interdum nisl. Morbi et orci nec neque feugiat dictum. Nulla blandit nisl lobortis sagittis ornare. Quisque et vestibulum elit. Nunc commodo risus eget orci convallis, vulputate cursus libero sodales."
  return (
    <Container>
      <MonitoringHeader name="Roberto Carlinhos" role="Gerente de Projetos" />
      <Content>
        <DutyContainer />
        <MonitoringInfoContainer>
          <FeedbackMonitoring/>
          <MonitoringComments comment={text}/>
        </MonitoringInfoContainer>
      </Content>
    </Container>
  );
}
