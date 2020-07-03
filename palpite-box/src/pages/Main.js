import React from 'react';
import { Link } from 'react-router-dom';


export default function Main() {
  return(
    <div>
      <h1>Olá, Semana Fullstack Master!</h1>
      <Link to="/Sobre"> Sobre </Link>
      <Link to="/Contato"> Contato </Link>
      <Link to="/Pesquisa"> Pesquisa </Link>
    </div>
  );
}