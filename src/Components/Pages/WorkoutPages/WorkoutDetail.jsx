import React, {useState, useEffect} from 'react'
import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import { useParams } from 'react-router-dom';
import { getWorkoutDetailQuery, getWorkoutExercisesQuery } from '../../../Queries/Workout/getWorkoutsQuery';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { getData } from '../../../Connections/graphcsm';
import useWorkoutDetail from '../../../Hooks/useWorkoutDetail';

 export default function WorkoutDetail() {
     const { id } = useParams();
     const { data, ex } = useWorkoutDetail(getWorkoutDetailQuery(id));
    //  const { data, ex } = useStaticCmsData();

    //  const [exercisesino, setExercises] = useState([]);  

    // function getExercises(array){
    //   let newExercises = [];
    //   array.forEach(async id=>{
    //     const  result = await getData(getWorkoutExercisesQuery(id));
    //     newExercises.push(result.exercise);
    //   });
    //   return newExercises;
    // }


    // if(data.workout){
    //   const test = getExercises(data.workout.exercises);
    // }
      
     return (
         <div>
           {/* {console.log('test', data)} */}
            {/* {data &&(
                <div>
                    <h1>{data.workout?.title}</h1>
                    <Image publicId={data.workout?.workoutImg}/> 
                </div>
            )
            }
            {      console.log(exercisesino)}
           
            {/* {exercises.length > 0 && (
                <div>
                    {console.log('exercises',exercises)}
                    { exercises.map(item=>(
                   <div> {item.title}</div>
                ))}
                </div>
               
             )}  */}         
         </div>
     )
 }
