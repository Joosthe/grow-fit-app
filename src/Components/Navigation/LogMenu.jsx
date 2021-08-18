import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/authContext';
import LogoutButton from '../Buttons/LogoutButton';
function LogMenu(props) {
  const { currentUser  } =  useAuth();
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
