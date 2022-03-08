import React, { useRef, useState } from "react";
import IntroSection from "@/Components/PageSections/IntroSection";
import Container from "@/Components/Wrappers/Container";
import Form from "@/Components/PageComponents/FormElements/Form";
import useStaticContent from "@/Hooks/useStaticContent";
import "./styles/CreateWorkout.scss";
import { FaTimes } from "react-icons/fa";
import BetterSelect from "@/Components/PageComponents/FormElements/BetterSelect";
import CustomSelect from "@/Components/PageComponents/FormElements/Select";
import Upload from "@/Components/PageComponents/FormElements/Upload";
import useStaticCmsData from "@/Hooks/useStaticCmsData";
import { getExercisesQuery } from "@/Queries/Exercise/getExercisesQuery";
import { getSportsQuery } from "@/Queries/Sports/getSportsQuery";
import { getData } from "@/Connections/graphcsm";
import { createWorkoutQuery, publishWorkoutQuery } from "@/Queries/Workout/CreateWorkoutQuery";
import { useError } from "@/Contexts/ErrorContext";
import UploadCload from "@/Components/PageComponents/FormElements/UploadCload";
import { uploadingImg } from '@/utils/uploadcloud';


export default function CreateWorkout() {
  const sc = useStaticContent("WorkoutPages.CreateWorkout");
  const { setSuccesMessage, setErrorMessage } = useError();
  const { data: exercises } = useStaticCmsData({ exercises: [] }, getExercisesQuery);
  const { data: sports } = useStaticCmsData({}, getSportsQuery);
  const [activeExercises, setactiveExercises] = useState([]);
  const [sport, setSport] = useState([]);


  const [workoutImage, setWorkoutImage] = useState();

  const nameWorkout = useRef();
  const descrWorkout = useRef();
  const durationWorkout = useRef();
  const durationWorkoutTime = useRef()


  function addToExercises(selection) {
    setactiveExercises([
      ...activeExercises,
      {
        listId: (Math.random() + 1).toString(36).substring(2),
        selection,
      },
    ]);
  }

  function getActiveExerIds() {
    if (activeExercises.length > 0) {
      const sendExercise = activeExercises.map(item => item.selection.id);
      return JSON.stringify(sendExercise);
    } else {
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
    const workoutSport = sport.value;
    const workoutDurTime = durationWorkoutTime.current.value;
    const WorkoutEx = getActiveExerIds();
    const alias = '/workouts/' + workoutname.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

    try {
      uploadingImg(workoutImage, 'workout_preset').then(
        response =>
          getData(
            createWorkoutQuery(workoutname, response.data.public_id, workoutDescr, workoutSport, workouDur, workoutDurTime, WorkoutEx, alias)).then(
              data => {
                getData(publishWorkoutQuery(data.createWorkout.id)).then(
                  data => {
                    window.scrollTo(0, 0);
                    setSuccesMessage('created a new exercise: "' + data.publishWorkout.title + '"');
                    nameWorkout.current.value = "";
                    descrWorkout.current.value = "";
                    durationWorkout.current.value = "";
                    workoutDurTime.current.value = "";
                    setSport([]);
                    setactiveExercises([]);
                    setWorkoutImage('');
                  }
                )
              }
            )
      );
    } catch (err) {
      setErrorMessage(err.message);
    }
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
            <div className="form-group" id="durationWorkout">
              <label>Upload image workout</label>
              <UploadCload tryUpload={setWorkoutImage} tempImage={workoutImage} placeholder="Upload a workout picture">

              </UploadCload>

              <input
                type="submit"
                name="createWorkoutForm"
                id="createWorkoutForm"
                className="btn btn-prim"

              />
            </div>


          </div>
          <div className="form-right">
            {/* <div className="form-group" id="durationWorkout">
              <label>Duration workout</label>
              <input
                type="text"
                ref={durationWorkout}
                placeholder="30 minuten"
                required
              />
            </div> */}
            <div className="form-group" id="durationWorkout">
              <label>Duration workout in minutes</label>
              <input
                type="number"
                step={0.1}
                ref={durationWorkoutTime}
                placeholder={30}
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
