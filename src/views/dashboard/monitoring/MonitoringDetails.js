import React, { useEffect, useState } from "react";

import MonitoringHeader from "../../../components/monitorings/MonitoringHeader";
import DutyContainer from "../../../components/common/monitoring/DutyContainer";
import FeedbackMonitoring from "../../../components/common/monitoring/FeedbackMonitoring";
import MonitoringComments from "../../../components/common/monitoring/MonitoringComments";

import { Container } from "../team/styles/team";
import { Content, MonitoringInfoContainer } from "./styles/monitoring";
import { feedbacksApi } from "../../../api";
import { message, Spin, Button, Result } from "antd";

export default function General({ match }) {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet elit sed neque vulputate iaculis in id orci. Aliquam ac interdum nisl. Morbi et orci nec neque feugiat dictum. Nulla blandit nisl lobortis sagittis ornare. Quisque et vestibulum elit. Nunc commodo risus eget orci convallis, vulputate cursus libero sodales.";
  const { memberId } = match.params;

  const [member, setMember] = useState({});
  const [duties, setDuties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dutyId, setDutyId] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    setLoading(true);
    try {
      const response = await feedbacksApi.get(memberId);
      if (response.status === 200) {
        console.log(response);
        setDuties(response.data.duties);
        setMember(response.data);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      message.error("Não foi possível recuperar os dados do membro!");
      console.log(error.response.data);
      setLoading(false);
      setError(true);
    }
  }
  console.log({ dutyId });
  return (
    <Container>
      <Spin spinning={loading}>
        {!error ? (
          <>
            <MonitoringHeader
              img={member.image}
              name={member.name}
              role={member.position}
            />
            <Content>
              <DutyContainer
                duties={duties}
                setDutyId={setDutyId}
                dutyId={dutyId}
              />
              <MonitoringInfoContainer>
                <FeedbackMonitoring duties={duties} dutyId={dutyId} />
                <MonitoringComments comment={text} />
              </MonitoringInfoContainer>
            </Content>
          </>
        ) : (
          <Result
            status="500"
            title="Análise..."
            subTitle="Desculpe, mas algo aconteceu que não conseguimos recuperar as informações, tente novamente."
            extra={
              <Button type="primary" onClick={() => getInfo()}>
                Tente Novamente
              </Button>
            }
          />
        )}
      </Spin>
    </Container>
  );
}
