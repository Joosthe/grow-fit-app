import axios from "axios";
import { useEffect, useState } from "react";
import { getData } from "../Connections/graphcsm";

export default function useCmsData(query){
  const [cmsData, setCmsData ]= useState(null);
  const [loadingCsmData , setLoadingCsmData ]= useState(null);

  useEffect(()=>{
    const fetchData = async ()=> {
      setLoadingCsmData(true);
      try{
        const response = await getData(query);
        setCmsData(response);
        
      }catch(err){
        console.log(err)
      }
      setLoadingCsmData(false);
    }

    fetchData() ;
  } , [query])
  return {cmsData, loadingCsmData};
}
