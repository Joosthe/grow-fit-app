import React, {useContext} from 'react'
import axios from "axios";
import { configQuery } from "../Connections/graphcsm";

const CmsContext = React.createContext();

export function useCms(){
  return useContext(CmsContext)
}

export function useCmsContext(){
  async function getData(query,variables){
    const response = await axios(configQuery(query, variables))
    return response.data.data;
  }
  return {getData};
}

export function CmsContextProvider(props){
  const data = useCmsContext();
  return (
    <CmsContext.Provider value={data}>
      {props.children}
    </CmsContext.Provider>
  )
}
