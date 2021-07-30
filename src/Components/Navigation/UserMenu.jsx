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
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/">Manage profile</Link>
        </li>
        <li>
          <Link to="/">My goals</Link>
        </li>
      </ul>
    </div>
  )
}

export default UserMenu
