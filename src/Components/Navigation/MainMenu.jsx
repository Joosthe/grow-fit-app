import React from 'react'
import { Link } from 'react-router-dom'
function MainMenu() {

  return (
    <ul className="menu--main ">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/">
          Reasons
        </Link>
      </li>
      <li>
        <Link to="/">
          Achievements
        </Link>
        </li>
      <li>
        <Link to="/">
          Workouts
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu
