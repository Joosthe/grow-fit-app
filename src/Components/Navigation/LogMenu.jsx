import React from 'react'
import { Link } from 'react-router-dom'
function LogMenu() {
  return (
    <ul className="menu--log flex">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      {/* 
        show when loged-in
        <li>log-out</li>  
      */}
    </ul>
  )
}

export default LogMenu
