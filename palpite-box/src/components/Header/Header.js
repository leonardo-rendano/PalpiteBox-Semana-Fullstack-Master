import React from 'react';

import Logo from '../../assets/images/logo_palpitebox.png';

export default function Header() {
  return(
    <header className='bg-teal-600 p-4'>
        <div className='container mx-auto'>
          <img src={Logo} alt="logomarca"/>
        </div>
      </header>
  );
}