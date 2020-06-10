import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Icon, InputNumber, message } from "antd";

import { Container, StyledFormRegister } from "./styles/register";
import UploadImage from './Upload'

import logo from "../../assets/dvora-logo.png";
import {jesApi } from "../../api";

function Registro({form}) {
  const { getFieldDecorator } = form;
  const [loading, setLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const data = new FormData();
        data.append("name", values.name);
        data.append("email", values.email);
        data.append("password", values.password);
        data.append("university", values.university);
        data.append("city", values.city);
        data.append("creationYear", values.creationYear);
        data.append("file", null);


        try {
          const response = await jesApi.register(data);
          if(response.status === 200) {
            setLoading(false);
            message.success('Registro feito com sucesso!');
          }
        } catch(error) {
          console.log(error)
          message.error(error.response.data.msg);
          setLoading(false);
        }
      }
    });
  }

  return (
    <Container>
      <img src={logo} />
      <StyledFormRegister onSubmit={handleSubmit}>
        <div className="blue">Registro</div>
        <UploadImage/>
        <Form.Item>
          {getFieldDecorator("nome", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="nome"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="email"
              placeholder="email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Senha"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("city", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="cidade"
              placeholder="cidade"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("IES (instituição de ensino superior)", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="bank" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              placeholder="IES (instituição de ensino superior)"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("Ano de Criação (EJ)", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="calendar" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              placeholder="Ano de Criação (EJ)"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="ant-btn-link"
          >
            Cadastrar
          </Button>
        </Form.Item>
      </StyledFormRegister>
    </Container>
  );
}

Registro = Form.create()(Registro);

export default Registro;


