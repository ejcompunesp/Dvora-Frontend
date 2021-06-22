import React from "react";

import { FiHome } from "react-icons/fi";
import Header from "../../../components/common/Header";

import teamWork from '../../../assets/office-team-illustration.png'

import { StyledContent } from './styles/home';

export default function Home() {
  return (
    <>
      <Header
        title="Início"
        icon={<FiHome />}
      />
      <StyledContent>
        <img src={teamWork} alt="Team Work" />
        <b>Bem-vindos ao DVora!</b>
      </StyledContent>
    </>
  );
}
