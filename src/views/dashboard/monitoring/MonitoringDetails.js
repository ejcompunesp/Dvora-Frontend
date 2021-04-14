import React, { useEffect, useState } from "react";

import MonitoringHeader from "../../../components/monitorings/MonitoringHeader";
import DutyContainer from "../../../components/common/monitoring/DutyContainer";
import FeedbackMonitoring from "../../../components/common/monitoring/FeedbackMonitoring";
import MonitoringComments from "../../../components/common/monitoring/MonitoringComments";

import { Content, MonitoringInfoContainer } from "./styles/monitoring";
import { feedbacksApi } from "../../../api";
import { message, Spin, Button, Result } from "antd";

export default function General(props) {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet elit sed neque vulputate iaculis in id orci. Aliquam ac interdum nisl. Morbi et orci nec neque feugiat dictum. Nulla blandit nisl lobortis sagittis ornare. Quisque et vestibulum elit. Nunc commodo risus eget orci convallis, vulputate cursus libero sodales.";
  const { memberId } = props.match.params;

  const [member, setMember] = useState({});
  const [duties, setDuties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dutyId, setDutyId] = useState(null);
  const [duty, setDuty] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (dutyId !== null) setDuty(duties.filter((item) => item.id === dutyId));
  }, [dutyId]);

  async function getInfo() {
    setLoading(true);
    try {
      const response = await feedbacksApi.get(memberId);
      if (response.status === 200) {
        setDuties(response.data.duties);
        setMember(response.data);
        setLoading(false);
        setError(false);
        console.log(response)
      }
    } catch (error) {
      message.error("Não foi possível recuperar os dados do membro!");
      console.log(error.response.data);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div>
      <Spin spinning={loading}>
        {!error ? (
          <>
            <MonitoringHeader
              img={member.image}
              name={member.name}
              role={member.position}
              feedback={duty.length > 0 && duty[0].feedback}
            />
            <Content>
              <DutyContainer
                duties={duties}
                setDutyId={setDutyId}
                dutyId={dutyId}
              />
              <MonitoringInfoContainer>
                <FeedbackMonitoring duties={duties} dutyId={dutyId} />
                <MonitoringComments comment={text} duties={duties} dutyId={dutyId}/>
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
      </div>
  );
}
