import React, { useState, useEffect } from "react";

import { Title } from "../../views/dashboard/team/styles/team";
import { ProfilePhoto } from "./styles/monitoring";

import imgTest from "../../assets/John Doe.png";
import { Button, message } from "antd";
import { feedbacksApi } from "../../api";

const MonitoringHeader = ({ name, role, img, feedback }) => {
  const apiURL = "https://backend-dvora.herokuapp.com/files/member";
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Concluir acompanhamento');

  function getDisable() {
    if(!feedback) {
      setButtonText('Concluir acompanhamento!');
      return setDisabled(true)
    }
    else if(feedback.isMonitoringDone) {
      setButtonText('Acompanhamento já concluído!');
      return setDisabled(true)
    };
    setButtonText('Concluir acompanhamento!');
    return setDisabled(false);
  }

  useEffect(() => {
    getDisable();
  }, [feedback]);

  async function finishFeedback() {
    setLoading(true);
    try {
      if(feedback) {
        const response = await feedbacksApi.put(feedback.id);
        if(response.status === 200) {
          message.success('Acompanhamento concluído!');
          setTimeout(() => {
            window.location.reload();
          }, 200);
        } 
      } else {
        message.error('Não foi possível finalizar o acompanhamento.');
      }
    } catch (err) {
      message.error(err.response.data.msg); 
    }
    setLoading(false);
  }

  return (
    <>
      <Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <ProfilePhoto src={img ? `${apiURL}/${img}` : imgTest} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>{name} - Acompanhamento</h2>
              <h3>{role}</h3>
            </div>
          </div>
          <Button type="primary" disabled={disabled} loading={loading} onClick={() => finishFeedback()}>
            {buttonText}
          </Button>
        </div>
      </Title>
    </>
  );
};

export default MonitoringHeader;
