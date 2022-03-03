import React, { useState, useEffect } from 'react'
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import { Link, useParams } from 'react-router-dom';
import { getWorkoutDetailQuery, getWorkoutExercisesQuery } from '@/Queries/Workout/getWorkoutsQuery';
import { Transformation, Image } from 'cloudinary-react';
import { BsClock, BsChevronLeft } from 'react-icons/bs';
import useWorkoutDetail from '@/Hooks/useWorkoutDetail';
import Container from '@/Components/Wrappers/Container';
import './styles/WorkoutDetail.scss';
import WorkoutExercise from '@/Components/PageComponents/WorkoutExercise/WorkoutExercise';

export default function WorkoutDetail() {
    const { id } = useParams();
    const { data } = useStaticCmsData({}, getWorkoutDetailQuery(id));

    return (
        <Container className={'workout-container'}>
            <div className="workoutdetail__wrapper">
                <div className="workoutdetail__inner">
                    <Image publicId={data?.workout?.workoutImg}>
                        <Transformation height="500" width="auto" crop="fill" />
                    </Image>
                </div>
                {console.log(data)}
                <div className="workoutdetail__inner workoutdetail__info ">
                    <Link to="/workouts" className="workoutdetail__backlink"> <BsChevronLeft /> Go back to workouts</Link>
                    <div className="workoutdetail__header">
                        <h1 className="workoutdetail__titel">{data?.workout?.title}</h1>
                        <span className='workoutdetail__sport'>{data?.workout?.sport}</span>
                    </div>
                    <p className='workoutdetail__duration'>
                        <BsClock /> {data.workout?.duration}
                    </p>

                    <p>{data?.workout?.descr}</p>
                    <div className="workoutdetail__exercises__wrapper">
                        {data.workout?.exercises.map((item, index) =>
                            <WorkoutExercise itemId={item} key={index} />
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}
