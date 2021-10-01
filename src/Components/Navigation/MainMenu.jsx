import React from 'react'
import { Link } from 'react-router-dom'


function MainMenu(props) {
  return (
    <ul className="menu--main ">
      <li>
        <Link to="/" onClick={props.closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/" onClick={props.closeMenu}>
          Reasons
        </Link>
      </li>
      <li>
        <Link to="/" onClick={props.closeMenu}>
          Achievements test
        </Link>
        </li>
      <li>
        <Link to="/" onClick={props.closeMenu}>
          Workouts
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu
