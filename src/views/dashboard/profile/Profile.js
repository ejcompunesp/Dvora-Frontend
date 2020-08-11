import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { membersApi, membersDutyApi } from '../../../api';

import { Button, Skeleton } from 'antd';

import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GoPencil } from 'react-icons/go';
import { FaRegUser, FaRegClock, FaRegLightbulb, FaRegCalendarAlt } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';

import { Container, Content } from '../team/styles/team';
import { Title, UserInfo, LastDuties, Duties, About, ActualProject } from './styles/profile';

import user from '../../../assets/user.png';

function Profile({ je, member }) {
  const [loggedMember, setLoggedMember] = useState({});
  const [memberDuties, setMemberDuties] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  function addZero(number) {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }

  const formatDate = useCallback((date) => {
    const currentdate = new Date(date);
    let day = currentdate.getDate();
    let month = addZero(currentdate.getMonth());
    let year = currentdate.getFullYear();

    return day + "/" + month + "/" + year;
  }, []);

  function formatTime(time) {
    let h = Math.floor(time / 3600);
    let m = Math.floor(time % 3600 / 60);
    let hour = h > 0 ? h + (h === 1 ? " h, " : " h, ") : "";
    let minutes = m > 0 ? m + (m === 1 ? " min " : " min ") : "";

    return hour + minutes;
  }

  useEffect(() => {
    setLoading(true);
    membersApi.list(je.id).then(response => {
      const thatMember = response.data.members.find(item => item.id === member.id);

      setLoggedMember(thatMember);
    });
    membersDutyApi.index(member.id).then(response => {
      const duties = response.data.member.duties.map(duty => ({
        ...duty,
        dutyDate: formatDate(duty.createdAt),
        dutyTime: duty.status === 1 ? formatTime(duty.elapsedTime) : "Em andamento",
      }));

      setMemberDuties(duties);
    });
    setLoading(false);
  }, [formatDate, je.id, member.id]);

  function headsMemberToDuty(e) {
    e.preventDefault();
    history.push('/dashboard/duty');
  }

  return (
    <Container>
      <Title>
        <Skeleton avatar active loading={loading}>
          <img src={loggedMember.image ? loggedMember.image : user} alt={loggedMember.name} />
          <li style={{ marginLeft: "280px" }}>
            <strong>{loggedMember.name}</strong>
            <p>{loggedMember.board}</p>
            <p>{loggedMember.position}</p>
          </li>
        </Skeleton>
      </Title>
      <Content>
        <Skeleton active loading={loading}>
          <UserInfo>
            <div>
              <LastDuties>
                <span><FiCoffee /> Últimos plantões</span>
                {memberDuties.map(duty => {
                  return (
                    <Duties key={duty.id}>
                      <FaRegCalendarAlt /> {duty.dutyDate} <hr /> <FaRegClock /> {duty.dutyTime}
                    </Duties>
                  );
                })}
              </LastDuties>
              <Button type="primary" onClick={headsMemberToDuty} >Iniciar plantão</Button>
            </div>
            <div>
              <About>
                <span><FaRegUser /> Sobre:</span>
                <p>Descrição</p>
              </About>
              <strong>Projeto atual:</strong>
              <ActualProject>
                <p><span><FaRegLightbulb /> Nome: </span>Dvora</p>
                <p><span><IoMdInformationCircleOutline /> Descrição: </span>Gerenciador de EJ's Open Source!</p>
                <p><span><GoPencil /> Contrato assinado em: </span>Dezembro/2019</p>
              </ActualProject>
            </div>
          </UserInfo>
        </Skeleton>
      </Content>
    </Container>
  );
}

const mapStateToProps = state => ({
  je: state.je,
  member: state.member
});

export default connect(mapStateToProps)(Profile);