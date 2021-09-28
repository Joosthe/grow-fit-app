export function createExerciseQuery(title, description, rep){
  return `
  mutation{
    createExercise(data:{
      title: "${title}"
      description:"${description}"
      repetition: ${rep}
    }){
      id,
    }
  }
  `;
}
export function publishExeciseQuery(id){
  return `
  mutation {
    publishExercise(where: { id: "${id}" }, to: PUBLISHED) {
      id,
      title,
      description,
      repetition,
    }
  }`
}
