import React from 'react'
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import useStaticContent from '@/Hooks/useStaticContent';
import { getWorkoutsTeaserQuery } from '@/Queries/Workout/getWorkoutsQuery';
import IntroSection from '@/Components/PageSections/IntroSection'
import Container from '@/Components/Wrappers/Container';
import WorkoutTeaserCard from '@/Components/PageComponents/Cards/WorkoutTeaserCard';


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
