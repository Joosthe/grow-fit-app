import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../Contexts/UserContext';
function UserMenu(props) {
  const { currentUser } =  useUser();
  
  return (
    <div className="menu--user">
      <div className="menu-profile-picture">
        <img src={ currentUser?.userprofileimg?.url 
          ? currentUser?.userprofileimg?.url
          : 'https://via.placeholder.com/150'
        } alt={'profile picture '+ currentUser.username} />
      </div>
      <p className="text-center menu-username">Hi {currentUser?.userName
        ? currentUser.userName
        : 'Please set a username'
      }
      </p>
      <ul>
        <li>
          <Link to="/profile"  onClick={props.closeMenu}>Profile</Link>
        </li>
        <li>
          <Link to="/"  onClick={props.closeMenu}>Manage profile</Link>
        </li>
        <li>
          <Link to="/my-goals"  onClick={props.closeMenu}>My goals</Link>
        </li>
      </ul>
    </div>
  )
}

export default UserMenu
