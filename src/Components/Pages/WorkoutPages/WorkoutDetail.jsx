import React, {useState, useEffect} from 'react'
import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import { Link, useParams } from 'react-router-dom';
import { getWorkoutDetailQuery, getWorkoutExercisesQuery } from '../../../Queries/Workout/getWorkoutsQuery';
import { Transformation, Image } from 'cloudinary-react';
import {BsClock, BsChevronLeft} from 'react-icons/bs';
import useWorkoutDetail from '../../../Hooks/useWorkoutDetail';
import Container from '../../Wrappers/Container';
import './styles/WorkoutDetail.scss'

 export default function WorkoutDetail() {
     const { id } = useParams();
     const { data } = useWorkoutDetail(getWorkoutDetailQuery(id));
      
     return (
         <Container className={'workout-container'}>
            <div className="workoutdetail__wrapper">
                {console.log(data)}
                <div className="workoutdetail__inner">
                <Image publicId={data?.workoutImg}>
                <Transformation height="500" width="auto" crop="fill"/>
                </Image>
                </div>
                <div className="workoutdetail__inner workoutdetail__info ">
                    <Link to="/workouts" className="workoutdetail__backlink"> <BsChevronLeft/> Go back to workouts</Link>
                    <div className="workoutdetail__header">
                        <h1 className="workoutdetail__titel">{data?.title}</h1>
                        <span className='workoutdetail__sport'>{data?.sport}</span>
                    </div>
                    <p className='workoutdetail__duration'>
                       <BsClock/> {data?.duration}
                    </p>
                    <p>{data?.descr}</p>

                </div>
            </div> 
         </Container>
     )
 }
