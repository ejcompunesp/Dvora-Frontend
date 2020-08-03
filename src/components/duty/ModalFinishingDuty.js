import React, { useState } from 'react';
import { Form, Input, Modal, Button, message } from 'antd';

function ModalFinishingDuty(props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getFieldDecorator } = props.form;

  function onSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        setLoading(true);
        props.onSubmit(values);
      } 
      else {
          setLoading(false);
          message.error("Senha incorreta, tente novamente...");
        }
    });
  }

  return (
      <Modal
        destroyOnClose={true}
        visible={visible}
        title="Identificação de usuário"
        onOk={onSubmit}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>
            Finalizar plantão
          </Button>,
        ]}
      >
        <Form>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!' }],
            })(<Input.Password placeholder='senha' />)}
          </Form.Item>
        </Form>
      </Modal>
  )
}
export default Form.create()(ModalFinishingDuty)
