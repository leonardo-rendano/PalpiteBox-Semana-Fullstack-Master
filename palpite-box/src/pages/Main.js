import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';


export default function Main() {
  return(
    <div>
      <Header />
      <div className='bg-gray-300 p-4'>
        <div className='container mx-auto text-center'>
          <Link to="/Home" className='px-2 hover:underline'> Home </Link>
          <Link to="/Sobre" className='px-2 hover:underline'> Sobre </Link>
          <Link to="/Contato" className='px-2 hover:underline'> Contato </Link>
          <Link to="/Pesquisa" className='px-2 hover:underline'> Pesquisa </Link>
        </div>
      </div>
    </div>
  );
}