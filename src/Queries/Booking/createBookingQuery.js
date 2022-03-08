export function createBookingQuery(userid, date, workout){
  return `
  mutation{
    createBooking(data:{
      userId: "${userid}"
      dateBooking: "${date}"
      workoutRef: {connect : {id: "${workout}" }}
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
