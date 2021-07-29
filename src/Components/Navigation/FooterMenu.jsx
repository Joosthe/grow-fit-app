import React from 'react'
import { Link } from 'react-router-dom'
function FooterMenu() {

  return (
    <div className="menu--footer">
      <ul>
        <li>
          <Link to="/profile/id">
            Profile
          </Link>
          </li>
        <li>
        <Link to="/entry/new"  className="new-entree-footer-wrapper">
          <span className="new-entree-footer"> +</span> 
          Make entry
        </Link>
        </li>
        <li>
        <Link to="/goals">
          goals
        </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu
