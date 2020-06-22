import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';


function ModalBoard(props) {
    const { getFieldDecorator } = props.form;
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    function onSubmit(e) {
        setLoading(true);
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                props.handleAdd(values.name);
                setVisible(false);
            }
            else {
                message.error("Erro!");
            }
        })
        setLoading(false);
    }

    return (
        <div>
            <Button style={{marginTop: '3%', marginBottom: '3%'}} type="primary" onClick={() => setVisible(true)}> Adicionar diretoria  </Button>
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
