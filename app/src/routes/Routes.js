import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Menu from '../pages/Menu';
import OrdenCompra from '../pages/OrdenCompra';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/ordencompra" component={OrdenCompra}/>
        <Route exact path="/registro" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
