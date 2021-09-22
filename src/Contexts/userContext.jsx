import React,{ useContext, useState, useEffect } from 'react';
import { auth } from '../Connections/firebase';
import { createUserQuery, publishCreatedUserQuery } from '../Queries/createUserQuery';
import { getData } from '../Connections/graphcsm';
import { getUserQuery } from '../Queries/getUserQuery';

export const UserContext = React.createContext();

export function useUser(){
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {
  const [userError, setUserError] = useState('')
  const [currentUser, setCurrentUser] = useState( 
    JSON.parse(localStorage.getItem('currentUser'))
  );
  function userRegister(email, password){
    try{
      auth.createUserWithEmailAndPassword(email,password);
      return getData(createUserQuery(email)).then(
        data => {
          getData(publishCreatedUserQuery(data.createApp_User.id)).then(
          data =>{
            localStorage.setItem('currentUser', JSON.stringify(data.publishApp_User));
            setCurrentUser( data.publishApp_User)
          })
        }
      )
    }catch(error){
      setUserError(error)
    }
  }

  function userLogin(email, password){
    return auth.signInWithEmailAndPassword(email, password).then(
      getData(getUserQuery(email)).then(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data.app_User));
          setCurrentUser( data.app_User)
        }
      )
    )
  }
  
  function userLogout(){
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  }

  const exportedvalues =  {
    currentUser,
    userError, 
    userRegister,
    userLogin,
    userLogout
  }
  return (
    <UserContext.Provider value={exportedvalues}>
      {children}
    </UserContext.Provider>
  )
} 
