import React from 'react';
import { Icon } from '@iconify/react';
import podiumIcon from '@iconify-icons/ion/podium';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Menu(){


  return (
    <div id="menu-principal">
      <h1>Excel</h1>
      
      <ul className="menu-options">
        <Link to="/cenario/1/mission"><li><i className="fas fa-tasks"></i> Missões</li></Link>
        <Link to="/cenario/1/ranking"><li><i><Icon icon={podiumIcon} /></i>Ranking</li></Link>
        <Link to="/cenario/1/medals"><li><i className="fas fa-medal"></i> Medalhas</li></Link>
        <Link to="/"><li><i className="fas fa-door-open"></i> Sair</li></Link>
      </ul>
    </div>
  );
}

