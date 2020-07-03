import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';

export default function Main() {
  return(
    <div>
      <Header />
      <div className='container mx-auto'>
        <Link to="/Sobre"> Sobre </Link>
        <Link to="/Contato"> Contato </Link>
        <Link to="/Pesquisa"> Pesquisa </Link>
      </div>
    </div>
  );
}