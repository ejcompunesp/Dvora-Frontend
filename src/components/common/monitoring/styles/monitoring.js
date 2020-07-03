import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  border: ${(props) =>
    props.active ? "2px solid #00a7e1" : "2px solid #aaaaaa"};
  border-radius: 3px;
  padding: 8px;
  align-items: center;
  max-width: 250px;
  width: 100%;
  justify-content: space-between;
  font-family: "Nunito Sans";
  margin: 5px;
  cursor: pointer;
  span {
    margin-left: 3px;
    margin-top: 1px;
    margin-bottom: 0;
  }
  div {
    display: flex;
    align-items: center;
  }
  .line {
    height: 2px;
    width: 50px;
    background-color: #aaaaaa;
  }
  :hover {
    border: 2px solid #00a7e1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  padding: 15px;
  .duties {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FeedbackContainer = styled.div`
  min-width: 650px;
  padding: 20px 40px;
  border-radius: 3px;
  border: 1px solid #aaaaaa;
  max-height: 250px;
  overflow: hidden;
`;

export const FeedbackTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #aaaaaa;
`;
export const FeedbackContent = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 15px 0px;
  justify-content: space-between;
  flex-direction: column;
  max-height: 150px;
  overflow-y: scroll;
`;

export const QuestionContainer = styled.div`
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
`;
