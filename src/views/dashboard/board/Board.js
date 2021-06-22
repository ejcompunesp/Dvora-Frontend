import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import { boardsApi } from '../../../api'

import { Table, Popconfirm, Input, Form, message, Skeleton } from 'antd';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { FiBriefcase } from 'react-icons/fi';

import Header from '../../../components/common/Header';
import ModalBoard from '../../../components/boards/ModalBoard';

import { StyledContent } from "./styles/board";

function Board({ form, je }) {
  const { getFieldDecorator } = form;
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const loadBoards = async () => {
      setLoading(true);
      try {
        const response = await boardsApi.index();
        if (response.status === 200) {
          const data = response.data.boards.map(board => ({
            ...board,
            editable: false
          }));
          setBoards(data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    loadBoards();
  }, []);

  function handleAdd(board) {
    const data = {
      ...board,
      editable: false,
    }
    setBoards([...boards, data]);
  }

  async function handleDelete(key) {
    try {
      const response = await boardsApi.delete({ boardId: key });
      if (response.status === 200) {
        setBoards(boards.filter(board => board.id !== key));
        message.success("Diretoria removida com sucesso!");
      }
    }
    catch (error) {
      message.error(error.response.data.msg);
    }
  }

  function handleEdit(board) {
    board.editable = true;
    setBoards([...boards]);
  }

  async function onSaveEdit(board) {
    try {
      const response = await boardsApi.update({
        boardId: board.id,
        name: form.getFieldValue('name'),
      })
      if (response.status === 200) {
        board.name = response.data.board.name;
        board.editable = false;
        setBoards([...boards]);
      }
    }
    catch (error) {
      console.log(error);
      message.error(error.response.data.msg);
    }
  }

  function onCancel(board) {
    form.resetFields();
    board.editable = false;
    setBoards([...boards]);
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
        boards.length >= 1 &&
        <Popconfirm title="Tem certeza que deseja deletar?" onConfirm={() => handleDelete(record.id)}>
          <a><AiOutlineDelete style={{ fontSize: '17pt' }} /></a>
        </Popconfirm>
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
    <>
      <Header
        title="Diretorias"
        icon={<FiBriefcase />}
      />
      <Skeleton loading={loading}>
        <StyledContent>
          <ModalBoard handleAdd={handleAdd} je={je} />
          <Table rowKey="id" dataSource={boards} columns={columns} pagination={false} />
        </StyledContent>
      </Skeleton>
    </>
  );
}
const mapStateToProps = state => ({
  je: state.je,
})
export default connect(mapStateToProps)(Form.create()(Board));
