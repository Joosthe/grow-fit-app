import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminMenu(props) {
  return (
    <ul className="menu--admin ">
      <li>
        <Link to="/admin/users" onClick={props.closeMenu}>
          Admin users
        </Link>
      </li>
    </ul>
  )
}
