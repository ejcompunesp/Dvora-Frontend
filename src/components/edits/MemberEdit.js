import React, { useState } from 'react';

import { Modal } from 'antd';

import { FiEdit } from 'react-icons/fi';

import { DropdownItem } from '../../views/dashboard/team/styles/team';

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
      
      <Modal
        destroyOnClose={true}
        visible={visible}
        title="Edição do membro"
        onCancel={handleCancel}
        footer={null}
      >
        <EditForm onSubmit={props.onSubmit} setVisible={setVisible}/>
      </Modal>
    </div>
  );
}