import { useEffect, useState } from "react";
import { getData } from "../Connections/graphcsm";

export default function useStaticCmsData(startValue,query){
  const [data, setData ]= useState(startValue);
  
  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const response = await getData(query);
        setData(response);
        
      }catch(err){
        console.log(err)
      }
    }
    fetchData() ;
  } , [])
  return {
    data: data || {}  };
}
