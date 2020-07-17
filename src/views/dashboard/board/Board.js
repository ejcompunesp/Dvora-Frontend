import React, { useState , useEffect } from "react";
import { connect } from 'react-redux';

import { Table, Popconfirm, Input, Form, message } from 'antd';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { FaChalkboard } from 'react-icons/fa';

import { Container, Title } from '../team/styles/team';

import ModalBoard from '../../../components/boards/ModalBoard';

import { boardsApi } from '../../../api'

function Board({ form, je }) {
  const { getFieldDecorator } = form;
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const loadBoards = async () => {
      try{
       const response = await boardsApi.index(je.id);
       console.log(response)
       if(response.status === 200){
         const data = response.data.boards.map(board => ({
          ...board,
          editable: false
         }));
         setDataSource(data);
       } 
      }
      catch(error){
        console.log(error);
      }
    }
    loadBoards();
  },[]);

  async function handleAdd(board) {
    try{
      const response = await boardsApi.create(je.id, {name: board})
      if(response.status === 200){
        const data = {
          ...response.data.board,
          editable: false,
        }
        setDataSource([...dataSource, data]);
      }
    }
    catch(error){ 
      message.error(error.response.data.msg);
    }
  }

  async function handleDelete(key) {
    try{
      const response = await boardsApi.delete(je.id, {boardId : key});
      if(response.status === 200){
        setDataSource(dataSource.filter(board => board.id !== key));
        message.success("Diretoria removida com sucesso!");
      }
    }
    catch(error){
      message.error(error.response.data.msg);
    }
  }

  function handleEdit(board) {
    board.editable = true;
    setDataSource([...dataSource]);
  }

  async function onSaveEdit(board) {
    try{
      const response = await boardsApi.update(je.id, {
        boardId: board.id,
        name : form.getFieldValue('name'),
      })
      if(response.status === 200){
          board.name = response.data.board.name;
          board.editable = false;
        setDataSource([...dataSource]);
      }
    }
    catch(error){
      console.log(error);
      message.error(error.response.data.msg);
    }
  }

  function onCancel(board) {
    form.resetFields();
    board.editable = false;
    setDataSource([...dataSource]);
  }

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) =>
        record.editable ? (
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
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
            <a><AiOutlineDelete style={{ fontSize: '17pt' }} /></a>
          </Popconfirm>
        ) : null,
    },
    {
      title: 'Editar',
      dataIndex: 'editable',
      render: (text, record) =>
        text ? //verifica se editable é true
          (
            <>
              <a onClick={() => onSaveEdit(record)} style={{ marginRight: 8 }}>Salvar</a>
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
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </Container>
  );
}
const mapStateToProps = state => ({
  je: state.je,
})
export default connect(mapStateToProps)(Form.create()(Board));
