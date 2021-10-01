import React, { useState } from 'react'
import IntroSection from '../../PageSections/IntroSection';
import Container from '../../Wrappers/Container';
import './styles/NewEntry.scss'
import { Workouts } from '../../../Data/workouts';
import Form from '../../PageComponents/FormElements/Form';
import useStaticContent from '../../../Hooks/useStaticContent';
import Select from 'react-select'
//const today = new Date().toISOString(); 

{/* check if the user as a workout planned for today */}
{/* if not let him choose the */}
const options = Workouts.map((item)=> {
  return{'value': item.id, 'label': item.title}});

export default function NewEntry() {
  const sc = useStaticContent('WorkoutPages.NewEntry');
  const [selectedWorkout, setSelectedWorkout] = useState('');


  function handleSubmit(e){ 
    e.preventDefault();
    console.log(selectedWorkout);
  }


  return (
    <>
    <Container>
    <div className="page--new-entry">
      <header>
         <IntroSection line={sc.introLine} title={sc.title}/>
      </header>
     

    <Form onSubmit={handleSubmit}>
      <div className="form-left">
        <div className="form-element custom-select">
          <label htmlFor="entry-workout">Select your work-out</label>
          <Select
          options={options} 
          onChange={(e)=> {setSelectedWorkout(e.value)}}
          />
        </div>
        <div className="form-element custom-class">
          <label htmlFor="entry-extra-info">How was it ?</label>
          <p className=" "><input type="number" min={0} max={10} step={1}/>/ 10</p>
        </div>
       
      </div>
      <div className="form-right">
        <div className="form-element">
          <label htmlFor="entry-extra-info">Extra info</label>
          <textarea name="entry-extra-info" id=""></textarea>
        </div>

      </div>
      
      <div className="form-element ">
        <div className='form-submit'>
        <input type="submit" name="entrysubmit" id="submitlogin"  className="btn btn-prim" />
        </div>
     </div>
    </Form>
    </div>
    </Container>
    </>
  )
}
