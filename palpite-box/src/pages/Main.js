import React from 'react';
import { Link } from 'react-router-dom';
import Sobre from './Sobre';
import Contato from './Contato';

export default function Main() {
  return(
    <div>
      <h1>Olá, Semana Fullstack Master!</h1>
      <Link to={Sobre} />
      <Link to={Contato} />
    </div>
  );
}