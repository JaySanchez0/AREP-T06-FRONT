import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CreditView from './components/CreditsView/CreditsView';
import PayView from './components/PayView/PayView';
import main from './components/main/main';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/register-pay" component={CreditView}></Route>
          <Route path="/pay" component={PayView}></Route>
          <Route path="/" component={main}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
