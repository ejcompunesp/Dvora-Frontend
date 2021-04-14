import React, { useState, useMemo, useEffect } from 'react';
import { boardsApi, membersApi } from '../../api'

import { Form, Input, message, Button, Select, Typography } from 'antd';

import { FiCamera } from 'react-icons/fi';
import { MdPerson, MdLock } from 'react-icons/md';
import {
  FaAddressCard, FaUserCog
} from 'react-icons/fa';

import { UploadButtons, UploadPhoto } from '../registrations/styles/memberRegistration';

function MemberRegistrationForm(props) {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [boards, setBoards] = useState([]);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { Text } = Typography;

  useEffect(() => {
    const loadBoards = async () => {
      try {
        const response = await boardsApi.index();
        if (response.status === 200) {
          setBoards(response.data.boards);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadBoards();
  }, []);

  function handleCancel() {
    props.setVisible(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const data = new FormData();
        data.append('name', values.name);
        data.append('id', props.member.id);
        if(values.password) data.append('password', values.password);
        data.append('sr', values.sr);
        data.append('boardId', values.boardId);
        data.append('position', values.position);
        // data.append('phone', values.phone);
        // data.append('facebook', values.facebook);
        // data.append('instagram', values.instagram);
        // data.append('linkedin', values.linkedin);
        data.append('file', photo);
        try {
          const response = await membersApi.update(data);
          if (response.status === 200) {
            setLoading(false);
            props.setNewMember(response.data);
            message.success('Membro editado com sucesso!');
            props.setVisible(false);
          }
        } catch (err) {
          setLoading(false);
          message.error(err.response.data.msg);
        }
      }
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
          initialValue: props.member.name,
          rules: [
            {
              required: true,
              message: 'Por favor, insira seu nome!',
            }
          ]
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
      <Form.Item label="RA">
        {getFieldDecorator('sr', {
          initialValue: props.member.sr,
          rules: [
            {
              required: true,
              message: 'Por favor, insira seu RA!',
            }
          ],
        })(<Input addonBefore={<FaAddressCard />} style={{ width: '100%' }} />)}
      </Form.Item>
      <Form.Item label="Diretoria">
        {getFieldDecorator('boardId', {
          valuePropName: 'option',
          initialValue: props.member.boardId || '',
          rules: [
            {
              required: true,
              message: 'Por favor, insira sua diretoria!'
            }
          ],
        })(
          <Select placeholder="Selecione uma diretoria"
            getPopupContainer={trigger => trigger.parentNode}
            allowClear>
            {boards.map((board) => (
              <Select.Option key={board.id} value={board.id}>{board.name}</Select.Option>
            ))}
          </Select>
        )}
      </Form.Item>
      <Form.Item label="Cargo">
        {getFieldDecorator('position', {
          initialValue: props.member.position,
          rules: [
            {
              required: true,
              message: 'Por favor, insira seu cargo!'
            }
          ],
        })(<Input addonBefore={<FaUserCog />} style={{ width: '100%' }} />)}
      </Form.Item>
      {visiblePassword ? (
        <>
          <Form.Item label="Nova senha" hasFeedback >
            {getFieldDecorator('password', {
              rules: [
                {
                  validator: validateToNextPassword,
                }
              ],
            })(<Input.Password addonBefore={<MdLock />} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item label="Confirme sua senha" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  validator: compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={handleConfirmBlur} addonBefore={<MdLock />}
              style={{ width: '100%' }} />)}
          </Form.Item>
        </>
      ) : (<a onClick={() => setVisiblePassword(true)}><Text underline> Alterar senha </Text></a>)
      }
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
          htmlType="submit" >
          Editar
        </Button>
      </UploadButtons>
    </Form>
  );
}

const RegistrationForm = Form.create({ name: 'Edição de membros' })(MemberRegistrationForm);

export default RegistrationForm;