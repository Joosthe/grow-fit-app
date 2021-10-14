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