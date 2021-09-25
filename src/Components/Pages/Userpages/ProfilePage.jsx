import React from 'react'

import { useUser } from '../../../Contexts/UserContext';
import LogoutButton from '../../PageComponents/Buttons/LogoutButton';
import Container from '../../Wrappers/Container';

 function ProfilePage(){
  const { currentUser } =  useUser();


  return(
    <Container>
      <section>
        
      </section>
      <h1 className="text-4xl font-semibold">Hello Rockshar</h1>
      {console.log(currentUser)}
      <p>first name: {currentUser.firstName}</p>
      <p>last name: {currentUser.lastName}</p>
      <p>username: {currentUser.userName}</p>
      <p>e-mail: {currentUser.email}</p>
      <p>user role: {currentUser.userRoles}</p>
      <p>nickname: {currentUser.nicknames}</p>
      <LogoutButton/>
    </Container>
  )
}
export default ProfilePage
