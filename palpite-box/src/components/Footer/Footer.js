import React from 'react';

import FSM from '../../assets/images/logo_semana_fsm.png';
import devPleno from '../../assets/images/logo_devpleno.png';

export default function Footer() {
  return(
    <div className='bg-teal-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por Leonardo Rendano durante a Semana Fullstack master, do devPleno.
        <div className='mt-2'>
          <img className='inline w-40 p-4' src={FSM} alt="Semana Fullstack Master" />
          <img className='inline w-40 p-4' src={devPleno} alt="devPleno" />
        </div>
      </div>
    </div>
  );
}