import { useEffect, useState } from "react";
import { getData } from "../Connections/graphcsm";

export default function useExercises(query){
  const [exercises, setExercises ]= useState(null);
  
  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const response = await getData(query);
        setExercises(response);
        
      }catch(err){
        console.log(err)
      }
    }
    fetchData() ;
  } , [])
  return {
    exercises: exercises || {}  };
}
