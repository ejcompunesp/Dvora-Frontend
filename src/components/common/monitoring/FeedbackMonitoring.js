import React from "react";
import styled from 'styled-components';

import { Rate } from "antd";

import { FeedbackContainer, FeedbackTitle, FeedbackContent, QuestionContainer } from "./styles/monitoring";

const StyledRate = styled(Rate)`
  color: #00A7E1;
`;

const FeedbackMonitoring = () => {
  return (
    <FeedbackContainer>
      <FeedbackTitle>
        <h2>Notas</h2>
      </FeedbackTitle>
      <FeedbackContent>
        <QuestionContainer>
          <h3>Como você acredita que foi seu rendimento?</h3>
          <StyledRate disabled defaultValue={4} />
        </QuestionContainer>
        <QuestionContainer>
          <h3>Como você acredita que foi seu rendimento?</h3>
          <StyledRate disabled defaultValue={3} />
        </QuestionContainer>
        <QuestionContainer>
          <h3>Como você acredita que foi seu rendimento?</h3>
          <StyledRate disabled defaultValue={2} />
        </QuestionContainer>
        <QuestionContainer>
          <h3>Como você acredita que foi seu rendimento?</h3>
          <StyledRate disabled defaultValue={2} />
        </QuestionContainer>
        <QuestionContainer>
          <h3>Como você acredita que foi seu rendimento?</h3>
          <StyledRate disabled defaultValue={2} />
        </QuestionContainer>
      </FeedbackContent>
    </FeedbackContainer>
  );
};

export default FeedbackMonitoring;
