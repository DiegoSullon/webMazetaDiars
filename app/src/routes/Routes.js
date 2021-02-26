import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Menu from '../pages/Menu';
import OrdenCompra from '../pages/OrdenCompra';
import Header from '../components/Header';
import Cookies from 'universal-cookie';
import Public from './Public';
import Protected from './Protected';

const _cookies = new Cookies();

function Routes() {
  return (
    <BrowserRouter>
    <Header cookies={_cookies}/>
      <Switch>
        <Public exact path="/" component={Menu} cookies={_cookies}/>
        <Public exact path="/login" component={(props)=><Login {...props} cookies={_cookies}/>} cookies={_cookies}/>
        <Public exact path="/registro" component={(props)=><Register {...props} cookies={_cookies}/>} cookies={_cookies}/>
        <Protected exact path="/ordencompra" component={OrdenCompra} cookies={_cookies}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
