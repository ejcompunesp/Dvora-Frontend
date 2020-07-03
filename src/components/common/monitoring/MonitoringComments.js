import React from "react";

import {
  CommentContainer,
  FeedbackTitle,
  CommentContent,
} from "./styles/monitoring";

const MonitoringComments = ({comment}) => {
  return (
    <CommentContainer>
      <FeedbackTitle>
        <h2>Acompanhamento</h2>
      </FeedbackTitle>
      <CommentContent>
        <p>
          {comment ? comment : <p>Acompanhamento não obteve um retorno do membro!</p>}
        </p>
      </CommentContent>
    </CommentContainer>
  );
};

export default MonitoringComments;
