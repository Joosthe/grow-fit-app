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
            Workouts
          </Link>
        </li>
        <li>
          <Link to="/all-entries">
            Your entries
          </Link>
        </li>
        <li>
          <Link to="/your-scedule">
            Your scedule
          </Link>
        </li>
        <li className="new-entree-footer-wrapper">
          <Link to="/add-content" className="new-entree-footer">
            <span className="new-entree-footer-icon"><i  >+</i> </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu
