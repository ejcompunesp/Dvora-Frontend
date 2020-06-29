import React, { useState, useMemo } from 'react';

import { Form, Input, message, Button } from 'antd';

import { FiCamera } from 'react-icons/fi';
import { MdPerson, MdPhone, MdEmail, MdLock } from 'react-icons/md';
import {
  FaAddressCard, FaUserCog, FaUserTie, FaFacebookSquare,
  FaInstagram, FaLinkedin
} from 'react-icons/fa';

import { UploadButtons, UploadPhoto } from '../registrations/styles/memberRegistration';

function MemberRegistrationForm(props) {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);

  function handleCancel() {
    props.setVisible(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    props.form.validateFields((err, values) => {
      if (!err) {
        values.file = photo;
        console.log(values);
        props.onSubmit(values);
        setTimeout(() => {
          setLoading(false);
          props.setVisible(false);
        }, 2000);
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
  }, [photo]);

  const { getFieldDecorator } = props.form;

  return (
    <Form layout='vertical' onSubmit={handleSubmit} >
      <UploadPhoto
        style={{ backgroundImage: `url(${preview})` }}
        className={photo ? 'has-photo' : ''}>
        <input type="file" onChange={event => setPhoto(event.target.files[0])} />
        <FiCamera />
      </UploadPhoto>
      <Form.Item label="Nome">
        {getFieldDecorator('name', {
        })(<Input addonBefore={<MdPerson />} style={{ width: '100%' }} />)}
      </Form.Item>
      {/* <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'Os dados inseridos não são um E-mail válido!',
            },
          ],
        })(<Input addonBefore={<MdEmail />} style={{ width: '100%' }} />)}
      </Form.Item> */}
      <Form.Item label="New password" hasFeedback >
        {getFieldDecorator('password', {
          rules: [
            {
              validator: validateToNextPassword,
            },
          ],
        })(<Input.Password addonBefore={<MdLock />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Confirm password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
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
        })(<Input addonBefore={<FaAddressCard />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Diretoria">
        {getFieldDecorator('board', {
        })(<Input addonBefore={<FaUserTie />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Cargo">
        {getFieldDecorator('position', {
        })(<Input addonBefore={<FaUserCog />} style={{ width: '100%' }} />)}
      </Form.Item>
      {/* <Form.Item label="Telefone">
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
      </Form.Item> */}

      <UploadButtons>
        <Button className="cancel" key="back" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit}
          htmlType="submit" >
          Editar
        </Button>
      </UploadButtons>
    </Form>
  );
}

const RegistrationForm = Form.create({ name: 'Edição de membros' })(MemberRegistrationForm);

export default RegistrationForm;