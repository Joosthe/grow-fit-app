export function getAllBookingsQuery(id){
  return `
  {
    bookings(
      where: { userId_contains: "${id}" }
      orderBy: createdAt_DESC
    ) {
      id
      start : dateBooking
      end : dateBooking
      title : bookingName
    }
  }
  `
}

export function getYourBookingDatesQuery(id){
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