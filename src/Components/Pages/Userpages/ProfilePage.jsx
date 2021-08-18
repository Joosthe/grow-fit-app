import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../Contexts/authContext';
import LogoutButton from '../../Buttons/LogoutButton';

 function ProfilePage(){
  const { currentUser, logoutUser } =  useAuth();
  const [ error, setError] = useState('');
  const history = useHistory();
  async function logoutHandle(){
    setError('');
    try{
      await logoutUser();
      history.push ('/')
   
    }catch{
       setError('failed to log uit')
    }
  }

  return(
    <div className="">
      {error &&<h2>{error}</h2>}
      <h1>Hello Rockshar</h1>
      <p>e-mail: {currentUser.email}</p>
      <LogoutButton/>
    </div>
  )
}
export default ProfilePage
