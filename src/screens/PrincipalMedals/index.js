import React from 'react';

import './styles.css';

const PrincipalMedals = () => {
  return (
    <div id="pagina-principal-medals">
      <h1> Suas Medalhas</h1>
      <main class="medals__container">

        <div className="medal">
          <img src='https://www.flaticon.com/svg/static/icons/svg/906/906313.svg' alt="medalha" />
          <span>Rei do Word</span>
        </div>

        <div className="medal">
          <img src='https://www.flaticon.com/svg/static/icons/svg/906/906310.svg' alt="medalha" />
          <span>Rei do Excel</span>
        </div>  
        
      </main>

      <h1> Comprar novas medalhas</h1>

      <main class="medals__container">

        <div className="medal">
          <img src='https://www.flaticon.com/svg/static/icons/svg/906/906324.svg' alt="medalha" />
          <span>Rei do VSCODE</span>
          <p>200 pontos</p>
          <button>Comprar</button>
        </div>

        <div className="medal">
          <img src='https://www.flaticon.com/svg/static/icons/svg/906/906329.svg' alt="medalha" />
          <span>Rei da Nuvem</span>
          <p>200 pontos</p>
          <button>Comprar</button>
        </div>

        <div className="medal">
          <img src='https://www.flaticon.com/svg/static/icons/svg/906/906312.svg' alt="medalha" />
          <span>Rei do Outlook</span>
          <p>200 pontos</p>
          <button>Comprar</button>
        </div>        
        
      </main>


    </div>
  )
}

export default PrincipalMedals