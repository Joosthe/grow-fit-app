import { useAuth } from '../../../Contexts/authContext';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function LogoutButton() {
  const { logoutUser } =  useAuth();
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

  return (
    <div>
      { error && console.log(error)}
      <button onClick={logoutHandle}>
        Log out
      </button>
    </div>
  )
}
