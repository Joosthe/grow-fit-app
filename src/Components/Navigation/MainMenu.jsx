import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu({ closeMenu }) {
  return (
    <ul className="menu--main ">
      <li>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/workouts" onClick={closeMenu}>
          Workouts
        </Link>
      </li>
      <li>
        <Link to="/presentation" onClick={closeMenu}>
          Presentation
        </Link>
      </li>
    </ul>
  )
}
