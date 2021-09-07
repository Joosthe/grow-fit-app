import React from 'react'
import { useState, useEffect, Children } from "react";
import axios from "axios";
import { configQuery } from "../Connections/graphcsm";
export const CmsContext = React.createContext();


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
