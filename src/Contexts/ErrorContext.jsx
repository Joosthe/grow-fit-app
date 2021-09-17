import React, { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

export function useError(){
  return useContext(ErrorContext);
}

export const ErrorProvider = ({children}) => {
  const [error, setError] = useState({
    message:'',
    status:''
  });

  function setErrorMessage(message){
    setError({message, status:'error'})
  }
  function setSuccesMessage(message){
    setError({message, status:'succes'})
  }
  function setWarningMessage(message){
    setError({message, status:'warinng'})
  }
  function clearMessage(){
    setError({message: '', status:''})
  }
  const value = {
    error,
    setErrorMessage, 
    setSuccesMessage,
    setWarningMessage,
    clearMessage
  }
  return(
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  )
}
