export function createWorkoutQuery(title, workoutImg, descr,  sport, durationTime, exs, alias){
  return `
    mutation{
      createWorkout(data:
        {
          title: "${title}"
          workoutImg: "${workoutImg}"
          descr: "${descr}"
          sport: ${sport}
          exercises: ${exs}
          path: "${alias}"
          durationWorkoutTime: ${durationTime}
        }){
        id,
        title
        descr,
        durationWorkoutTime
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
      exercises,
      path,
      workoutImg,
      durationWorkoutTime
    }
  }`
}
