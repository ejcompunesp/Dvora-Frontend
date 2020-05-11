import React, { useState } from 'react';

import { Table, Button } from 'antd';

import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { MdTimelapse } from 'react-icons/md';

import { TableOperations } from '../../views/dashboard/monitoring/styles/monitoring';

import { data } from '../../api/ApiTeste';

import user from '../../assets/user.png';

export default function MemberList() {
  function determineStatusIcon(status){
    if (status === "Feito")
      return <IoIosCheckmarkCircle style={{ color: "#89C03E" }}/>;
    else if (status === "Não feito")
      return <IoIosCloseCircle style={{ color: "#E71A23" }}/>;
    else return <MdTimelapse/>;
  }
  
  let [filteredInfo, setFilteredInfo] = useState();
  let [sortedInfo, setSortedInfo] = useState();
  
  function handleChange(pagination, filters, sorter) {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  
  function clearFilters() {
    setFilteredInfo('');
  };
  
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  const columns = [
    {
      dataIndex: 'file',
      width: '4%',
      render: file => <img src={file?file:user} alt="Foto de perfil"/>
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
      dataIndex: 'position',
      key: 'position',
      sorter: (a, b) => a.position.length - b.position.length,
      sortOrder: sortedInfo.columnKey === 'position' && sortedInfo.order,
      ellipsis: true,
    },
  ];
  
  return (
    <div>
      <TableOperations>
        <Button onClick={clearFilters}>Limpar filtros</Button>
      </TableOperations>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
}
