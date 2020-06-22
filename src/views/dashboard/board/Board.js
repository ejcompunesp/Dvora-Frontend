import React, { useState } from "react";

import { Table, Popconfirm, Input, Form } from 'antd';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { FaChalkboard } from 'react-icons/fa';

import { Container, Title } from '../team/styles/team';

import ModalBoard from '../../../components/boards/ModalBoard';

const dataSource = [
  {
    key: '1',
    name: 'Diretoria de Projetos',
    edit: false,
  },
  {
    key: '2',
    name: 'Diretoria de Recursos Humanos',
    edit: false,
  },
  {
    key: '3',
    name: 'Diretoria de Relações Externas',
    edit: false,
  },
  {
    key: '4',
    name: 'Diretoria de Inovações',
    edit: false,
  },
];

function Board({ form }) {
  const { getFieldDecorator } = form;
  const [data, setData] = useState(dataSource);
  //simulando id da diretoria 
  const [key, setKey] = useState(4);

  function handleAdd(board) {
    setKey(key + 1);
    const newBoard = {
      key: key,
      name: board,
      edit: false,
    };
    setData([...data, newBoard]);
  }

  function handleDelete(key) {
    setData(data.filter(board => board.key !== key));
  }

  function handleEdit(board) {
    board.edit = true;
    setData([...data]);
  }

  function onSave(board) {
    board.name = form.getFieldValue('name');
    board.edit = false;
    setData([...data]);
  }

  function onCancel(board) {
    form.resetFields();
    board.edit = false;
    setData([...data]);
  }

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) =>
        record.edit ? (
          <Form>
            <Form.Item>
              {getFieldDecorator('name', {
                initialValue: record.name,
              })(
                <Input />
              )}
            </Form.Item>
          </Form>
        ) : <p>{record.name} </p>
    },
    {
      title: 'Deletar ',
      dataIndex: 'delete',
      render: (text, record) =>
        data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a><AiOutlineDelete style={{ fontSize: '17pt' }} /></a>
          </Popconfirm>
        ) : null,
    },
    {
      title: 'Editar',
      dataIndex: 'edit',
      render: (text, record) =>
        text ?
          (
            <>
              <a onClick={() => onSave(record)} style={{ marginRight: 8 }}>Salvar</a>
              <a onClick={() => onCancel(record)} >Cancelar</a>
            </>
          ) :
          (
            <a><AiOutlineEdit style={{ fontSize: '17pt' }} onClick={() => handleEdit(record)} /> </a>
          ),
    },
  ];

  return (
    <Container>
      <Title>
        <h2>Diretorias  <FaChalkboard /></h2>
      </Title>
      <ModalBoard handleAdd={handleAdd} />
      <Table dataSource={data} columns={columns} pagination={false} />
    </Container>
  );
}
export default Form.create()(Board);
