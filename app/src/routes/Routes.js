import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import OrdenCompra from '../pages/OrdenCompra';
import Header from '../components/Header';
import Cookies from 'universal-cookie';
import Public from './Public';
import Protected from './Protected';
import Footer from '../components/Footer';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

const _cookies = new Cookies();

function Routes() {
  return (
    <BrowserRouter>
    <Header cookies={_cookies}/>
      <Switch>
        <Public exact path="/" component={(props)=><Home {...props} cookies={_cookies}/>} cookies={_cookies}/>
        <Public exact path="/productos/:label" component={(props)=><Products {...props} cookies={_cookies}/>} cookies={_cookies}/>
        <Public exact path="/contacto" component={(props)=><Contact {...props} cookies={_cookies}/>} cookies={_cookies}/>
        <Public exact path="/login" component={(props)=><Login {...props} cookies={_cookies}/>} cookies={_cookies}/>
        <Public exact path="/registro" component={(props)=><Register {...props} cookies={_cookies}/>} cookies={_cookies}/>
        <Protected exact path="/ordencompra" component={OrdenCompra} cookies={_cookies}/>
        <Route component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
          </div>
        )} />
      </Switch>
    <Footer cookies={_cookies}/>
    </BrowserRouter>
  );
}

export default Routes;
