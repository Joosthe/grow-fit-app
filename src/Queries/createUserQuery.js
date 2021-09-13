export function createUserQuery(email){
  return `mutation{
    createApp_User(data: {
      email: "${email}",
      nicknames: Newbie,
      userRoles: sporter
    }) {
      id
      email
      nicknames
      userRoles
    }
}
`};

export function publishCreatedUserQuery(id){
  return `
  mutation {
    publishApp_User(where: { id: "${id}" }, to: PUBLISHED) {
      id
    }
  }
  `
}
