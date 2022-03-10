import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from '@PageComponent/Buttons/LogoutButton';
import { useUser } from '@/Contexts/UserContext';

export default function LogMenu({ closeMenu }) {
  const { currentUser } = useUser();
  return (
    <ul className="menu--log flex">
      {currentUser === null
        ? <>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/register" onClick={closeMenu} >Register</Link></li>
        </>
        : <LogoutButton />
      }
    </ul>
  )
}
