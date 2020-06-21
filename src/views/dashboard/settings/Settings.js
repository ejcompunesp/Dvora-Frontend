import React, { useState, useEffect } from 'react';

import { Form, Input, Button, Upload, Icon,  Popconfirm, message } from 'antd';
import { FiSettings, FiEdit3 } from 'react-icons/fi';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { jesApi } from '../../../api';
import * as JeActions from "../../../store/actions/je"

import { Title } from '../team/styles/team';
import { Container, Avatar } from './styles/settings';
import { setJe } from '../../../store/actions/je';

function Settings({ form, je }) {
  const { getFieldDecorator } = form;
  const [image, setImage] = useState({ preview: '', fileList: '' });
  const [upload, setUpload] = useState(false);
  const [disable, setDisable] = useState(true);
  const [visible, setVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields(async (err, values) => {
      console.log(values);
      if (!err) {
        const form = new FormData();
        form.append("id", je.id);
        form.append("name", values.name);
        form.append("email", values.email);
        form.append("password", values.password);
        form.append("file", image.fileList);
        form.append("university", values.university);
        form.append("city", values.city);
        form.append("creationYear", values.creationYear);
        try {
          const response = await jesApi.update(form);
          console.log(response);
          if (response.status === 200)
            console.log(response.data);
          setJe(response.data);
          setDisable(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  useEffect(() => (
    je.image ? setUpload(je.image)
      :
      setUpload(<div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>)
  ), []);

  function handleChange(e) {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        fileList: e.target.files[0]
      });
    }
  };

  function onReset() {
    form.resetFields();
    setDisable(true);
    setVisible(false)
    setImage({preview: ''})
  };
  function onUpdate() {
    setDisable(false);
    setVisible(true);
  };

  function compareToFirstPassword(rule, value, callback) {
    if (value && value !== form.getFieldValue('password')) {
      callback('As duas senhas digitadas são inconsistentes!');
    } else {
      callback();
    }
  };

  return (
    <Container>
      <Title>
        <h2>Configurações da EJ <FiSettings /></h2>
        <Button onClick={onUpdate} type="primary"> <FiEdit3 title='editar' style={{fontSize: '16pt'}}/></Button>
      </Title>
      <Form onSubmit={handleSubmit} >
        <Form.Item
          name="upload"
          label="Foto"
          onChange={handleChange}
        >
          <Avatar>
            <Upload showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" disabled={disable} >
              {image.preview ? <img src={image.preview} alt="avatar" style={{ width: '100%' }} /> : upload}
            </Upload>
          </Avatar>
        </Form.Item>
        <Form.Item style={{ width: '60%' }} label='Nome'>
          {getFieldDecorator('name', {
            initialValue: je.name,
          })(
            <Input disabled={disable} addonBefore={<Icon type='user' />} />
          )}
        </Form.Item>
        <Form.Item style={{ width: '60%' }} label="Email">
          {getFieldDecorator('email', {
            initialValue: je.email,
          })(
            <Input disabled={disable} addonBefore={<Icon type='mail' />} />
          )}
        </Form.Item>
        <Form.Item style={{ width: '60%' }} label="IES (instituição de ensino superior)">
          {getFieldDecorator('university', {
            initialValue: je.university,
          })(
            <Input disabled={disable} addonBefore={<Icon type='bank' />} />
          )}
        </Form.Item>

        <Form.Item style={{ width: '60%' }} label="Ano de criação(da EJ)">
          {getFieldDecorator('creationYear', {
            initialValue: je.creationYear,
          })(
            <Input disabled={disable} addonBefore={<Icon type='home' />} />
          )}
        </Form.Item>
        {visible ? <>
          <Form.Item style={{ width: '60%' }} label="Nova senha" hasFeedback>
            {getFieldDecorator('password', {
            })(
              <Input.Password disabled={disable} addonBefore={<Icon type='lock' />} />
            )}
          </Form.Item>
          <Form.Item style={{ width: '60%' }} label="Confirmar senha"
            dependencies={['password']}
            hasFeedback>
            {getFieldDecorator('confirmPassword', {
              rules: [
                {
                  validator: compareToFirstPassword,
                },
              ],
            })(
              <Input.Password disabled={disable} addonBefore={<Icon type='lock' />} />
            )}
          </Form.Item>
        </> : null}
        <Form.Item >
          <Button type="primary" htmlType="submit" > Salvar </Button>
          <Button style={{ marginLeft: '10px' }} htmlType="button" onClick={onReset}>  Cancelar </Button>
        </Form.Item>
      </Form>

    </Container>
  );
}
const mapStateToProps = (state) => ({
  je: state.je,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(JeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Settings));