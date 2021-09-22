import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../Contexts/UserContext';
import LogoutButton from '../PageComponents/Buttons/LogoutButton';
function LogMenu(props) {
  const { currentUser } =  useUser();
  return (
    <ul className="menu--log flex">
      { currentUser === null
      ? <>
          <li><Link to="/login" onClick={props.closeMenu}>Login</Link></li>
          <li><Link to="/register" onClick={props.closeMenu} >Register</Link></li>
        </>
      : <LogoutButton/>
      }
    </ul>
  )
}

export default LogMenu
