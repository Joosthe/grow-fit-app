export function getLatestEntryQuery(id){
  return `
  {
    entries(
      where: { entryUserId_contains: "${id}" }
      first: 4,
      orderBy: createdAt_DESC
    ) {
      entryUserId
      info
      createdAt
      score
      workoutId
    }
  }
  `
}