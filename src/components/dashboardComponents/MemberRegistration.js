import React, { useState } from 'react';

import { Modal, Button } from 'antd';

import { MdPersonAdd } from 'react-icons/md';

import RegistrationForm from './MemberRegistrationForm';

export default function MemberRegistration(props) {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleOk() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  function handleCancel() {
    setVisible(false);
  };

  return (
    <div style={{ float: "right", paddingTop: "3px" }}>
      <Button
        title="Adicionar membro"
        type="primary"
        style={{ fontSize: "26px" }}
        onClick={() => setVisible(true)}
      >
        <MdPersonAdd />
      </Button>
      <Modal
        destroyOnClose={true}
        visible={visible}
        title="Inserção de membro"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <RegistrationForm onSubmit={props.onSubmit} loading={loading} setVisible={setVisible}/>
      </Modal>
    </div>
  );
}