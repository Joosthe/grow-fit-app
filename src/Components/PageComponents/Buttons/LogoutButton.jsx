
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useUser } from '../../../Contexts/userContext';

export default function LogoutButton() {
  const { userLogout } =  useUser();
  const [ error, setError] = useState('');
  const history = useHistory();
  async function logoutHandle(){
    setError('');
    try{
      userLogout();
      history.push ('/')
    }catch(err){
      console.log(err)
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
