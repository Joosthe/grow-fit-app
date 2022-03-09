import React, { useState } from 'react'
import BetterDatePicker from '@PageComponent/FormElements/BetterDatePicker';
import BetterSelect from '@PageComponent/FormElements/BetterSelect';
import Form from '@PageComponent/FormElements/Form';
import IntroSection from '@PageSection/IntroSection';
import Container from '@Wrapper/Container';
import { getData } from '@/Connections/graphcsm';
import { useUser } from '@/Contexts/UserContext';
import { useError } from '@/Contexts/ErrorContext';
import { createBookingQuery, publishBookingQuery } from '@/Queries/Booking/createBookingQuery';
import { getYourBookedDatesQuery } from '@/Queries/Booking/getBookingQuery';
import { getWorkoutsSelectQuery } from '@/Queries/Workout/getWorkoutsQuery';
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import useStaticContent from '@/Hooks/useStaticContent';

export default function CreateBooking() {
  const sc = useStaticContent('WorkoutPages.CreateBooking');
  const { setErrorMessage, setSuccesMessage } = useError();
  const { data: workouts } = useStaticCmsData({}, getWorkoutsSelectQuery);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [bookingDate, setbookingDate] = useState(new Date());

  const { currentUser } = useUser();
  const { data: bookings } = useStaticCmsData({ bookings: [] }, getYourBookedDatesQuery(currentUser.id));
  const bookedDates = bookings.bookings.map(element => {
    return new Date(element.dateBooking);
  })

  async function scheduleBooking(e) {
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

      <Form onSubmit={scheduleBooking}>
        {console.log(bookedDates)}
        <BetterDatePicker
          startDate={bookingDate}
          onSelect={setbookingDate}
          excludeDates={bookedDates}
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
