import React from 'react';
import { Link } from 'react-router-dom';


export default function Main() {
  return(
    <div>
      <header className='bg-teal-600 p-4'>
        <div className='container mx-auto'>
          PalpiteBox
        </div>
      </header>
      <div className='container mx-auto'>
        <Link to="/Sobre"> Sobre </Link>
        <Link to="/Contato"> Contato </Link>
        <Link to="/Pesquisa"> Pesquisa </Link>
      </div>
    </div>
  );
}