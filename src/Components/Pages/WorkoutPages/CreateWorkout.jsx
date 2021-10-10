import React, { useRef, useState } from "react";
import IntroSection from "../../PageSections/IntroSection";
import Container from "../../Wrappers/Container";
import Form from "../../PageComponents/FormElements/Form";
import useStaticContent from "../../../Hooks/useStaticContent";
import "./styles/CreateWorkout.scss";
import { FaTimes } from "react-icons/fa";
import BetterSelect from "../../PageComponents/FormElements/BetterSelect";
import CustomSelect from "../../PageComponents/FormElements/Select";
import Upload from "../../PageComponents/FormElements/Upload";
import useExercises from "../../../Hooks/useExercises";
import { getExercisesQuery } from "../../../Queries/Exercise/getExercisesQuery";
import { getSportsQuery } from "../../../Queries/Sports/getSportsQuery";

export default function CreateWorkout() {
  const sc = useStaticContent("WorkoutPages.CreateWorkout");
  const [activeExercises, setactiveExercises] = useState([]);
  const [sport, setSport] = useState([]);
  //const [workoutImage, setWorkoutImage]= useState();
  const nameWorkout = useRef();
  const descrWorkout = useRef();
  const durationWorkout = useRef();
  const { exercises } = useExercises(getExercisesQuery);
  const { exercises : sports } = useExercises(getSportsQuery);


  function addToExercises(selection) {
    setactiveExercises([
      ...activeExercises,
      {
        listId: (Math.random() + 1).toString(36).substring(2),
        selection,
      },
    ]);
  }

  function getActiveExerIds(){
    if(activeExercises.length > 0){
      const sendExercise =  activeExercises.map(item => item.selection.id);
      return sendExercise;
    }else{
      return [];
    }
  }

  function deleteExercise(id) {
    const removeItem = activeExercises.filter((item) => {
      return item.listId !== id;
    });
    setactiveExercises(removeItem);
  }

  function selectsport(value) {
     setSport(value);
  }

  function submitWorkout(e) {
    e.preventDefault();
    const workoutname = nameWorkout.current.value;
    const workoutDescr = descrWorkout.current.value;
    const workoutSport =  sport.value;
    const workouDur = durationWorkout.current.value;
    const WorkoutEx = getActiveExerIds();


  }

  function setWorkoutImg(e){
    alert('hello world ')
  }

  return (
    <Container>
      <IntroSection line={sc.introLine} title={sc.title} />
      <Form onSubmit={submitWorkout}>
      <div className="form-5050 form--create-workout">
        <div className="form-left ">
            <div className="form-group" id="nameWorkout">
              <label>Workout name</label>
              <input type="text" ref={nameWorkout} required />
            </div>
            <div className="form-group" id="descrWorkout">
              <label>Workout description</label>
              <textarea type="text" ref={descrWorkout} required />
            </div>
            <div className="form-group" id="durationWorkout">
              <label>Choose main sport workout</label>
            <CustomSelect options={sports?.data?.sports} onChange={selectsport} />
            </div>
            {/* <div className="form-group" id="durationWorkout">
              <label>Upload image workout</label>
            <Upload uploadSumbit={setWorkoutImg}/>
            </div> */}
            <input
              type="submit"
              name="createWorkoutForm"
              id="createWorkoutForm"
              className="btn btn-prim"
            />

        </div>
        <div className="form-right">
        <div className="form-group" id="durationWorkout">
              <label>Duration workout</label>
              <input
                type="text"
                ref={durationWorkout}
                placeholder="30 minuten"
                required
              />
            </div>
        
            <div className="form-group" id="descrWorkout">
              <label>Choose your exercises</label>
              <BetterSelect
                selectionData={exercises?.exercises}
                onSelect={addToExercises}
                placeHolder="Type to filter"
              />
            </div>
            <ul className="exercises__list">
              {activeExercises.map((entry, index) => (
                <li key={index}>
                  <span>{entry.selection.name} </span>
                  <button onClick={() => deleteExercise(entry.listId)}>
                    <FaTimes />
                  </button>
                </li>
              ))}
            </ul>

        </div>
      </div>
      </Form>
    </Container>
  );
}
