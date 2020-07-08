import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { Table, Popconfirm, message } from 'antd';

import { FiCoffee } from 'react-icons/fi';

import { Container, Title, Content } from '../team/styles/team'
import { DutyControllerButtons, DaysDuties } from './styles/duty';

import { membersDutyApi } from '../../../api'

import user from '../../../assets/user.png';
import ModalOnDuty from '../../../components/duty/ModalOnDuty'

function Duty({ je }) {
  const apiURL = 'https://backend-dvora.herokuapp.com/files/member';
  let [sortedInfo, setSortedInfo] = useState();
  const [memberOnDuty, setMemberOnDuty] = useState([]);
  const [newDuty, setNewDuty] = useState();

  const history = useHistory();

  function addZero(number) {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }
  function formatTime(time) {
    const currentdate = new Date(time);
    let h = addZero(currentdate.getHours());
    let m = addZero(currentdate.getMinutes());
    return h + ":" + m;
  }

  useEffect(() => {
    const loadDuties = async () => {
      try {
        const response = await membersDutyApi.list(je.id);
        if (response.status === 200) {
          const data = response.data.dutiesToday.map(memberDuty => ({
            ...memberDuty,
            startTime: formatTime(memberDuty.duty.createdAt),
            finishTime: memberDuty.duty.status === 1 ? formatTime(memberDuty.duty.updatedAt) : null,
          }))
          setMemberOnDuty(data);
        }
      }
      catch (error) {
        console.log(error.response.data);
      }
    }
    loadDuties();
  }, [newDuty]);

  async function handleFinished(dutyId, member) {
    try {
      const response = await membersDutyApi.update(dutyId);
      if (response.status === 200) {
        member.finishTime = formatTime(response.data.updatedAt);
        setMemberOnDuty([...memberOnDuty]);
        message.success('Plantão finalizado!');
        history.push({
          pathname: '/dashboard/feedback',
          state: {
            dutyId,
          }
        });

      }
    } catch (error) {
      message.error(error.response.data.msg);
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
          render: file => <img src={file ? `${apiURL}/${file}` : user} alt="Foto de perfil" />
        },
        {
          title: 'Nome',
          dataIndex: 'member',
          sorter: (a, b) => a.member.localeCompare(b.member),
          sortOrder: sortedInfo.columnKey === 'member' && sortedInfo.order,
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
          dataIndex: 'duty.id',
          render: (text, record) => record.finishTime === null ?
            <Popconfirm title="Finalizar plantão?" onConfirm={() => handleFinished(text, record)}>
              <a>Encerrar</a>
            </Popconfirm>
            :
            <span>CONCLUÍDO!</span>
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
          <ModalOnDuty setNewDuty={setNewDuty} />
        </DutyControllerButtons>

        <DaysDuties>
          <Table rowKey="id" columns={columns} scroll={{ x: true }} dataSource={memberOnDuty} pagination={false} onChange={handleChange} />
        </DaysDuties>
      </Content>


    </Container>
  )
}

const mapStateToProps = state => ({
  je: state.je
});

export default connect(mapStateToProps)(Duty);