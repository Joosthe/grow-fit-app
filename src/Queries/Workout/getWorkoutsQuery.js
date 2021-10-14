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
  workouts{
    id
    title
    path
    workoutImg
    sport
  }
}
`;