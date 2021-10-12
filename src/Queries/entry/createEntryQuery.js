export function createEntryQuery(userId, workout,  score, info){
  return `
  mutation{
    createEntry(data:{
      entryUserId: "${userId}",
      workoutId: "${workout}",
      info: "${info}",
      score: ${score}
    }) {
      id,
      entryUserId
      entry_date,
      workoutId,
      score
      info
    }
  }
  `;
}
export function publishEntryQuery(id){
  return `
  mutation {
    publishEntry(where: { id: "${id}" }, to: PUBLISHED) {
      id,
      entryUserId
      entry_date,
      workoutId,
      score
      info
    }
  }`
}
