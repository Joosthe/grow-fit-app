import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminMenu({ closeMenu }) {
  return (
    <ul className="menu--admin ">
      <li>
        <Link to="/admin/users" onClick={closeMenu}>
          Admin users
        </Link>
      </li>
    </ul>
  )
}
