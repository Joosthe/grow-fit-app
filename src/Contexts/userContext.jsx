import React,{ useContext, useState } from 'react';
import { auth } from '../Connections/firebase';
import { createUserQuery, publishCreatedUserQuery } from '../Queries/createUserQuery';
import { getData } from '../Connections/graphcsm';
import { getUserQuery } from '../Queries/getUserQuery';
import { updateUserQuery } from '../Queries/updateUserQuery';

export const UserContext = React.createContext();

export function useUser(){
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState( 
    JSON.parse(localStorage.getItem('currentUser'))
  );
  function userRegister(email, password, username){
    return auth.createUserWithEmailAndPassword(email,password).then(
     getData(createUserQuery(email, username)).then(
      data => {
        getData(publishCreatedUserQuery(data.createApp_User.id)).then(
        data =>{
          setCurrentUser( data.publishApp_User);
          localStorage.setItem('currentUser', JSON.stringify(data.publishApp_User));
        })
      }
    ))
  }

 async function userLogin(email, password){
   try{
    await auth.signInWithEmailAndPassword(email, password);
    const data = await getData(getUserQuery(email))
    localStorage.setItem('currentUser', JSON.stringify(data.app_User));
    setCurrentUser( data.app_User);
    return true;
   }catch(err){
    return false;
   }
  }

  function userEdit(id, firstname, lastname, username){
    return getData(updateUserQuery(id, firstname, lastname, username)).then(
      data => {
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        setCurrentUser(data.user);
      }
    );
  }
  
  function userLogout(){
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  }

  const exportedvalues =  {
    currentUser,
    userRegister,
    userLogin,
    userEdit,
    userLogout
  }
  return (
    <UserContext.Provider value={exportedvalues}>
      {children}
    </UserContext.Provider>
  )
} 
