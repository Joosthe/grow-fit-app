import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import { getWorkoutDetailQuery } from '@/Queries/Workout/getWorkoutsQuery';
import { Transformation, Image } from 'cloudinary-react';
import { BsClock, BsChevronLeft } from 'react-icons/bs';
import Container from '@/Components/Wrappers/Container';
import WorkoutExercise from '@/Components/PageComponents/WorkoutExercise/WorkoutExercise';
import './styles/WorkoutDetail.scss';

export default function WorkoutDetail() {
    const { workoutdetail } = useParams();
    const { data } = useStaticCmsData({}, getWorkoutDetailQuery(workoutdetail));

    return (
        <Container className={'workout-container'}>
            <div className="workoutdetail__wrapper">
                <div className="workoutdetail__inner">
                    <Image publicId={data?.workout?.workoutImg}>
                        <Transformation height="500" width="auto" crop="fill" />
                    </Image>
                </div>
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
