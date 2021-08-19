import React from 'react'
import { Link } from 'react-router-dom'
function FooterMenu() {

  return (
    <div className="menu--footer">
      <ul>
        <li>
          <Link to="/profile">
            My profile
          </Link>
          </li>
       
        <li>
          <Link to="/workouts">
            My workouts
          </Link>
        </li>
        <li>
        <Link to="/goals">
          My goals
        </Link>
        </li>
        <li className="new-entree-footer-wrapper">
          <Link to="/entry/new" className="new-entree-footer">
          <span className="new-entree-footer-icon"><i  >+</i> </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu
