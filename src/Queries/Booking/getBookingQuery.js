export function getAllBookingsQuery(id){
  return `
  {
    bookings(
      where: { userId_contains: "${id}" }
      orderBy: createdAt_DESC
    ) {
      id
      date: dateBooking
      workout: workoutRef{
        id
        title
        time: durationWorkoutTime
      }
    }
  }
  `
}

export function getYourBookedDatesQuery(id){
  return `
  {
    bookings(
      where: { userId_contains: "${id}" }
      orderBy: createdAt_DESC
    ) {
      dateBooking
    }
  }
  `
}