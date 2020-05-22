import React, { useState } from 'react';

import { Table } from 'antd';

import { FiCoffee } from 'react-icons/fi';

import { Container, Title, Content } from '../team/styles/team'
import { DutyControllerButtons, DaysDuties } from './styles/duty';

import {data} from '../../../api/ApiTeste';

import user from '../../../assets/user.png';
import ModalOnDuty from '../../../components/duty/ModalOnDuty'
import ModalOffDuty from '../../../components/duty/ModalOffDuty'

const person0 = data[0];
const people = data.slice(0, 4);

export default function Duty() {

  var currentdate = new Date(); 
  var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  console.log(datetime);

  let [sortedInfo, setSortedInfo] = useState();
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(true);
   
  function handleStarted() {
    setStarted(!started);
    setFinished(!finished);

    person0.duties[0].startTime = currentdate.getHours() + ":" + currentdate.getMinutes();
  }

  function handleFinished() {
    setStarted(!started);
    setFinished(!finished);

    person0.duties[0].finishTime = currentdate.getHours() + ":" + currentdate.getMinutes();
  }
  
  function handleChange(sorter) {
    setSortedInfo(sorter);
  };
  
  sortedInfo = sortedInfo || {};

  const columns = [
    {
      title: 'Plantões do dia',
      key: 'tableTitle',
      children: [
        {
          dataIndex: 'file',
          key: 'file',
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
          title: 'Início',
          dataIndex: 'duties[0].startTime',
          key: 'startTime',
        },
        {
          title: 'Término',
          dataIndex: 'duties[0].finishTime',
          key: 'finishTime',
        },
      ]
    },
  ]

  return (
    <Container>
      <Title>
        <h2>Plantão <FiCoffee /></h2> 
      </Title>
      <Content>
        <p style={{ fontSize: '16px' }}>Bora pra mais um plantão, <span>{person0.name}</span>?</p>

        <DutyControllerButtons>
          <ModalOnDuty handleStarted={handleStarted} disabled={started}/>
          <ModalOffDuty handleFinished={handleFinished} disabled={finished}/>
        </DutyControllerButtons>

        <DaysDuties>
          <Table columns={columns} scroll={{ x: true }} dataSource={people} pagination={false} onChange={handleChange} />
        </DaysDuties>
      </Content>


    </Container>
  )
}