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
        <Link to="/workouts" onClick={props.closeMenu}>
          Workouts
        </Link>
      </li>
      <li>
        <Link to="/presentation" onClick={props.closeMenu}>
          Presentation
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu
