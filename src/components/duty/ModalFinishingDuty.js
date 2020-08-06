import React, { useState } from 'react';

import { isLoginMember } from '../../api/auth';

import { Form, Input, Modal, Button, message, Popconfirm } from 'antd';

function ModalFinishingDuty(props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getFieldDecorator } = props.form;

  function verifyMemberLogged() {
    if (props.member.duty.memberId === props.memberId) return true;
    return false;
  }

  function onSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      setLoading(true);
      if (!err) {
        values.member = props.member;
        values.dutyId = props.dutyId;
        values.id = props.member.duty.memberId;
        props.onSubmit(values);
        setLoading(false);
        setVisible(false);
      }
      else {
        setLoading(false);
        message.error("Senha incorreta, tente novamente...");
      }
    });
  }

  return (
    isLoginMember() ?
    <Popconfirm title="Finalizar plantão?" onConfirm={onSubmit} disabled={!verifyMemberLogged()}>
      <Button disabled={!verifyMemberLogged()} type="primary" >Encerrar</Button>
    </Popconfirm> :
    <>
      <Button type="primary" onClick={() => setVisible(true)} >Encerrar</Button>
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
    </>
  )
}

export default Form.create()(ModalFinishingDuty);
