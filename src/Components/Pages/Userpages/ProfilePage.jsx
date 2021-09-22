import React from 'react'

import { useUser } from '../../../Contexts/UserContext';
import LogoutButton from '../../PageComponents/Buttons/LogoutButton';
import Container from '../../Wrappers/Container';

 function ProfilePage(){
  const { currentUser } =  useUser();


  return(
    <Container>
      <h1 className="text-4xl font-semibold">Hello Rockshar</h1>
      <p>e-mail: {currentUser.email}</p>
      <LogoutButton/>
    </Container>
  )
}
export default ProfilePage
