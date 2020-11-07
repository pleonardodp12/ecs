import React from 'react';
import './styles.css';

const PrincipalRanking = () => {
  return (
    <div id="pagina-principal-ranking">
      <h1> Ranking</h1>
      <section className="pagina-principal-ranking-content">

        <div className="pagina-principal-ranking-content__card">
          <h2>1</h2>
          <div className="ranking">
            <h4>Reginaldo Rossi</h4>
            <hgroup>
              <h5>Nv. 14</h5>
              <h5>576 pontos</h5>
            </hgroup>
          </div>
        </div>

        <div className="pagina-principal-ranking-content__card">
          <h2>2</h2>
          <div className="ranking">
            <h4>Julio Nascimento</h4>
            <hgroup>
              <h5>Nv. 7</h5>
              <h5>400 pontos</h5>
            </hgroup>
          </div>
        </div>

        <div className="pagina-principal-ranking-content__card">
          <h2>3</h2>
          <div className="ranking">
            <h4>Dalto</h4>
            <hgroup>
              <h5>Nv. 4</h5>
              <h5>330 pontos</h5>
            </hgroup>
          </div>
        </div>

        <div className="pagina-principal-ranking-content__card">
          <h2>4</h2>
          <div className="ranking">
            <h4>Waldick Soriano</h4>
            <hgroup>
              <h5>Nv. 3</h5>
              <h5>300 pontos</h5>
            </hgroup>
          </div>
        </div>

        <div className="pagina-principal-ranking-content__card">
          <h2>5</h2>
          <div className="ranking">
            <h4>Amado Batista</h4>
            <hgroup>
              <h5>Nv. 2</h5>
              <h5>220 pontos</h5>
            </hgroup>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default PrincipalRanking
