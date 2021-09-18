import axios from "axios";
import { useEffect, useState } from "react";
// import {setErrorMessage} from "../Contexts/ErrorContext";
import { configQuery } from "../Connections/graphcsm";

export default function useCmsData(query){
  const [cmsData, setCmsData ]= useState(null);
  const [loadingCsmData , setLoadingCsmData ]= useState(null);
  // const { setErrorMessage } = useError(); 

  useEffect(()=>{
    const fetchData = async ()=> {
      setLoadingCsmData(true);
      try{
        const response = await axios(configQuery(query));
        setCmsData(response);
      }catch(err){
        console(err)
      }
      setLoadingCsmData(false);
    }

    fetchData() ;
  }, [query])
  return {cmsData, loadingCsmData};
}
