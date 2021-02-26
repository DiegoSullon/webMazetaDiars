import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const Protected = ({ component: Component,cookies,...rest}) => {
  
    const userLogged = cookies.get('token')
  
  if ( !userLogged ) {
    return <Redirect to="/login" />
    
  }
  return <Route {...rest} component={Component} />

}

export default Protected