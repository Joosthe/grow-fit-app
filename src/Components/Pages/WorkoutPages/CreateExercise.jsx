import React, {useRef} from 'react'
import IntroSection from '../../PageSections/IntroSection'
import Container from '../../Wrappers/Container';
import Form from '../../PageComponents/FormElements/Form';
import useStaticContent from '../../../HooksV/useStaticContent';
import { getData } from '../../../Connections/graphcsm';
import { createExerciseQuery, publishExeciseQuery } from '../../../Queries/exercice/createExercice';

import './styles/CreateExercise.scss';
import { useError } from '../../../Contexts/ErrorContext';

export default function CreateExercise() {
  const {  setErrorMessage,setSuccesMessage }= useError();
  const sc = useStaticContent('WorkoutPages.CreateExercise');
  const titleExercise = useRef();
  const repexercise = useRef();
  const descriptionExercise = useRef()

  async function handleSubmit(e){ 
    e.preventDefault();
    try{
      getData(createExerciseQuery(
        titleExercise.current.value,
        descriptionExercise.current.value,
        repexercise.current.value
      )).then(
        data =>{
         getData(publishExeciseQuery(data.createExercise.id)).then(
           data=> {
            window.scrollTo(0, 0);
            setSuccesMessage('created a new exercise: "'+ data.publishExercise.title+'"');
              titleExercise.current.value = "";
              descriptionExercise.current.value = "";
              repexercise.current.value = "";
           }
         )
        }
      )
     
    }catch(err){
      setErrorMessage(err.message);
    }
  }
  
  return (
    <Container>
      <IntroSection line={sc.introLine} title={sc.title}/>
      <section className="form--create-exercise-wrapper">
        <Form onSubmit={handleSubmit} className="form--small shadow-md form--create-exercise">
          <div className="form-element ">
            <label htmlFor="titleexercise">Title exercise</label>
            <input type="text" name="titleExercise" id="titleexercise" ref={titleExercise} />
          </div>
          <div className="form-element">
            <label htmlFor="entry-extra-info">Extra info</label>
            <textarea name="entry-extra-info" ref={descriptionExercise} id=""></textarea>
          </div>
          <div className="form-element mx-auto">
            <label htmlFor="repexercise">repetion exercise </label>
            <input type="number" name="repexercise" ref={repexercise} defaultValue={0} min={0} step={1} />
          </div>
          <div className='form-submit'>
            <input type="submit" name="entrysubmit" id="submitlogin"  className="btn btn-prim"/>
          </div>
        </Form>
      </section>
    </Container>
  )
}
