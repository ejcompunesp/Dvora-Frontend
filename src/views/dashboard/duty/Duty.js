import React, { useState, useEffect } from 'react';

import { Table, Popconfirm, message } from 'antd';

import { FiCoffee } from 'react-icons/fi';

import { Container, Title, Content } from '../team/styles/team'
import { DutyControllerButtons, DaysDuties } from './styles/duty';

import { membersDuty } from '../../../api'

import user from '../../../assets/user.png';
import ModalOnDuty from '../../../components/duty/ModalOnDuty'

export default function Duty() {
  var currentdate = new Date();
  var datetime = "Last Sync: " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  console.log(datetime);

  let [sortedInfo, setSortedInfo] = useState();
  const [memberOnDuty, setMemberOnDuty] = useState([]);

  useEffect(() => {
    const duties = localStorage.getItem('duties');
    if (duties) {
      setMemberOnDuty(JSON.parse(duties))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('duties', JSON.stringify(memberOnDuty));
  }, [memberOnDuty]);

  async function handleStarted(memberId) {
    try {
      const response = await membersDuty.list(memberId);
      if (response.status === 200) {
        const index = response.data.member.duties.length - 1;
        const data = {
          name: response.data.member.name,
          file: response.data.member.image,
          dutyId: response.data.member.duties[index].id,
          memberId: response.data.member.id,
          startTime: currentdate.getHours() + ":" + currentdate.getMinutes(),
          finishTime: null
        };

        var indexDuty = memberOnDuty.map(x => x.memberId).indexOf(memberId)
        if (indexDuty !== -1) {
          memberOnDuty[indexDuty] = data;
          setMemberOnDuty([...memberOnDuty]);
        }
        else setMemberOnDuty([...memberOnDuty, data]);
      }
    } catch (error) {
      console.log(error);
    }
  }


  async function handleFinished(dutyId, member) {
    try {
      const response = await membersDuty.update(dutyId);
      if (response.status === 200) {
        member.finishTime = currentdate.getHours() + ":" + currentdate.getMinutes();
        setMemberOnDuty([...memberOnDuty]);
        message.success('Plantão finalizado!');
      }
    } catch (error) {
      message.error('Erro ao finalizar plantão.');
    }
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
          width: '4%',
          render: file => <img src={file ? file : user} alt="Foto de perfil" />
        },
        {
          title: 'Nome',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Início',
          dataIndex: 'startTime',
        },
        {
          title: 'Término',
          dataIndex: 'finishTime',
        },
        {
          title: 'Finalizar plantão',
          dataIndex: 'dutyId',
          render: (dutyId, member) => <Popconfirm title="Finalizar plantão?" onConfirm={() => handleFinished(dutyId, member)}>
            <a>Encerrar</a>
          </Popconfirm>
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
        <p style={{ fontSize: '16px' }}>Bora pra mais um plantão ?</p>

        <DutyControllerButtons>
          <ModalOnDuty handleStarted={handleStarted} />
        </DutyControllerButtons>

        <DaysDuties>
          <Table rowKey="id" columns={columns} scroll={{ x: true }} dataSource={memberOnDuty} pagination={false} onChange={handleChange} />
        </DaysDuties>
      </Content>


    </Container>
  )
}

