import React, { useState } from 'react';

import { Form, Input, Button, Upload, Icon, message, Typography } from 'antd';
import { FiSettings, FiEdit3 } from 'react-icons/fi';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { jesApi } from '../../../api';
import * as JeActions from "../../../store/actions/je"

import { Avatar } from './styles/settings';
import Header from '../../../components/common/Header';
import { Content } from '../styles/global';

function Settings({ form, je, setJe }) {
  const { getFieldDecorator } = form;
  const { Text } = Typography;
  const [image, setImage] = useState({ preview: '', fileList: '' });
  const [disable, setDisable] = useState(true);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const src = je.image ? <img src={`https://backend-dvora.herokuapp.com/files/je/${je.image}`} alt="avatar" style={{ width: '100%' }} /> : uploadButton;

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        const form = new FormData();
        form.append("name", values.name);
        if (values.password) form.append("password", values.password);
        if (image.fileList) form.append("file", image.fileList);
        form.append("university", values.university);
        form.append("city", values.city);
        form.append("creationYear", values.creationYear);
        try {
          const response = await jesApi.update(form);
          if (response.status === 200) {
            setJe({ je: response.data });
            message.success('Perfil atualizado com sucesso!');
            setDisable(true);
            setVisible(false);
            setVisiblePassword(false);
          }
        } catch (error) {
          console.log(error);
          message.error(error.response.data.msg);
        }
        setLoading(false);
      }
    });
  }

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
    setVisible(false);
    setImage({ preview: '' });
    setVisiblePassword(false);
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
    <>
      <Header 
        title="Configurações da EJ" 
        icon={<FiSettings />} 
        button={<Button onClick={onUpdate} type="primary"> <FiEdit3 title='editar' style={{ fontSize: '16pt' }} /></Button>} 
      />
      <Content>
        <Form onSubmit={handleSubmit} >
          <Form.Item
            name="upload"
            label="Foto"
            onChange={handleChange}
          >
            <Avatar>
              <Upload showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" disabled={disable} >
                {image.preview ? <img src={image.preview} alt="avatar" style={{ width: '100%' }} /> : src}
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
          <Form.Item style={{ width: '60%' }} label="IES (instituição de ensino superior)">
            {getFieldDecorator('university', {
              initialValue: je.university,
            })(
              <Input disabled={disable} addonBefore={<Icon type='bank' />} />
            )}
          </Form.Item>
          <Form.Item style={{ width: '60%' }} label="Cidade de origem">
            {getFieldDecorator('city', {
              initialValue: je.city,
            })(
              <Input disabled={disable} addonBefore={<Icon type='home' />} />
            )}
          </Form.Item>
          <Form.Item style={{ width: '60%' }} label="Ano de criação(da EJ)">
            {getFieldDecorator('creationYear', {
              initialValue: je.creationYear,
            })(
              <Input disabled={disable} addonBefore={<Icon type='calendar' />} />
            )}
          </Form.Item>
          {visible && (
            <>
              {visiblePassword ? (
                <>
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
                </>
              ) : (
                  <a onClick={() => setVisiblePassword(true)}><Text underline> Alterar senha </Text></a>
                )}
              <Form.Item style={{ marginTop: '20px' }} >
                <Button loading={loading} type="primary" htmlType="submit" > Salvar </Button>
                <Button style={{ marginLeft: '10px' }} htmlType="button" onClick={onReset}>  Cancelar </Button>
              </Form.Item>
            </>
          )}
        </Form>
      </Content>
    </>
  );
}
const mapStateToProps = (state) => ({
  je: state.je,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(JeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Settings));