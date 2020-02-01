import React from "react";

import { Container } from "./estilo/registro";
import { FaUserAlt } from "react-icons/fa"
import { FaCity } from "react-icons/fa"
import { MdLocationCity } from "react-icons/md"
import {FaRegCalendarAlt} from "react-icons/fa"

import logo from "../../assets/dvora-logo.png";
import ejcomp from "../../assets/ejcomp.jpg";


export default function Registro() {
  return (
    <Container>
      <img src={logo} alt="logo dvora" />
      <div className="hello">
        <div class="registro">
          registros
        </div>
        <form>
          <div className="fotoDaEj">
            <img src={ejcomp} alt=""/> 
            <h4> Foto da EJ </h4>
          </div>
          
          <div className="divForm" >
            <i className="Icon"> <FaUserAlt/> </i>
            <input type="text" placeholder="Nome"  />
          </div>

          <div className="divForm" >
            <i className="Icon"> <FaCity/> </i>
            <input type="text" placeholder="Cidade"  />
          </div> 
    
          <div className="divForm" >
            <i className="Icon"> <MdLocationCity/> </i>
            <input type="text" placeholder="IES(Instituição de ensino superior)"  />
          </div>

          <div className="divForm" >
            <i className="Icon"> <FaRegCalendarAlt/> </i>
            <input type="text" placeholder="Ano de criação"  />
          </div>
         
          <button type="submit">cadastrar</button>
          <hr />
          <a href="#">Registre-se</a>
        </form>
      </div>
    </Container>
  );
}
