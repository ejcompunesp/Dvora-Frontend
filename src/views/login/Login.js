import React from "react";

import { Container } from "./styles/login";
import { FaBeer } from "react-icons/fa"

import logo from "../../assets/dvora-logo.png";

export default function Login() {
  return (
    <Container>
      <img src={logo} alt="logo dvora" />
      <div className="hello">
        <div>
          Login
        </div>
        <form>
          <input type="text" placeholder="email"  />
          <input type="password" placeholder="password"/>
          <button type="submit">Logar</button>
          <hr />
          <a href="#">Registre-se</a>
        </form>
      </div>
    </Container>
  );
}
