import React, { useState, useEffect, memo} from "react";

import {
  CommentContainer,
  FeedbackTitle,
  CommentContent,
} from "./styles/monitoring";

const MonitoringComments = memo(({ duties, dutyId }) => {
  const [duty, setDuty] = useState([]);
  useEffect(() => {
    if (dutyId !== null) setDuty(duties.filter((item) => item.id === dutyId));
  }, [dutyId]);
  return (
    <CommentContainer>
      <FeedbackTitle>
        <h2>Acompanhamento</h2>
      </FeedbackTitle>
      <CommentContent>
        {duty.length > 0 ? (
          <>
            {duty[0].feedback !== null ? (
              <>
                <div>
                  <h2>Comentários</h2>
                  <p>{duty[0].feedback.note || "Sem comentários do plantão"}</p>
                </div>
                <div>
                  <h2>Atividade</h2>
                  <p>
                    {duty[0].feedback.activity || "Sem relato da atividade"}
                  </p>
                </div>
              </>
            ) : (
              <h1>Membro não fez o feedback de seu plantão</h1>
            )}
          </>
        ) : (
          <h1>Escolha um dia para a análise</h1>
        )}
      </CommentContent>
    </CommentContainer>
  );
});

export default MonitoringComments;
