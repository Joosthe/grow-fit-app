import React, {useContext} from 'react'
import { useCmsContext } from "../Connections/graphcsm";


const CmsContext = React.createContext();

export function useCms(){
  return useContext(CmsContext)
}


export function CmsContextProvider(props){
  const data = useCmsContext();
  return (
    <CmsContext.Provider value={data}>
      {props.children}
    </CmsContext.Provider>
  )
}
