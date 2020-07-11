import React from "react";
import DutyCard from "./DutyCard";

import { BsClockHistory } from "react-icons/bs";
import { Container } from "./styles/monitoring";

// máximo de DutyCards por página é 8!!
// fazer paginação
const DutyContainer = ({ duties, setDutyId, dutyId }) => {
  return (
    <Container>
      <h2>
        <BsClockHistory /> Últimos Plantões
      </h2>
      <div className="duties"> 
        {duties.length > 0 ? (
          <>
            {duties.map((duty) => (
              <DutyCard key={duty.id} duty={duty} onClick={setDutyId} dutyId={dutyId}/>
            ))}
          </>
        ) : <p>Esse membro ainda não possui plantões!</p>}
      </div>
    </Container>
  );
};

export default DutyContainer;
