import styled from "styled-components";
import { Form } from "antd";




export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  background-color: #f5f5f5;
  flex-direction: column;
  img {
    width: 60px;
    margin-bottom: 20px;
  }
`;

export const StyledFormRegister = styled(Form)`
  background-color: #ffffff;
  position: relative;
  width: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  justify-content: flex-end;
  align-items: center;
  min-height: 400px;

  .blue {
    position: absolute;
    width: 100%;
    background-color: #00a7e1;
    top: 0;
    left: 0;
    border-radius: 6px 6px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 700;
    font-family: "Ubuntu";
    height: 50px;
    font-size: 20px;
  }

  input {
    min-width: 300px;
    flex: 1;
    margin:0;
  }
  button {
    min-width: 300px;
    background-color: #000;
    flex: 1;
    font-weight: 700;
  }
  .ant-btn-link {
    margin: 0;
    padding: 0;
    color: #fff;
    background-color:#00a7e1;
    font-family: 'Nunito';
  }
`;
