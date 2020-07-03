import React from "react";

import { Title } from "../../views/dashboard/team/styles/team";
import { ProfilePhoto } from './styles/monitoring';

import imgTest from "../../assets/John Doe.png";

const MonitoringHeader = ({ name, role, img }) => {
  return (
    <Title>
      <div style={{ display: "flex" }}>
        <ProfilePhoto src={img ? img : imgTest} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>{name} - Acompanhamento</h2>
          <h3>{role}</h3>
        </div>
      </div>
    </Title>
  );
};

export default MonitoringHeader;
