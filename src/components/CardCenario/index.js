import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const CardCenario = ({ cenario }) => {
  
  return(
    
    <div id="card-container">
      <div id="card-icon">
        <img src={cenario.icon} alt="icon logo" />
        <h3> {cenario.name} </h3>
      </div>
      <div id="card-info">
        <h5>
          {cenario.description}
        </h5>
        <Link className="goToCenario" to="/cenario/1/mission">
          <i className="fas fa-play"></i>
        </Link>
      </div>
    </div>
  );
};

export default CardCenario;