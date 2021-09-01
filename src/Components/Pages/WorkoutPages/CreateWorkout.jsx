import React, {useRef} from 'react'
import IntroSection from '../../PageSections/IntroSection'
import Container from '../../Wrappers/Container'
import StaticContent from'../../../staticContent/content-En.js'
import Form from '../../PageComponents/FormElements/Form'

import './styles/CreateWorkout.scss'

export default function CreateWorkout() {
  const sc =  StaticContent.WorkoutPages.CreateWorkout;
  const nameWorkout = useRef('');
  const descrWorkout = useRef('');
  const durationWorkout= useRef('');
  async function submitWorkout(e){ 
    e.preventDefault();
    console.log('form submited');
  }


  return (
    <Container>
      {/* 
        this composent will be something like a todo app 
      but then set a all exercises as a workout 
      */}
        <IntroSection line={sc.introLine} title={sc.title}/>
        <div className="form-5050 form--create-workout">
          <div className="form-left " >
          <Form onSubmit={submitWorkout}>
          <div className="form-group" id="nameWorkout">
            <label>Workout name</label>
            <input type="text" ref={nameWorkout} required/>
          </div>
          <div className="form-group" id="descrWorkout">
            <label>Workout description</label>
            <textarea type="text" ref={descrWorkout} required/>
          </div>
          <div className="form-group" id="durationWorkout">
            <label>Duration workout</label>
            <input type="text" ref={durationWorkout} placeholder="30 minuten" required/>
          </div>
          <p></p>
          <p>illustration aka uploaddfield </p>
          <p>select sport</p>
          <input type="submit"  name="createWorkoutForm" id="createWorkoutForm" className="btn btn-prim" />
          </Form>
          </div>
          <div className="form-right">
          <Form onSubmit={submitWorkout} className="form--create-workout-add-exercise">
            <p>select an exercises</p>
            <p>submit</p>
          </Form>
          </div>
        </div>

    </Container>
  )
}
