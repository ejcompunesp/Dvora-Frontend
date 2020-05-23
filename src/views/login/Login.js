import React, { useState, useEffect } from "react";
import { Form, Input, Button, Icon, message } from "antd";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect} from 'react-router-dom';
import * as JeActions from '../../store/actions/je';

import { authApi, loginDashboard } from '../../api';

import { Container, StyledForm } from "./styles/login";

import logo from "../../assets/dvora-logo.png";

        setLoading(true);
        try {
          const response = await authApi.login(values);
          if(response.status === 200) {
            setLoading(false);
            setJe(response.data);
            message.success('Login feito com sucesso!');
            loginDashboard(response.data.token);
            setToDashboard(true)
          }
        } catch(error) {
          message.error(error.response.data.msg);
          setLoading(false);
        }
      }
    });
  }
  return (
    <>
    {toDashboard ? <Redirect to="/dashboard" /> : null}
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
  </>
  );
}

const mapStateToProps = state => ({
  je: state.je
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(JeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
