export function getLatestEntryQuery(id){
  return `
  {
    entries(
      where: { entryUserId_contains: "${id}" }
      first: 4,
      orderBy: createdAt_DESC
    ) {
      id
      entryUserId
      info
      date : createdAt
      score
      workoutId
    }
  }
  `
}


export function getAllEntriesQuery(id){
  return `
  {
    entries(
      where: { entryUserId_contains: "${id}" }
      orderBy: createdAt_DESC
    ) {
      id
      entryUserId
      info
      date : createdAt
      score
      workoutId
    }
  }
  `
}