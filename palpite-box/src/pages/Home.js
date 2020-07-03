import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return(
    <div className='container mt-12 mx-auto text-center'>
      <p>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir sua opinião.
      </p>
      <div className='text-center my-12'>
        <Link to="/pesquisa">
          <button className='bg-blue-400 px-6 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</button>
        </Link>
      </div>
      <div className='container my-12 mx-auto text-center'>
      <p>
        Mensagem de desconto.
      </p>
      </div>
    </div>
  );
}