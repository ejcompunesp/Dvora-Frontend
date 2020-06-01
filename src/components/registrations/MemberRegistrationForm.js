import React, { useState, useMemo } from 'react';

import { Form, Input, message, Button } from 'antd';

import { FiCamera } from 'react-icons/fi';
import { MdPerson, MdPhone, MdEmail, MdLock } from 'react-icons/md';
import {
  FaAddressCard, FaUserCog, FaUserTie, FaFacebookSquare,
  FaInstagram, FaLinkedin
} from 'react-icons/fa';

import { UploadButtons, UploadPhoto } from './styles/memberRegistrationForm';

function MemberRegistrationForm(props) {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [photo, setPhoto] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        values.file = photo;
        console.log(values);
        props.onSubmit(values);
      }
      else message.error('Erro. Verifique os campos e tente novamente.');
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

  const preview = useMemo(() => {
    return photo ? URL.createObjectURL(photo) : null;
  }, [photo])

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
      <UploadPhoto
        style={{ backgroundImage: `url(${preview})` }}
        className={photo ? 'has-photo' : ''}
      >
        <input type="file" onChange={event => setPhoto(event.target.files[0])} />
        <img src={<FiCamera />} alt="Select img" />
      </UploadPhoto>

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