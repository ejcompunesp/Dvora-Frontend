import React, { useState } from 'react';

import { Button } from 'antd';

import { MdPersonAdd } from 'react-icons/md';

import { StyledModal } from './styles/memberRegistration';
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
      <StyledModal
        destroyOnClose={true}
        visible={visible}
        title="Registro de membro"
        onCancel={handleCancel}
        footer={null}
      >
        <RegistrationForm onSubmit={props.onSubmit} setVisible={setVisible}/>
      </StyledModal>
    </div>
  );
}