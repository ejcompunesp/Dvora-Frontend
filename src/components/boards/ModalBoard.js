import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { boardsApi } from '../../api'


function ModalBoard(props) {
    const { getFieldDecorator } = props.form;
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    function onSubmit(e) {
        setLoading(true);
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if (!err) {
                try {
                    const response = await boardsApi.create({ name: values.name })
                    if (response.status === 200) {
                        props.handleAdd(response.data.board);
                        setVisible(false);
                    }
                } catch (error) {
                    message.error(error.response.data.msg);
                }
                setLoading(false);
            }
        })
    }

    return (
        <div>
            <Button type="primary" onClick={() => setVisible(true)}> Adicionar diretoria  </Button>
            <Modal
                title="Adicionar diretoria"
                destroyOnClose={true}
                visible={visible}
                onOk={onSubmit}
                onCancel={() => setVisible(false)}
                footer={[
                    <Button key="back" onClick={()=>setVisible(false)}>
                    Cancelar
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>
                      Salvar
                    </Button>,
                  ]}
            >
                <Form>
                    <Form.Item label="Nome">
                        {getFieldDecorator("name", {
                            rules: [{ required: true, message: 'Insira o nome da diretoria!' }],
                        }) (<Input />) }
                    
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default Form.create()(ModalBoard);
