import React from 'react'
import useStaticContent from '../../../Hooks/useStaticContent';
import IntroSection from '../../PageSections/IntroSection'

export default function Workouts() {
    const sc = useStaticContent('WorkoutPages.Workouts');
    return (
        <div>
            <IntroSection line={sc.introLine} title={sc.title}/>
        </div>
    )
}
