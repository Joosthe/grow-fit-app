export function createUserQuery(email, username){
  return `mutation{
  createApp_User(data: {
    email: "${email}",
    nicknames: Newbie,
    userRoles: sporter,
    userName: "${username}"
  }) {
    id  
  }
}`
};

export function publishCreatedUserQuery(id){
  return `
  mutation {
    publishApp_User(where: { id: "${id}" }, to: PUBLISHED) {
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
