import React from "react";
import DutyCard from "./DutyCard";

import { BsClockHistory } from "react-icons/bs";
import { Container } from "./styles/monitoring";

// máximo de DutyCards por página é 8!!
// fazer paginação
const DutyContainer = ({ duties }) => {
  return (
    <Container>
      <h2>
        <BsClockHistory /> Últimos Plantões
      </h2>
      <div className="duties"> 
        <DutyCard active={true}/>
        <DutyCard />
        <DutyCard />
        <DutyCard />
        <DutyCard />
        <DutyCard />
        <DutyCard />
        <DutyCard />
      </div>
    </Container>
  );
};

export default DutyContainer;
