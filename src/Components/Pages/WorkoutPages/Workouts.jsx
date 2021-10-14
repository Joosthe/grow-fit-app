import React from 'react'
import { Link } from 'react-router-dom';
import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import useStaticContent from '../../../Hooks/useStaticContent';
import { getWorkoutsTeaserQuery } from '../../../Queries/Workout/getWorkoutsQuery';
import IntroSection from '../../PageSections/IntroSection'
import Container from '../../Wrappers/Container';
import WorkoutTeaserCard from '../../PageComponents/Cards/WorkoutTeaserCard';


export default function Workouts() {
    const { data : workoutsdata } = useStaticCmsData(getWorkoutsTeaserQuery);
    const sc = useStaticContent('WorkoutPages.Workouts');
    return (
        <Container>
            <IntroSection line={sc.introLine} title={sc.title}/>
            <div className="flex flex-wrap -mx-2 overflow-hidden grid-add-content pb-4">
                {workoutsdata?.workouts?.map(item=>(
                    <WorkoutTeaserCard info={item}/>
                ))}
            </div>         
               
        </Container>
    )
}
