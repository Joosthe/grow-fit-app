import React,{ useContext, useState, useEffect } from 'react';
import { auth } from '../Connections/firebase';

const AuthContext = React.createContext();

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({children}){
  const [currentUser, setCurrentUser]= useState('');
  const [loading, setLoading ] = useState(true);

  async function registerUser(email,password){
  try {
    return await auth.createUserWithEmailAndPassword(email,password);
  } catch (error) {
  }
  }

  function loginUser(email,password){
    return auth.signInWithEmailAndPassword(email,password);
  }

  function logoutUser(){
    return auth.signOut();
  }

  useEffect(()=>{
   const unsubscriber = auth.onAuthStateChanged(user=>{
    setCurrentUser(user) 
    setLoading(false)

    })
    return unsubscriber;
  },[])

  const useFuctions = {
    currentUser,
    registerUser,
    loginUser,
    logoutUser
  }
  return(
    <AuthContext.Provider value={useFuctions}>
     { !loading && children }
    </AuthContext.Provider>
  )
 }
