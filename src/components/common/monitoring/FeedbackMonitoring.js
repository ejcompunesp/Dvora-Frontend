import React, { useEffect, useState, memo } from "react";
import styled from "styled-components";

import { Rate } from "antd";

import {
  FeedbackContainer,
  FeedbackTitle,
  FeedbackContent,
  QuestionContainer,
} from "./styles/monitoring";

const StyledRate = styled(Rate)`
  color: #00a7e1;
`;

const FeedbackMonitoring = memo(({ duties, dutyId }) => {
  const [duty, setDuty] = useState([]);
  useEffect(() => {
    if (dutyId !== null) setDuty(duties.filter((item) => item.id === dutyId));
  }, [dutyId]);
  return (
    <FeedbackContainer>
      <FeedbackTitle>
        <h2>Avaliação</h2>
      </FeedbackTitle>
      <FeedbackContent>
        {duty.length > 0 ? (
          <>
            {duty[0].feedback !== null ? (
              <>
              <QuestionContainer>
              <h4>Qual seu nível de satisfação com a empresa?</h4>
              <StyledRate disabled defaultValue={duty[0].feedback.satisfaction} />
            </QuestionContainer>
            <QuestionContainer>
              <h4>Como você acredita que foi seu rendimento?</h4>
              <StyledRate disabled defaultValue={duty[0].feedback.productivity} />
            </QuestionContainer>
            <QuestionContainer>
              <h4>Como você avalia seu humor hoje?</h4>
              <StyledRate disabled defaultValue={duty[0].feedback.mood} />
            </QuestionContainer>
              </>
            ) : 
              <h1>Membro não fez o feedback de seu plantão</h1>
            }
            
          </>
        ) : (
          <h1>
            Selecione um dia para a análise
          </h1>
        )}
      </FeedbackContent>
    </FeedbackContainer>
  );
});

export default FeedbackMonitoring;
