import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../Contexts//UserContext';

export default function PrivateRoute({ component: Component, ...rest}) {
  const { currentUser } =  useUser();
  return (
    <Route 
    {...rest}
    render={props => {
      return currentUser 
      ? <Component {...props} />
      : <Redirect to="/forbiddden" />
    }}
    ></Route>  
  )
}
