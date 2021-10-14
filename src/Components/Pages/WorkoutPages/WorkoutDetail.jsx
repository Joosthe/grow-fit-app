import React, {useState, useEffect} from 'react'
import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import { useParams } from 'react-router-dom';
import { getWorkoutDetailQuery, getWorkoutExercisesQuery } from '../../../Queries/Workout/getWorkoutsQuery';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { getData } from '../../../Connections/graphcsm';

export default function WorkoutDetail() {
    const { id } = useParams();
    const { data } = useStaticCmsData(getWorkoutDetailQuery(id));

    const [workout, setworkout] = useState(data.workout);
    
    
    console.log("workout",workout)
    useEffect(() => {
        setworkout(data.workout)
        const exercises = [];
        data?.workout?.exercises.forEach(async id=>{
            
         const  result = await getData(getWorkoutExercisesQuery(id));
         exercises.push(result.exercise);
        }) 
        console.log("workout",workout)
        console.log('newworkout', newworkout)
        setworkout({ ...workout, exercises});
    }, [data.workout])
      

    return (
        <div>
     
            {data &&(
                <div>
                    <h1>{data.workout?.title}</h1>
                </div>
            )
            }
           
        </div>
    )
}
