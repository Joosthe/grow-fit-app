import { useEffect, useState } from "react";
import { getData } from "../Connections/graphcsm";

function useWorkoutDetail(query) {
  const [data, setData] = useState(null);
  const [ex, setEx]= useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData(query)
      .then((response) => {
        setData(response.workout)
        console.log('test',response.workout.exercises)
        response.workout.exercises.forEach(element => {
          console(element)
        });
       
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const refetch = () => {
    setLoading(true);
    getData(query)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // console.log('ex',ex);
  return { data, loading, error, refetch, ex };
}

export default useWorkoutDetail;