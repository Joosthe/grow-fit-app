import React, { useState } from "react";

import { useUser } from '../../../Contexts//UserContext';
import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import { getAllBookingsQuery } from '../../../Queries/Booking/getBookingQuery';

import CustomCalendar from "../../PageSections/CustomCalendar";
export default function PlannedWorkouts() {
  const { currentUser } = useUser();
  const { data: bookings } = useStaticCmsData(getAllBookingsQuery(currentUser.id));
  return (
    <>
      <CustomCalendar
        events={bookings.bookings}
      />
    </>
  );
}