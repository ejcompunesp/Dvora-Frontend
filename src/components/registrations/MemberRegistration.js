import React, { useState } from 'react';

import { Button } from 'antd';

import { MdPersonAdd } from 'react-icons/md';

import { StyledModal } from './styles/memberRegistration';
import RegistrationForm from './MemberRegistrationForm';

export default function MemberRegistration(props) {
  
  function handleCancel() {
    props.setVisible(false);
  };

  return (
    <div style={{ float: "right", paddingTop: "3px" }}>
      <Button
        title="Adicionar membro"
        type="primary"
        style={{ fontSize: "26px" }}
        onClick={() => props.setVisible(true)}
      >
        <MdPersonAdd />
      </Button>
      <StyledModal
        destroyOnClose={true}
        visible={props.visible}
        title="Registro de membro"
        onCancel={handleCancel}
        footer={null}
      >
        <RegistrationForm onSubmit={props.onSubmit} setVisible={props.setVisible}/>
      </StyledModal>
    </div>
  );
}