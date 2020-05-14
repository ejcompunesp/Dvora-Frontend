import React, { useState } from 'react';

import { Form, Input, message, Button, Upload, Icon } from 'antd';

import { MdPerson, MdPhone, MdEmail, MdLock } from 'react-icons/md';
import { FaAddressCard, FaUserCog, FaUserTie, FaFacebookSquare, 
  FaInstagram, FaLinkedin } from 'react-icons/fa';

import { UploadButtons } from './styles/memberRegistrationForm';

function MemberRegistrationForm(props) {
  const [confirmDirty, setConfirmDirty] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.onSubmit(values);
        message.success('Membro registrado com sucesso.');
      }
      else message.error('Erro ao registrar membro, tente novamente.');
    });
  }

  function handleConfirmBlur(e) {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  function compareToFirstPassword(rule, value, callback) {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('As duas senhas digitadas são inconsistentes!');
    } else {
      callback();
    }
  };

  function validateToNextPassword(rule, value, callback) {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  function normFile(e) {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  function dummyRequest({photo, onSuccess}){
    setTimeout(() =>{
      onSuccess("ok");
    }, 0);
  }

  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  
  return (
    <Form {...formItemLayout} onSubmit={handleSubmit} >
      <Form.Item label="Nome">
        {getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: 'Por favor, insira seu nome!',
            },
          ],
        })(<Input addonBefore={<MdPerson />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'Os dados inseridos não são um E-mail válido!',
            },
            {
              required: true,
              message: 'Por favor, insira seu e-mail!',
            },
          ],
        })(<Input addonBefore={<MdEmail />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Password" hasFeedback required={true} >
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Por favor, insira sua senha!',
            },
            {
              validator: validateToNextPassword,
            },
          ],
        })(<Input.Password addonBefore={<MdLock />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: 'Por favor, confirme sua senha!',
            },
            {
              validator: compareToFirstPassword,
            },
          ],
        })(<Input.Password onBlur={handleConfirmBlur} addonBefore={<MdLock />} 
        style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="RA">
        {getFieldDecorator('sr', {
          rules: [
            {
              required: true,
              message: 'Por favor, insira seu RA!',
            },
          ],
        })(<Input addonBefore={<FaAddressCard />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Diretoria">
        {getFieldDecorator('board', {
          rules: [
            {
              required: true,
              message: 'Por favor, insira sua diretoria!'
            }
          ],
        })(<Input addonBefore={<FaUserTie />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Cargo">
        {getFieldDecorator('position', {
          rules: [
            {
              required: true,
              message: 'Por favor, insira seu cargo!'
            }
          ],
        })(<Input addonBefore={<FaUserCog />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Telefone">
        {getFieldDecorator('phone', {
        })(<Input addonBefore={<MdPhone />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Facebook">
        {getFieldDecorator('facebook', {
        })(<Input addonBefore={<FaFacebookSquare />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Instagram">
        {getFieldDecorator('instagram', {
        })(<Input addonBefore={<FaInstagram />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Linkedin">
        {getFieldDecorator('linkedin', {
        })(<Input addonBefore={<FaLinkedin />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Foto">
        {getFieldDecorator('file', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
        })(
          <Upload name="file" customRequest={dummyRequest} listType="picture">
            <Button>
              <Icon type="upload" /> Clique para adicionar
            </Button>
          </Upload>,
        )}
      </Form.Item>

      <UploadButtons>
        <Button className="cancel" key="back" onClick={() => props.setVisible(false)}>
          Cancelar
        </Button>
        <Button 
          key="submit" 
          type="primary" 
          loading={props.loading} 
          onClick={() => props.setVisible(false)} 
          htmlType="submit" >
          Adicionar
        </Button>
      </UploadButtons>
    </Form>
  );
}

const RegistrationForm = Form.create({ name: 'Registro de membros' })(MemberRegistrationForm);

export default RegistrationForm;