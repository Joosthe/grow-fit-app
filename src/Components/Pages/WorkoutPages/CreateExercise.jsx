import React, {useRef} from 'react'
import IntroSection from '../../PageSections/IntroSection'
import StaticContent from'../../../StaticContent/content-En.js'
import Container from '../../Wrappers/Container';
import Form from '../../PageComponents/FormElements/Form';

import './styles/CreateExercise.scss';

export default function CreateExercise() {
  const sc =  StaticContent.WorkoutPages.CreateExercise;
  const titleExercise = useRef();
  const repexercise = useRef();

  async function handleSubmit(e){ 
    e.preventDefault();
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
          <textarea name="entry-extra-info" id=""></textarea>
        </div>
        <div className="form-element mx-auto">
            <label htmlFor="repexercise">repetion exercise</label>
            <input type="number" name="repexercise" id="repexercise" ref={repexercise} />
          </div>
        </Form>
      </section>
    </Container>
  )
}
