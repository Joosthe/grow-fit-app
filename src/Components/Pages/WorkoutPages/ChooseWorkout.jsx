import React from 'react'
import IntroSection from '../../PageSections/IntroSection'
import Container from '../../Wrappers/Container';
import useStaticContent from '../../../hooks/useStaticContent';

export default function ChooseWorkout() {
  const sc = useStaticContent('WorkoutPages.ChooseWorkout');
  return (
    <Container>
      <div className="page--choose-workout">
        <IntroSection line={sc.introLine} title={sc.title}/>
        <hr/>
      </div> 
      <p>1. To be discussed with Davy: how to make a calendar in this app</p>
      <p>Wanted do i make an Day component or do i just need an array of dates or ... </p>

    </Container>
  )
}
