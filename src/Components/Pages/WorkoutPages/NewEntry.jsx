import React, { useRef, useState } from 'react'
import IntroSection from '../../PageSections/IntroSection';
import Container from '../../Wrappers/Container';
import './styles/NewEntry.scss'
import { Workouts } from '../../../Data/workouts';
import Form from '../../PageComponents/FormElements/Form';
import useStaticContent from '../../../Hooks/useStaticContent';
import Select from 'react-select'
import { getWorkoutsQuery } from '../../../Queries/Workout/getWorkoutsQuery';
import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import BetterSelect from '../../PageComponents/FormElements/BetterSelect';
import { getData } from '../../../Connections/graphcsm';
import { createEntryQuery, publishEntryQuery } from '../../../Queries/entry/createEntryQuery';
import { useUser } from '../../../Contexts/UserContext';

// const options = Workouts.map((item)=> {
//   return{'value': item.id, 'label': item.title}
// });

export default function NewEntry() {
  const sc = useStaticContent('WorkoutPages.NewEntry');
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const { data: workouts } = useStaticCmsData(getWorkoutsQuery);
  const {currentUser} = useUser();
  const entryInfo = useRef(); 
  const entryScore = useRef();
  function selectWorkout(workout){
    setSelectedWorkout(workout);
  }

  function handleSubmit(e){ 
    e.preventDefault();

    try{
      alert('heelo wolrld')
      getData(createEntryQuery(
        currentUser.id,
        selectedWorkout.id, 
        entryScore.current.value,
        entryInfo.current.value
        )).then(
          data =>{
            console.log(data);
            getData(publishEntryQuery(data.createEntry.id));
            entryScore.current.value= "";
            entryInfo.current.value="";
            setSelectedWorkout('');
            
          }
        );
    }catch(err){
      console.error(err);
    }
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
          <BetterSelect
                selectionData={workouts.workouts} 
                onSelect={selectWorkout}
                placeHolder="Type to filter"
              />
        </div>
        <div className="form-element custom-class">
          <label htmlFor="entry-extra-info">How was it ?</label>
          <p className=" "><input type="number" min={0} max={10} step={1} ref={entryScore}/>/ 10</p>
        </div>
       
      </div>
      <div className="form-right">
        <div className="form-element">
          <label htmlFor="entry-extra-info">Extra info</label>
          <textarea name="entry-extra-info" id="" ref={entryInfo}></textarea>
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
