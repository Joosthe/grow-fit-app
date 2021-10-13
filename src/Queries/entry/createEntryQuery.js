export function createEntryQuery(userId, workout,  score, info, img){
  return `
  mutation{
    createEntry(data:{
      entryUserId: "${userId}",
      workoutId: "${workout}",
      info: "${info}",
      score: ${score}
      entryImg: "${img}"
    }) {
      id,
      entryUserId
      entry_date,
      workoutId,
      score
      info
      entryImg
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
      info,
      entryImg
    }
  }`
}
