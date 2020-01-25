import React from "react";

import { Container } from "../login/styles/login";
import { FaUserAlt } from "react-icons/fa"
import { FaCity } from "react-icons/fa"
import { MdLocationCity } from "react-icons/md"


import logo from "../../assets/dvora-logo.png";

export default function Registro() {
  return (
    <Container>
      <img src={logo} alt="logo dvora" />
      <div className="hello">
        <div>
          Registro
        </div>
        <form>
          <div>
            <FaUserAlt/>
            <input type="text" placeholder="nome"  />
          </div>
          <div>
            <FaCity/>
            <input type="text" placeholder="cidade"/>
          </div>
          <div>
            <MdLocationCity/>
            <input type="text" placeholder="ies"/>
          </div>
          
          <input type="text" placeholder="ano de criação"/>
          <button type="submit">Registre-se</button>
          <hr />
        </form>
      </div>
    </Container>
  );
}
