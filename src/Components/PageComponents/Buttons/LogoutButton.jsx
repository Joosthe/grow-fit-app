
import React from 'react'
import { useHistory } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import { useUser } from '@/Contexts/UserContext';
import './styles/LogoutButton.scss';

export default function LogoutButton() {
  const { userLogout } = useUser();
  const history = useHistory();
  async function logoutHandle() {
    try {
      userLogout();
      history.push('/')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button onClick={logoutHandle} className="button button__logout">
      <span>Log out</span>
      <BiExit />
    </button>
  )
}
