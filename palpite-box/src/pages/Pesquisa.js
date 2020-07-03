import React from 'react';


export default function Pesquisa() {
  return(
    <>
    <div className='container mx-auto pt-6'>
      <h1 className='container text-center text-2xl font-bold'>Críticas e sugestões</h1>
      <p className='container my-4 mx-auto text-center text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir sua opinião.
      </p>
    </div>
    <div className='w-48 mx-auto'>
      <label className='font-bold'> Seu nome: </label>
      <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' />
    </div>
    </>
  );
}