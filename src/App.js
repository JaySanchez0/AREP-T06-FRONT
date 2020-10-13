import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CreditView from './components/CreditsView/CreditsView';
import PayView from './components/PayView/PayView';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/register-pay" component={CreditView}></Route>
          <Route path="/pay" component={PayView}></Route>
          <Route path="/" render={()=><Redirect to="/register-pay"></Redirect>}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
