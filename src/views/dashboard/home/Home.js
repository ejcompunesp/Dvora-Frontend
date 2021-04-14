import React from "react";

import Header from "../../../components/common/Header";

import team from '../../../assets/team-image.png' 

import { StyledContent } from './styles/home';

export default function Home() {
  return (
    <>
      <Header 
        title="Home"
      />
      <StyledContent>
        <img src={team} alt="Team"/>
        <b>Bem-vindos ao DVora!</b>
      </StyledContent>
    </>
  );
}
