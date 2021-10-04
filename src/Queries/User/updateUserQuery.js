export function updateUserQuery(id, firstname, lastname, username){
  return `
  mutation{
    updateApp_User(
      where:{ id:"${id}" }
      data: {
        firstName: "${firstname}"
        lastName: "${lastname}"
        userName:"${username}"
      }
    ) {
      id
    }
    user: publishApp_User( where:{ id:"${id}" }){
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
export function updateUserImgQuery(id,imgId){
  console.log('id',id)
  console.log('imgId', imgId);
  return `
  mutation{
    updateApp_User(
      where:{ id:"${id}" }
      data: {userprofileimg: {connect: {id: "${imgId}"}}}
    ) {
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
