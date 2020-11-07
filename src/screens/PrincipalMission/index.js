import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function PrincipalMission(){
  return (
    <div id="pagina-principal-missao">
      <h1> Minhas missões</h1>
      <main>
        <div className="missao">
          <h5>Missão 1</h5>
          <span>Questões básicas de word</span>
          <div className="init">
            <h3>5 pts</h3>
            <Link to="/cenario/1/mission/questions/basico" className="button_play">Começar</Link>
          </div>
        </div>

        <div className="missao">
          <h5>Missão 2</h5>
          <span>Questões intermediárias de word</span>
          <div className="init">
            <h3>10 pts</h3>
            <Link to="/cenario/1/mission/questions/basico" className="button_play">Começar</Link>
          </div>
          
        </div>

        <div className="missao">
          <h5>Missão 3</h5>
          <span>Questões avançadas de word</span>
          <div className="init">
            <h3>15 pts</h3>
            <Link to="/cenario/1/mission/questions/basico" className="button_play">Começar</Link>
          </div>
        </div>
      </main>
    </div>
  );
};