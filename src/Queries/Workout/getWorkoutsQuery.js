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
    	descr
    	duration
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
      description
    }
  }
  `
}

export const getWorkoutsPromotedTeaserQuery = `
query{
  workouts(
    orderBy: createdAt_DESC, 
    where: { promotedWorkout: true}
  ){
  id
  title
  path
  workoutImg
  sport
}
}
`;

export function getWorkoutTitleQuery(id){
  return `
  query{
    workout( where: {id:"${id}"}){
      id
      title
    }
  }
  `
}