import React from 'react';
import CardCenario from '../../components/CardCenario';

import './styles.css';
const Cenario = () => {

  const Cenarios = [
    {
      name: 'Word',
      icon: 'https://www.flaticon.com/svg/static/icons/svg/732/732226.svg',
      description: 'Aqui você aprende a criar, formatar e editar textos com dinamismo e profissionalismo. '
    },
    {
      name: 'Excel',
      icon: 'https://www.flaticon.com/svg/static/icons/svg/732/732220.svg',
      description: 'Aprenda editar planilhas, efetuar operações e muito mais!',
    }
  ]

  return(
    <div id="pagina-cenario">
      <header>
        <h1>Selecione um cenário</h1>
      </header>
      
      <main id="lista-cenarios">
        {Cenarios.map((cenario, index) => {
          return (
            <CardCenario key={index} cenario={cenario}/>
          )
          
        })}
        
      </main>
      

    </div>
  );
};
export default Cenario;