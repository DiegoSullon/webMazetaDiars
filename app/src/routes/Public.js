import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const Public = ({ component: Component,cookies, ...rest}) => {
  
  const userLogged = cookies.get('token')
  
  if (userLogged ) {
    return <Redirect to="/" />
    
  }
  return <Route {...rest} component={Component} />

}

export default Public