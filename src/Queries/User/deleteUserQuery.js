export function deleteUserQuery(id){
  return ` mutation{
    deleteApp_User(where: { id: "${id}" }){
      id
      email
    }
  }
  `
}
