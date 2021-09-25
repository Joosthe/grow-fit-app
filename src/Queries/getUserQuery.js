export function getUserQuery(email){
  return `query{
    app_User(where:{email: "${email}"}){
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
