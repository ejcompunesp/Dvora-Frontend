import React, { useState } from 'react';

import { FiEdit } from 'react-icons/fi';

import { DropdownItem } from '../../views/dashboard/team/styles/team';

import { StyledModal } from '../registrations/styles/memberRegistration';
import EditForm from './MemberEditForm';

export default function MemberRegistration(props) {
  const [visible, setVisible] = useState(false);

  function handleCancel() {
    setVisible(false);
  };

  return (
    <div>
      <DropdownItem style={{ margin: 0 }} onClick={() => setVisible(true)}>
        <FiEdit /> Editar
      </DropdownItem>
      
      <StyledModal
        destroyOnClose={true}
        visible={visible}
        title="Edição do membro"
        onCancel={handleCancel}
        footer={null}
      >
        <EditForm onSubmit={props.onSubmit} setVisible={setVisible}/>
      </StyledModal>
    </div>
  );
}