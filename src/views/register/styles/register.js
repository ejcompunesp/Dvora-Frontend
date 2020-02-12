import styled from "styled-components";

export const Container = styled.div`
  background-color: #fbf5ec;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 10%;
  }
  .hello {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 6px;
    margin-top: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    max-width: 40%;
    max-height: 70%;
    
    .registro {
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
    margin-top: 30px;
    padding:10px;
    .divForm{
      margin-top: 1%;
      margin-bottom:2%;
      background-color:#F3F3F3;
      border-radius: 6px;
      border-radius-right:6px;
    }
      .Icon{
        display: inline-block 
        width:100px;
        height:100px;
        background-color:#F3F3F3;
        opacity:0.6;
        margin-left:5px;
    }
    }
    input {
      display: inline-block 
      margin: 15px;
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
      margin-top: 10px;
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
