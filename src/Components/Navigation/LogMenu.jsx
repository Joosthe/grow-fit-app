import React from 'react'
import { Link } from 'react-router-dom'
function LogMenu(props) {
  return (
    <ul className="menu--log flex">
      <li><Link to="/login" onClick={props.closeMenu}>Login</Link></li>
      <li><Link to="/register"onClick={props.closeMenu} >Register</Link></li>
      {/* 
        show when loged-in
        <li>log-out</li>  
      */}
    </ul>
  )
}

export default LogMenu
