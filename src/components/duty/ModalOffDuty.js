import React, { useState } from 'react';
import { Form, Input, Modal, Button, message } from 'antd';

function ModalOffDuty( props) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const { getFieldDecorator } = props.form;
    
    function onSubmit (e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            setLoading(true)
              if(values.Password==='teste'){
                setLoading(false);
                setVisible(false)
            props.handleFinished();
          }
          else{
            message.error('digite uma senha válida');
            setLoading(false);
          }}
        });
    }
    return (
        <>
            <Button disabled={props.disabled} type="primary" onClick={() => setVisible(true)} >Encerrar</Button>
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
                        Encerrar plantão
                   </Button>,
                ]}
            >
                <Form>
                    <Form.Item>
                        {getFieldDecorator('Password', {
                            rules: [{ required: true, message: 'Please input your password!' }],
                        })(<Input.Password  placeholder='senha'/>)}
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default Form.create()(ModalOffDuty)

