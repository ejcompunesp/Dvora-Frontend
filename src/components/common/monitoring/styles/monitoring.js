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
