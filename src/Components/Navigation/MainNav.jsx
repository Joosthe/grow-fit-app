import React from 'react'
import { Link } from 'react-router-dom';
import LogMenu from './LogMenu';
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';
import AdminMenu from './AdminMenu';

import './styles/Mainnav.scss';
import { useUser } from '../../Contexts//UserContext';

 
function openMenu(){
  document.getElementById("main-navigation-sidebar").classList.toggle("open");
}

function closeMenu(){
  document.getElementById("main-navigation-sidebar").classList.remove("open");
}


function MainNav() {
  const { currentUser  } =  useUser();
  return (
    <div className="main-navigation-wrappers">
      <div className="main-navigation-top flex flex-wrap">
        <div className="logo-wrapper">
          <Link to="/"onClick={closeMenu}>
            <p className="logo">Grow Fit</p>
          </Link>
        </div>
        <div className="log-menu-wrapper justify-end">
          <LogMenu closeMenu={closeMenu}/>
        </div>
        <button id="toggle-main-menu" onClick={openMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
      <div id="main-navigation-sidebar">
        {currentUser && 
          <UserMenu closeMenu={closeMenu}/>
        }
                <MainMenu closeMenu={closeMenu}/>
        {currentUser?.userRoles ==="admin" && 
            <AdminMenu MenucloseMenu={closeMenu}/>
        }
      </div>
    </div>
  )
}

export default MainNav
