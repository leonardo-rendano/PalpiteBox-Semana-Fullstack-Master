import React from 'react';

import Logo from '../../assets/images/logo_palpitebox.png';

export default function Header() {
  return(
    <>
      <header className='bg-teal-600 p-4 shadow-md'>
        <div className='container mx-auto'>
          <img className='mx-auto w-40' src={Logo} alt="PalpiteBox"/>
        </div>
      </header>
    </>
  );
}