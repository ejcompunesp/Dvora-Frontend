import React, { useState } from "react";
import { Form, Input, Button, Icon, message } from "antd";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as JeActions from '../../store/actions/je';

import { authApi } from '../../api';

import { Container, StyledForm } from "./styles/login";

import logo from "../../assets/dvora-logo.png";

function Login({ form, setJe }) {
  const { getFieldDecorator } = form;
  const [loading, setLoading] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        try {
          const response = await authApi.login(values);
          if(response.status === 200) {
            setLoading(false);
            setJe(response.data);
            message.success('Login feito com sucesso!');
          }
        } catch(error) {
          message.error(error.response.data.msg);
          setLoading(false);
        }
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

const mapStateToProps = state => ({
  je: state.je
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(JeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
