export function getUserQuery(email){
  return `query{
    app_User(where:{email: "${email}"}){
      id,
      email,
      userName,
      userRoles
    }
  }`
}
