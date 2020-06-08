import React, { useState } from 'react';

import { Modal, Button } from 'antd';

import { MdPersonAdd } from 'react-icons/md';

import RegistrationForm from './MemberRegistrationForm';

export default function MemberRegistration(props) {
  const [visible, setVisible] = useState(false);

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
        onCancel={handleCancel}
        footer={null}
      >
        <RegistrationForm onSubmit={props.onSubmit} setVisible={setVisible}/>
      </Modal>
    </div>
  );
}