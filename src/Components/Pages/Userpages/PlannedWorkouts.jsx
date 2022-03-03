import React, { useState } from "react";

import { useUser } from '@/Contexts/UserContext';
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import { getAllBookingsQuery } from '@/Queries/Booking/getBookingQuery';

import CustomCalendar from "@/Components/PageSections/CustomCalendar";
export default function PlannedWorkouts() {
  const { currentUser } = useUser();
  const { data: bookings } = useStaticCmsData({ bookings: [] }, getAllBookingsQuery(currentUser.id));
  const allEvents = bookings.bookings.map(element => {
    return {
      ...element,
      start: new Date(element.start),
      end: new Date(element.end),
    }
  })

  return (
    <>
      {console.log(allEvents, 'test')}
      <CustomCalendar
        events={allEvents}
      />
    </>
  );
}