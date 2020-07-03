import React from "react";

import {
  CommentContainer,
  FeedbackTitle,
  CommentContent,
} from "./styles/monitoring";

const MonitoringComments = () => {
  return (
    <CommentContainer>
      <FeedbackTitle>
        <h2>Acompanhamento</h2>
      </FeedbackTitle>
      <CommentContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet elit sed neque vulputate iaculis in id orci. Aliquam ac interdum
          nisl. Morbi et orci nec neque feugiat dictum. Nulla blandit nisl
          lobortis sagittis ornare. Quisque et vestibulum elit. Nunc commodo
          risus eget orci convallis, vulputate cursus libero sodales.
        </p>
      </CommentContent>
    </CommentContainer>
  );
};

export default MonitoringComments;
