import React from 'react';
import { Route, Switch} from 'react-router-dom';
import InfoUser from '../../components/InfoUser';
import Menu from '../../components/Menu';
import PrincipalMedals from '../PrincipalMedals';
import PrincipalMission from '../PrincipalMission';
import PrincipalRanking from '../PrincipalRanking';
import Questions from '../Questions';

import './styles.css';

export default function Principal(){
  return(
    <div id="page-principal">
      <div id="info-user">
        <InfoUser />
      </div>

      <aside id="menu">
        <Menu />
      </aside>
      <div id="conteudo-principal">
        <Switch>
          <Route path="/cenario/1/mission" exact component={PrincipalMission}></Route>
          <Route path="/cenario/1/mission/questions/basico" exact component={Questions}></Route>
          <Route path="/cenario/1/medals" component={PrincipalMedals}></Route>
          <Route path="/cenario/1/ranking" component={PrincipalRanking}></Route>
        </Switch>
      </div>
    </div>
  );
};