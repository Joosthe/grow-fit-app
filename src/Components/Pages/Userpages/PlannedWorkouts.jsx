import React, { useState } from "react";

import { useUser } from '@/Contexts/UserContext';
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import { getAllBookingsQuery } from '@/Queries/Booking/getBookingQuery';

import CustomCalendar from "@/Components/PageSections/CustomCalendar";
export default function PlannedWorkouts() {
  const { currentUser } = useUser();
  const { data: bookings } = useStaticCmsData({ bookings: [] }, getAllBookingsQuery(currentUser.id));

  function addMinutesToDate(date, minutes) {
    return new Date(new Date(date).setMinutes(date.getMinutes() + minutes));
  }

  const allEvents = bookings.bookings.map(element => {
    return {
      ...element,
      start: new Date(element.date),
      end: addMinutesToDate(new Date(element.date), element.workout.time),
      title: element.workout.title
    }
  })



  return (
    <>
      {console.log(allEvents)}
      <CustomCalendar
        events={allEvents}
      />
    </>
  );
}