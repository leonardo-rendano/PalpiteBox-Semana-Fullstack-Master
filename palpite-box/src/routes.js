import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Pesquisa from './pages/Pesquisa';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'

export default function Routes() {
  return(
    <BrowserRouter>
    <Main />
      <Switch>
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/pesquisa" component={Pesquisa} />
        <Route exact path="/home" component={Home} />
      </Switch>
    <Footer />
  </BrowserRouter>
  );
}