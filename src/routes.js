import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cenario from './screens/Cenario';
import LoginScreen from './screens/LoginScreen';
import Principal from './screens/Principal';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginScreen} />
      <Route path="/cenario" exact component={Cenario} />
      <Route path="/cenario/1" component={Principal} />
    </BrowserRouter>
  )
}