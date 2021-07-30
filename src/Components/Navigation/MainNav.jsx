import React from 'react'
import { Link } from 'react-router-dom';
import LogMenu from './LogMenu';
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';
import './styles/Mainnav.scss';
 
function openMenu(){
  document.getElementById("main-navigation-sidebar").classList.toggle("open");
}


function MainNav() {
  return (
    <div className="main-navigation-wrappers">
      <div className="main-navigation-top flex flex-wrap">
        <div className="logo-wrapper">
          <Link to="/">
            <p className="logo">Lesson's app</p>
          </Link>
        </div>
        <div className="log-menu-wrapper justify-end">
          <LogMenu/>
        </div>
        <button id="toggle-main-menu" onClick={openMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
      <div id="main-navigation-sidebar">
        <UserMenu/>
        <MainMenu/>
      </div>
    </div>
  )
}

export default MainNav
