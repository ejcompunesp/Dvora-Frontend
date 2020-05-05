import React from "react";

import { Container } from "../team/styles/team";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { FaRegUser, FaRegClock, FaRegLightbulb } from "react-icons/fa";
import { Title, UserInfo, LastDuties, About, ActualProject } from "./styles/profile";

import JohnDoe from '../../../assets/John Doe.png';

export default function Profile() {
  return (
    <Container>
      <Title>
        <img src={JohnDoe} alt="profile-img"/>
        <li style={{marginLeft: "280px"}}>
          <strong>John Doe</strong>
          <p>Gerente de Projetos</p>
        </li>
        <li>
          <p>Título atual: Rei do OffTopic</p>
        </li>
      </Title>
      <UserInfo>
        <li>
          <LastDuties>
            <p><FaRegClock/> Últimos plantões</p>
            <p>14/04</p>
            <p>14/04</p>
            <p>14/04</p>
            <p>14/04</p>
            <p>14/04</p>
            <p>14/04</p>
            <p>14/04</p>
          </LastDuties>
        </li>
        <li>
          <About>
            <strong><FaRegUser/> Sobre:</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor libero justo, sed mattis sem sagittis non. In eget mauris erat. Donec ultricies quis nibh eget vestibulum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor libero justo, sed mattis sem sagittis non. In eget mauris erat. Donec ultricies quis nibh eget vestibulum</p>
          </About>
          <strong>Projeto atual:</strong>
          <ActualProject>
            <p><strong><FaRegLightbulb/> Nome: </strong>Dvora</p>
            <p><strong><IoMdInformationCircleOutline/> Descrição: </strong>Gerenciador de EJ's Open Source!</p>
            <p><strong><GoPencil/> Contrato assinado em: </strong>Dezembro/2019</p>
          </ActualProject>
        </li>
      </UserInfo>
    </Container>
  );
}