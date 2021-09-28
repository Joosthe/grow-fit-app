export function updateUserQuery(id, firstname, lastname, username){
  return `mutation{
    updateApp_User(
      where:{ id:"${id}" }
      data: {
        firstName: "${firstname}"
        lastName: "${lastname}"
        userName:"${username}"
      }
    ){
        id,
        firstName,
        lastName,
        email,
        userName,
        userRoles,
        nicknames,
        userprofileimg{
          url
        }
      }
  }`
}
