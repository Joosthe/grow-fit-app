export function createWorkoutQuery(title, workoutImg, descr,  sport, duration, exs, alias){
  return `
    mutation{
      createWorkout(data:
        {
          title: "${title}"
          workoutImg: "${workoutImg}"
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
        workoutImg
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
      workoutImg
    }
  }`
}
