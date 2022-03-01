import React, { useRef, useState } from 'react'
import useStaticContent from '../../../Hooks/useStaticContent';
import BetterDatePicker from '../../PageComponents/FormElements/BetterDatePicker';
import BetterSelect from '../../PageComponents/FormElements/BetterSelect';
import Form from '../../PageComponents/FormElements/Form';
import IntroSection from '../../PageSections/IntroSection';
import Container from '../../Wrappers/Container';
import { getData } from '../../../Connections/graphcsm';
import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import { useUser } from '../../../Contexts/UserContext';
import { getWorkoutsSelectQuery } from '../../../Queries/Workout/getWorkoutsQuery';
import { useError } from '../../../Contexts/ErrorContext';
import { createBookingQuery, publishBookingQuery } from '../../../Queries/Booking/createBookingQuery';


export default function SceduleWorkout() {
  const sc = useStaticContent('WorkoutPages.SceduleWorkout');
  const { setErrorMessage, setSuccesMessage } = useError();
  const { data: workouts } = useStaticCmsData(getWorkoutsSelectQuery);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [bookingDate, setbookingDate] = useState(new Date());
  const { currentUser } = useUser();

  async function sceduleBooking(e) {
    e.preventDefault();
    console.log(currentUser.id);
    console.log(selectedWorkout);
    console.log(bookingDate.toISOString());
    try {
      getData(createBookingQuery(
        currentUser.id,
        bookingDate.toISOString(),
        selectedWorkout.id,
        selectedWorkout.name,
      )).then(
        data => {
          getData(publishBookingQuery(data.createBooking.id)).then(
            data => {
              window.scrollTo(0, 0);
              const dateBookingraw = new Date(data.publishBooking.dateBooking);
              setSuccesMessage(`created a new Booking on ${dateBookingraw.toLocaleDateString('en-GB')} `);
              setSelectedWorkout("");
              setbookingDate(new Date());
            }
          )
        }
      )

    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  function selectWorkout(workout) {
    setSelectedWorkout(workout);
  }
  return (
    <Container>
      <header>
        <IntroSection line={sc.introLine} title={sc.title} />
      </header>

      <Form onSubmit={sceduleBooking}>
        <BetterDatePicker
          startDate={bookingDate}
          onSelect={setbookingDate}

        />
        <div className="form-element custom-select">
          <label htmlFor="entry-workout">Select your work-out</label>
          <BetterSelect
            selectionData={workouts?.workouts}
            onSelect={selectWorkout}
            placeHolder="Type to filter"
            required={true}
          />
        </div>
        <div className="form-element ">
          <div className='form-submit'>
            <input type="submit" name="entrysubmit" id="submitlogin" className="btn btn-prim" />
          </div>
        </div>
      </Form>

    </Container>
  )
}
