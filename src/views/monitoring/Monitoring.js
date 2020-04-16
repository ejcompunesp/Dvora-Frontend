import React from "react";

import { Table, Button } from 'antd';
import { TableOperations, TableStyle } from "./styles/monitoring";
import { Container, Title } from "../team/styles/team";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { MdTimelapse } from "react-icons/md";

import John from '../../assets/John Doe.png';

const data = [
  {
    id: 1,
    name: 'Erick',
    img: John,
    onDuty: 'Feito',
    acc: 'Feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 2,
    name: 'Gustavo',
    img: John,
    onDuty: 'Não feito',
    acc: 'Feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 3,
    name: 'Nantes',
    img: John,
    onDuty: 'Feito',
    acc: 'Não feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 4,
    name: 'Yudi',
    img: John,
    onDuty: 'Não feito',
    acc: 'Não feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 5,
    name: 'JP',
    img: John,
    onDuty: 'Em andamento',
    acc: 'Em andamento',
    role: 'Gerente de Projetos',
  },
  {
    id: 6,
    name: 'Analu',
    img: John,
    onDuty: 'Feito',
    acc: 'Feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 7,
    name: 'John',
    img: John,
    onDuty: 'Feito',
    acc: 'Feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 8,
    name: 'Tonho',
    img: John,
    onDuty: 'Feito',
    acc: 'Feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 9,
    name: 'Mauricio',
    img: John,
    onDuty: 'Feito',
    acc: 'Feito',
    role: 'Gerente de Projetos',
  },
  {
    id: 10,
    name: 'Tom',
    img: John,
    onDuty: 'Em andamento',
    acc: 'Em andamento',
    role: 'Gerente de Projetos',
  },
  {
    id: 11,
    name: 'Tom',
    img: John,
    onDuty: 'Em andamento',
    acc: 'Em andamento',
    role: 'Gerente de Projetos',
  },
  {
    id: 12,
    name: 'Tom',
    img: John,
    onDuty: 'Em andamento',
    acc: 'Em andamento',
    role: 'Gerente de Projetos',
  },
]

export default function General() {

  function determineStatusIcon(status){
    if (status === "Feito")
      return <IoIosCheckmarkCircle style={{ color: "#89C03E" }}/>;
    else if (status === "Não feito")
      return <IoIosCloseCircle style={{ color: "#E71A23" }}/>;
    else return <MdTimelapse/>;
  }

  class MemberList extends React.Component {
    state = {
      filteredInfo: null,
      sortedInfo: null,
    };
  
    handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter,
      });
    };
  
    clearFilters = () => {
      this.setState({ filteredInfo: null });
    };
  
    render() {
      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      const columns = [
        {
          dataIndex: 'img',
          width: '4%',
          render: img => <img alt={img} src={img}/>
        },
        {
          title: 'Nome',
          dataIndex: 'name', 
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
          ellipsis: true,
        },
        {
          width: '2%',
          render: (row) => determineStatusIcon(row.onDuty),
        },
        {
          title: 'Plantão',
          dataIndex: 'onDuty',
          key: 'onDuty',
          filters: [{ text: 'Feito', value: 'Feito' }, { text: 'Não feito', value: 'Não feito' }, { text: 'Em andamento', value: 'Em andamento' }],
          filteredValue: filteredInfo.onDuty || null,
          onFilter: (value, record) => record.onDuty.includes(value),
          sorter: (a, b) => a.onDuty.length - b.onDuty.length,
          sortOrder: sortedInfo.columnKey === 'onDuty' && sortedInfo.order,
          ellipsis: true,
        },
        {
          width: '2%',
          render: (row) => determineStatusIcon(row.acc),
        },
        {
          title: 'Acompanhamento',
          dataIndex: 'acc',
          key: 'acc',
          filters: [{ text: 'Feito', value: 'Feito' }, { text: 'Não feito', value: 'Não feito' }, { text: 'Em andamento', value: 'Em andamento' }],
          filteredValue: filteredInfo.acc || null,
          onFilter: (value, record) => record.acc.includes(value),
          sorter: (a, b) => a.acc.length - b.acc.length,
          sortOrder: sortedInfo.columnKey === 'acc' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Cargo',
          dataIndex: 'role',
          key: 'role',
          sorter: (a, b) => a.role.length - b.role.length,
          sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order,
          ellipsis: true,
        },
      ];
      return (
        <div>
          <TableOperations>
            <Button onClick={this.clearFilters}>Limpar filtros</Button>
          </TableOperations>
          <Table columns={columns} dataSource={data} onChange={this.handleChange} />
        </div>
      );
    }
  }

  return (
    <Container>
      <Title>
        Acompanhamento dos membros
      </Title>
      <TableStyle>
        <MemberList/>
      </TableStyle>
    </Container>
  );
}
