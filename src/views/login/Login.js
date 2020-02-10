import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Icon, InputNumber, message } from "antd";

import { Container, StyledForm } from "./styles/login";
import { FaBeer } from "react-icons/fa";

import logo from "../../assets/dvora-logo.png";

function Login(props) {
  const { getFieldDecorator } = props.form;
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        setLoading(true);
        setInterval(() => {
          setLoading(false);
          message.success('Login feito com sucesso!');
        }, 1000)
      }
    });
  }
  return (
    <Container>
      <img src={logo} />
      <StyledForm onSubmit={handleSubmit} className="login-form">
        <div className="blue">Login</div>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="E-mail"
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
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Entrar!
          </Button>
          <hr />
          <Button type="link">Registre-se</Button>
        </Form.Item>
      </StyledForm>
    </Container>
  );
}

Login = Form.create()(Login);

export default Login;
