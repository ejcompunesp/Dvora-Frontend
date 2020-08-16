import React from "react";

import { useHistory } from 'react-router-dom';

import { Button } from 'antd';

import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoPencil, GoInfo } from "react-icons/go";
import { FaRegUser, FaRegClock, FaRegLightbulb, FaRegCalendarAlt } from "react-icons/fa";

import { Container, Content } from "../team/styles/team";
import { Title, UserInfo, LastDuties, Duties, About, ActualProject } from "./styles/profile";

import {data} from '../../../api/ApiTeste';
import JohnDoe from '../../../assets/John Doe.png';

const person = data[0];
const personDuty = data[0].duties;

export default function Profile() {

  const history = useHistory();

  function handleDuty(e) {
    e.preventDefault();
    history.push('/dashboard/duty');
  }

  return (
    <Container>
      <Title>
        <img src={JohnDoe} alt="profile-img"/>
        <li style={{marginLeft: "280px"}}>
          <strong>{person.name}</strong>
          <p>{person.position}</p>
        </li>
        <li>
          <p>Título atual: Rei do OffTopic</p>
        </li>
      </Title>
      <Content>
        <UserInfo>
          <li>
            <LastDuties>
              <span><FaRegClock /> Últimos plantões</span>
              {personDuty.map(duties => {
                return (
                  <Duties key={duties.date}>
                    <FaRegCalendarAlt /> {duties.date} <hr/> <FaRegClock /> {duties.duration}hrs <GoInfo className="info" />
                  </Duties>
                )
              })}
            </LastDuties>
            <Button type="primary" onClick={handleDuty} >Iniciar plantão</Button>
          </li>
          <li>
            <About>
              <span><FaRegUser/> Sobre:</span>
              <p>{person.about}</p>
            </About>
            <strong>Projeto atual:</strong>
            <ActualProject>
              <p><span><FaRegLightbulb/> Nome: </span>Dvora</p>
              <p><span><IoMdInformationCircleOutline/> Descrição: </span>Gerenciador de EJ's Open Source!</p>
              <p><span><GoPencil/> Contrato assinado em: </span>Dezembro/2019</p>
            </ActualProject>
          </li>
        </UserInfo>
      </Content>
    </Container>
  );
}