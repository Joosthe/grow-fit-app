import React, {useState} from 'react'

import { useAuth } from '../../../Contexts/authContext';
import LogoutButton from '../../Buttons/LogoutButton';

 function ProfilePage(){
  const { currentUser } =  useAuth();


  return(
    <div className="">
      <h1 className="text-4xl font-semibold">Hello Rockshar</h1>
      <p>e-mail: {currentUser.email}</p>
      <LogoutButton/>
    </div>
  )
}
export default ProfilePage
