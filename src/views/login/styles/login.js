import styled from "styled-components";

export const Container = styled.div`
  background-color: #fbf5ec;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
  }
  .hello {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 6px;
    margin-top: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 400px;
    height: 360px;
    flex-direction: column;
    div {
      position: absolute;
      text-align: center;
      padding: 15px 0;
      top: 0;
      width: 100%;
      background-color: #00A7E1;
      color: #ffffff;
      border-radius: 6px 6px 0 0;
      font-family: 'Ubuntu';
      font-weight: 700;
      font-size: 24px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: flex-start;
    input {
      margin-bottom: 15px;
      padding: 10px;
      width: 250px;
      border-radius: 6px;
      background-color: #F3F3F3;
      border: none;
      font-family: 'Roboto';
      font-weight: 700;
    }
    button {
      padding: 10px;
      margin-bottom: 20px;
      border: none;
      outline: none;
      background-color: #00A7E1;
      border-radius: 6px;
      color: #ffffff;
      font-family: 'Nunito';
      font-weight: 700;
      cursor: pointer;
    }
    a {
      color: rgba(74, 74, 74, 0.6);
      text-decoration: none;
      font-family: 'Nunito';
      font-weight: 700;
    }
    hr {
      margin-bottom: 10px;
    }
  }
`;
