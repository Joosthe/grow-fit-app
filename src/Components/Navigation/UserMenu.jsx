import React from 'react'
import { Link } from 'react-router-dom'
function UserMenu(props) {

  return (
    <div className="menu--user">
      <div className="menu-profile-picture">
        <img src={ props.profilepicture 
          ? props.profilepicture 
          : 'https://via.placeholder.com/150'
        } alt={'profile picture '+props.username} />
      </div>
      <p className="text-center menu-username">Hi {props.username
        ? props.username
        : 'Rockshar'
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