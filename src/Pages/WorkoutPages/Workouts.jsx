import React from 'react'
import { useParams } from 'react-router-dom';
import WorkoutTeaserCard from '@PageComponent/Cards/WorkoutTeaserCard';
import IntroSection from '@PageSection/IntroSection';
import Container from '@Wrapper/Container';
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import useStaticContent from '@/Hooks/useStaticContent';
import { getWorkoutsTeaserQuery } from '@/Queries/Workout/getWorkoutsQuery';

export default function Workouts() {
    const { data: workoutsdata } = useStaticCmsData({}, getWorkoutsTeaserQuery);
    const sc = useStaticContent('WorkoutPages.Workouts');
    const { id } = useParams();
    return (
        <Container>
            <IntroSection line={sc.introLine} title={sc.title} />
            <div className="flex flex-wrap -mx-2 overflow-hidden grid-add-content pb-4">
                {console.log(id)}
                {workoutsdata?.workouts?.map(item => (
                    <WorkoutTeaserCard info={item} key={item.id} />
                ))}
            </div>

        </Container>
    )
}
