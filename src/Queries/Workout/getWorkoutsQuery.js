export const getWorkoutsSelectQuery = `
query{
  workouts{
    id
    name: title
  }
}
`;

export const getWorkoutsTeaserQuery = `
query{
  workouts(orderBy: createdAt_DESC){
    id
    title
    path
    workoutImg
    sport
  }
}
`;

export function getWorkoutDetailQuery(path){
  return `
  query{
    workout(where:{ path: "/workouts/${path}" }){
      id
      title
      path
      workoutImg
      sport
      exercises
    }
  }
`};

export function getWorkoutExercisesQuery(id){
  return `
  query{
    exercise( where: {id:"${id}"}){
      id
      title
    }
  }
  `
}