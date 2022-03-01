export function createBookingQuery(userid, date, workout, bookingname){
  return `
  mutation{
    createBooking(data:{
      userId: "${userid}"
      dateBooking: "${date}"
      workoutBooking: "${workout}"
      bookingName: "${bookingname}"
    }){
      id,
    }
  }
  `;
}
export function publishBookingQuery(id){
  return `
  mutation {
    publishBooking(where: { id: "${id}" }, to: PUBLISHED) {
      userId,
      dateBooking,
      workoutBooking,
    }
  }`
}
