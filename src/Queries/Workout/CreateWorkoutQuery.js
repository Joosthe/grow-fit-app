export function createWorkoutQuery(title, descr, sport, duration, exs, alias){
  console.log(exs)
  return `
    mutation{
      createWorkout(data:
        {
          title: "${title}"
          descr: "${descr}"
          sport: ${sport}
          duration: "${duration}"
          exercises: ${exs}
          path: "${alias}"
        }){
        id,
        title
        descr,
        duration,
        exercises,
        path,
      }
    }
  `;
}
export function publishWorkoutQuery(id){
  return `
  mutation {
    publishWorkout(where: { id: "${id}" }, to: PUBLISHED) {
      id,
      title
      descr,
      duration,
      exercises,
      path,
    }
  }`
}
